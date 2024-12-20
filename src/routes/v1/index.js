const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');
const  {FlightMiddlewares} = require('../../middlewares/index');    

const router = express.Router();
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
// aiport-controller.js
router.post('/airports',AirportController.create);
router.delete('/airports/:id',AirportController.destroy);
router.get('/airports/:id',AirportController.get);
router.patch('/airports/:id',AirportController.update);

router.post('/flights',FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get('/flights',FlightController.getAll);
// router.post('/city',CityController.createMany);
module.exports = router;