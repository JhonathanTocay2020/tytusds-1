$(document).ready(main);


class MatrizRow {
    constructor(x, y,animation) {
        this.x = x;
        this.y = y;
        this.animation = animation
    }
}
let mat1 = new Array();

function crear(x,y){
    mat1.length = x;
    for (var i = 0; i < x; i++) {
        mat1[i] = new Array(y);
        mat1[i][0] = "";
      }
      alert("Matriz Creada Exitosamente");
    
}
   function insertar(x,y,valor){
        
            mat1[x][y] = valor;
          
    }
    function eliminar(x,y){
        
        mat1[x][y] = "";
      
}

function buscar(tamano,valor){
    
    for (let i = 0; i < tamano.x; i++) {
        for (let j = 0; j < tamano.y; j++) {
            if (mat1[i][j] == valor) {
                alert("El Dato "+mat1[i][j]+" Si Existe");
                return
            }
            
        }
        
    }
    alert("dato no encontrado");
}
function imprimir2(valor,animation){
    sleep(animation);
    var capa5 = document.getElementById("capa1");
            var h1 = document.createElement("button");
            var h2 = document.createElement('button');
            h1.className = "sad";
            h2.className = "ord";
            h1.setAttribute("name","mails[]");
            //h1.style.width = '100px';
            //h1.setAttribute("height","100px");
            if (valor == null) {
                h1.innerHTML = "  ";
            }else{
                h1.innerHTML = valor;
            }
            
            h2.innerHTML = "->";
            
            capa5.appendChild(h1);
}

function imprimir2t(valor,animation,x,ta){
    sleep(animation);
    var capa5 = document.getElementById("capa1t");
            var h1 = document.createElement("button");
            var h2 = document.createElement('button');
            h1.className = "sad";
            h2.className = "ord";
            h1.setAttribute("name","mails[]");
            //h1.style.width = '100px';
            //h1.setAttribute("height","100px");
            if (valor == null) {
                h1.innerHTML = "  ";
            }else{
                h1.innerHTML = valor;
            }
            
            h2.innerHTML = "->";
            
            capa5.appendChild(h1);
            if (x == ta) {
                imprimirbr();
            }
           
}
function imprimirbr(){
    
    var capa5 = document.getElementById("capa1t");
    var h1 = document.createElement("br");
    capa5.appendChild(h1);
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
   function imprimir(tamano){
        var vec = new Array();
        vec.length = tamano.x * tamano.y;
        for (let i = 0; i < mat1.length; i++) {
            for (let j = 0; j < mat1[i].length; j++) {
                console.log(mat1[i][j])
                vec[i*tamano+j] = mat1[i][j]
                
            }
            
        }
        let capa = document.getElementById("capa");        
        let capa2 = document.getElementById("capa1");
        capa2.remove();
        var c1 = document.createElement("div");
        c1.setAttribute("id","capa1");
        capa.appendChild(c1);
        for (let i = 0; i < vec.length; i++) {
            setTimeout(function(){ imprimir2(vec[i],tamano.animation*10); }, tamano.animation*10);
            
            
        }
        
    }

    function imprimirt(tamano){
        var vec = new Array();
        vec.length = tamano.x * tamano.y;
        let capat = document.getElementById("capat");        
        let capa2t = document.getElementById("capa1t");
        capa2t.remove();
        var c1t = document.createElement("div");
        c1t.setAttribute("id","capa1t");
        capat.appendChild(c1t);

        for (let i = 0; i < tamano.x; i++) {
            for (let j = 0; j < tamano.y; j++) {
                console.log(i+" "+j);
                setTimeout(function(){ imprimir2t(mat1[i][j],tamano.animation*10,tamano.x-1,j); }, tamano.animation*10);
                
                
                
            }
            
            
        }
       
        
    }
   
function main () {
    
   
	$('.btn-Ingrese').click(function(){
        var porX = document.getElementById("valor3").value;
        var porY = document.getElementById("valor4").value;
        var animation = document.getElementById("valor5").value;
        insertar(porX,porY,animation);
        imprimirt(matiz);
        imprimir(matiz); 

        
	});
    var matiz;
    $('.btn-crear').click(function(){
        var porX = document.getElementById("valor").value;
        var porY = document.getElementById("valor1").value;
        var animation = document.getElementById("valor2").value;
        
        matiz = new MatrizRow(porX,porY,animation);
        crear(porX,porY);
        imprimirt(matiz);
        
 
         
     });

    $('.btn-Elimina').click(function(){
        var porX = document.getElementById("valor3").value;
        var porY = document.getElementById("valor4").value;
        eliminar(porX,porY);
        imprimirt(matiz);
        imprimir(matiz); 
        
	});
    
    $('.btn-Actualizar').click(function(){
        var porX = document.getElementById("valor3").value;
        var porY = document.getElementById("valor4").value;
        var animation = document.getElementById("valor5").value;
        insertar(porX,porY,animation);
        imprimirt(matiz);
        imprimir(matiz); 
	});
   
    $('.btn-Buscar').click(function(){
        var animation = document.getElementById("valor5").value;
        buscar(matiz,animation);
        imprimirt(matiz);
        imprimir(matiz); 
        
	});

    $('.btn-Guardar').click(function(){
        //p_datos();
	});
   
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

//----------------------------------------------------------------
let  json;
//--------------- Datos JSON ---------------------
let categoria = "Estructura Compuesta";
let nombre = "Row/Column Major";
let animacion = 0;
let tamaño;

//-------------------------------------------------
// --------------------- Cargar Datos --------------------- 
function validarExt(){
    var input = document.getElementById('btn_Cargar');
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
    // Aquí guardamos en una variable el resultado de parsear el JSON
    json = JSON.parse(e.target.result);
    // --------------------------------------------------------------
    categoria = json.categoria;
    nombre = json.nombre;
    animacion = json.animacion;
    tamaño = json.m;
    valor = json.valores;
    crear(tamaño[0],tamaño[1]);
    matiz = new MatrizRow(tamaño[0],tamaño[1],animacion);
    //imprimirt(matiz);
    //--------------- Insertar Datos Masivos --------------------------
    for(index = 0; index<json.valores.length;index++){
        insertar(Number(valor[index].indices[0]), Number(valor[index].indices[1]), valor[index].valor);
        console.log(valor[index].indices[0]);
        console.log(valor[index].indices[1]);
        console.log(valor[index].valor);
    }
    imprimirt(matiz);
    imprimir(matiz); 
  };
  reader.readAsText(file);
}