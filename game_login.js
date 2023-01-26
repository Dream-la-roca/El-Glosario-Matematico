function agregarUsuario() {
    jugador1 = document.getElementById("jugador1").value;
    jugador2 = document.getElementById("jugador2").value;
    localStorage.setItem("jugador1", jugador1);
    localStorage.setItem("jugador2", jugador2);
    window.location = "game_page.html"
}