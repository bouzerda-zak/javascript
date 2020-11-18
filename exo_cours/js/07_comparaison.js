
var nombre1 = prompt ("nombre1");
var nombre2 = prompt ("nombre2");

if (nombre1 == nombre2){
document.write("Les nombres sont égaux");
}

else if (nombre1 > nombre2){ 
document.write("nombre1 est supérieur");
}

else{
document.write("nombre1 est inférieur");
}



var nb1 = parseInt(prompt("Entrer un premier nombre afin de le comparer à un deuxième."));
var nb2 = parseInt(prompt("entrer un deuxième nombre."));

if(( !isNaN(nb1)) && (!isNaN(nb2))){ 
    if (nb1<nb2){  
        document.write("votre 1er nombre : " + nb1 + " est plus petit que votre 2nd : " + nb2);
        }else if (nb1>nb2){ 
            document.write("votre 1er nombre : " + nb1 + " est plus grand que votre 2nd : " + nb2);
        }else{ 
            document.write("votre 1er nombre : " + nb1 + " est egal à votre 2nd : " + nb2);
            }
        }else { 
            alert('vous n\'avez pas saisi de chiffre');
        }

        //isNan is 