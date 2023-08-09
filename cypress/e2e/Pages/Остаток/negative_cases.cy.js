const general_pom = require("../../POM/general_pom");
const remainder_pom = require("../../POM/remainder_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Negative cases Остаток", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.remainder_icon().click()
    })
    it("Filter Остаток by filial", () => {
        remainder_pom.elements.filter_by_filial_input().click()
        general_pom.selectors.select_item('Kontinent ')
        cy.esc()
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').should('have.text','Kontinent ')
    })
    it("Filter Остаток by category", () => {
        remainder_pom.elements.filter_by_category_input().click()
        general_pom.selectors.select_item('783320417009')
        cy.esc()
        cy.get('.CTableBody > :nth-child(1) > :nth-child(7)').should('have.text','783320417009')
        cy.get('._autocompleteButton_sp167_1 > .MuiButtonBase-root')
        cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click()
        general_pom.selectors.select_item('AZZARO')
        cy.esc()
        

    })
    it("Filter Остаток by product code", () => {
        remainder_pom.elements.filter_by_product_code_input().click()
        cy.wait(2000)
        general_pom.selectors.select_first()
        cy.esc()
    })
})