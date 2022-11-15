const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("school").collection("students");

    if(!err){
        console.log("Server run success");        
        dataUpdate(collection);
    }

});


function dataUpdate(collection){
    const search = { _id: ObjectId('636eca5dbcddca4d7d694d93')}
    const updateData = {$set: {
        name: 'Md.Abir Hossen', 
        email: 'abirhossen@gmail.com', 
    }};

    collection.updateOne(search,updateData,(err, result)=>{
        if(!err){
            console.log(result);
        }
    })
}