const {Airport} = require('../models/index');
const {Op} = require('sequelize');

class AirportRepository{
    async createAirport({name,address,cityId}){
        try {
            const airport = await Airport.create({name,address,cityId});
            return airport;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }
    async deleteAirport(airportId){
        try {
             await Airport.destroy({
                where:{
                    id:airportId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }
    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }
    async updateAirport(airportId,name,address){
        try {
            const airport = await Airport.findByPk(airportId);
            airport.address = address;
            airport.name = name;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw {error};
        }
    }
    async getAllAirports(filter){
        try {
            if(filter.name){
                const airports = await city.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return airports;
            }
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw error;
        }
    }
}


module.exports = AirportRepository