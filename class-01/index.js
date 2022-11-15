const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("school").collection("students");

    if(!err){
        console.log("Server run success");        
        dataFinding(collection);
    }

});


function dataFinding(collection){

    const search = { _id: ObjectId('636eca5302b44714c1868939') };

    collection.find(search).toArray((err, result)=> {
        if(!err){
            console.log(result) // Return by array
        }
    })

    collection.findOne(search, (err, result)=>{
        if(!err){
            console.log(result) // Return by object
        }
    })

    collection.find().toArray((err, result)=> {
        if(!err){
            console.log('All Data By Array: ') // Return all data by array
            console.log(result) // Return all data by array
        } 
    })

    collection.find().sort( {_id: -1} ).limit(4).toArray((err, result)=> {
        if(!err){
            console.log('Sort By ID: ')
            console.log(result) // Return array with short by desc
        } 
    })


 
}





