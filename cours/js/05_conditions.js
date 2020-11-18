// alert('test');

//structure de base IF

if (true){
    // code
}

var nb1 = 10;
if (nb1 < 50){ 
    console.log("nb1 est inferieur à 50.");
}

if (true){
    // code pour true

}else{ 
    // code pour faux
}

if(nb1 > 50){ 
    console.log("nb1 est supérieur ou égal à 50.");
}else{
    console.log("nb1 est inférieur à 50.");
}

//exercice on vérifie l'age d'un internaute
//si il est majeur je lui souhaite la bienvenue,
// sinon : Je lui signale(1) et je le renvois sur un autre site(2) ->document.location


var majorité = 18;

var age = parseInt(prompt("indiquez votre age"));// force le type de variable à être un entier

if (age>= majorité){
    alert("bienvenue gros !");
}else{
    alert("allez voir un autre site ...");
    document.location = "https:www.darty.com"; // .href n'est pas obligatoire
    } 