import os
from time import time

class Node: #Declaracion de variables para crear los nodos
    probability = 0.0   # Declaracion Float 
    symbol = ""         # Cadena Vacia
    encoding = ""      # Cadena Vacia
    visited = False     # Variable Boolean
    parent = -1         # longitud de 0 a -1, variable entera 

class Huffman:          # Declaracion de variables para la creacion del arbol de Huffman
    Tree = None         # Retornar Arbol
    Root = None         # Retornar Raiz
    Nodes = []          # Array list
    probs = {}          # Bloque, inicia el metodo 
    dictEncoder = {}    #

    # 1
    def __init__(self,symbols): # Inicializamos las funciones, con los atributos a utilizar
        self.initNodes(symbols) # Retorna valores 
        self.buildTree()
        self.buildDictionary()

    #2
    def initNodes(self,probs):                  # Creamos los nodos con sus probabilidades
        for symbol in probs:                    # 
            node = Node()                       # Inicializamos el node
            node.symbol = symbol                # 
            node.probability = probs[symbol]    # Asignamos una probabilidad a cada simbolo o letra
            node.visited = False                # Variable que no es fija que va ir cambiando
            self.Nodes.append(node)             # Creamos una lista por cada nodo creado
            self.probs[symbol] = probs[symbol]  # Establece para cada probabilidad un simbolo


    #3
    def buildTree(self):    # Realizamos las operaciones de a cuerdo a la regla para construccion del arbol de Huffman
        indexMin1 = self.getNodeWithMinimumProb()   # Buscamos el menor numero de la primera probabilidad
        indexMin2 = self.getNodeWithMinimumProb()   # Buscamos el menor numero de la segunda probabilidad 

        while indexMin1 != -1 and indexMin2 != -1:  # != evaluea como verdadero si 2 variables son diferentes
            node = Node()
            node.symbol = "."   # llamo el simbolo digitado para que me de el resultado
            node.encoding = "" 

            # llamamos a las dos probabilidades minimas 
            prob1 = self.Nodes[indexMin1].probability
            prob2 = self.Nodes[indexMin2].probability 
            node.probability = prob1 + prob2 #Sumamos las probabilidades
            node.visited = False #False =1
            node.parent = -1 #Restamos la probabilidad a -1 
            self.Nodes.append(node)
            self.Nodes[indexMin1].parent = len(self.Nodes) -1 #Lista o cadena que queremos medir
            self.Nodes[indexMin2].parent = len(self.Nodes) -1


            # Regla: 0 a mayor probabilidad, 1 a menor probabilidad
            if prob1 >= prob2:
                self.Nodes[indexMin1].encoding = "0"
                self.Nodes[indexMin2].encoding = "1"
            else:
                self.Nodes[indexMin1].encoding = "1"
                self.Nodes[indexMin2].encoding = "0"

            indexMin1 = self.getNodeWithMinimumProb()
            indexMin2 = self.getNodeWithMinimumProb()


    #4
    def getNodeWithMinimumProb(self):
        minProb = 1.0
        indexMin = -1

        for index in range(0,len(self.Nodes)):
            if(self.Nodes[index].probability < minProb and (not self.Nodes[index].visited)):
                minProb = self.Nodes[index].probability
                indexMin = index
        
        if indexMin != -1:
            self.Nodes[indexMin].visited = True

        return indexMin

    #5
    def showSymbolEncondig(self,symbol):
        found = False
        index = 0
        encoding = ""

        for i in range(0,len(self.Nodes)):
            if self.Nodes[i].symbol == symbol:
                found = True
                index = i
                break

        if found:
            while index != -1:
                encoding = "%s%s" % (self.Nodes[index].encoding,encoding)
                index = self.Nodes[index].parent
        else:
            encoding = "simbolo desconocido"

        return encoding

    #6
    def buildDictionary(self):
        for symbol in self.probs:
            encoding = self.showSymbolEncondig(symbol)
            self.dictEncoder[symbol] = encoding

    #7
    def encode(self,plain):
        encoded = ""
        for symbol in plain:
            encoded = "%s%s" % (encoded,self.dictEncoder[symbol])

        return encoded

    #INICIO DE LA DECODIFICACION
    def decode(self,encoded):
        index = 0
        decoded = ""

        while index < len(encoded):
            found = False

            aux = encoded[index:]

            for symbol in self.probs:
                if aux.startswith(self.dictEncoder[symbol]):
                    decoded = "%s%s" % (decoded,symbol)
                    index = index + len(self.dictEncoder[symbol])
                    break
        
        return decoded

if __name__ == '__main__':
    print( '\n\n.................CODIFICACION DE HUFFMAN')
    mensaje = input("ingrese la palabra u oracion: ")
    print("\n\nTotal de simbolos: \n\n %s" %(len(mensaje)))
    simbolos = ''
    probabilidad = []
    msm= mensaje
    d = 0

    for i in mensaje: 
        if i in msm: 
            simbolos += i
            probabilidad.append(float(float(msm.count(i))/float(len(mensaje))))
            msm= msm.replace(i,"")
            d+=1

    symbols = dict(zip(simbolos,probabilidad))
    print("\n\nSimbolos comprimidos \n\n",d)
    print("\n\nPROBABILIDAD DE CADA SIMBOLO \n\n",symbols)

    tiempo_inicial = time()

    huffman = Huffman(symbols)
    print("\n\nSimbolos codificados usando el arbol de huffman: \n\n")

    for symbol in symbols:
        print("Simbolo: %s; Codificacion: %s" % (symbol,huffman.showSymbolEncondig(symbol)))

    encoded = huffman.encode(mensaje)
    print("\n\nMensaje que se esta codificando: \n\n%s"%(mensaje))
    print("\n\nCodificacion en bits: \n\n%s"%(encoded))
    print("\n\nLa Longitud de codigo binario es: \n\n%s"%(len(encoded)))

    data = encoded

    print("\n\n.............................. Decodificacion ................................\n\n")
    decoded = huffman.decode(data)
    print("el codigo binario a decodificar es: \n\n",data)
    print("\n\n El mensaje decodificado es: \n\n%s"%(decoded))
