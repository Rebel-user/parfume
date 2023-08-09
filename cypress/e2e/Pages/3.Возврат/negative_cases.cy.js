Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import refund_pom from "../../POM/refund_pom";

describe("Negative cases Возврат", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.refund_icon().click()
    })
    it("Create new Возврат", () => {
        general_pom.table_buttons.add_button().click()
        refund_pom.elements.create_form_filial_input().click()
        general_pom.selectors.select_item("Flash")
        general_pom.table_buttons.add_form_submit_button().click()
    })
    it("Edit Возврат", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(2000)
        refund_pom.elements.refund_table_filial_clear_button().click({force: true})
        cy.esc()
        general_pom.table_buttons.edit_save_button().click()
    })
})