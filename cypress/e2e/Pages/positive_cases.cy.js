Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../POM/general_pom"
import smena_pom from "../POM/smena_pom";

describe("Positive cases Смена", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.smena_sidebar_icon().click()
    })
    it("Create new Смена and Open it", () => {
        general_pom.table_buttons.add_button().click()
        cy.wait(3000)
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(1000)
        cy.get('._extra_1c0tj_12 > :nth-child(3)').click()
    })
    it("Open Смена details", () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        cy.get(':nth-child(1) > .label').should('have.text', '  Смена-ID:')
        cy.wait(5000)
        cy.get('._extra_1c0tj_12 > :nth-child(3)').click()
        general_pom.errorCheckers.alert_message('Касса успешно открыта')
    })
    it("Close Смена function", () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        cy.wait(5000)
        smena_pom.elements.close_smena_button().click({force: true})
        general_pom.errorCheckers.alert_message('Касса успешно закрыта')
    })
    it("Edit Смена", () => {
        cy.wait(5000)
        general_pom.table_buttons.edit_button().click()
        smena_pom.elements.edit_cassir_open_list().click()
        cy.get(':nth-child(1) > :nth-child(5) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-clearIndicator').click()
        general_pom.table_buttons.edit_save_button().click()
    })
    it("Delete Смена", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
    it("Create new Смена and Open it", () => {
        general_pom.table_buttons.add_button().click()
        cy.wait(3000)
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(1000)
        cy.get('._extra_1c0tj_12 > :nth-child(3)').click()
    })
    it("Open Смена details", () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        cy.get(':nth-child(1) > .label').should('have.text', '  Смена-ID:')
        cy.wait(5000)
        cy.get('._extra_1c0tj_12 > :nth-child(3)').click()
        general_pom.errorCheckers.alert_message('Касса успешно открыта')
    })
})