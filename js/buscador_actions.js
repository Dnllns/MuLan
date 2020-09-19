
// Ocultar y mostrar el buscador o el buscador abanzado

function switchBuscador(event) {

    event.preventDefault()

    //Obtener el modo de busqueda que se esta usando
    var modo_busqueda = $("#buscador_container").attr("data-modobusqueda")


    if (modo_busqueda == "generico") {

        // Para el buscador generico
        // ------------
        $("#buscador_generico").hide()                          // Ocultarlo
        // $("#buscador_generico .pop_small_tittle").hide()        // Esconder el titulo del buscador


        // Para el buscador abanzado
        // ------------
        $("#titulo_buscador").html("Buscador abanzado")
        $("#buscador_abanzado").show()                          // Mostrarlo
        $("#it_colapsar").show()                                // mostrar los controles de colapsado
        $("#it_colapsar").attr("data-activo", "true")           // Cambiar el atributo del colapsador a inactivo

        //Cambiar el indicador de buscador
        $("#buscador_container").attr("data-modobusqueda", "abanzado")
    }

    else if (modo_busqueda == "abanzado") {

        $("#titulo_buscador").html("Buscador")
        $("#buscador_generico").attr("data-activo", "true")
        $("#buscador_generico").show()
        $("#buscador_abanzado").attr("data-activo", "false")
        $("#buscador_abanzado").hide()

        //Cambiar el indicador de buscador
        $("#buscador_container").attr("data-modobusqueda", "generico")
    }
}



function toggleBuscador(event) {

    event.preventDefault()

    //Obtener el modo de busqueda que se esta usando
    var modo_busqueda = $("#buscador_container").attr("data-modobusqueda")
    var buscador_target
    modo_busqueda == "generico" ? buscador_target = "#buscador_generico" : buscador_target = "#buscador_abanzado"

    //Obtener el estado en el que se encuentra el buscador
    var estado_buscador = $("#buscador_container").attr("data-estado")

    if (estado_buscador == "expandido") {

        //El buscador se muestra, se procedera a esconderle
        $(buscador_target).hide()    
        $("#buscador_container").attr("data-estado", "colapsado")
        
        //Mostrar icono de colapsar
        $("#icon_buscador_collapse i").removeClass("fa-compress").addClass("fa-expand")

    } else if (estado_buscador == "colapsado") {
        //El buscador esta escondido, se procedera a mostrar
        $(buscador_target).show()    
        $("#buscador_container").attr("data-estado", "expandido")
        $("#icon_buscador_collapse i").removeClass("fa-expand").addClass("fa-compress")

    }

}



$("#btn_mostrar_buscador_abanzado").click(switchBuscador);

$("#btn_collapse_buscador").click(toggleBuscador);
$("#btn_expand_buscador").click(toggleBuscador);

