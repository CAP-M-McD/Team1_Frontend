import { type Role } from '../model/Role'
const axios = require('axios')
axios.defaults.baseURL = process.env.API_URL

module.exports.URL = '/api/job-roles'

module.exports.getJobRoles = async function (): Promise<Role[]> {
    try {
        const response = await axios.get(this.URL)

        return response.data
    } catch (e) {
        if (e.response.status === 404) {
            throw new Error('Job roles not found')
        } else if (e.response.status === 500) {
            throw new Error('Failed to fetch job roles')
        } else {
            throw new Error('Could not get job roles')
        }
    }
}
