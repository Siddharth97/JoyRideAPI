const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const UserSchema = new Schema({
    username: {type:String, trim:true, default:''},
    name: {type:String, trim:true, default:''},
    email: {type:String, trim:true, default:''},
    phonenum: {type:String, trim:true, default:''},
    password: {type:String, trim:true, default:''}
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;