const city = require('../models/city');
const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch{
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
         await City.destroy({
            where:{
                id:cityId
            }
         });
         return true;
        }
        catch{
            throw error;
        }
    }
    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch{
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try{
            // This one also works but it will not return us the updated object
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     } 
            // });
            // return city;

            const city =  await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }catch{
            console.log("Something went wrong in the repository layer");
            throw {error};
        }   
    }
    async getAllCities(){
        try {
            const cities= City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}   

module.exports = CityRepository;