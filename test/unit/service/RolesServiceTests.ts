import chai = require('chai')
const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const expect = chai.expect
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
})
