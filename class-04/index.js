const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("school").collection("students");

    if(!err){
        console.log("Server run success");        
        dataDelete(collection);
    }

});


function dataDelete(collection){
    
    collection.deleteOne({_id: ObjectId('636eca5302b44714c1868939')}, (err, result)=>{
        if(!err){
            console.log(result)
        }
    })
} 