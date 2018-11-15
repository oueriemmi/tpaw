$('#prenom').keyup(function() {
 
    // Le script qui devra calculer et afficher le nombre de mots et de caractères
    var nombreCaractere = $(this).val().length;
    $('#test2').text(nombreCaractere);
    //document.getElementById("test").innerHTML=nombreCaractere;
   }) ;