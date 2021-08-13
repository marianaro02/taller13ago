function comparacion (n1,n2)
{
    if (n1 == n2)
    console.log(n1 + " es igual a "+n2) 
  else if (n1 > n2)
     console.log(n1 + "es mayor a "+ n2)
    else if (n1 < n2)
    console.log(n1 + "es menor a "+ n2)
}


function es_divisor(num) {
    if (num%2 == 0)
    console.log(num + " divisor de 2") 
    else
    if (num%2 != 0)
    console.log(num + " NO es divisor de 2") 
}

var meses_anio = ["Enero", "Febrero", "Marzo", "Abril" , "Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];

for (var i = 0; i < meses_anio.length; i++) {
    console.log(i+1 + " " + meses_anio [i] )
}



function calcular_nota (nota)
{
    if(nota<0.0 || nota>5.0){
    alert("Valor inválido, introduzca una nota del 0.0 al 5.0")
    nota= prompt("introduzca la nota, por favor:");
} else
alert("Haz introducido: " + nota)
   
     if(nota >= 3.0)
     alert(" Haz aprobado el curso")
     else
     if(nota < 3.0)
     alert(" Haz reprobado el curso")
    }
calcular_nota(nota= prompt("introduzca la nota, por favor:"))