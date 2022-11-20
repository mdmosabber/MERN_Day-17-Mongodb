const {client} = require('./dbConfig');

async function dataFindAll(){
    try{
      const studentCollection = client.db('school').collection('students');
      const result = await studentCollection.find().sort({_id: -1}).limit(5).toArray();
      console.log(result)

    }catch(err){
        console.log(err)
    }finally{
        await client.close
    }
}

dataFindAll();