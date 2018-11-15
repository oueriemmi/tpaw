$(document).ready(function () {
$('#prenom').keyup(function() {
 
    // Le script qui devra calculer et afficher le nombre de mots et de caractères
    var nombreCaractere = $(this).val().length;
    $('#test2').text(nombreCaractere);
    //document.getElementById("test").innerHTML=nombreCaractere;
   }) ;

   $('#nom').keyup(function() {
 
    // Le script qui devra calculer et afficher le nombre de mots et de caractères
    var nombreCaractere = $(this).val().length;
    $('#test1').text(nombreCaractere +" car.");
    //document.getElementById("test").innerHTML=nombreCaractere;
   }) ;

   $('#prenom').keyup(function() {
 
    // Le script qui devra calculer et afficher le nombre de mots et de caractères
    var nombreCaractere = $(this).val().length;
    $('#test2').text(nombreCaractere+" car.");
    //document.getElementById("test").innerHTML=nombreCaractere;
   }) ;

   $('#adresse').keyup(function() {
 
    // Le script qui devra calculer et afficher le nombre de mots et de caractères
    var nombreCaractere = $(this).val().length;
    $('#test3').text(nombreCaractere+" car.");
    //document.getElementById("test").innerHTML=nombreCaractere;
   }) ;

   $('#mail').keyup(function() {
 
    // Le script qui devra calculer et afficher le nombre de mots et de caractères
    var nombreCaractere = $(this).val().length;
    $('#test4').text(nombreCaractere+" car.");
    //document.getElementById("test").innerHTML=nombreCaractere;
   }) ;
});