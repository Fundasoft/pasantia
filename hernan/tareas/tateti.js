
// modularizacion: divide y venceras (documentacion)

// sistema cliente => patron diseño (mvc, microservicios, apis)

//-------------------------------------------------------------------
// inicializacion
//-------------------------------------------------------------------

const CRUZ = 'x', CIRCULO = 'o';

var tablero = [ // TAD = lenguaje ayuda a entender como representar mejor el problema
	[0,0,0],
	[0,0,0],
	[0,0,0]
]; // '000000000'

var turno = CRUZ, movimiento = 0;

// analogia con la web??
// que pasa si cambio el TAD

//-------------------------------------------------------------------
// vista
//-------------------------------------------------------------------

function dibujarTabler(tablero){
	// biujar el tablero
	console.log(tablero);
}

//-------------------------------------------------------------------
// controlador: modulos de la logica de juego - divide y venceras (abstrabcion)
//-------------------------------------------------------------------

function cambiarTurno(){
	if(turno==CRUZ){
		turno = CIRCULO; 
	}else{
		turno = CRUZ;
	}	
}

// Indica si hay tateti en el tablero
function hayTateti(tablero){
	// (arr[0]===arr[1]&&arr[1]===arr[2]&&arr[0]!==0) ||
	// (arr[3]===arr[4]&&arr[4]===arr[5]&&arr[3]!==0)
	if(tablero[0][0]===tablero[1][0]&&tablero[0][0]===tablero[2][0])
}

// Indica si el tablero esta completo
function hayEmpate(tablero){
	
}

// Indica si el movimiento es valido
function movimientoValido(movimiento,tablero){
	
}

function esElFinDeJuego(tablero){
	if (hayTateti(tablero)){
		console.log('Juego terminado. Ganador', turno);
		return true;
	}
	else if (hayEmpate(tablero)){
		console.log('Juego terminado. No hay ganador');
		return true;
	}
	else{
		return false;
	}
}

function mover(movimiento,tablero,pieza){

}

function solicitarMovimiento(){
	return 0;
}

//-------------------------------------------------------------------
// Juego = sistema
//-------------------------------------------------------------------

while (!esElFinDeJuego(tablero)){
	movimiento = solicitarMovimiento();
	if (movimientoValido(movimiento)) {
			mover(movimiento,tablero);
			if ( hayTateti(tablero) ) {
				// jugador actual gana
				console.log('Juego terminado. Ganador', turno);
			} else if( hayEmpate(tablero) ){
				console.log('Juego terminado. No hay ganador');
			} else {
				cambiarTurno();
			}
	}
}

console.log('FIN');

