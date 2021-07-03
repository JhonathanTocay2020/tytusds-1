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
      }
    
}
   function insertar(x,y,valor){
        
            mat1[x][y] = valor;
          
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
                vec[i*4+j] = mat1[i][j]
                
            }
            
        }
        
        for (let i = 0; i < vec.length; i++) {
            setTimeout(function(){ imprimir2(vec[i],tamano.animation*10); }, tamano.animation*10);
            
            
        }
        
    }

   
function main () {
    
   
	$('.btn-Ingrese').click(function(){
        
       var matiz = new MatrizRow(4,5,20);
       crear(4,5);
        insertar(2,3,"Martin");
        insertar(2,0,"Dawn");
        insertar(1,0,"David");
        insertar(2,0,"Michael");
        insertar(1,4,"Calvin");
        insertar(2,4,"Norma");
        insertar(0,0,"George");
        insertar(2,2,"Diane");
        insertar(3,2,"Francisco");
        imprimir(matiz); 

        
	});
    
    $('.btn-Elimina').click(function(){
        var porId = document.getElementById("valor").value;       
        //axm.remove(porId);
        nuevo.remove(porId);
        nuevo.print();
        
	});
    
    $('.btn-Actualizar').click(function(){
        let datoactualizado= prompt('Por cual numero desea cambiar',0);
        alert("Se a actualizado");
        var porId = document.getElementById("valor").value;
        nuevo.update(porId,datoactualizado);
        nuevo.print();
	});
   
    $('.btn-Buscar').click(function(){
        var porId=document.getElementById("valor").value;
        var data = nuevo.search(porId);
        if (data == " ") {
            alert("Elemento no encontrado");
        }else{
            alert("El Elemento " + data + " Si existe en esta lista")
        }
        
	});

    $('.btn-Guardar').click(function(){
        nuevo.p_datos();
	});
   
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

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
    pos = json.posicion;
    //--------------- Insertar Datos Masivos --------------------------
    
    
    //for(index = 0; index<json.valores.length;index++){
    //    axm.push(json.valores[index]);
    //}

    if (json.repeticion == true){
        console.log('Verdader');
        for(index = 0; index<json.valores.length;index++){
            nuevo.add(json.valores[index]);
            nuevo.print();
        }
        //Datos_json(json.categoria,json.nombre,json.repeticion,json.animacion,json.posicion,json.valores);
    }else if (json.repeticion == false){
        console.log("-------------------falso---------------------");
        for(index = 0; index<json.valores.length;index++){
            if(axm.includes(json.valores[index])== false){
                axm.push(json.valores[index]);
                nuevo.add(json.valores[index]);
                nuevo.print();
            }
            else{
                console.log(json.valores[index])
            }
        }
        //for(let xm = 0; xm < axm.length;xm++){

        //}
        //Datos_json();
    }
  };
  console.log(nuevo);
  reader.readAsText(file);
}