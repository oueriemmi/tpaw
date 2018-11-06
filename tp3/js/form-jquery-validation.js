$( document ).ready(function() {
    
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire

     var $nom = $('#nom'),
         $prenom = $('#prenom'),
         $date = $('#date'),
         $adresse = $('#adresse'),
         $mail = $('#mail'),
         $champ = $('.champ');

         if($(this).val().length < 5|| $(this).val()==""){ // si la chaîne de caractères est inférieure à 5
            $(this).css({ // on rend le champ rouge
                borderColor : 'red',
            color : 'red'
            });
         }
         else{
            $(this).css({ // si tout est bon, on le rend vert
            borderColor : 'green',
            color : 'green'
        });
        }

 });
 