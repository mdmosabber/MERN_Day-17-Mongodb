const {client} = require('./dbConfig.js');

async function dataInsert(){
    try{
        const database = client.db('school');
        const student_model = database.collection('students');
        const data = {
            name: 'Md.Mosabber Hossen',
            email: 'mosabber@gmail.com',
            phone: '0177722233444',
            address: 'Dhaka',
            country: 'Bangladesh'
        }
        const result = await student_model.insertOne(data);
        console.log(result)
    }catch(err){
        console.log(err)
    }finally{
        await client.close
    }
}

dataInsert();