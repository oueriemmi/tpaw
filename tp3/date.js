function date() {
    
    $( "date" ).datepicker({
        dateFormat: "dd-mm-yy"
      });
    $( "date" ).datepicker({
        maxDate: new Date(2016, 1 + 1, 1)
      });
    $( "date" ).datepicker( "option", "maxDate", "+1m +1w" );
    $( "date" ).datepicker( "option", "minDate",  new Date(2016, 1 + 1, 1) );
  } 