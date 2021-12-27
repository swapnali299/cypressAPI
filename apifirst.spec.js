/// <reference types = "Cypress"/>
describe('verify the different type of API', function() {

    // test michel page 2 
    it('verify the GET Api request', function() {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((response) => {
            return response.body.data.find(function(el) {
                return el.first_name == "Michael"
            })
        }).then((el) => {
            expect(el['first_name']).to.eq('Michael')
        })
    })

})