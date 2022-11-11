
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

const prompt = require('prompt');

prompt.start();

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
	if (tablero[0][0]===tablero[1][0]&&tablero[0][0]===tablero[2][0]&&tablero[0][0]!==0){
		return true; //columna 0
	}
	else if	(tablero[0][1]===tablero[1][1]&&tablero[0][1]===tablero[2][1]&&tablero[0][1]!==0){
		return true; //columna 1
	}
	else if	(tablero[0][2]===tablero[1][2]&&tablero[0][2]===tablero[2][2]&&tablero[0][2]!==0){
		return true; //columna 2
	}
	else if	(tablero[0][0]===tablero[0][1]&&tablero[0][0]===tablero[0][2]&&tablero[0][0]!==0){
		return true; //fila 0
	}
	else if	(tablero[1][0]===tablero[1][1]&&tablero[1][0]===tablero[1][2]&&tablero[1][0]!==0){
		return true; //fila 1
	}
	else if	(tablero[2][0]===tablero[2][1]&&tablero[2][0]===tablero[2][2]&&tablero[2][0]!==0){
		return true; //fila 2
	}
	else if	(tablero[0][0]===tablero[1][1]&&tablero[0][0]===tablero[2][2]&&tablero[0][0]!==0){
		return true; //diagonal 1
	}
	else if	(tablero[0][2]===tablero[1][1]&&tablero[0][2]===tablero[2][0]&&tablero[0][2]!==0){
		return true; //diagonal 2
	}
	else {
		return false;
	}
}

// Indica si el tablero esta completo
function hayEmpate(tablero){
	if (tablero[0][0]!==0 && tablero[0][1]!==0 && tablero[0][2]!==0 && tablero[1][0]!==0 && tablero[1][1]!==0 && tablero[1][2]!==0 && tablero[2][0]!==0 && tablero[2][1]!==0 && tablero[2][2]!==0){
		return true; //todos distintos de 0
	}
	else {
		return false; // alguno igual a 0 -> aún hay movimientos posibles
	}
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

	let position = [];

	let properties = [
		{
			name: 'position',
			validator: /^[0-2\d-]+$/,
			warning: 'Debe ingresar una combinación valida. Recuerde que sólo existen las columnas 0, 1 y 2 y las filas 0, 1 y 2.'
		}
	]
	console.log('Por favor ingrese un lugar donde colocar la pieza. Seleccione primero la columna. Por ejemplo 0, 1 o 2')
	prompt.get(properties, function (err, result) {
		if (err) {
		  return onErr(err);
		}
		console.log('Command-line input received:');
		position[0] = result.position;
	});

	console.log('Por favor ingrese un lugar donde colocar la pieza. Seleccione ahora la fila. Por ejemplo 0, 1 o 2')
	prompt.get(properties, function (err, result) {
		if (err) {
		return onErr(err);
		}
		console.log('Command-line input received:');
		position[1] = result.position;
	});
	  
	  function onErr(err) {
		console.log(err);
		return 1;
	  }

	return position;
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

