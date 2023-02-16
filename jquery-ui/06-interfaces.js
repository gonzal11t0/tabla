'use strict'

window.addEventListener("load",function(){
    //sirve para mostrar popups 
    $(document).tooltip();

    //dialogo
    $(".popup").dialog();

    //calendario
    $("#calendario").datepicker();

//tabs
    $("#pestana").tabs();

});