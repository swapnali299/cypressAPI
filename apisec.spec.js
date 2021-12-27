/// <reference types = "Cypress"/>

describe('To verift POST Api', () => {

    let payload = {
        "name": "morpheus",
        "job": "leader"
    }
    it('To verify List user & Single user Api', () => {
        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: payload
        }).then((response) => {
            // cy.log(response.body)
            expect(response.body).to.have.property('id')
            return response.body
        }).then((res) => {
            // cy.log(res)
            cy.requesst({
                method: "GET",
                uri: `https://reqres.in/api/users/ ${res.id}`
            }).then((response) => {
                expext(response.body.data.first_name).to.eq(payload['name'])
            })
        })

    })

})