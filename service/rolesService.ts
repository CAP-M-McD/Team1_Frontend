const axios = require('axios');
import { Roles } from "../model/Roles";
axios.defaults.baseURL = process.env.API_URL;

module.exports.URL = '/api/job-roles'

module.exports.getJobRoles= async function(){
    try{
        const response =await axios.get(this.url)

        return response.data
    }catch (e) {
        throw new Error('Could not get job roles')
    }
}
