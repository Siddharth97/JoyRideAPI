const express = require('express');//Attempt 2
const bodyParser = require('body-parser');//this is to use json from post
const mongoose = require('mongoose');
const User = require('./models/users');
const Driver = require('./models/driver');
const Passenger = require('./models/passenger');
const DriverHistory = require('./models/driverhistory');
const PassengerHistory = require('./models/passengerhistory');
//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/RideShare').then(() => console.log('Connected to MongoDB...')).catch(err => console.error('Could not connect to MongoDB...'));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());//access to using json stuff

//initialize routes
//app.use('/api',require('./routes/api'));

//Maybe remove everything from the methods in API?
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello this is a test');
     });







//Users-----------------------------------------------
//get a specific user based by username
app.get('/api/users/:username', function(req, res, next){
    User.findOne({username: req.params.username}).then(function(user){ 
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    
       res.send(user);
   });
       });
   //Send them all
   app.get('/api/users', function(req, res, next){
          User.find().then(function(user){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(user);
          });
   });
       //Add a new user to the database
       app.post('/api/users', function(req, res, next){ 
       User.create(req.body).then(function(user){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(user);
        });
       //}).catch(next);
      });
   
   //update a user in the database
   app.put('/api/users/:username', function(req, res, next){
       User.findOneAndUpdate({username: req.params.username}, req.body).then(function(){
           User.findOne({username:req.params.username}).then(function(user){
               res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
               res.send(user);
           });
          });
   });
   
   //Delete a user from the database
   app.delete('/api/users/:username', function(req, res, next){
       User.findByIdAndRemove({_id: req.params.username}).then(function(user){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(user);
       });
    });
   //Users-----------------------------------------------
   //Drivers-----------------------------------------------
   //get a specific driver based by username
   app.get('/api/drivers/:username', function(req, res, next){
       Driver.findOne({username: req.params.username}).then(function(driver){ 
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(driver);
      });
          });
      //get them all
      app.get('/api/drivers', function(req, res, next){
       Driver.find().then(function(driver){ 
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(driver);
      });
          });
          //Add a new driver to the database
          app.post('/api/drivers', function(req, res, next){ 
       Driver.create(req.body).then(function(driver){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(driver);
           //}).catch(next);
       });
         });
      
      //update a driver in the database
      app.put('/api/drivers/:username', function(req, res, next){
       Driver.findOneAndUpdate({username: req.params.username}, req.body).then(function(){
           Driver.findOne({username:req.params.username}).then(function(driver){
               res.header("Access-Control-Allow-Origin", "*");
               res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
               res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                  res.send(driver);
              });
             });
      });
      
      //Delete a driver from the database
      app.delete('/api/drivers/:username', function(req, res, next){
       Driver.findByIdAndRemove({_id: req.params.username}).then(function(driver){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(driver);
          });
       });
      //Drivers-----------------------------------------------
   //Passenger-----------------------------------------------
   //get a specific Passenger based by username
   app.get('/api/passengers/:username', function(req, res, next){
       Passenger.findOne({username: req.params.username}).then(function(passenger){ 
           res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(passenger);
      });
          });
      //get all
      app.get('/api/passengers', function(req, res, next){
       Passenger.find().then(function(passenger){ 
           res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(passenger);
      });
          });
          //Add a new Passenger to the database
          app.post('/api/passengers', function(req, res, next){ 
       Passenger.create(req.body).then(function(passenger){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(passenger);
              //}).catch(next);
       });
         });
      
      //update a Passenger in the database
      app.put('/api/passengers/:username', function(req, res, next){
       Passenger.findOneAndUpdate({username: req.params.username}, req.body).then(function(){
           Passenger.findOne({username:req.params.username}).then(function(passenger){
               res.header("Access-Control-Allow-Origin", "*");
               res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
               res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                  res.send(passenger);
              });
             });
      });
      
      //Delete a Passenger from the database
      app.delete('/api/passengers/:username', function(req, res, next){
       Passenger.findOneAndDelete({_id: req.params.username}).then(function(passenger){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(passenger);
          });
       });
      //Passenger-----------------------------------------------
   //DriversHistory-----------------------------------------------
   //get a specific DriversHistory based by username
   app.get('/api/driverhistory/:username', function(req, res, next){
       DriverHistory.findOne({username: req.params.username}).then(function(driverhistory){ 
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(driverhistory);
      });
          });
          //get a specific DriversHistory based by username
          app.get('/api/driverhistory', function(req, res, next){
       DriverHistory.find().then(function(driverhistory){ 
           res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(driverhistory);
      });
          });
      
          //Add a new DriversHistory to the database
          app.post('/api/driverhistory', function(req, res, next){ 
       DriverHistory.create(req.body).then(function(driverhistory){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(driverhistory);
              //}).catch(next);
       });
         });
      
      //update a DriversHistory in the database
      app.put('/api/driverhistory/:username', function(req, res, next){
       DriverHistory.findOneAndUpdate({username: req.params.username}, req.body).then(function(){
           DriverHistory.findOne({username:req.params.username}).then(function(driverhistory){
               res.header("Access-Control-Allow-Origin", "*");
               res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
               res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                  res.send(driverhistory);
              });
             });
      });
      
      //Delete a DriversHistory from the database
      app.delete('/api/driverhistory/:username', function(req, res, next){
       DriverHistory.findByIdAndRemove({_id: req.params.username}).then(function(driverhistory){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(driverhistory);
          });
       });
      //DriversHistory-----------------------------------------------
   //PassengerHistory-----------------------------------------------
   //get a specific PassengerHistory based by username
   app.get('/api/passengerhistory/:username', function(req, res, next){
       PassengerHistory.findOne({username: req.params.username}).then(function(passengerhistory){ 
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(passengerhistory);
      });
          });
      //get all
      app.get('/api/passengerhistory', function(req, res, next){
       PassengerHistory.find().then(function(passengerhistory){ 
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          res.send(passengerhistory);
      });
          });
          //Add a new PassengerHistory to the database
          app.post('/api/passengerhistory', function(req, res, next){ 
       PassengerHistory.create(req.body).then(function(passengerhistory){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(passengerhistory);
              //}).catch(next);
       });
         });
      
      //update a PassengerHistory in the database
      app.put('/api/passengerhistory/:username', function(req, res, next){
       PassengerHistory.findOneAndUpdate({username: req.params.username}, req.body).then(function(){
           PassengerHistory.findOne({username:req.params.username}).then(function(passengerhistory){
               res.header("Access-Control-Allow-Origin", "*");
               res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
               res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
                  res.send(passengerhistory);
              });
             });
      });
      
      //Delete a PassengerHistory from the database
      app.delete('/api/passengerhistory/:username', function(req, res, next){
       PassengerHistory.findOneAndDelete({_id: req.params.username}).then(function(passengerhistory){
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
              res.send(passengerhistory);
          });
       });
      //PassengerHistory-----------------------------------------------





//listen for requests
app.listen(3000, function(){
console.log('now listening for requests');
});

