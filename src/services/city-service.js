const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){
        this.CityRepository - new CityRepository();
    }
    async createCity(){
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
        }
    }
    async deleteCity(cityId){
        try {
            const response =  await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
        }
    }
    async updateCity(cityId,data){
        try {
            const city = await this.CityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
        }
    }
    async getCity(cityId){
        try {
            const city = await this.CityRepository.getCity(cityId)
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
        }
    }
}