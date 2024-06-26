// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://admin:zenek123@cluster0.vt4fw96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const { MongoClient, ServerApiVersion } = require("mongodb");
const connectionString = process.env.MONGO_CONNECTION_STRING;
const client = new MongoClient(connectionString, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function main() {
  await client.connect();

  const database = client.db(process.env.MONGO_DATABASE_NAME);
  const tasksCollection = database.collection(
    process.env.MONGO_COLLECTION_NAME
  );
  const tasks = await tasksCollection.find().toArray();
  console.log(tasks);
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
