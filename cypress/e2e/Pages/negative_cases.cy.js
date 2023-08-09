Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../POM/general_pom"
import smena_pom from "../POM/smena_pom";

describe("Negative cases Смена", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.smena_sidebar_icon().click()
    })
    it("Create new Смена", () => {
        general_pom.table_buttons.add_button().click()
        cy.wait(3000)
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
    })
    it("Close Смена function", () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click( {force: true} )
        cy.wait(1000)
        cy.get('._extra_1c0tj_12 > :nth-child(1)').click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage("Касса не открыта")
    })
    it("Edit Смена", () => {
        general_pom.table_buttons.edit_button().click()
        smena_pom.elements.table_cassir_clear_button().click({force: true})
        general_pom.table_buttons.edit_save_button().click()
        
    })
    it("Delete Смена", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
})