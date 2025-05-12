// Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://angelwolburg:OF9Z1pStk78wGivz@filmex.weyezsr.mongodb.net/?retryWrites=true&w=majority&appName=Filmex";
const dbName = 'angelwolburg';

// Function to connect to MongoDB Atlas and perform operations
async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Succesfully Connected to MongoDB Atlas');

    // Access the database
    const database = client.db(dbName);

    // Access a collection
    const collection = database.collection('FAVS');

    // Insert a document
    const document = { name: 'Interestellar', year: 2015 };
    const result = await collection.insertOne(document);
    console.log(`Succesfully inserted document into the collection`);

    // Query the collection
    const query = { name: 'Interestellar' };
    const foundDocument = await collection.findOne(query);
    console.log('Found document:', foundDocument);

  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  }
}

// Calling connectToMongoDB function
connectToMongoDB()