$(document).ready(function () {
    $("#Valider").on("click", function (e) {
        e.preventDefault();

        // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
        // voir plus : https://www.w3schools.com/js/js_htmldom.asp
        console.log("DOM ready!");

        // Y mettre le code jQuery pour valider tous les champs du formulaire




        if ($('#nom').val().length < 5 || $('#nom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#nom').css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }


        else if ($('#prenom').val().length < 5 || $('#prenom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#prenom').css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }


        else if ($('#date').val().length < 5 || $('#date').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#date').css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }


        else if ($('#adresse').val().length < 5 || $('#adresse').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#adresse').css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
        else if ($('#mail').val().length < 5 || $('#mail').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#mail').css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }





       

    });
});