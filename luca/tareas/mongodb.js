require('dotenv').config()

const { MongoClient } = require("mongodb");
const uri =  process.env.MONGODB_URI

const client = new MongoClient(uri);

async function run() {
	try {
	  const database = client.db('pasantia');
	  database.collection('tabla');

	  let fila = {
		propiedad:'beta',
		numero:Math.random(), 
		nuevo:[Math.random()]
	};
	/* database.collection("tabla").insertOne(fila).then( () => console.log('create') ).catch( err => console.log(err) ); */

	let query = {}

	await database.collection("tabla").find(query).toArray().then( datos => console.log('read',datos) );

	// 1 - read buscar los numeros mayores a 0.5
	
	const ejercicioRead1 = await database.collection("tabla").find({numero:{$lt:0.5}}).toArray()

	// 2 - read buscar solo la columna numero

	const ejercicioRead2 = await database.collection("tabla").find({numero:0.8636266996061197}, {projection: {numero:1, _id:0}}).toArray()

	// 3 - read a su antojo

	const ejercicioRead3 = await database.collection("tabla").find({propiedad:"alfa"}, {sort:{numero:1}}).toArray()

	// update
	const ejercicioUpdate = await database.collection("tabla").updateOne({numero:0.8636266996061197}, {$set:{nuevaPropiedad:"nueva"}})

	// delete

	const ejercicioDelete = await database.collection("tabla").deleteOne({propiedad:"beta"})

	} finally {
	  // Ensures that the client will close when you finish/error
	  await client.close();
	}
  }
  run().catch(console.dir);
