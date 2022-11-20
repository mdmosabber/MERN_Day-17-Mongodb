const {client} = require('./dbConfig');

async function dataUpdate(){
    try{
        const student_collection = client.db('school').collection('students');
        const query = {
            address: 'dhaka'
        };
        const updateData = [
            {$set: {phone: 012344444, address: 'dhaka', country: 'Bangladesh', lastName: 'Hossen'}},
        ]
        const option = {upsert: true}
        const result = await student_collection.updateMany(query, updateData, option);
        console.log(result);

    }catch(err){
        console.log(err)
    }finally{
        await client.close
    }
};
dataUpdate()