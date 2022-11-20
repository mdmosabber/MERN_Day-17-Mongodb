const {client} =  require('./dbConfig');


async function dataInsert(){
    try{
        const studentCollection = client.db('school').collection('students');
        const query = {email: "mosabber@gmail.com"};
        const data = {
            $set: {
                phone: '01723267508',                
                country: 'Bangladesh',
                lastName: 'Hossen'
            }
        }

        const result = await studentCollection.updateOne(query,data);
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
       await client.close
    }
}

dataInsert()