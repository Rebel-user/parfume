Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import cassa_transactions_pom from "../../POM/cassa_transactions_pom";

describe("Positive cases Касса Транзакции", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.kassa_transactions_icon().click()
    })
    it("Create new Касса Транзакции", () => {
        general_pom.table_buttons.add_button().click()
        cassa_transactions_pom.elements.create_filial_field().click()
        general_pom.selectors.select_item("Korzinka")
        cassa_transactions_pom.elements.cassa_type_transaction_field().click()
        general_pom.selectors.select_item("Возврат")
        cassa_transactions_pom.elements.cassa_type_payment_field().click()
        general_pom.selectors.select_item("Payme")
        cassa_transactions_pom.elements.users().click()
        general_pom.selectors.select_item("Parfume Admin")
        general_pom.table_buttons.add_form_submit_button().click()
    })
    it("Edit Касса Транзакции", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(7000)
        cassa_transactions_pom.elements.table_first_item_type_transactions_list_button().click()
        general_pom.selectors.select_item("Продажа")
        general_pom.table_buttons.edit_save_button().click({force: true})
    })
    it("Open Касса Транзакции", () => {
        general_pom.table_buttons.table_first_item().click()
        cassa_transactions_pom.elements.opened_item_header().contains("Номер транзакции:")
    })
    it("Delete Касса Транзакции", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
    it("Filter Касса Транзакции", () => {
        cassa_transactions_pom.elements.filter_by_id_field().click()
        cassa_transactions_pom.elements.filter_by_id_input().type("PG-0000002")
        general_pom.selectors.select_item("PG-0000002")
        cy.esc()
        cassa_transactions_pom.elements.first_item_cassa_id().should("have.text", "PG-0000002")
    })
})