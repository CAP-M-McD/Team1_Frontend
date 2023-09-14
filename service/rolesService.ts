const axios = require('axios');
import { Roles } from "../model/Roles";
const API_BASE_URL: string='http://localhost:8080/api'

module.exports.getJobRoles = async function(): Promise<Roles[]>{
    try{
        const response =await axios.get('http://localhost:8080/api/job-roles')
        
        return response.data
    }catch (e) {
        throw new Error('Could not get job roles')
    }
}
