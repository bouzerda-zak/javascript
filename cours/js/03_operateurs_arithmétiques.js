// alert("test");

/* 1. Addition
        ( je peux déclarer plusieurs variables à la suite)
*/

/* je déclare mes variables*/ 
var nb1, nb2, resultat;

/* j'affecte mes valeurs */
nb1 = 10;
nb2 = 5;

/* j'utilise mes variables avec un calcul */
resultat = nb1 + nb2;

/* j'affiche mon résultat dans la console */
console.log(resultat);

/*
        2. Soustraction
*/

/* j'utilise mes variables avec un calcul */
resultat = nb1 - nb2;

/* j'affiche mon résultat dans la console */
console.log(resultat);

/*
        3. Multiplication
*/

/* j'affiche mon résultat dans la console */
resultat = nb1 * nb2;

/* j'affiche mon résultat dans la console */
console.log(resultat);

/*
        4. Division 

/* j'affiche mon résultat dans la console */
resultat = nb1 / nb2;

/* j'affiche mon résultat dans la console */
console.log(resultat);

/*
        5. Modulo
        Le Modulo retourne le reste d'une division
*/

resultat = nb1 % nb2;
console.log(resultat);

// Je ré-affecte une valeur à nb1
nb1 = 11;
nb1= nb1 % nb2; 
console.log(" le reste de la division de " + nb1 + " par " + nb2 + "est égal à : " + resultat);

/*      
        6. Ecriture simplifiées
*/

nb1 = 15;
nb1 = bn1 + 5; // égal à 20


nb1 += 10; // = nb1 = nb1 + 10
console.log(' Le résultat de "nb1 +=10;" est ' + nb1); // égal à 30, alternance de guillemet simple et doubles pour ne pas casser ma chaine de caractères

// si j'utilise un ' (apostrophe) dans une phrase concaténée, je peux échapper le caractère à l'aide d'un anti-slash \ (alt gr + 8)
