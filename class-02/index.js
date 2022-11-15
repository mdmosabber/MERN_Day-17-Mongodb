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

    const search = {_id: ObjectId('636eca5dbcddca4d7d694d94')};

    const newValue = {$set:{
        name: 'Md.Rahim Hossen',
        email: 'rahimhossen@gmail.com',
        phone: '01723261110'
    }}

    collection.updateOne(search,newValue, (err, result)=>{
        if(!err){
            console.log(result);
        }
    })
}