const airplane = require('../models/airplane');
const {FlightService} = require('../services/index');

const {SuccessCodes,ClientErrorCodes} = require('../utils/error-codes');

const flightService = new FlightService();
const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        console.log(flight);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:'Successfully created a flight',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error,
    })
}
}
const getAll  = async(req,res) => {
    try {
        let FlightRequestData = {
            flightNumber:req.query.flightNumber,
            boardingGate:req.query.boardingGate,
            departureAirportId:req.query.departureAirportId,
            price:req.query.price,
            arrivalAirportId:req.query.arrivalAirportId,
            arrivalTime:req.query.arrivalTime,
            departureTime:req.query.departureTime,
            airplaneId:req.query.airplaneId,
        }
        const flights = await flightService.getAllFlightData(FlightRequestData);
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:'Successfully fetched the flights',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:'Not able to fetch the flights',
            err:error,
    })
}
}

module.exports = {
    create,
    getAll
}