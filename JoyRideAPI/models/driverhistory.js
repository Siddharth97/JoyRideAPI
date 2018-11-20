const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const DriverHistorSchema = new Schema({
    username: {type:String, trim:true, default:''},
    startlocationdh: {type:String, trim:true, default:''},
    endlocationdh: {type:String, trim:true, default:''},
    starttimedh: {type:String, trim:true, default:''},
    endtimedh: {type:String, trim:true, default:''},
    pricedh: {type:String, trim:true, default:''},
    ratinghistordh: {type:String, trim:true, default:''},
    cardh: {type:String, trim:true, default:''},
    passengerusernamedh: {type:String, trim:true, default:''},
    numtimestravelleddh: {type:String, trim:true, default:''}
});

const DriverHistory = mongoose.model('DriverHistory', DriverHistorSchema);

module.exports = DriverHistory;