const {client} = require('./dbConfig');

async function dataDeleteOne(){
    try{
        const studentCollection = client.db('school').collection('students');
        const searchQuery = {phone: 2738468}
        const result = await studentCollection.deleteOne(searchQuery);
        console.log(result)

    }catch(err){
        console.log(err)
    }finally{
        await client.close
    }
}
dataDeleteOne();