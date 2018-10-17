<script>        
     function validation() { 
         if(document.getElementById("nom").value==""||5=< document.getElementById("nom").value.length<20){
            valid = false;
            return valid;

         }

         if(document.getElementById("Prénom").value==""||5=< document.getElementById("Prénom").value.length<20){
            valid = false;
            return valid;

         }

         if(document.getElementById("Adresse Postale").value==""||5=< document.getElementById("Adresse Postale").value.length<50){
            valid = false;
            return valid;

         }

         if(document.getElementById("Mail").value==""||5=< document.getElementById("Mail").value.length<30){
            valid = false;
            return valid;

         }
         if(document.getElementById("date").value=="" ){
            valid = false;
            return valid;

         }

         if (valid==false) {
            document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
             
         } else {
            document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
         }
         
    
     }                                           
    </script>