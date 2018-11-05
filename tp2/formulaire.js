

function validation() {
    document.getElementById("error").setAttribute("hidden", "hidden");
    document.getElementById("resultat").setAttribute("hidden", "hidden");

    var nom = document.getElementById("nom");
    var prenom = document.getElementById("Prénom");
    var date = document.getElementById("date");
    var Adresse = document.getElementById("Adresse Postale");
    var Mail = document.getElementById("Mail");

    if (nom.value == "" || nom.value.length < 5) {
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
        document.getElementById("error").removeAttribute("hidden", "hidden");

    }

    else if (prenom.value == "" || prenom.value.length < 5) {
        document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";
        document.getElementById("error").removeAttribute("hidden", "hidden");

    }

    else if (date.value == "" || date.value.length < 5) {
        document.getElementById("error").innerHTML = "La saisie du date de naissance est obligatoire";
        document.getElementById("error").removeAttribute("hidden", "hidden");

    }

    else if (Adresse.value == "" || Adresse.value.length < 5) {
        document.getElementById("error").innerHTML = "La saisie d'Adresse postale  est obligatoire";
        document.getElementById("error").removeAttribute("hidden", "hidden");

    }

    else if (Mail.value == "" || Mail.value.length < 5) {
        document.getElementById("error").innerHTML = "La saisie du Mail est obligatoire";
        document.getElementById("error").removeAttribute("hidden", "hidden");

    }

    else {
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
        document.getElementById("resultat").removeAttribute("hidden", "hidden");
    }





    /*alert("Le champ nom est obligatoire");
    valid = false;
    return valid;

 }

 if(document.getElementById("Adresse Postale").value==""||5=> document.getElementById("Adresse Postale").value.length<50)
 {
    valid = false;
    return valid;

 }

 if(document.getElementById("Mail").value==""||5=> document.getElementById("Mail").value.length)
 {
    valid = false;
    return valid;

 }

 else if (document.getElementById("Mail").indexOf("@") == -1) {
    alert("Il n'y a pas d'arrobas dans cette adresse") ;
    valid = false;
    return valid;
    } else if (document.getElementById("Mail").indexOf(".") == -1) {
    alert("Il n'y a pas de point dans cette adresse") ;
    valid = false;
    return valid;
    }
 if(document.getElementById("date").value=="" )

 {
    
    valid = false;
    return valid;

 }

 if (valid==false) 
 {
    document.getElementById("#nom + .error").innerHTML = "La saisie du nom est obligatoire";
     
 } else {
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.getElementById("#nom").value;
 }
*/

}
