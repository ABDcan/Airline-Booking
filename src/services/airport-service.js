const {AirportRepository} = require('../repository/index')

class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data){
        try {
            const airport =  await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
    async deleteAirport(airportId){
        try {
            const airport =  await this.airportRepository.deleteAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
    async updateAirport(data){
        try {
            const airport =  await this.airportRepository.updateAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
    async getAirport(airportId){
        try {
            const airport =  await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
    async getAllAirport(data){
        try {
            const airport =  await this.airportRepository.getAirport({name:data.name});
            return airport;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
}

module.exports = AirportService;