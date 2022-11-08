
// modularizacion: divide y venceras (documentacion)

// sistema cliente => patron diseño (mvc, microservicios, apis)

//-------------------------------------------------------------------
// inicializacion
//-------------------------------------------------------------------

const CRUZ = 'x', CIRCULO = 'o';

var tablero = [["x","x","o"],
	           ["o","o","x"],
	           ["x","o","o"]];

var turno = CRUZ, movimiento = 0;

let elGanadorEs = ""

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
	let tateti= [];

	function playerOneSearchForTateti(posicionUno, posicionDos, posicionTres){
		if(posicionUno == "x" && posicionDos == "x" && posicionTres == "x"){
			elGanadorEs = "Jugador X"
			return true
		}else{
			return false
		}
	}

	function playerTwoSearchForTateti(posicionUno, posicionDos, posicionTres){
		if(posicionUno == "o" && posicionDos == "o" && posicionTres == "o"){
			elGanadorEs = "Jugador O"
			return true
		}else{
			return false
		}
	}
/* Horizontales */
 tateti[0] = playerOneSearchForTateti(tablero[0][0],tablero[0][1],tablero[0][2])  || playerTwoSearchForTateti(tablero[0][0],tablero[0][1],tablero[0][2])
 tateti[1] = playerOneSearchForTateti(tablero[1][0],tablero[1][1],tablero[1][2])  || playerTwoSearchForTateti(tablero[1][0],tablero[1][1],tablero[1][2])
 tateti[2] = playerOneSearchForTateti(tablero[2][0],tablero[2][1],tablero[2][2])  || playerTwoSearchForTateti(tablero[2][0],tablero[2][1],tablero[2][2])

 /* Verticales */

 tateti[3] = playerOneSearchForTateti(tablero[0][0],tablero[1][0],tablero[2][0])  || playerTwoSearchForTateti(tablero[0][0],tablero[1][0],tablero[2][0])
 tateti[4] = playerOneSearchForTateti(tablero[0][1],tablero[1][1],tablero[2][1])  || playerTwoSearchForTateti(tablero[0][1],tablero[1][1],tablero[2][1])
 tateti[5] = playerOneSearchForTateti(tablero[0][2],tablero[1][2],tablero[2][2])  || playerTwoSearchForTateti(tablero[0][2],tablero[1][2],tablero[2][2])

 /* Diagonales */
 tateti[6] = playerOneSearchForTateti(tablero[0][0],tablero[1][1],tablero[2][2])  || playerTwoSearchForTateti(tablero[0][0],tablero[1][1],tablero[2][2])
 tateti[7] = playerOneSearchForTateti(tablero[0][2],tablero[1][1],tablero[2][0])  || playerTwoSearchForTateti(tablero[0][2],tablero[1][1],tablero[2][0])

 /* Busco Resultado */


 const hayTateti = tateti.some((play)=>{
   return play == true
 })

 return hayTateti
}

// Indica si el tablero esta completo
function hayEmpate(tablero){
	const hayGanador = hayTateti(tablero)

	if(hayGanador == true){
		console.log("Ha ganado el " + elGanadorEs);
	}else{
		const hayJugadaPorHacer = tablero.map((array)=>{
			return array.some((posicionDelTablero)=>{
				return typeof posicionDelTablero === typeof 1 
			})
		})
		const sigueElJuego = hayJugadaPorHacer.some((item)=>{
			return item === true
		})

		if(sigueElJuego == true){
			console.log("Sigue el juego");
		}else{
			console.log("Hay Empate");
		}
	}
}

// Indica si el movimiento es valido
function movimientoValido(movimiento,tablero){
	if(movimiento == "x" && movimiento == "o"){
		tablero.some((posicion)=>{
			
		})
	}else{
		return "Movimiento no valido"
	}
}

function esElFinDeJuego(tablero){
	/* Esta funcion no haria falta */
	// utilizar: hayTateti(tablero) + tablero completo?
}

function mover(movimiento,tablero,pieza){

}

function solicitarMovimiento(){
	return 0;
}

//-------------------------------------------------------------------
// Juego = sistema
//-------------------------------------------------------------------

/* while (!esElFinDeJuego(tablero)){
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
} */

const resultado = hayEmpate(tablero)



