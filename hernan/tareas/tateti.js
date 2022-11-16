
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

var posicion = []; // Guarda lo ingresado por el usuario

var tableroInicial = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
];

// analogia con la web??
// que pasa si cambio el TAD

//-------------------------------------------------------------------
// vista
//-------------------------------------------------------------------

function dibujarTablero(tablero){
	// dibujar el tablero
	//console.log(tablero);
	console.log('f   columnas\n' + 'i    0,1,2\n' + 'l 0 [' + tablero[0] + ']\n' + 'a 1 [' + tablero[1] + ']\n' + 's 2 [' + tablero[2] + ']');
}

//-------------------------------------------------------------------
// controlador: modulos de la logica de juego - divide y venceras (abstrabcion)
//-------------------------------------------------------------------

const prompt = require('prompt');

function cambiarTurno(){
	if(turno==CRUZ){
		turno = CIRCULO; 
	}else{
		turno = CRUZ;
	}
	jugar(tablero);	
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
		prompt.stop();
		return true; //diagonal 2
	}
	else {
		return false;
	}
}

// Indica si el tablero esta completo
function hayEmpate(tablero){
	if (tablero[0][0]!==0 && tablero[0][1]!==0 && tablero[0][2]!==0 && tablero[1][0]!==0 && tablero[1][1]!==0 && tablero[1][2]!==0 && tablero[2][0]!==0 && tablero[2][1]!==0 && tablero[2][2]!==0){
		prompt.stop();
		return true; //todos distintos de 0
	}
	else {
		return false; // alguno igual a 0 -> aún hay movimientos posibles
	}
}

// Indica si el movimiento es valido
function movimientoValido(movimiento,tablero){
	if(tablero[movimiento[0]][movimiento[1]]!==0){
		return true;
	}
	else {
		console.log('Ese lugar ya fue utilizado');
		return false;
	}
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

function mover(movimiento,tablero,turno){
	tablero[movimiento[0]][movimiento[1]]=turno
	return true;
}

function solicitarMovimiento(){

    let properties = [
        {
            name: 'fila',
            validator: /^[0-2]$/,
            warning: 'Debe ingresar una combinación valida. Recuerde que sólo existen las columnas 0, 1 y 2 y las filas 0, 1 y 2.'
        },
        {
            name: 'columna',
            validator: /^[0-2]$/,
            warning: 'Debe ingresar una combinación valida. Recuerde que sólo existen las columnas 0, 1 y 2 y las filas 0, 1 y 2.'
        },

    ]
    console.log('Por favor ingrese un lugar donde colocar la pieza. Seleccione primero la fila y posteriormente la columna. Por ejemplo 0, 1 o 2');
    prompt.get(properties, function (err, result) {
        if (err) {
            return onErr(err);
        }
        console.log('Command-line input received:');
        posicion[0] = Number(result.fila);
        posicion[1] = Number(result.columna);
        console.log('Se seleccionó: ',posicion);
		return posicion;
    });

    function onErr(err) {
        console.log(err);
        return 1;
      }
}

prompt.stop = function () {
    if (prompt.stopped || !prompt.started) {
        return;
    }

    stdin.destroy();
    prompt.emit('stop');
    prompt.stopped = true;
    prompt.started = false;
    prompt.paused = false;
    return prompt;
}

//-------------------------------------------------------------------
// Juego = sistema
//-------------------------------------------------------------------

//while (!esElFinDeJuego(tablero)){
function jugar(tablero){		
	
	new Promise((resolve, err) => {
		dibujarTablero(tablero) // Agregado
		console.log('Es el turno de: ',turno) // Agregado
		prompt.start();
		resolve(solicitarMovimiento());
		setTimeout(() => console.log("done"), 10000);
	}).then((movimiento) => {
		console.log('entro',movimiento);
		if (movimientoValido(movimiento)) {
				mover(movimiento,tablero,turno);
				if ( hayTateti(tablero) ) {
					// jugador actual gana
					console.log('Juego terminado. Ganador', turno);
				} else if( hayEmpate(tablero) ){
					console.log('Juego terminado. No hay ganador');
				} else {
					cambiarTurno();
				}
		}
	}).catch((err) => {
		console.log('Se produjo un error, por favor reinicie el juego', err);
	})
			
}

jugar(tableroInicial);

//console.log('FIN');

