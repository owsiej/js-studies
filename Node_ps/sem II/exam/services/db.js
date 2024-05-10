const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
  serverApi: ServerApiVersion.v1,
});

async function databaseConnect() {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  const db = client.db(process.env.MONGO_DATABASE_NAME);
  return db;
}

async function databaseDisconnect() {
  await client.close();
  console.log("You successfully disconnected to MongoDB!");
}

module.exports = {
  databaseConnect,
  databaseDisconnect,
};
