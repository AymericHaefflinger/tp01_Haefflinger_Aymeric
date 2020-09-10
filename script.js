
function validation(){

    if( $('#inPassword').val() != $('#inLogin').val() ){
        alert("Le mot de passe ne correspond pas à sa confirmation");
        return false;
    }

    alert("L'inscription a bien été enregistrée");
    return true;
}