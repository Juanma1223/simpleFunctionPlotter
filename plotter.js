//Obtenemos cada uno de los elementos 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var input = document.getElementById("input");
//Establecemos el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//Establecemos las referencias a la mitad de la pantalla
var midScreenW = Math.round(window.innerWidth/2);
var midScreenH = Math.round(window.innerHeight/2);
//Establecemos la cantidad de iteraciones
var n = 5000;
//String que contiene la funcion que vamos a graficar
var func = "";
//Creamos el arreglo que representa todos los valores del eje x
var x = [0];
for(let i = 0;i<n;i++){
    x.push(x[i]+0.1);
}
//Dibujamos los ejes
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0,midScreenH);
ctx.lineTo(window.innerWidth,midScreenH);
ctx.moveTo(midScreenW,0);
ctx.lineTo(midScreenW,window.innerHeight);
ctx.stroke();
//Añadimos los eventos a escuchar
//input.addEventListener("change",parsear);

function draw(){
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    let der = parsear("x[j]");
    let izq = parsear("(-x[j])")
    //Dibujamos la parte derecha de la funcion
    for(let j=0;j<n;j++){
        ctx.lineTo(midScreenW + j/2,midScreenH-eval(der));
        ctx.moveTo(midScreenW + j/2,midScreenH-eval(der));
    }
    //Dibujamos la parte izquierda de la funcion
    for(let j=0;j<n;j++){
        ctx.lineTo(midScreenW - j/2,midScreenH-eval(izq));
        ctx.moveTo(midScreenW - j/2,midScreenH-eval(izq));
    }
    ctx.stroke();

}

//Pasar por argumento por lo que queramos reemplazar la x
function parsear(val){
    //Reemplazo de la x por el arreglo que representa el eje
    var aux = input.value.split("x");
    var aux2 = aux[0];
    for(let i=1;i<aux.length;i++){
        aux2 = aux2 + val + aux[i];
    }
    console.log(aux2);
    return aux2;
}

function reset() {
	window.location.reload();
}