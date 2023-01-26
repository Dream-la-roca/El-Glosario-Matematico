jugador1 = localStorage.getItem("jugador1");
jugador2 = localStorage.getItem("jugador2");
puntosJugador1 = 0;
puntosJugador2 = 0;

document.getElementById("jugador1").innerHTML = jugador1 + ":";
document.getElementById("jugador2").innerHTML = jugador2 + ":";
document.getElementById("puntosJugador1").innerHTML = puntosJugador1 + "puntos";
document.getElementById("puntosJugador2").innerHTML = puntosJugador2 + "puntos";
document.getElementById("quienPregunta").innerHTML = "turno para preguntar : " + jugador1;
document.getElementById("quienResponde").innerHTML = "turno para responder : " + jugador2;

function enviar() {
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    resultado = n1 * n2;

    seccionJuego = "<h4 id='mostrarPalabra'>" + n1+" x "+n2 + "</h4><br><br><input type='text' id='respuestaUsuario' placeholder='Respuesta'><br><br><button class='btn btn-info' onclick='comprobar()'>Comprobar</button><br>"
    document.getElementById("juego").innerHTML = seccionJuego
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

turnoPregunta = jugador1;
turnoRespuesta = jugador2;

function comprobar() {
    respuesta = document.getElementById("respuestaUsuario").value;
    respuesta = respuesta.toLowerCase();
    if (respuesta == resultado) {
        if (turnoRespuesta == jugador1) {
            puntosJugador1++;
        } else {
            puntosJugador2++;
        }
        document.getElementById("puntosJugador1").innerHTML = puntosJugador1 + "puntos";
        document.getElementById("puntosJugador2").innerHTML = puntosJugador2 + "puntos";
    }
    if(turnoPregunta == jugador1){
        turnoPregunta = jugador2;
        turnoRespuesta = jugador1;
    }else{
        turnoPregunta = jugador1;
        turnoRespuesta = jugador2;
    }
    document.getElementById("juego").innerHTML = "";
    document.getElementById("quienPregunta").innerHTML = "turno para preguntar : " + turnoPregunta ;
    document.getElementById("quienResponde").innerHTML = "turno para responder : " + turnoRespuesta;
}