const {client} = require('./dbConfig');

async function insertManyData(){
    try{

      const studentCollection = client.db('school').collection('students');

      const data = [
            {name: 'Md. Rahim',lastName: 'Hossen',email: 'rahim@gmail.com',phone: 01733334444,address: 'Dhaka'},
            {name: 'Md. Karim',lastName: 'Hasan',email: 'karim@gmail.com',phone: 01733330000,address: 'Rangpur'},
            {name: 'Md. Rahim',lastName: 'Hossen',email: 'rahim@gmail.com',phone: 01733331111,address: 'Gajipur'},
        ];

      const result = await studentCollection.insertMany(data);
      console.log(result)

    }catch(err){
        console.log(err)
    }finally{
       await client.close;
    }
}

insertManyData()