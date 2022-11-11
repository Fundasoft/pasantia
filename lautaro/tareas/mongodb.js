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
			nuevo:[Math.random],
            nombre: 'Lautaro'
		};
        
        let fila2 = {
			propiedad:'alfa',
			numero:Math.random(), 
			nuevo:[Math.random]
		};

        let fila3 = {
			propiedad:'alfa',
			numero:Math.random(), 
			nuevo:[Math.random]
		};

        let fila4 = {
			propiedad:'alfa',
			numero:Math.random(), 
			nuevo:[Math.random]
		};
        // dato = document = fila
		db.collection("tabla").insertOne(fila).then( () => console.log('create') ).catch( err => console.log(err) );
		db.collection("tabla").insertOne(fila2).then( () => console.log('create') ).catch( err => console.log(err) );
		db.collection("tabla").insertOne(fila3).then( () => console.log('create') ).catch( err => console.log(err) );
		db.collection("tabla").insertOne(fila4).then( () => console.log('create') ).catch( err => console.log(err) );
	
        
		// read
		let query = {}; // consulta = edad > 10
		db.collection("tabla").find(query).toArray().then( datos => console.log('read',datos) );
		
		// 1 - read buscar los numeros mayores a 0.5
        db.collection("tabla").find(query).toArray().then( datos => console.log('read', datos > 0.5) );

		// 2 - read buscar solo la columna numero
        db.collection("tabla").find(numero).toArray().then( datos => console.log('read', datos) );
		// 3 - read a su antojo
        db.collection("tabla2").find(nombre).toArray().then( datos => console.log('read', datos) );
		// update
        db.collection("tabla4").updateOne(propiedad).toArray().then( datos => console.log('update', datos) );
		// delete
        db.collection("tabla2").delete(nuevo).toArray().then( datos => console.log('delete', datos) );
	});
}).catch(err => console.log(err));