alert("hello");

var jour = prompt("quel jour sommes-nous?");

if (jour === "lundi"){
    document.write("demain nous serons mardi");
} else if (jour === "mardi"){
    document.write("demain nous serons mercredi");
} else if (jour === "mercredi"){
    document.write("demain nous serons jeudi");
} else if (jour === "jeudi"){ 
document.write("demain nous serons vendredi");
} else if (jour === "vendredi"){ 
document.write("demain nous serons samedi");
} else if (jour === "samedi"){ 
document.write("demain nous serons dimanche");
} else if (jour === "dimanche"){ 
document.write("demain nous serons lundi");
} else{
    document.write("jour inconnu... veuillez entrer un jour de la semaine en minuscule");
}

switch (jour){ 
    case "lundi": 
    console.log( "Demain nous serons mardi");
    break;
    case "mardi":
    console.log("Demain nous serons mercredi");
    break;
    console.log("Demain nous serons jeudi");
    break;
    console.log("Demain nous serons vendredi");
    break;
    console.log("Demain nous serons samedi");
    break;
    console.log("Demain nous serons dimanche");
    break;
    console.log("Demain nous serons lundi");
    break;
    default: 
        console.log("desole, vérifiez l'orthographe et veuillez ecrire en minuscule");
        }