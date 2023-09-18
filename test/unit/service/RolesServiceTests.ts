var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');  
import chai = require("chai");
const expect = chai.expect;
const rolesService = require('../../../service/rolesService');
const Roles = {
  rolesId: 1,
  capability: "Tech",
  jobFamily: "Engineering",
  jobProfileTitle: "Software Engineer",
  managementLevel: "Management", 
  description: "Description",
  minimalEssentialRequirements: "Requirements"
}

describe('rolesService', function () {
  describe('getJobRoles', function () {
      it('should return Job Roles from response', async () => {
          var mock = new MockAdapter(axios);

          const data = [Roles];

          mock.onGet(rolesService.URL).reply(200, data);

          var results = await rolesService.getJobRoles();

          expect(results[0]).to.deep.equal(Roles);
      });

      it('should throw exception when 500 error returned from axios', async () => {
          var mock = new MockAdapter(axios);

          mock.onGet(rolesService.URL).reply(500);

          var error;

          try {
              await rolesService.getJobRoles();
          } catch (e) {
              error = e.message; 
          }

          expect(error).to.equal('Could not get job roles');
      });
  })
});

