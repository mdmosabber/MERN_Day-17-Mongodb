const {client} = require('./dbConfig');

async function findOne(){
    try{
      const studentCollection = client.db('school').collection('students');
      const searchQuery = {phone: "01733344455"};
      const result = await studentCollection.findOne(searchQuery);
   
      console.log(result);
    }catch(err){
        console.log(err)
    }finally{
        await client.close
    }
}
findOne()