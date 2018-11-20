const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create passenger schema and model
const PassengerSchema = new Schema({
    username: {type:String, trim:true, default:''},
    startlocation: {type:String, trim:true, default:''},
    endlocation: {type:String, trim:true, default:''},
    starttime: {type:String, trim:true, default:''},
    endtime: {type:String, trim:true, default:''},
    price: {type:String, trim:true, default:''},
    passengerrating: {type:String, trim:true, default:''},
    car: {type:String, trim:true, default:''}
});

const Passenger = mongoose.model('Passengers', PassengerSchema);

module.exports = Passenger;