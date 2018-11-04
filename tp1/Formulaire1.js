<script type="text/javascript">

      function validate()
      {
      
         if( document.form.nom.value == "" )
         {
            alert( "Please provide your nom!" );
            document.form.nom.focus() ;
            return false;
         }
         
         if( document.form.EMail.value == "" )
         {
            alert( "Please provide your Email!" );
            document.form.EMail.focus() ;
            return false;
         }
         
         
         
         if( document.form.Country.value == "-1" )
         {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
      }
   //-->
</script>