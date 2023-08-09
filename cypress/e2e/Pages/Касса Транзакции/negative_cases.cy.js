Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import cassa_transactions_pom from "../../POM/cassa_transactions_pom"

describe("Negative cases cases Касса Транзакции", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.kassa_transactions_icon().click()
    })
    it("Create new Касса Транзакции", () => {
        general_pom.table_buttons.add_button().click()
        general_pom.table_buttons.add_form_submit_button().click()
        cassa_transactions_pom.elements.validation_error_field().should('have.text','Это обязательное поле')
    })
    it("Edit Касса Транзакции", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(7000)
        cassa_transactions_pom.elements.table_first_item_clear_button().click({force: true})
        general_pom.table_buttons.edit_save_button().click({force: true})
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
    it("Filter Касса Транзакции", () => {
        cassa_transactions_pom.elements.filter_by_id_field().click()
        cassa_transactions_pom.elements.filter_by_id_input().type("PG-0000002")
        general_pom.selectors.select_item("PG-0000002")
        cassa_transactions_pom.elements.filter_by_id_input().clear()
        cassa_transactions_pom.elements.filter_by_id_input().type("PG-0000002")
        general_pom.selectors.select_item("PG-0000002")
        cy.esc()
        // cassa_transactions_pom.elements.first_item_cassa_id().should("have.text", 'Ko-0000004')
    })
})