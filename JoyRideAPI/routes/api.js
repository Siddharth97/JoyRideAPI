const express = require('express');//creating all the routes here//Attempt 2
const router = express.Router();
const User = require('../models/users');
const Driver = require('../models/driver');
const Passenger = require('../models/passenger');
const DriverHistory = require('../models/driverhistory');
const PassengerHistory = require('../models/passengerhistory');

//  res.header("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  //res.setHeader('Access-Control-Allow-Credentials', true);


router.get('/', function(req, res, next){
  
       res.send({'Hello':"Hello"});
  
       });

//Users-----------------------------------------------
//get a specific user based by username
router.get('/users/:username', function(req, res, next){
 User.findOne({username: req.params.username}).then(function(user){ 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
 
    res.send(user);
});
    });
//Send them all
router.get('/users', function(req, res, next){
       User.find().then(function(user){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.send(user);
       });
});
    //Add a new user to the database
router.post('/users', function(req, res, next){ 
    User.create(req.body).then(function(user){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.send(user);
     });
    //}).catch(next);
   });

//update a user in the database
router.put('/users/:username', function(req, res, next){
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
router.delete('/users/:username', function(req, res, next){
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
router.get('/drivers/:username', function(req, res, next){
    Driver.findOne({username: req.params.username}).then(function(driver){ 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(driver);
   });
       });
   //get them all
router.get('/drivers', function(req, res, next){
    Driver.find().then(function(driver){ 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(driver);
   });
       });
       //Add a new driver to the database
   router.post('/drivers', function(req, res, next){ 
    Driver.create(req.body).then(function(driver){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(driver);
        //}).catch(next);
    });
      });
   
   //update a driver in the database
   router.put('/drivers/:username', function(req, res, next){
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
   router.delete('/drivers/:username', function(req, res, next){
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
router.get('/passengers/:username', function(req, res, next){
    Passenger.findOne({username: req.params.username}).then(function(passenger){ 
        res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(passenger);
   });
       });
   //get all
router.get('/passengers', function(req, res, next){
    Passenger.find().then(function(passenger){ 
        res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(passenger);
   });
       });
       //Add a new Passenger to the database
   router.post('/passengers', function(req, res, next){ 
    Passenger.create(req.body).then(function(passenger){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(passenger);
           //}).catch(next);
    });
      });
   
   //update a Passenger in the database
   router.put('/passengers/:username', function(req, res, next){
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
   router.delete('/passengers/:username', function(req, res, next){
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
router.get('/driverhistory/:username', function(req, res, next){
    DriverHistory.findOne({username: req.params.username}).then(function(driverhistory){ 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(driverhistory);
   });
       });
       //get a specific DriversHistory based by username
router.get('/driverhistory', function(req, res, next){
    DriverHistory.find().then(function(driverhistory){ 
        res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(driverhistory);
   });
       });
   
       //Add a new DriversHistory to the database
   router.post('/driverhistory', function(req, res, next){ 
    DriverHistory.create(req.body).then(function(driverhistory){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(driverhistory);
           //}).catch(next);
    });
      });
   
   //update a DriversHistory in the database
   router.put('/driverhistory/:username', function(req, res, next){
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
   router.delete('/driverhistory/:username', function(req, res, next){
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
router.get('/passengerhistory/:username', function(req, res, next){
    PassengerHistory.findOne({username: req.params.username}).then(function(passengerhistory){ 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(passengerhistory);
   });
       });
   //get all
router.get('/passengerhistory', function(req, res, next){
    PassengerHistory.find().then(function(passengerhistory){ 
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
       res.send(passengerhistory);
   });
       });
       //Add a new PassengerHistory to the database
   router.post('/passengerhistory', function(req, res, next){ 
    PassengerHistory.create(req.body).then(function(passengerhistory){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(passengerhistory);
           //}).catch(next);
    });
      });
   
   //update a PassengerHistory in the database
   router.put('/passengerhistory/:username', function(req, res, next){
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
   router.delete('/passengerhistory/:username', function(req, res, next){
    PassengerHistory.findOneAndDelete({_id: req.params.username}).then(function(passengerhistory){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
           res.send(passengerhistory);
       });
    });
   //PassengerHistory-----------------------------------------------



//module.exports = router;