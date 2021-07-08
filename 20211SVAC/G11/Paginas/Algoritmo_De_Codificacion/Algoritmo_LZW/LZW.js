$(document).ready(main);
//let mensaje = "sobornos_son_robos";
let diccionario = [];
let auxDiccionario = [];
let recientes = [];
let iteraciones =[];

function main () {    
    $('.btn-Guardar').click(function(){
        p_datos()
      });
	$('.btn-Ingrese').click(function(){
        diccionario=[];
        auxDiccionario=[];
        recientes =[];
        iteraciones=[];

        var porId = document.getElementById("valor");
        mensaje = porId.value;
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
        imprimir();
    });
}
//let mensaje = "PABLO PAPA DE PABLITO";

//let mensaje = "ABACABA";
//let mensaje = "aabababaaa";

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

function imprimir(){
    //var hmtl = document.getElementById("cla");
    document.getElementById("cla").innerHTML = "<h2>Iteraciones</h2><br>";
    
    for(msn in iteraciones){
        document.getElementById("cla").innerHTML += '<p>iteracion: '+ msn +'</p>';
        document.getElementById("cla").innerHTML += '<p>w: '+iteraciones[msn].w+'</p>';
        document.getElementById("cla").innerHTML += '<p>k: '+iteraciones[msn].k+''+'</p>';        
        document.getElementById("cla").innerHTML += '<p>wk: '+iteraciones[msn].k+''+'</p>';        
        document.getElementById("cla").innerHTML += '<p>dicionario: '+iteraciones[msn].k+''+'</p>';
        document.getElementById("cla").innerHTML += '<p>salida: '+iteraciones[msn].k+''+'</p>';
    }
    
}