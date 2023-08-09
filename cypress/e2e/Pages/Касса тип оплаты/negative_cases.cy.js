Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import cassa_type_payment from "../../POM/cassa_type_payment_pom";

describe("Negative cases Касса Тип оплаты", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.kassa_type_payment_icon().click()
    })
    it("Create new Касса тип оплаты", () => {
        general_pom.table_buttons.add_button().click()
        cy.wait(2000)
        cassa_type_payment.elements.add_form_type_input().type("             ")
        cassa_type_payment.elements.add_form_slug_input().type("             ")
        general_pom.table_buttons.add_form_submit_button().click()
    })
    it("Edit Касса тип оплаты", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(2000)
        cassa_type_payment.elements.slug_item_table().clear()
        cassa_type_payment.elements.slug_item_table().type('          ')
        general_pom.table_buttons.edit_save_button().click()
    })
})