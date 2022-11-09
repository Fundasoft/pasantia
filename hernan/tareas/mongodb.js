const { ObjectID } = require('bson');

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017");

client.connect().then(function(){

	const db = client.db("pasantia"); // base de dato

	// conectado
	db.createCollection("tabla").catch(e=>e).then( () => { // collection
	
		// CRUD = crear + read + update + delete

		// create
		let fila = {
			propiedad:'beta',
			numero:Math.random(), 
			nuevo:[Math.random()]
		}; // dato = document = fila
		db.collection("tabla").insertOne(fila).then( () => console.log('create') ).catch( err => console.log(err) );
		
		// read
		let query = {}; // consulta = edad > 10
		db.collection("tabla").find(query).toArray().then( datos => console.log('read',datos) );
		
		// 1 - read buscar los numeros mayores a 0.5
		let mayoresA0Punto5 = {numero: { $gt: 0.5 }};
		db.collection("tabla").find(mayoresA0Punto5).toArray().then( datos => console.log('mayores',datos) );

		// 2 - read buscar solo la columna numero
		let soloColumnaNumero = {numero: { $gt: 0 }};
		db.collection("tabla").find(soloColumnaNumero,{projection: {numero: 1, _id: 0}}).toArray().then( datos => console.log('solo columna numero',datos) );

		// 3 - read a su antojo
		let antojo = {propiedad:{ $regex: '^be' }};
		db.collection("tabla").find(antojo).toArray().then( datos => console.log('antojo',datos) );

		// update
		let aModificar = {propiedad: 'beta'};
		let modificacion = {$set: {numero: 53}};
		db.collection("tabla").updateOne(aModificar, modificacion).then( datos => console.log('modificado OK',datos) );

		// delete
		let aBorrar = { _id: ObjectID('636bc718caf70bf0fbdedafb')};
		db.collection("tabla").deleteOne(aBorrar).then( datos => console.log('borrado OK',datos) );
	
	});
}).catch(err => console.log(err));
