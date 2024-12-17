const {AirportService}=require('../services/index');
const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            err:{},
            message:'Successfully created the airport'
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a new airport',
            err:error
        });
    };
}
const get = async (req,res)=>{
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:'Successfully fetched the airport'
        });
    }
    catch(error){
        console.log(req.params);
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get the airport',
            err:error
        });
    };
}
const update = async (req,res)=>{
    try {
        const response = await airportService.updateAirport({
            airportId:req.params.id,
            airport:req.body
        });
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:'Successfully updated the airport'
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the airport',
            err:error
        });
    };
}
const destroy = async (req,res)=>{
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:'Successfully deleted the airport'
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the airport',
            err:error
        });
    };
}

const getAll = async (req,res)=>{
    try {
        const airports = await airportService.getAllAirportData(req.query);
        return res.status(200).json({
            data:airports,
            success:true,
            err:{},
            message:'Successfully fetched all airports'
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the airports',
            err:error
        });
    };
}
module.exports = {
    create,
    get,
    update,
    destroy,
    getAll
}