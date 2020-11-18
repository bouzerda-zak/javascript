var nb1 = 123;

var nb2 = "123";

console.log(nb1 == nb2); // Retourne un boolean (true)
// "==" signifie "égal à :""

console.log(nb1 === nb2); // Retourne un boolean (false)
// 1 "=" pour donner un type de caractère à la variable, 2 "==" pour comparer 2 variables, 3"===" compare les typs de variables 

console.log(nb1 != nb2); // retourne false, "!=" différent de : "

console.log(nb1 !== nb2); // retourne true, "!==" strictement différent en vleur et en type"





// EXERCICE
var prenomBDD, ageBDD;
prenomBDD = "Sonia";
ageBDD = 99;
var prenonPrompt = prompt("Quel est votre prénom ?");
if(prenomBDD === prenonPrompt){
    var agePrompt = parseInt(prompt("Votre age ?"));
    if(ageBDD === agePrompt){
        alert("Bienvenue " + prenomBDD);
    }else{
        alert("erreur d'age !");
    }
}else{
    alert("Attention, prénom non preconnu !");
}