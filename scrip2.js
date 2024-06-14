function promedio(){
    let suma=0;
    let contador =0;
    for (let i=1; i<=10; i++){
    let opciones = document.getElementById ('pal'+i).value;
    if (opciones){
        suma += parseFloat (opciones)//parsefloat sirve para convertir de sprint a numero;
        contador++
    }
    }
    let promedio = suma/contador;
    document.getElementById('resultado').textContent = 'El promedio es: ' + promedio;
    } 
    
  
    /// validador de  fecha
    function validador(){
        let resultado=document.getElementById('fecha1').value//trae el valor del imput del html
        if (!resultado) {//valida si tiene datos el imput, si no manda mensaje
            document.getElementById('mensaje').textContent = 'Por favor, ingrese su fecha de nacimiento.';
            return;//si no hay valor en el imput devuelve
          }
        let fechanacimiento= new Date (resultado)//declara la variable de fecha de nacimiento
        let fechaActual= new Date()//trae la fecha actual
        let edad = fechaActual.getFullYear() - fechanacimiento.getFullYear();//toma la fecha actual menos la fecha de nacimiento y la revisa en años 
        let mes = fechaActual.getMonth() - fechanacimiento.getMonth();//toma la fecha actual menos la fecha de nacimiento y la revisa en meses  
        
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechanacimiento.getDate())) { //el .getdate verifica a nivel de dia
        edad--;
      }
      
      if (edad >= 18) {// se declara el valor en numero de años teniendo en cuenta que arriba plantea la edad en años
        document.getElementById('mensaje').textContent = '¡Puede asistir al evento!';
      } else {
        document.getElementById('mensaje').textContent = 'Lo siento, debe ser mayor de edad para asistir al evento.';
      }
    }