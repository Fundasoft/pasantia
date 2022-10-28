const CRUZ = 'x', CIRCULO = 'o';

var tablero = [[0,0,0],[0,0,0],[0,0,0]];
var turno = CRUZ;

function dibujarTabler(tablero){
	// biujar el tablero
	console.log(tablero);
}

function cambiarTurno(){
	if(turno==CRUZ){
		turno = CIRCULO; 
	}else{
		turno = CRUZ;
	}	
}

// Indica si hay tateti en el tablero
function hayTateti(tablero){
	
}

function finDeJuego(tablero){
	// utilizar: hayTateti(tablero) + tablero completo?
}

while (!finDeJuego(tablero)){
	if (jugar()) {
		
	}
}

console.log('Juego terminado. Ganador', turno);

