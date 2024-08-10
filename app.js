let secuencia = [];
let numero = 0;
let contador=0;
let turno=0;
let verde= document.getElementById("1");
let rojo= document.getElementById("2");
let amarillo= document.getElementById("3");
let azul= document.getElementById("4");
let modal= document.getElementById("modal-id");
let timer;
let jugar = false;
let puntos = 0;
function iniciar(){

numero = Math.floor(Math.random()*4)+1;
secuencia.push(numero);
console.log(secuencia);
timer= setInterval(mostrar,500);
}

function mostrar(){
    document.getElementById("texto").innerText=`Puntos: ${puntos}`;
    if(turno%2==0) ///encender
    {  
        if(secuencia[contador]==1){verde.style.filter = "brightness(3.2)"}
        else if(secuencia[contador]==2){rojo.style.filter = "brightness(3.2)"}
        else if(secuencia[contador]==3){amarillo.style.filter = "brightness(3.2)"}
        else if(secuencia[contador]==4){azul.style.filter = "brightness(2.8)"}
    }
    else
    {
        if(secuencia[contador]==1){verde.style.filter = "brightness(1)"}
        else if(secuencia[contador]==2){rojo.style.filter = "brightness(1)"}
        else if(secuencia[contador]==3){amarillo.style.filter = "brightness(1)"}
        else if(secuencia[contador]==4){azul.style.filter = "brightness(1)"}
    contador++;
    }
    turno++;
    if(contador>=secuencia.length)
    {
        clearInterval(timer);
        jugar = true;
        contador=0;
        turno=0;
        
    }
}

function checar(btn){
    
    if(jugar == true)
    {
        
        if(btn==secuencia[contador])
        {
            contador++;
        }
        else{
         contador = 0;
         jugar = false;
         secuencia = [];
         turno = 1;
         modal.style.opacity = "1";
        }
                
        if(contador>=secuencia.length)
        {
            puntos++;
            document.getElementById("texto").innerText=`Puntos: ${puntos}`;
            contador=0;
            jugar=false;
            iniciar();
        }

    }
}
function setModal(){
    modal.style.opacity = "0";
    location.reload();
}