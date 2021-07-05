let l="01000011",r="01000110";
let c = "00110001",resultado ="";

console.log("---------- Prueba ----------")

for(ip=0; ip<4;ip++){
    console.log("----------- Iteracion " + ip + "-----------") 
    Iteracion();
    key();
}
console.log(l.concat(r));

function Iteracion(){
    let aux = r;

    console.log(l.concat(r));
    console.log("        "+c);
    xm = XOR(r,c);
    console.log("        "+xm);
    console.log("        "+l);
    xj = XOR(xm,l);
    //console.log("        "+xj);
    l= r;
    r = xj;
    //console.log(l.concat(r));
    //console.log("--------------------------------------")
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
    //console.log(c);
}