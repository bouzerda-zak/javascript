var moyenne = prompt ("Es tu Admis ? Note ta Moyenne");
var francais = 10

if (moyenne < francais){ 
document.write("Recalé");
}

else if (moyenne == francais){
document.write("Admis")
}

else{ (moyenne > francais)
document.write("admis")
}



var moyenne = parseFloat(prompt("quelle a été ta moyenne au bac ?"));

if(moyenne<10){
    document.write("Recalé");
}else if ((moyenne >= 10) && (moyenne < 12)){
    document.write("tu passes");
    } else if((moyenne >= 12) && (moyenne >=20)){ 
        document.write("Bravo pour la mention !");
    }else{ 
        document.write("Et de 0 à 20 ca donne ...")
    }