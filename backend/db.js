const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017"

const connectToMongo = async ()=>{
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017/iNotes', ()=> {
        console.log("Connect to MongoDB")
    });
}

module.exports = connectToMongo;