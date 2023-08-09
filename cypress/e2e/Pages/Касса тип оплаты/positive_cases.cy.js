Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import cassa_type_payment from "../../POM/cassa_type_payment_pom";

describe("Positive cases Касса Тип оплаты", () => {
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
        cassa_type_payment.elements.add_form_type_input().type("test")
        cassa_type_payment.elements.add_form_slug_input().type("test")
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message().should('have.text', 'Успешно создан')
    })
    it("Edit Касса тип оплаты", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(2000)
        cassa_type_payment.elements.slug_item_table().clear()
        cassa_type_payment.elements.slug_item_table().type('test #edit')
        general_pom.table_buttons.edit_save_button().click()
    })
    it("Delete Касса тип оплаты", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
})