// Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://filmex_user:2sQ!7T8VzK9yJcB@filmex.ddahdpe.mongodb.net/?retryWrites=true&w=majority&appName=FILMEX";
const dbName = 'FILMEX_DB';


// Function to create a user
async function addUser(name, lastname, password, mail) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Succesfully Connected to MongoDB Atlas');

    // Access the database
    const database = client.db(dbName);

    // Access a collection
    const collection = database.collection('USERS');

    // Insert a document
    const document = { 
      name: name,
      lastname: lastname,
      password: password,
      mail: mail
      };
    const result = await collection.insertOne(document);
    console.log(`Succesfully inserted document into the collection`);

    // Query the collection
    const query = { name: name };
    const foundDocument = await collection.findOne(query);
    console.log('Found document:', foundDocument);

  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  }
}

// Function to get a user by mail
async function getUser(mail) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Succesfully Connected to MongoDB Atlas');

    // Access the database
    const database = client.db(dbName);

    // Access a collection
    const collection = database.collection('USERS');

    // Query the collection
    const query = { mail: mail };
    const foundDocument = await collection.findOne(query);
    console.log('Found document:', foundDocument);

  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  }
}

// Function to connect to MongoDB Atlas and perform operations
async function addFavoriteMovie(name, year, user_id) {
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
    const document = { name: name, year: year, user_id: user_id };
    const result = await collection.insertOne(document);
    console.log(`Succesfully inserted document into the collection`);

    // Query the collection
    const query = { name: name };
    const foundDocument = await collection.findOne(query);
    console.log('Found document:', foundDocument);

  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  }
}

// Function to connect to MongoDB Atlas and perform operations
async function getFavoriteMovie() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Succesfully Connected to MongoDB Atlas');

    // Access the database
    const database = client.db(dbName);

    // Access a collection
    const collection = database.collection('FAVS');

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

// Function to connect to MongoDB Atlas and perform operations
async function addOrden(movie_name, movie_price, cantidad, user_id) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Succesfully Connected to MongoDB Atlas');

    // Access the database
    const database = client.db(dbName);

    // Access a collection
    const collection = database.collection('ordenes');

    // Insert a document
    const document = { movie_name: movie_name, movie_price: movie_price,cantidad:cantidad, user_id: user_id };
    const result = await collection.insertOne(document);
    console.log(`Succesfully inserted document into the collection`);

    // Query the collection
    const query = { movie_name: movie_name };
    const foundDocument = await collection.findOne(query);
    console.log('Found document:', foundDocument);

  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  }
}

// Get order by id
async function getOrden(order_id) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Succesfully Connected to MongoDB Atlas');

    // Access the database
    const database = client.db(dbName);

    // Access a collection
    const collection = database.collection('FAVS');

    // Query the collection
    const query = { _id: order_id };
    const foundDocument = await collection.findOne(query);
    console.log('Found document:', foundDocument);

  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
    console.log('Connection to MongoDB Atlas closed');
  }
}
