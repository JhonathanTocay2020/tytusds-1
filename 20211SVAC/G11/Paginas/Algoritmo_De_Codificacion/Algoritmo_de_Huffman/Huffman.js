console.log("------------------ huffman ------------------");
let mensaje = "PABLO PAPA DE PABLITO";
diccionario =[];

d_huffman=[];
//-------------------------------------
// ------------------ Cambio de Caracter "vacio" por _
cambiar_espacios();
console.log("Frase: " + mensaje);
// ------------------ LLenar Diccionario ------------------
verificar_Existencia();
console.log(diccionario);
// ----------------- Imprimir la Longitud ---------------------
console.log("Longitud: "+mensaje.length);
//-------------------Ocurrencias
for(xm in diccionario){
    contar(diccionario[xm]);
}
console.log(d_huffman);
// ------------------- Funciones ----------------------------
function cambiar_espacios(){
    aux = "";

    for(msn in mensaje){
        if(mensaje[msn] != " "){
            aux = aux + mensaje[msn];
        }else{
            aux = aux + "_";
        }
    }
    mensaje = aux;
}


// -------------------  Validacion De Caracteres -------------------
function verificar_Existencia(){
    for(p in mensaje) {
        if(diccionario.includes(mensaje[p])){}
        else{
            diccionario.push(mensaje[p]);
        }        
    }  
}
//--------------------- Contar XD ----------------------
function contar(ej){
    let contador= 0;
    for(p in mensaje) {
        if(mensaje[p]===ej){
            contador++;
        }
        else{
            diccionario.push(mensaje[p]);
        }        
    }
    d_huffman.push({"valor": ej, "numerador": contador, "denominador": mensaje.length,"probabilidad": contador/mensaje.length});
    //console.log(": " + ej + " ocurrencia: " + contador);
}
//-------------------ordenar de menor a mayor --------------------------