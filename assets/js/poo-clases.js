class vistas {

    Iniciar() {
        $("#formulario").hide();
        $("#buscar").hide();
        $("#listar").hide();
        $("#eliminar").hide();
        $(".reservar").click(function (e) {
            $("#buscar").slideUp(0);
            $("#listar").slideUp(0);
            $("#eliminar").slideUp(0);
            $("#formulario").fadeIn(300);
        });
        $(".buscar").click(function (e) {
            $("#formulario").slideUp(0);
            $("#listar").slideUp(0);
            $("#eliminar").slideUp(0);
            $("#buscar").fadeIn(300);
        });
        $(".listar").click(function (e) {
            $("#formulario").slideUp(0);
            $("#buscar").slideUp(0);
            $("#eliminar").slideUp(0);
            $("#listar").fadeIn(300);
        });
        $(".eliminar").click(function (e) {
            $("#formulario").slideUp(0);
            $("#buscar").slideUp(0);
            $("#listar").slideUp(0);
            $("#eliminar").fadeIn(300);
        });
    }
}

class Reserva {
    constructor() {
        this.asientos = [];
    }
    Iniciar() {
        $("#btnRegistrar").click(() => this.Registrar());
        $("#btnBuscar").click(() => this.Buscar());
        $("#btnLista").click(() => this.Lista());
        $("td").click(() => this.CeldasClick(event));
    }
    CeldasClick(event) {
        //let colorCeldas = event.target;
        let nro = event.target.textContent;
        $("#asiento").val(nro);
    }
    Registrar(asientos) {
        let numAsiento = document.getElementById("asiento").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let dni = document.getElementById("dni").value;
        //let colorCeldas.style.backgroundColor ="red";
        console.log(numAsiento, nombre, apellido, dni);
        let pasajeros = {
            numAsiento: numAsiento,
            nombre: nombre,
            apellido: apellido,
            dni: dni
        }
        this.asientos.push(pasajeros);
        this.limpiar();
    }
    Buscar() {
        let _dni = document.getElementById("Dni").value;
        console.log(_dni);
        for (let i = 0; i < this.asientos.length; i++) {
            let datos = this.asientos[i];
            console.log(datos);
            if (parseInt(_dni) === parseInt(datos.dni)) {
                $(".mostrarBusqueda").append(`<p><label>Numero de Asiento: </label> ${datos.numAsiento} </p>\
                   <p><label>Nombre: </label> ${datos.nombre} </p>\
                   <P><label>Apellido: </label> ${datos.apellido} </p></div>
                   <P><label>D.N.I: </label> ${datos.dni} </p>`);
                break;
            }
        }
    }
    Lista() {
        for (let i = 0; i < this.asientos.length; i++) {
            let datos = this.asientos[i];
            $(".listas").append(`<p><label>Numero de Asiento: </label> ${datos.numAsiento} </p>\
                   <p><label>Nombre: </label> ${datos.nombre} </p>\
                   <P><label>Apellido: </label> ${datos.apellido} </p></div>
                   <P><label>D.N.I: </label> ${datos.dni} </p>`);

        }
    }
    limpiar() {
        document.getElementById('numAsiento').value = " ";
        document.getElementById("nombre").value = " ";
        document.getElementById("apellido").value = " ";
        document.getElementById("dni").value = " ";
    }
}
let IniciaVistas = new vistas();
    IniciaVistas.Iniciar();
let Reservas = new Reserva();
    Reservas.Iniciar();
