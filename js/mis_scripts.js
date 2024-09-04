$(function () {
  /*==============================================================================================
  1. FUNCIONES PARA EL MENU PRINCIPAL
  ==============================================================================================*/

  /*Insertar y quitar la clase ".icono-cerrar" al boton del menu*/
  $("#menu-navegacion .navbar-toggler").click(function (e) {
    e.preventDefault();
    $(".boton-menu").toggleClass("icono-cerrar");
  });

  /*Al hacer click en un enlace del menú principal*/
  $("#menu-navegacion .navbar-nav a").click(function (e) {
    e.preventDefault();
    /* 1) Quita la clase ".icono-cerrar"*/
    $(".boton-menu").removeClass("icono-cerrar");

    /* 2) Contraemos el menú*/
    $("#menu-navegacion .navbar-collapse").collapse("hide");
  });

  /*==============================================================================================
  2. SCRIPT PARA SWIPER
  ==============================================================================================*/
  var swiper = new Swiper(".swiper-container", {
    /*botones de navegación*/
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /*Botones de paginación*/
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    /*Parametros*/
    speed: 1500,
    effect: "fade",
    grabCursor: true,
    loop: true,
    /*Autoplay*/
    autoplay: {
      delay: 5000,
    },
    /*keyboard*/
    keyboard: {
      enable: true,
      onlyInViewport: true,
    },
  });

  /*==============================================================================================
  3. SCRIPT PARA "venobox"
  ==============================================================================================*/
  $(".venobox-video").venobox({
    autoplay: true,
    bgcolor: "rgba(255,255,255,.4)",
    overlayColor: "rgba(38, 93, 140, .6)",
    spinner: "cube-grid",
    border: "4px",
    spinColor: "black",
    titleattr: "data-title",
  });

  /*==============================================================================================
  4. SCRIPT PARA "jquery.counterup"
  ==============================================================================================*/
  $(".counter").counterUp();

  /*==============================================================================================
  5. SCRIPT PARA "pickadate.js"
  ==============================================================================================*/
  /*Date picker*/
  $(".datepicker").pickadate({
    monthsFull: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthsShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    weekdaysFull: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    weekdaysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    today: "Hoy",
    clear: "Borrar",
    close: "Cerrar",
    labelMonthNext: "Siguiente mes",
    labelMonthPrev: "Mes anterior",
    labelMonthSelect: "Selecciona un mes",
    labelYearSelect: "Selecciona un año",
    firstDay: 1,
    format: "dddd, d !de mmmm !de yyyy",
    formatSubmit: "dd/mm/yyyy",
    selectYears: true,
    selectMonths: true,
    min: true,
    max: false,
    onStart: function () {
      var date = new Date();
      this.set("select", [date.getFullYear(), date.getMonth(), date.getDate()]);
    },
  });
  /*Time picker*/
  $(".timepicker").pickatime({
    format: "h:i a",
    clear: "Borrar",
    interval: 60,
    min: [9, 0],
    max: [18, 0],
  });

  /*==============================================================================================
6. SCRIPT "parsley.js"
==============================================================================================*/
  $("#mi-formulario").parsley({
    errorClass: "is-invalid text-danger",
    successClass: "is-valid",
    errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
    errorTemplate: "<li></li>",
    trigger: "change",
    triggerAfterFailure: "change",
  });

  /*==============================================================================================
7. SCRIPT "jquery-stickit"
==============================================================================================*/
  $("#menu-navegacion").stickit({
    className: "menu-fijo",
  });

  /*==============================================================================================
8. SCRIPT "Page-scroll-to-id"
==============================================================================================*/
  $("#menu-principal a").mPageScroll2id({
    offset: 50,
    highlightClass: "active",
  });

  //--------------------------------
  //	Enviar correo por PHP
  //--------------------------------

  const formulario = document.getElementById("mi-formulario");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const celular = document.getElementById("celular");
  const mensaje = document.getElementById("mensaje");
  const boton = document.getElementById("enviar");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = new FormData(formulario);

    fetch("./php/formulario.php", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos);

        // TODO: Validación que regresa php
        if (datos.error && datos.campo === "nombre") {
          campoError(nombre);
          return;
        }
        campoValido(nombre);

        if (datos.error && datos.campo === "email") {
          campoError(email);
          return;
        }
        campoValido(email);

        if (datos.error && datos.campo === "celular") {
          campoError(celular);
          return;
        }
        campoValido(celular);

        if (datos.error && datos.campo === "mensaje") {
          campoError(mensaje);
          return;
        }
        campoValido(mensaje);

        console.log("llego a comprobar");
        console.log(datos.error);
        if (!datos.error) {
          limpiaFormulario();
          //TODO: Mensaje enviado
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Correo Enviado",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((e) => console.log(e));
  });

  const campoError = (campo) => {
    campo.classList.add("is-invalid");
    campo.classList.remove("is-valid");
  };

  const campoValido = (campo) => {
    campo.classList.add("is-valid");
    campo.classList.remove("is-invalid");
  };

  const limpiaFormulario = () => {
    console.log("mensaje enviado con éxito");
    formulario.reset();
    nombre.classList.remove("is-valid");
    email.classList.remove("is-valid");
    celular.classList.remove("is-valid");
    mensaje.classList.remove("is-valid");
  };
});
