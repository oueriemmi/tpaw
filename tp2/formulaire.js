
<script type="text/javascript">        
     function validation() 
     { 
         
         if(document.getElementById("nom").value==""||5=> document.getElementById("nom").value.length)
         {
            valid = false;
            return valid;

         }

         if(document.getElementById("Prénom").value==""||5=> document.getElementById("Prénom").value.length )
         {
            //alert("Le champ nom est obligatoire");
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
            document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
             
         } else {
            document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
         }
         
    
     }                                           
    </script>