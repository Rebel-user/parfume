Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import consumption_pom from "../../POM/consumption_pom";

describe("Positive cases Расход", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.consumption_sidebar_icon().click()
    })

    it("Add new Расход", () => {
        general_pom.table_buttons.add_button().click()
        consumption_pom.elements.cassa_field().click()
        general_pom.selectors.select_first()
        consumption_pom.elements.consumption_type_field().click({force: true})
        general_pom.selectors.select_item("обед")
        consumption_pom.elements.payment_type_field()
        consumption_pom.elements.payment_summ_field().type('100')
        general_pom.table_buttons.add_form_submit_button().click()
        consumption_pom.elements.first_item_table().click()
        cy.wait(2000)
        consumption_pom.elements.confirm_consumption_button().click()
    })
    it("Edit Расход", () => {
        general_pom.table_buttons.edit_button().click()
        consumption_pom.elements.table_consumption_type_field_button().click()
        general_pom.selectors.select_item("Client Client")
        general_pom.table_buttons.edit_save_button().click()
    })
    it("Open Расход details page", () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click( {force: true})
        consumption_pom.elements.opened_item_header().contains("Расход-ID:")
        cy.get('._extra_1c0tj_12 > :nth-child(1)').click()
        general_pom.errorCheckers.alert_message('Сумма расхода успешно снята с кассы')
    })
    it("Delete Расход", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
    it("Filter Расход", () => {
        consumption_pom.elements.filter_by_filial_input().click()
        consumption_pom.elements.filter_by_filial_input2().type('pa')
        general_pom.selectors.select_item("Parfume Gallery")
        cy.esc()
        consumption_pom.elements.table_first_item_cassir().contains("Parfume Admin")
        cy.get('._autocompleteButton_sp167_1 > .MuiButtonBase-root').click()
        consumption_pom.elements.filter_input().click()
        // consumption_pom.elements.filter_input2().type('For')
        // general_pom.selectors.select_item("For Full testing 123")
        // cy.esc()
        // cy.get('.CTableBody > :nth-child(1) > :nth-child(4)').should('have.text','For Full testing 123 ')
        // cy.get('._autocompleteButton_sp167_1 > .MuiButtonBase-root')

    })
})