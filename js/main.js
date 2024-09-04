$(document).ready(function () {
    // Inicialmente, el botón está oculto
    $('.subir').hide();

    // Cuando el botón es clickeado, se ejecuta la función scrollToTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // Cuando el desplazamiento vertical es mayor a 100 píxeles
            $('.subir').fadeIn(); // Muestra el botón
        } else {
            $('.subir').fadeOut(); // Oculta el botón
        }
    });

    // Slider
    $(function () {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000,
            responsive: true,
            auto: true,
            pause: 2000, // tiempo en milisegundos entre cada transición
            autoStart: true // inicia automáticamente el slider
        });
    });

    /* Index */

    // Datos q van a ir en article
    var posts = [
        {
            title: "Prueba de título 1",
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus libero, interdum ut vehicula
            at, accumsan id massa. Nullam orci nunc, mollis at pulvinar et, feugiat a urna. Praesent et
            dolor at mauris congue ornare. Fusce elementum, diam in elementum laoreet, tellus libero
            accumsan odio, id malesuada nisl ex non nisl. Cras dictum, diam eu sagittis congue, ligula mi
            malesuada quam, aliquet sodales purus velit id sapien. Donec accumsan elit quis odio porttitor
            molestie. Aliquam finibus mattis feugiat.`
        },
        {
            title: "Prueba de título 2",
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus libero, interdum ut vehicula
            at, accumsan id massa. Nullam orci nunc, mollis at pulvinar et, feugiat a urna. Praesent et
            dolor at mauris congue ornare. Fusce elementum, diam in elementum laoreet, tellus libero
            accumsan odio, id malesuada nisl ex non nisl. Cras dictum, diam eu sagittis congue, ligula mi
            malesuada quam, aliquet sodales purus velit id sapien. Donec accumsan elit quis odio porttitor
            molestie. Aliquam finibus mattis feugiat.`
        },
        {
            title: "Prueba de título 3",
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus libero, interdum ut vehicula
            at, accumsan id massa. Nullam orci nunc, mollis at pulvinar et, feugiat a urna. Praesent et
            dolor at mauris congue ornare. Fusce elementum, diam in elementum laoreet, tellus libero
            accumsan odio, id malesuada nisl ex non nisl. Cras dictum, diam eu sagittis congue, ligula mi
            malesuada quam, aliquet sodales purus velit id sapien. Donec accumsan elit quis odio porttitor
            molestie. Aliquam finibus mattis feugiat.`
        },
        {
            title: "Prueba de título 4",
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus libero, interdum ut vehicula
            at, accumsan id massa. Nullam orci nunc, mollis at pulvinar et, feugiat a urna. Praesent et
            dolor at mauris congue ornare. Fusce elementum, diam in elementum laoreet, tellus libero
            accumsan odio, id malesuada nisl ex non nisl. Cras dictum, diam eu sagittis congue, ligula mi
            malesuada quam, aliquet sodales purus velit id sapien. Donec accumsan elit quis odio porttitor
            molestie. Aliquam finibus mattis feugiat.`
        },
        {
            title: "Prueba de título 5",
            date: moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus libero, interdum ut vehicula
            at, accumsan id massa. Nullam orci nunc, mollis at pulvinar et, feugiat a urna. Praesent et
            dolor at mauris congue ornare. Fusce elementum, diam in elementum laoreet, tellus libero
            accumsan odio, id malesuada nisl ex non nisl. Cras dictum, diam eu sagittis congue, ligula mi
            malesuada quam, aliquet sodales purus velit id sapien. Donec accumsan elit quis odio porttitor
            molestie. Aliquam finibus mattis feugiat.`
        }
    ];

    // Añadir toda los datos
    posts.forEach(function (item) {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>
            <a href="#" class="btn">Leer más</a>
        </article>
        `;

        $("#posts").append(post);
    });

    // Selector de tema
    var styles = $("#theme");

    $("#to-green").click(function (e) {
        e.preventDefault();

        styles.attr("href", "css/green.css");
    });

    $("#to-blue").click(function (e) {
        e.preventDefault();

        styles.attr("href", "css/blue.css");
    });

    $("#to-red").click(function (e) {
        e.preventDefault();

        styles.attr("href", "css/red.css");
    });

    // Rotar el svg
    let angle = 270; // Start angle

    $("#svg").click(function () {
        angle = (angle + 180) % 360;
        $(this).css('transform', 'rotate(' + angle + 'deg)');

        // Esconde el contenedor de temas
        $("#selector-theme").animate({
            width: "toggle"
        }, 300);

        $("#selector-theme").css("display", "flex").css("flex-direction", "column").css("align-items", "center").css("justify-content", "space-around").css("opacity", 1);
    });

    // Al enviar el formulario
    $("#login_form").submit(function (event) {
        event.preventDefault();

        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
        location.reload();  // Recargar la página para aplicar los cambios
    });

    var form_name = localStorage.getItem("form_name"); // Obtener el nombre del localStorage

    // Configurar el mensaje de bienvenida y ocultar el formulario de login si hay un nombre guardado
    if (form_name != "undefined" && form_name != null) {
        $("#about p").css("text-align", "left")
            .html("Bienvenido, <strong>" + form_name + "</strong>")
            .append("<div id='btn-logout'><a href='#' id='logout' class='btn'>Cerrar sesión</a></div>");
        $("#login").hide();
    } else {
        $("#about p").html("");  // Limpiar el mensaje de bienvenida si no hay nombre
    }

    // Limpiar los campos de texto y contraseña
    $("input[type='text'], input[type='password']").val("");

    // Acción de logout
    $("#about").on("click", "#logout", function () {
        localStorage.clear();
        location.reload();
    });

    /* About */

    // Accordion
    if (window.location.href.indexOf("about") > -1) {
        $("#acordeon").accordion({
            activate: function(event, ui) {
                ui.newHeader.addClass("ui-accordion-header-active ui-state-active");
                ui.oldHeader.removeClass("ui-accordion-header-active ui-state-active");
            }
        });

        // Inicializar el color de los títulos según el estado del acordeón al cargar la página
        $(".ui-accordion-header").each(function() {
            if ($(this).hasClass("ui-state-active")) {
                $(this).addClass("ui-accordion-header-active");
            }
        });
    }

    /* Reloj */

    // Reloj
    if (window.location.href.indexOf("reloj") > -1) {
        setInterval(function() {
            var reloj = moment().format('LTS');
            $("#reloj").html(reloj);
        }, 500);
    }

    // Contacto 
    if (window.location.href.indexOf("contact") > -1) {
        $("form input[name='date'").datepicker({
            dateFormat: 'dd/mm/yy'
        });

        $.validate({
            lang: "es",
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});