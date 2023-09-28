import { expect } from 'chai'
const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const rolesService = require('../../../service/rolesService')
const Roles = {
    rolesId: 1,
    capability: 'Tech',
    jobFamily: 'Engineering',
    jobProfileTitle: 'Software Engineer',
    managementLevel: 'Management',
    description: 'Description',
    minimalEssentialRequirements: 'Requirements',
}

describe('rolesService', function () {
    describe('getJobRoles', function () {
        it('should return Job Roles from response', async () => {
            const mock = new MockAdapter(axios)

            const data = [Roles]

            mock.onGet(rolesService.URL).reply(200, data)

            var results = await rolesService.getJobRoles()

            expect(results[0]).to.deep.equal(Roles)
        })

        it('should throw exception when 500 error returned from axios', async () => {
            const mock = new MockAdapter(axios)

            mock.onGet(rolesService.URL).reply(500)

            var error

            try {
                await rolesService.getJobRoles()
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Failed to fetch job roles')
        })

        it('should throw exception when 404 error returned from axios', async () => {
            const mock = new MockAdapter(axios)

            mock.onGet(rolesService.URL).reply(404)

            var error

            try {
                await rolesService.getJobRoles()
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Job roles not found')
        })

        it('should throw catch all exception when a 400/500 status is returned from axios e.g 418', async () => {
            const mock = new MockAdapter(axios)

            mock.onGet(rolesService.URL).reply(418)

            var error

            try {
                await rolesService.getJobRoles()
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Could not get job roles')
        })
    })

    describe('getSpecificationById', function () {
        it('should throw exception when 500 error returned from axios', async () => {
            const mock = new MockAdapter(axios)
            const id = 1
            mock.onGet(rolesService.URL + id).reply(500)

            var error

            try {
                await rolesService.getSpecificationById()
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Job Specification Not Found')
        })

        it('should return a Specification from a response', async () => {
            const mock = new MockAdapter(axios)
            const id = 1

            mock.onGet(rolesService.SPEC_URL + id).reply(200, Roles)

            var result = await rolesService.getSpecificationById(1)

            expect(result).to.deep.equal(Roles)
        })

        it('should throw exception when 400 error returned from axios', async () => {
            const mock = new MockAdapter(axios)
            const id = 1
            mock.onGet(rolesService.SPEC_URL + id).reply(400)

            var error

            try {
                await rolesService.getSpecificationById(id)
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Could not get Job Specification')
        })

        it('should throw exception when 404 error returned from axios', async () => {
            const mock = new MockAdapter(axios)

            mock.onGet(rolesService.URL).reply(404)

            var error

            try {
                await rolesService.getSpecificationById()
            } catch (e) {
                error = e.message
            }

            expect(error).to.equal('Job Specification Not Found')
        })
    })
})
