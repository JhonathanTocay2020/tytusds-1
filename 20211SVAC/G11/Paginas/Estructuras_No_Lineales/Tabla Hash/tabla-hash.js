$(document).ready(main);

class Hash {
  constructor(m) {
    this.table = new Array(m);
    this.table.length = m;
    for (let i = 0; i < this.table.length; i++) {
      let nuevo = new Lista();
      this.table[i] = nuevo;
      
    }
  }

  hash(data) {
    // Agregue los valores de código ASCLL de cada carácter en la cadena y luego tome el resto de la longitud de la matriz
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    console.log("Hash Value: " + data + " -> " + total);
    return total % this.table.length;
  }

  insert(key, val) {
    var pos = this.hash(key);
    var contador = 0;
    for (let i = 0; i < this.table.length; i++) {
      
      if(contador == pos){
        this.table[i].add(val);
        i = this.table.length;
        return
      }else if((i+1)== this.table.length){
        i = 0;
      }
      contador++;
      
    }
    
  }
  buscarr(key, val) {
    var pos = this.hash(key);
    var contador = 0;
    for (let i = 0; i < this.table.length; i++) {
      
      if(contador == pos){
        this.table[i].search(val);
        i = this.table.length;
        return
      }else if((i+1)== this.table.length){
        i = 0;
      }
      contador++;
      
    }
    
  }
  delete(key, val) {
    var pos = this.hash(key);
    var contador = 0;
    for (let i = 0; i < this.table.length; i++) {
      
      if(contador == pos){
        this.table[i].remove(val);
        i = this.table.length;

        return
      }else if((i+1)== this.table.length){
        i = 0;
      }
      contador++;
      
    }
    
  }
  actualizar(key, val,newval) {
    var pos = this.hash(key);
    var contador = 0;
    for (let i = 0; i < this.table.length; i++) {
      
      if(contador == pos){
        this.table[i].remove(val);
        this.table[i].add(newval);
        i = this.table.length;

        return
      }else if((i+1)== this.table.length){
        i = 0;
      }
      contador++;
      
    }
    
  }
  get(key) {
    var pos = this.hash(key);
    return this.table[pos]
  }
  show() {
    for (var i = 0; i < this.table.length; i++) {
      sleep(100);
      if (this.table[i] != undefined) {
        
        console.log(i + ":" + this.table[i].print());
        sleep(100);
        
      }
    }
  }
}
//----------------------------------------------------------------
let  json;
let hash;
axm = [];
//--------------- Datos JSON ---------------------
let categoria = "Estructura No Lineal";
let nombre = "Tabla Hash Abierta";
let tamaño =0;
let minimo = 0;
let maximo = 0;
let funcion = "Simple/Division/Multiplicacion";
let prueba = "Lineal/Cuadratica/Doble";
let animacion = 0;
//-------------------------------------------------
function main () {

  $('.btn-Ingrese').click(function(){
    var porX = document.getElementById("valor3").value;
    hash.insert(porX, porX);
    refresh();

    hash.show(); 
        
	});
    var matiz;
    $('.btn-crear').click(function(){
        var porX = document.getElementById("valor").value;        
        hash = new Hash(porX);
        alert("Tabla Creada Correctamente")
        refresh();
        hash.show;
     });

    $('.btn-Elimina').click(function(){
        var porX = document.getElementById("valor3").value;
        hash.delete(porX, porX);
        alert("Eliminado Correctamente")
        refresh();

        hash.show();  
        
	});
    
    $('.btn-Actualizar').click(function(){
      var porX = document.getElementById("valor3").value;
      var nuevodato1 = document.getElementById("valor4").value;
      hash.actualizar(porX, porX,nuevodato1);
      alert("Actualizado con exito")
      refresh();

      hash.show();  
	});
   
    $('.btn-Buscar').click(function(){
      var porX = document.getElementById("valor3").value;
      hash.buscarr(porX, porX);
      refresh();
  
      hash.show(); 
        
	});

    $('.btn-Guardar').click(function(){
        //p_datos();
        console.log(hash);
	});
   
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}


class Nodo {
  constructor(dato) {
      this.dato = dato;
      this.siguiente = null;
      
  }
  
}
function  refresh() {
  let capa = document.getElementById("capa");        
  let capa2 = document.getElementById("capa1");
  capa2.remove();
  var c1 = document.createElement("div");
  c1.setAttribute("id","capa1");
  capa.appendChild(c1);
  return;
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
class Lista {
  constructor() {
      this.primero = null;
      this.ultimo = null;
      this.size = 0;
  }
 
  add(dato) {
      let nuevo = new Nodo(dato)
      if (this.primero == null) {
          this.primero = nuevo;
          this.ultimo = this.primero;
          this.size++;
      } else {
          this.ultimo.siguiente = nuevo;
          this.ultimo = nuevo;
          this.size++;
      }

  }
  find_nodo(node){
      let aux = this.primero
      while (aux != null) {
         if (aux.siguiente != null) {
             if (aux.siguiente == node) {
                 return aux;
             }
         }
          aux = aux.siguiente;
      }
      return null
  }
  remove(dato) {
      let aux = this.primero;
     
      while(aux != null){
          if(aux.dato == dato){
              if (aux == this.primero) {
                  if (this.primero.siguiente != null) {
                      this.primero = this.primero.siguiente;
                  }else{
                      this.primero = null;
                  }
              }else{
                  let nuevo = this
                  if (aux.siguiente == null) {
                     let temp =nuevo.find_nodo(aux);
                      temp.siguiente = null;
                  }else{
                      let temp = nuevo.find_nodo(aux);
                      temp.siguiente = aux.siguiente; 
                  }
              }
              
              return;
          }
          aux = aux.siguiente;
      }
      alert("Dato No Encontrado")
      return;

  }

  print() {
    var valores = []
    let aux = this.primero;
    var capa5 = document.getElementById("capa1");
    var h1 = document.createElement("br");
    capa5.appendChild(h1);
    var h1 = document.createElement("button");
        var h2 = document.createElement('button');
        h1.className = "sad";
        h2.className = "ord";
        h1.setAttribute("name","mails[]");
        //h1.style.width = '100px';
        //h1.setAttribute("height","100px");
        h1.innerHTML = "/";
        h2.innerHTML = "->";
        capa5.appendChild(h1);
        capa5.appendChild(h2);
       
    
    while (aux != null) {
        valores.push(aux.dato);
        var capa5 = document.getElementById("capa1");
        var h1 = document.createElement("button");
        var h2 = document.createElement('button');
        h1.className = "sad";
        h2.className = "ord";
        h1.setAttribute("name","mails[]");
        //h1.style.width = '100px';
        //h1.setAttribute("height","100px");
        h1.innerHTML = aux.dato;
        h2.innerHTML = "->";
        capa5.appendChild(h1);
        if (aux.siguiente != null) {
          capa5.appendChild(h2);
        }
        
        aux = aux.siguiente;
        sleep(100);
        //_------------------------------------
    }

    return valores;
  }

  update(dato,nuevodato) {
      var valores = []
      let aux = this.primero;
      
      while (aux != null) {
          if (aux.dato == dato) {
              aux.dato = nuevodato;
              return;
          }
          aux = aux.siguiente;
      }

      return valores;
  }
  search(dato) {
      var valores = []
      let aux = this.primero;
      
      while (aux != null) {
          if (aux.dato == dato) {
              alert("El Dato Si Existe")
              return aux.dato;
          }
          aux = aux.siguiente;
      }
      alert("El Dato No Existe")
      return " ";
  }
  //---------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------
  
  //------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  p_datos() {
      var valores = [];
      let aux = this.primero;
      //-----------------------------------------------------
      while (aux != null) {
          valores.push(aux.dato);
          aux = aux.siguiente;
      }
      //----------------------------------------------------
      

      if (valores.length == 0){
          alert("No se ha ingresado valores");
      }else{
          console.log('------------ Valores ------------');
          console.log(valores);
          this.print();        
          Datos_json(categoria,nombre,repetir,animacion,pos,valores);
      }            
      
      return valores;
  }
  //--------------------------------------------------------------------------------
}

//--------------------------------------------------------------------------------------
// --------------------- Cargar Datos --------------------- 
function validarExt(){
  var input = document.getElementById('btn_Cargar');
  //------------------------------------------------------
  var file = input.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
  // Aquí guardamos en una variable el resultado de parsear el JSON
  json = JSON.parse(e.target.result);
  // --------------------------------------------------------------
  categoria = json.categoria;
  nombre = json.nombre;
  tamaño = json.m;
  
  minimo = json.minimo;
  maximo = json.maximo;
  funcion = json.funcion;
  prueba = json.prueba;
  animacion = json.animacion;
    hash = new Hash(tamaño);
    alert("Tabla Creada Correctamente")
  //--------------- Crear Tabla
  //--------------- Insertar Datos Masivos --------------------------
  for(index = 0; index<json.valores.length;index++){
      //console.log(json.valores[index]);
      hash.insert(json.valores[index], json.valores[index]);           
  }
  refresh();
  hash.show();    
  //-----------------------------------------------------------------------
  //console.log(categoria);
  //console.log(nombre);
  //console.log(tamaño);
  //console.log(minimo);
  //console.log(maximo);
  //console.log(funcion);
  //console.log(prueba);
  //console.log(animacion);
};
  reader.readAsText(file);
}
// --------------------- Guardar Datos ---------------------
// escritura(json,'ordenamiento');
function escritura(data, filename){
  let file = new Blob([JSON.stringify(data)],{type:'application/json'});
  let a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = `${filename}.json`;
  a.click()
}

let objeto;
// --------------------- Datos ---------------------
function Datos_json(c,n,m,min,max,f,p,a,v){

  objeto = {
    "categoria": c,
    "nombre": n,
    "m": m,
    "minimo": min,
    "maximo": max,
    "funcion": f,
    "prueba": p,
    "animacion": a,
    "valores": v,
  }
  console.log(objeto);
  escritura(objeto,'Tabla_Hash_Abierta');
}
// ------------------------------------------------------
//--------------------------------Datos JSON -------------------
function p_datos(){
    //----------------------------------------------------
    if (hash.elementos.length == 0){
        alert("No se ha ingresado valores");
    }else{
        console.log('------------ Valores ------------');
        imprimir();        
        Datos_json(categoria,nombre,repetir,animacion,pila.elementos);
    }            
}
//--------------------------------------------------------------------------------------