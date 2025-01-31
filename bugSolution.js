```javascript
// Assuming you have a MongoDB connection established
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "<your_mongodb_connection_string>";
const client = new MongoClient(uri, {
  serverApi:
    ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const collection = client.db("your_database").collection("your_collection");
    // Correct use of upsert to handle non-existent documents
    const result = await collection.updateOne(
      { _id: 1 },
      { $set: { name: "updatedName" } },
      { upsert: true }
    );
    console.log(`Modified count: ${result.modifiedCount}`);
    console.log(`Upserted: ${result.upsertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```