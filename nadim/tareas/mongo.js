const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017");

client.connect().then(function(){

	const db = client.db("pasantia"); // base de dato

	// conectado
	db.createCollection("tabla").catch(e=>e).then( () => { // collection
	
		// CRUD = crear + read + update + delete

		// create individualmente

		// let persona = {
		// 	nombre:'Nadim',
		// 	edad:18, 
		// 	sexo:"masculino",
		// };

		// dato = document = fila
		// db.collection("tabla").insertOne(persona).then( () => console.log('create') ).catch( err => console.log(err) );

		// create cantidad

		let personas =[{
			nombre:'Facundo',
			edad:22, 
			sexo:"masculino",
			numero:Math.random(),
		},{
			nombre:'Sara',
			edad:26, 
			sexo:"femenino",
			numero:Math.random(),
		}];

		// create por cantidad
		// db.collection("tabla").insertMany(personas).then(()=> console.log("create many")).catch(err=> console.log(err))
	
		// read
		// let query = {}; // consulta = edad > 10
		// db.collection("tabla").find(query).toArray().then( datos => console.log('read',datos) );

		// let query = {edad: {$gt:10}}; // consulta = edad > 10 . $gt=greater than ("mayor que").El contrario es $lt=less than
		// db.collection("tabla").find(query).toArray().then( datos => console.log('read',datos) );
		
		// 1 - read buscar los numeros mayores a 0.5
		// let query = {numero:{$gt:0.5}};
		// db.collection("tabla").find(query).toArray().then( datos => console.log('read',datos));

		//2 - read buscar solo la columna numero // con .project basicamente podriamos filtrar por "columnas"
		// db.collection("tabla").find({}).project({numero:1}).toArray().then( datos => console.log('read',datos));

		// 3 - read a su antojo
		// en este caso /*letra*/ significa que contenga esa letra o por ejemplo /*letra*$/ significa que aacaba en esa letra o /^M/ significa que comience con esa letra
		// db.collection("tabla").find({nombre:/S/}).project({nombre:1,_id:0}).toArray().then( datos => console.log('read',datos));

		// update de a uno
		// db.collection("tabla").updateOne({nombre:"Sara"},{$set:{numero:39}}).then(()=> console.log("Update")).catch(err => console.log(err))

		// delete
		// db.collection("tabla").deleteMany({}).then(()=> console.log("eliminated")).catch( err => console.log(err));
	
	});
}).catch(err => console.log(err));
