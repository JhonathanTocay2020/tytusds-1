$(document).ready(main);
//let l="01000011",r="01000110";        0100001101000110
//let c = "00110001",resultado ="";     00110001
let izquierda,derecha,clav;
let l,r,c,resultado;
var body = document.getElementsByTagName("body")[0];
var tab = document.getElementById("cla"); 
var tabla   = document.createElement("table");
var tblBody = document.createElement("tbody");


function main () {    
    
	$('.btn-Ingrese').click(function(){
        var porId = document.getElementById("valor");
        var cl = document.getElementById("clave");
        //console.log(porId.value);
        var paridad =  porId.value.length%2;
        if (porId.value == ""){
            alert("ingrese un Dato")
        }
        
        else if(cl.value==""){
                alert("ingrese una Clave")
        }
        else{
            if (paridad == 0){
                alert("es par")
                var tr = porId.value.length/2;
                var vs = porId.value.length;
                
                    

                if(cl.value.length == tr){
                    l = porId.value.substring(0,tr);
                    r = porId.value.substring(tr,vs);
                    c = cl.value;
                    console.log("iz: " + porId.value.substring(0,tr));
                    console.log("der: " + porId.value.substring(tr,vs));
                    //-----------------------------------------------------------------
                console.log("---------- Prueba ----------")

                for(ip=0; ip<4;ip++){
                    console.log("----------- Iteracion " + ip + "-----------") 
                    Iteracion();
                    key();                    
                }
                console.log(l.concat(r));
                //--------------------------------------
                var hileraF = document.createElement("tr");
                var celdaF1 = document.createElement("td");
                var celdaF2 = document.createElement("td");
//--------------------------------------------------------------------------
                var textoCeldaF1 = document.createTextNode(l);
                var textoCeldaF2 = document.createTextNode(r);
                celdaF1.appendChild(textoCeldaF1);
                hileraF.appendChild(celdaF1);
                celdaF2.appendChild(textoCeldaF2);
                hileraF.appendChild(celdaF2);
//--------------------------------------------------------------------------
                tblBody.appendChild(hileraF);    
                tabla.appendChild(tblBody);
                tab.appendChild(tabla);

  //_-----------------------------------------------
                    console.log("listo");
                }
                else{
                    alert("Verifique la longitud de la clave")
                }
            }else{
                alert("la cadena ingresada no es par ")
            }
        }
        

        
        // Limpiar input
        porId.value ="";
        porId.focus();
	});
}

function Iteracion(){
    let aux = r;
    var hilera1 = document.createElement("tr");
    var hilera2 = document.createElement("tr");
    var hilera3 = document.createElement("tr");
    var hilera4 = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");
    var celda5 = document.createElement("td");
    var celda6 = document.createElement("td");
    var celda7 = document.createElement("td");
    var celda8 = document.createElement("td");
    
    
    
    
    console.log(l.concat(r));
    var textoCelda1 = document.createTextNode(l);
    var textoCelda2 = document.createTextNode(r);
    celda1.appendChild(textoCelda1);
    hilera1.appendChild(celda1);
    celda2.appendChild(textoCelda2);
    hilera1.appendChild(celda2);
    
    //------------ Ki ---------------------
    console.log("        "+c);
    //--------------------------------------------------
    var textoCelda3 = document.createTextNode("");
    var textoCelda4 = document.createTextNode(c);
    celda3.appendChild(textoCelda3);
    hilera2.appendChild(celda3);
    celda4.appendChild(textoCelda4);
    hilera2.appendChild(celda4);
    
    //------------------------------------------------
    xm = XOR(r,c);
    console.log("        " + xm);
    //----------------------------------------------------
    var textoCelda5 = document.createTextNode("");
    var textoCelda6 = document.createTextNode(xm);
    celda5.appendChild(textoCelda5);
    hilera3.appendChild(celda5);
    celda6.appendChild(textoCelda6);
    hilera3.appendChild(celda6);
    //-------------------------------------------------------
    console.log("        "+l);
    var textoCelda7 = document.createTextNode("");
    var textoCelda8 = document.createTextNode(l);
    celda7.appendChild(textoCelda7);
    hilera4.appendChild(celda7);
    celda8.appendChild(textoCelda8);
    hilera4.appendChild(celda8);
    xj = XOR(xm,l);
    //console.log("        "+xj);
    l= r;
    r = xj;
    //console.log(l.concat(r));
    //console.log("--------------------------------------")

    
    tblBody.appendChild(hilera1);
    tblBody.appendChild(hilera2);
    tblBody.appendChild(hilera3);
    tblBody.appendChild(hilera4);
    
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    tab.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    
}


function XOR(x,y){
    let res = "";
    for(index=0; index<x;index++){
        if((x[index]== "1" && y[index] == "1") || (x[index]== "0" && y[index] == "0")){
            res = res + "0";
        }
        else if ((x[index]== "1" && y[index] == "0") || (x[index]== "0" && y[index] == "1")){
            res = res + "1";
        }
    }
    return res;
}

function key(){
    auxX= "";
    auxJ = "";

    for(im = 0;im < c.length;im++){
        if(im == 0){
            auxJ = c[im];
        } 
        else{
            auxX = auxX + c[im];
        }
    }
    c = auxX.concat(auxJ);
}
