$(function() {

  /*==============================================================================================
  FUNCIONES PARA EL MENU PRINCIPAL
  ==============================================================================================*/

  /*Insertar y quitar la clase ".icono-cerrar" al boton del menu*/
  $('#menu-navegacion .navbar-toggler').click(function (e) { 
    e.preventDefault();
    $('.boton-menu').toggleClass('icono-cerrar');
  });

  /*Al hacer click en un enlace del menú principal*/
  $('#menu-navegacion .navbar-nav a').click(function (e) { 
    e.preventDefault();
    /* 1) Quita la clase ".icono-cerrar"*/
    $('.boton-menu').removeClass('icono-cerrar');

    /* 2) Contraemos el menú*/
    $('#menu-navegacion .navbar-collapse').collapse('hide');
  });

});