function validaFechaMenor(campo){
    var bRet = false;
    var dHoy = new Date();
    var dCapt = null;
    if (campo.value == "")
      alert("Faltan datos");
    else{
      dCapt = validaFecha(campo.value);
      if (dCapt != null && dCapt < dHoy)
        bRet = true;
      else
        alert("La fecha debe ser menor a la fecha actual");
    }
    return bRet;
  }

    function validaFecha(valor){
            var dConvertida = null;
            var sAnio = "";
            var sMes = "";
            var sDia = "";
            var nAnio=0, nMes=0, nDia = 0;

            if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
                nDia = parseInt(valor.substring(8,10), 10);
                nMes = parseInt(valor.substring(5,7), 10);
                nAnio = parseInt(valor.substring(0,4), 10);

                if (nDia <1 || nDia>31)
                    alert("El día no es válido")
                else{
                    if (nMes <1 || nMes>12)
                        alert("El mes no es válido");
                    else{
                        if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
                             nMes==8 || nMes==10 || nMes==12) && nDia > 31)
                             alert("El mes tiene máximo 31 días");
                        else if ((nMes==4 || nMes==6 || nMes==9 ||
                                    nMes==11) && nDia > 30)
                             alert("El mes tiene máximo 30 días");
                        else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
                             alert("Febrero tiene 28 días o 29 en bisiesto");
                        else{
                            dConvertida = new Date();
                            dConvertida.setFullYear(nAnio, nMes, nDia);
                        }//fin validaci�n día-mes
                    }//mes válido
                }//día válido
          creasigno(nDia,nMes);
            }//formato válido

            else{
                alert("No tiene formato de fecha");
            }
            return dConvertida;
    }
    function creasigno(nDia,nMes){

    var newDiv = document.createElement("div");

    if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
            var newContent2 = document.createTextNode("Aries");
            var newContent = document.createTextNode("Números de la suerte: el 7, el 17 y el 21");
                
            var imagen = document.createElement("img");
            
            imagen.src = "img/aries.png";
            imagen.style="width: 180px; height:180px;";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="margin: 0px; background-color:rgb(233, 73, 68); width: 300px; height:230px;";}
        else 
            if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
                var newContent2 = document.createTextNode("Tauro");
                var newContent = document.createTextNode("Números de la suerte: el 4, el 6 y el 11.");

                var imagen = document.createElement("img");
                
                imagen.src = "img/tauro.png";
                imagen.style="width: 180px; height:180px;";
                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="margin: 0px; background-color:rgb(69, 61, 177); width: 300px; height:230px;";}
        else 
            if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
                var newContent = document.createTextNode("Números de la suerte: el 3, el 12 y el 18.");
                var newContent2 = document.createTextNode("Geminis");
                    
                var imagen = document.createElement("img");
                
                imagen.src = "img/geminis.png";
                imagen.style="width: 180px; height:180px;";
                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="margin: 0px; background-color:rgb(226, 230, 26); width: 300px; height:230px;";}

        else 
            if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
                var newContent = document.createTextNode("Números de la suerte: el 2, el 8 y el 12.");
                var newContent2 = document.createTextNode("Cancer");
                    
                var imagen = document.createElement("img");
                
                imagen.src = "img/cancer.png";
                imagen.style="width: 180px; height:180px;";
                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="margin: 0px; background-color:rgb(226, 230, 26); width: 300px; height:230px;";}

        else 
            if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
            var newContent = document.createTextNode("Leo");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/leo.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#123987; width: 200px ;height:300px ";}
        else 
            if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
            var newContent = document.createTextNode("Virgo");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/virgo.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#178293; width: 200px ;height:300px ";}
        else 
            if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
            var newContent = document.createTextNode("Libra");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/libra.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#807193; width: 200px ;height:300px ";}
        else 
            if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
            var newContent = document.createTextNode("Escorpión");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/escorpio.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#772299; width: 200px ;height:300px ";}
        else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
            var newContent = document.createTextNode("Sagitario");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/sagitario.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#998090; width: 200px ;height:300px ";}
        else 
            if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
            var newContent = document.createTextNode("Capricornio");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/capricornio.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#338844; width: 200px ;height:300px ";}
        else 
            if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
            var newContent = document.createTextNode("Acuario");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/acuario.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#771100; width: 200px ;height:300px ";}
        else 
            if ((nDia>22) && (nMes==2) || (nDia <=23) && (nMes==3)){
            var newContent = document.createTextNode("Piscis");
            var imagen = document.createElement("img");
            imagen.src = "imagenes/piscis.png";
            var currentDiv = document.getElementById("div");
            document.body.insertBefore(newDiv, currentDiv);
            newDiv.style="border: 3px solid #999999; background-color:#005557; width: 200px ;height:300px ";}
        
        
    
   



    //var newContent = document.createTextNode("SIGNO");
    newDiv.appendChild(imagen);
    newDiv.appendChild(newContent); //añade texto al div creado.
    newDiv.appendChild(newContent2); //añade texto al div creado.
    

     // añade el elemento creado y su contenido al DOM
     
}
      
