import { type Role } from '../model/Role'
const axios = require('axios')
axios.defaults.baseURL = process.env.API_URL

module.exports.URL = '/api/job-roles'
module.exports.SPEC_URL = '/api/job-specification/'

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

module.exports.getSpecificationById = async function (
    id: number
): Promise<Role> {
    try {
        const response = await axios.get(this.SPEC_URL + id)
        return response.data
    } catch (e) {
        if (e.response.status === 404) {
            throw new Error('Job Specification Not Found')
        } else if (e.response.status === 500) {
            throw new Error('Failed to fetch Job Specification')
        } else {
            throw new Error('Could not get Job Specification')
        }
    }
}
