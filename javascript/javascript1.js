
function validatemyform ( )
{


    if ( document.myform.fullname1.value == "" )
    {
        alert ( "Completați câmpul ”Nume”!" );
        return false;
    }
	if ( document.myform.fullname2.value == "" )
    {
        alert ( "Completați câmpul ”Prenume”!" );
        return false;
    }
    if ( document.myform.quantity.value == "" )
      {
          alert ( "Completați câmpul ”Număr de persoane”!" );
          return false;
      }
	if ( document.myform.phone.value == "" )
    {
        alert ( "Completați câmpul ”Telefon”!" );
        return false;
    }

      if ( document.myform.event.value == "" )
        {
            alert ( "Completați câmpul ”Data evenimentului”!" );
            return false;
        }



}
