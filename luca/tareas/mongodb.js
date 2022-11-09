const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017");

client.connect().then(function(){

	const db = client.db("pasantia"); // base de dato

	// conectado
	db.createCollection("tabla").catch(e=>e).then( () => { // collection
	
		// CRUD = crear + read + update + delete

		// create
		let fila = {
			propiedad:'alfa',
			numero:Math.random(), 
			nuevo:[Math.random()]
		}; // dato = document = fila
		db.collection("tabla").insertOne(fila).then( () => console.log('create') ).catch( err => console.log(err) );
		
		// read
		let query = {}; // consulta = edad > 10
		db.collection("tabla").find(query).toArray().then( datos => console.log('read',datos) );
		
		// 1 - read buscar los numeros mayores a 0.5

		// 2 - read buscar solo la columna numero

		// 3 - read a su antojo

		// update

		// delete
	
	});
}).catch(err => console.log(err));
