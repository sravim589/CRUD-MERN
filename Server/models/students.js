const mongoose = require('mongoose');

let StudentSchema = new mongoose.Schema({

//Structure  inside table

id:{
    type:String,
    required:true,
    minlength:[1,'Too short'],
    maxlength:2
},
username:{
    type:String,
    required:[true,'name is required'],
    unique:true
},
userpass:{
    type:String,
    required:true,
    minlength:[5,'Too short'],
    maxlength:7
}

}, { collection: 'example1' });
//we will create collection schema create

module.exports = mongoose.model("example1", StudentSchema);
