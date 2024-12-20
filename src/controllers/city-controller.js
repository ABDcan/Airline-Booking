const {CityService} = require('../services/index')

const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);  
        return res.status(201).json({
            data:city,
            sucess:true,
            message:'Sucessfully created a city',
            err:{}
        });  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to crete the city',
            err:error
        });
    }
};


// DELETE -> /city/:id
const destroy = async (req, res)=> {
    try {
        const response = await cityService.deleteCity(req.params.id);  
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'Sucessfully deleted a city',
            err:{}
        });  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to delete the city',
            err:error
        });
    }
}

// GET -> /city/:id
const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);  
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'Sucessfully deleted a city',
            err:{}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to get the city',
            err:error
        });
    }
}

// PATCh - /city/:id ->req.body
const update = async (req,res)=>{
    try {
        const response  = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            sucess:true,
            message:'Sucessfully fetched the city',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to  update the city',
            err:error
        });
    }
}

const getAll = async (req,res) =>{
    try {
        console.log(req.query);
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            sucess:true,
            message:'Sucessfully fetched all city',
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to  get the cities',
            err:error
        });
    }
}

const createMany = async (req,res)=>{
    try {
        const city = await cityService.createCities(req.body);  
        return res.status(201).json({
            data:city,
            sucess:true,
            message:'Sucessfully created cities',
            err:{}
        });  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            message:'Not able to create cities',
            err:error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    createMany
}