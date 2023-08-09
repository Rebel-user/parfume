Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Login with correct credentials", () => {
    it("should successfully logined", () => {
        cy.login("medion_admin", "admin_medion123")
    })
})