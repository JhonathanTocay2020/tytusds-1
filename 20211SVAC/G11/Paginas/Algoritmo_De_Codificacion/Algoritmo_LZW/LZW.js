//let mensaje = "PABLO PAPA DE PABLITO";
let mensaje = "sobornos_son_robos";
//let mensaje = "ABACABA";
//let mensaje = "aabababaaa";
let diccionario = [];
let auxDiccionario = [];
let recientes = [];
let iteraciones =[];

console.log("Original: " + mensaje);
cambiar_espacios();
console.log("Sustitucion: " + mensaje);
verificar_Existencia();
console.log(diccionario);
console.log("Corre Diccionario");
algoritmo_LZW();
console.log(diccionario);
//console.log("----------------------------------------");
console.log(iteraciones);
// -------------- Funciones -------------- 
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
        actualizar();
        if(auxDiccionario.includes(mensaje[p])){}
        else{
            diccionario.push({"indice": diccionario.length,"valor": mensaje[p]});
        }        
    }  
}

function actualizar(){
    auxDiccionario=[];
    for(m in diccionario){
        auxDiccionario.push(diccionario[m].valor);    
    }
}

// ----------------------- LZW ------------------------------
function algoritmo_LZW(){
    var w = "", k,wk;
    //it(w,mensaje[0],mensaje[0],"","");   
    for(k in mensaje){
        wk = w.concat(mensaje[k]); 
        actualizar();
        if(auxDiccionario.includes(wk)){
            if(k == 0){
                //primera iteracion
                it(w,mensaje[k],w.concat(mensaje[k]),"","");
            }
            else{
                //verificamos las inserciones recientes para no imprimirlas de nuevo
                if(recientes.includes(wk)){
                    it(w,mensaje[k],w.concat(mensaje[k]),"","");
                }
                else{
                    it(w,mensaje[k],w.concat(mensaje[k]),wk +" "+ auxDiccionario.indexOf(wk) ,auxDiccionario.indexOf(w));
                }
            }
            w = wk;
            //console.log("si existe indice: "+ auxDiccionario.indexOf(wk));             
        }
        else{
            diccionario.push({"indice": diccionario.length,"valor": wk});
            recientes.push(wk);
            //console.log(recientes);
            actualizar();
            it(w,mensaje[k],w.concat(mensaje[k]),wk +" "+ auxDiccionario.indexOf(wk) ,auxDiccionario.indexOf(w));
            //console.log(w);
            w = mensaje[k];
        } 
    }
    it(mensaje.substr(-1),"","","",auxDiccionario.indexOf(mensaje.substr(-1)));
    
}

function it(w,k,wk,d,s){
    //if(auxDiccionario.length == 0){
    //    w = ""
    //    d = ""
    //    s = ""
        iteraciones.push({"w": w, "k": k,"wk":wk,"dic": d,"salida":s});
    //}    
}