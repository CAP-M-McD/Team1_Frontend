import { type Roles } from '../model/Roles'
const axios = require('axios')
axios.defaults.baseURL = process.env.API_URL

module.exports.URL = '/job-roles'

module.exports.getJobRoles = async function (): Promise<Roles[]> {
    try {
        const response = await axios.get(this.URL)

        return response.data
    } catch (e) {
        throw new Error('Could not get job roles')
    }
}
