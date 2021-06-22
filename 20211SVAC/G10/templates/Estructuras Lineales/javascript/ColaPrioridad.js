class NodoColaP{
    constructor(dato, prioridad = 0){
        this.valor = dato;
        this.arriba = null;
        this.abajo = null
        this.prioridad = prioridad
    }
}

class ColaPrioridad{
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
        this.maxprioridad = 5
    }

    push(dato, prioridad){
        let nuevo = new NodoColaP(dato, prioridad);
        if (prioridad < this.maxprioridad){
            this.maxprioridad = prioridad;
        }

        if (this.length > 0){
            this.bottom.abajo = nuevo;
            nuevo.arriba = this.bottom;
            this.bottom = nuevo;
            this.length++;
        }else{
            this.bottom = nuevo;
            this.top = nuevo;
            this.length++;
        }
    }

    pushMaxP(dato){
        this.push(dato, this.maxprioridad-1);
    }

    pop(){
        let candidato = this.top;
        let actual = this.top;
        if(this.length == 1){
            this.top = null;
            this.bottom = null;
            this.length--;
        }else if (this.length > 0){
            while (actual != this.bottom && candidato.prioridad > this.maxprioridad){
                actual = actual.abajo;
                if (actual.prioridad < candidato.prioridad){
                    candidato = actual;
                }
            }
            if (candidato.prioridad > this.maxprioridad){
                this.maxprioridad++;
            }
            if(candidato.arriba != null){
                if(candidato.abajo != null){
                    candidato.arriba.abajo = candidato.abajo;
                    candidato.abajo.arriba = candidato.arriba;
                }else{
                    candidato.arriba.abajo = null;
                    candidato.arriba = this.bottom;
                }
            }else{
                if(candidato.abajo != null){
                    candidato.abajo.arriba = null;
                    candidato.abajo = this.top;
                }else{
                    this.top = null;
                    this.bottom = null;
                    this.length--;
                }
            }
            this.length--;
        }else{
            console.log('La cola ya esta vacia.')
        }
    }

    actualizar(existente, nuevo){
        let nodo = this.top;
        let encontrado = false;
        let i = 0;

        while (encontrado == false && i < this.length){
            if (nodo.valor == existente){
                nodo.valor = nuevo;
                encontrado = true
            }else{
                nodo = nodo.abajo;
                i++;
            }
        }
        if (encontrado){
            console.log('Se actualizo el valor.')
        }else{
            console.log('No se encontró el dato.')
        }
    }

    buscar(dato){
        let nodo = this.top;
        let i = 0;

        while (i < this.length){
            if (nodo.valor == dato){
                return true;
            }else{
                nodo = nodo.abajo;
                i++;
            }
        }

        return false;
    }

    cargar(){
        console.log('leyendo json.');
    }

    guardar(){
        console.log('guardando en json.')
    }

    mostrar(){
        let actual = this.top;
        for(let p = this.maxprioridad; p < 5; p++){
            actual = this.top;
            while(actual != null){
                if(actual.prioridad == p){
                    console.log(actual.valor);
                }
                actual = actual.abajo;
            }
        }
    }

    devolverNodosAristas(nodoarista, nodo = this.top, numnodo = 0){
        if(nodo != null){
            nodoarista.nodos.push({id:numnodo,label:nodo.valor.toString()+"|P"+nodo.prioridad.toString()});
            nodoarista.aristas.push({from:numnodo,to:numnodo+1});
            if(nodo.abajo != null){
                nodoarista = this.devolverNodosAristas(nodoarista,nodo.abajo,numnodo+1);
            }
        }
        return nodoarista
    }
}

class NodoArista{
    constructor(){
        this.nodos = []
        this.aristas = []
    }
}

const velocidad = document.getElementById("velocidad");
let num_velocidad = 3;

velocidad.oninput = () => {
    document.getElementById('numero').innerHTML = velocidad.value;
    //num_velocidad = (velocidad.value * 1) / 5
    num_velocidad = velocidad.value;
    
}

const cola = new ColaPrioridad();

const dato = document.getElementById('dato');

const agregar = document.getElementById('agregar');
const prioridad = document.getElementById('prioridad');
const eliminar = document.getElementById('eliminar');
const actualizar = document.getElementById('actualizar');
const buscar = document.getElementById('buscar');

const guardar = document.getElementById('guardar');
const cargar = document.getElementById('cargar');
const mostrar = document.getElementById('mostrar');
const lienzo = document.getElementById('lienzo');

agregar.addEventListener("click", (e) =>{
    e.preventDefault
    if(dato.value != ''){
        cola.push(dato.value,prioridad.value);
        graficaCola(cola);
    }
})

eliminar.addEventListener("click", (e) =>{
    e.preventDefault
    cola.pop();
    graficaCola(cola);
    
})

actualizar.addEventListener("click", (e) =>{
    e.preventDefault
    if(dato.value != ''){
        
    }
})

buscar.addEventListener("click", (e) =>{
    e.preventDefault
    if(dato.value != ''){
        if(cola.buscar(dato.value)){
            console.log('El nodo existe en la cola.');
            console.log('');
        }else{
            console.log('El nodo no existe en la cola.');
            console.log('');
        }
    }
})

let archivo = document.getElementById('file')
let entrada;

archivo.addEventListener('change', () => {
    let leer = new FileReader()
    leer.readAsText(archivo.files[0])
    leer.onload = function() {
    entrada = JSON.parse(leer.result)
    }
    document.getElementById('mensaje').innerText = 'Se cargo el archivo con exito'
})

cargar.addEventListener("click", (e) => {
    e.preventDefault()
    let valores = entrada["valores"]
    for (let i = 0; i < valores.length; i++) {
        cola.push(valores[i])
        graficaCola(cola);
    }
    document.getElementById('mensaje').innerText = ''
    archivo.setAttribute('disabled', '')
})

function graficaCola(cola){
    let lista = new NodoArista();

    lista = cola.devolverNodosAristas(lista);

    let nodos = new vis.DataSet(lista.nodos);
    let aristas = new vis.DataSet(lista.aristas);

    let datos = {
        nodes: nodos,
        edges: aristas
    }

    let opciones = {layout:{
        hierarchical:{
            enabled:true,
            sortMethod:'directed'
        }
    }};

    let grafo = new vis.Network(lienzo,datos, opciones);
}