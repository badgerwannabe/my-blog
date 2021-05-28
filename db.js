// const mongoose = require('mongoose');


// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect('mongodb+srv://test-user:wxZ1BTxGoJQ8cMRP@cluster1.wrqhy.mongodb.net/test?retryWrites=true&w=majority', {
//             useNewUrlParser: true, 
//             useCreateIndex: true, 
//             useUnifiedTopology: true, 
//         });
//         console.log(`Database connected: ${conn.connection.host}`)
//     } catch (err) {
//         console.error(err);
//         process.exit(1);
    
//     }
// }


// module.exports = connectDB;

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://test-user:wxZ1BTxGoJQ8cMRP@cluster1.wrqhy.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true });

console.log("Database connected")
client.connect(err => {
  const collection = client.db("test").collection("blogs");
  // perform actions on the collection object
  client.close();
});

export default MongoClient;