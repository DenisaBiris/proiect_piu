
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
if ( document.myform.Address.value == "" )
    {
        alert ( "Completați câmpul ”Adresă”!" );
        return false;
    }
	if ( document.myform.phone.value == "" )
    {
        alert ( "Completați câmpul ”Telefon”!" );
        return false;
    }

		if ( document.myform.myEmail.value == "" )
		{
				alert ( "Completați câmpul ”E-mail”!" );
				return false;
		}
		if ( document.myform.mymessage.value == "" )
    {
        alert ( "Completați câmpul ”Mesaj”!" );
        return false;
    }

}
