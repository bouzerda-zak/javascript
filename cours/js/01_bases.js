

// syntaxe de base 

// commentaire sur une ligne 

/* commentaire sur plusieurs lignes */

// Déclarer une variable JS
var prenom; // on peut remplacer var par let 

// affecter une valeur
prénom = "Zak";

// déclarer et affecter 
var prenom = "Zak";

// on essaie de finir toutes les instructions par un ";"

// on peut déclarer plusieurs variables à la suite 
inst_1;
inst_2; inst3;

// Afficher une boite de dialogue : 

alert("Bienvenue sur mon site");
window.alert("hello world");
// fonctionne aussi avec prompt ()

// Afficher dans la console 
console.log(prenom)
// on ouvre la console avec la touche F12

// Afficher dans la page web 
document.write("Bientôt la pause repas");

// Demander une valeur à l'utilisateur
prompt("Veuillez entrer votre âge.");
window.prompt("pareil");

// pour manipuler la valeur recu d'un prompt 
var age = prompt("Quel âge avez vous ?");
console.log(age);

// Attention Le JS est sensible à la casse ('case sensitive')
//mavariable != (cameCase) != ma_variable (snake_case)

// une variable ne peut pas commencer par un chiffre, ne doit pas contenir de caractères alphanumérique, et ne peut pas être un mot réservé (var,for ...)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

/* 
    Les types de variables 
*/

// Les chaines de caractères (string)
var vacance = "2025";
var destination = "Australie";

// Les nombres entiers (integrer ou int)
var année = 2025;

// Les nombres décimaux (float)
var nombre_a_virgule = -5.35;

// Les booléens (boolean ou vrai/faux ou true/false )
var aboolean = false; // ou à l'inverse true 

// Les constantes 

/* La déclaration de constante permet de rendre la variable accessible uniquement en lecture. 
Variable != constante 
Contrairement à une variable après affectation (de valeur) on ne pourra plus la modifier.
*/

// Par convention les constantes sont en majuscules 
const pays = "France";
const AN = '2020';
const BIRTH = 2020;

// connaitre le type d'une variable 
console.log(vacance);
console.log(typeof vacance);
console.log(annee);
console.log(typeof annee);

// En JS les variables sont auto-typées 
// On peut convertir une variable de types NUMBER en STRING et aussi en NUMBER 
// On utilisera les fonctions natives de JS parseInt(), parseFloat et tostring()

var unchiffre = "12";
console.log(unchiffre)
console.log(typeof unchiffre);

// STRING -> NUMBER 
unChiffre = parseInt(unchiffre);
console.log(typeof unchiffre);

unchiffre = "12.22";

//string -> float 
unchiffre = parsefloat(unchiffre);
console.log(typeof unchiffre);

// Number -> String
var nb_en_lettre = 258;
nb_en_lettre = nb_en_lettre.toString();
console.log(typeof nb_en_lettre);