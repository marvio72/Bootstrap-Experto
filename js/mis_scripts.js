$(function() {

  /*==============================================================================================
  1. FUNCIONES PARA EL MENU PRINCIPAL
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

  /*==============================================================================================
  2. SCRIPT PARA SWIPER
  ==============================================================================================*/
  var swiper = new Swiper('.swiper-container', {
    /*botones de navegación*/
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    /*Botones de paginación*/
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    /*Parametros*/
    speed: 1500,
    effect: 'fade',
    grabCursor: true,
    loop: true,
    /*Autoplay*/
    // autoplay: {
    //   delay: 5000,
    // },
    /*keyboard*/
    keyboard: {
      enable: true,
      onlyInViewport: true,
    }
  });

});