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
    // This is incorrect. Attempting to update a document that doesn't exist
    // Results in an error if upsert is not used
    const result = await collection.updateOne(
      { _id: 1 },
      { $set: { name: "updatedName" } } 
    );
    console.log(`Modified count: ${result.modifiedCount}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```