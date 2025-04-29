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

/* **************************************************************************************** */

/* Habitos */

/* Fuma */
$("input[name='fuma']").change(function () {
    if ($("#fuma_si").is(":checked")) {
        $('.contenedor_cigarrillos').removeClass('d-none');
    } else {
        $('.contenedor_cigarrillos').addClass('d-none');
        $('#cigarrillos_dia').val('');
    }
});

/* Alcohol */
$("input[name='alcohol']").change(function () {
    if ($("#alcohol_si").is(":checked")) {
        $('.contenedor_tipo_alcohol, .contenedor_cantidad_alcohol').removeClass('d-none');
    } else {
        $('.contenedor_tipo_alcohol, .contenedor_cantidad_alcohol').addClass('d-none');
        $('#tipo_alcohol, #cantidad_alcohol').val('');
    }
});

/* Dieta */
$("input[name='dieta']").change(function () {
    if ($("#dieta_si").is(":checked")) {
        $('.contenedor_tipo_dieta').removeClass('d-none');
    } else {
        $('.contenedor_tipo_dieta').addClass('d-none');
        $('#tipo_dieta').val('');
    }
});

/* Deportes */
$("input[name='deportes']").change(function () {
    if ($("#deportes_si").is(":checked")) {
        $('.contenedor_tipo_deporte').removeClass('d-none');
    } else {
        $('.contenedor_tipo_deporte').addClass('d-none');
        $('#tipo_deporte').val('');
    }
});

/* Fin Habitos */

/* **************************************************************************************** */


/* Antecedentes */

$("input[name='quirurgico']").change(function () {
    if ($("#quirurgico_si").is(":checked")) {
        $('#detalle_quirurgico').removeClass('d-none');
    } else {
        $('#detalle_quirurgico').addClass('d-none').val('');
    }
});

/* Medicación */
$("input[name='medicacion']").change(function () {
    if ($("#medicacion_si").is(":checked")) {
        $('#detalle_medicacion').removeClass('d-none');
    } else {
        $('#detalle_medicacion').addClass('d-none').val('');
    }
});

/* Vacuna COVID */
$("input[name='vacuna_covid']").change(function () {
    if ($("#vacuna_si").is(":checked")) {
        $("input[name='dosis[]']").prop('disabled', false);
    } else {
        $("input[name='dosis[]']").prop('disabled', true).prop('checked', false);
    }
});

/* Fin Antecedentes */

/* **************************************************************************************** */

/* Antecedentes Ginecologicos  */

/* Controles ginecológicos */
$("input[name='controles_ginecologicos']").change(function () {
    if ($("#controles_si").is(":checked")) {
        $("input[name='periodicidad_ginecologica']").removeClass('d-none');
    } else {
        $("input[name='periodicidad_ginecologica']").addClass('d-none').val('');
    }
});

/* Panel Antecedentes  */

$("input[name='sexo']").change( function(){
    if ($("#sexoF").is(":checked")) {
        $(".contenedor_ginecologico").removeClass("d-none")
    } else {
        $(".contenedor_ginecologico").addClass("d-none")
        $(".contenedor_ginecologico").find("input[type='text'], input[type='number'], input[type='radio']").val('')
    }
})

/* Fin Panel Antecedentes  */

/* Fin Antecedentes Ginecologicos  */

/* **************************************************************************************** */
