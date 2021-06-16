
const mongoose= require('mongoose');

const employeeSchema= mongoose.Schema({

    name:{
        type:String,
        require: true
    },
    age:{
        type:String,
    },
    city:{
        type:String
    },
    mail:{
        type:String
    },
    phone:{
        type: String
    }
    

})

module.exports= mongoose.model('Employee', employeeSchema);
