const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const PassengerHistorySchema = new Schema({
    username: {type:String, trim:true, default:''},
    startlocationph: {type:String, trim:true, default:''},
    endlocationph: {type:String, trim:true, default:''},
    starttimeph: {type:String, trim:true, default:''},
    endtimeph: {type:String, trim:true, default:''},
    priceph: {type:String, trim:true, default:''},
    ratinghistoryph: {type:String, trim:true, default:''},
    carph: {type:String, trim:true, default:''},
    driverusernameph: {type:String, trim:true, default:''},
    numtimestravelledph: {type:String, trim:true, default:''}
});

const PassengerHistory = mongoose.model('PassengerHistory', PassengerHistorySchema);

module.exports = PassengerHistory;