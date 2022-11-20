const {MongoClient} = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.DATABASE || 'mongodb://localhost:27017');

console.log("Database Connect Success");

module.exports = {client};