
/* Datos Ocupacionales */

/* proteccion personal */

$("input[name='proteccion']").change(function () {
    if ($("#proteccion_si").is(":checked")) {
        $('.contenedor_proteccion_cuales').removeClass('d-none');
    } else {
        $('.contenedor_proteccion_cuales').addClass('d-none');
        $('#proteccion_cuales').val('');
    }
})


/* otros trabajos */

$("input[name='otros_trabajos']").change(function () {
    if ($("#otros_si").is(":checked")) {
        $('.contenedor_otros_trabajos').removeClass('d-none');
    } else {
        $('.contenedor_otros_trabajos').addClass('d-none');
        $('#horas_otros').val('');
    }
})

/* Fin datos Ocupacionales */



