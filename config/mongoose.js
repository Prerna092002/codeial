const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial');
//acquire the connection to check whether it's succesful or not
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error in connection with db'));
//up and runnnig so print the message
db.once('open',function(){
    console.log('Succesfully connected to db');
})