const general_pom = require("../../POM/general_pom");
const remainder_pom = require("../../POM/remainder_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Остаток", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.remainder_icon().click()
    })
    it("Open Остаток", () => {
        general_pom.table_buttons.table_first_item().click({force: true})
    })

    it("Add new Остаток", () => {
        general_pom.table_buttons.add_button().click()
        remainder_pom.elements.add_button_input().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        remainder_pom.elements.add_input().click()
        general_pom.selectors.select_first()
        remainder_pom.elements.add_input0().click()
        general_pom.selectors.select_item('Golden Oud')
        remainder_pom.elements.add_input1().click()
        general_pom.selectors.select_first()
        remainder_pom.elements.add_input2().type('300', {force: true} )
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
        cy.wait(3000)
    })

    it("Filter Остаток by filial", () => {
        remainder_pom.elements.filter_by_filial_input().click()
        general_pom.selectors.select_item('Kontinent')
        cy.esc()
        cy.get('.CTableBody > :nth-child(2) > :nth-child(2)').should('have.text', 'Kontinent ')
    })
    it("Filter Остаток by product", () => {
        cy.get(':nth-child(3) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click()
        general_pom.selectors.select_item('783320417009')
        cy.esc()
        cy.wait(2000)
        cy.get('.CTableBody > :nth-child(1) > :nth-child(7)').should('have.text', '783320417009')
    })
    it("Filter Остаток by category", () => {
        cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click()
        general_pom.selectors.select_item('AZZARO')
        cy.esc()
        cy.wait(2000)
        cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').should('have.text', 'AZZARO ')
    })
    it("Filter Остаток by product code", () => {
        remainder_pom.elements.filter_by_product_code_input().click()
        cy.wait(2000)
        general_pom.selectors.select_item('Golden Oud')
        cy.esc()
        cy.get('.CTableBody > :nth-child(1) > :nth-child(4)').should('have.text', 'Golden Oud ')
    })
    it('Delite', () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
})