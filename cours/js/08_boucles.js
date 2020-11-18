alert('test');


/*
    les boucles
*/

//la boucle For

/*
    for (3arguments){
        code
    }
*/

/*
    1. initialisation du compteur, à partir de combien je compte ( par défaut on utilise i pour stocker la valeur)
    2. La condition à vérifier (elle doit être vrai / true)
    3. le "pas" d'incrémentaion (combien on ajoute chaque tour, géneralement 1 donc 1++)
*/

for ( var i = 1; i <=10; i++){
    document.write("<p> Instruction executée : " + i + "</p>")
}

// la boucle WHILE
// très utilisée quabd on ne connais pas le nombre de tours à l'avance
var j = 1;
while (j <= 10){
    document.write("<hr /> <p> Instruction executée : " + j + "</p>");
    j++// incrémentation tout à la fin de la boucle
}

/*
        Exercice 
    j'ai 1000 euros sur mon compte
    chaque mois j'ajoute 50
    combien de temps faut-il pour avoir 2000 ?
*/

// WHILE
var compte = 1000; 
var temps = 0;
while(compte < 2000){
    compte +=50;
    temps ++;
}
document.write("<p>Sous sur mon compte " + compte + "</p>");
document.write("<p> il faut " + temps + " mois pour avoir 2000 sur mon compte.</p>");

// for
var temps = 0
for(var messous = 1000; messous < 2000; messous +=50){ 
    document.write("le mois suivant j'aurais : " + messous + "€.</p>");
    temps++;
    }
document.write("<p>il aura fallu " + temps + " mois pour avoir 2000€ sur mon compte.</p>");
