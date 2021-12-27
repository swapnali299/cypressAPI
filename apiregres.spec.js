/// <reference types = "Cypress"/>

describe('To verify the POST API request regres', () => {
    it('verify the post request', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "swapnali",
                "job": "tester"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('createdAt')
        })
    })
    it('verify the get request', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users"
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('verify the put request', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "shivshree",
                "job": "developer"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('updatedAt')
        })

    })

    it('verify the delete request', () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",

        }).then((response) => {
            expect(response.status).to.eq(204)
        })

    })

})