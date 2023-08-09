Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import refund_pom from "../../POM/refund_pom";

describe("Positive cases Возврат", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.refund_icon().click()
    })
    it("Create new Возврат", () => {
        general_pom.table_buttons.add_button().click()
        refund_pom.elements.create_form_filial_input().type('Parfume')
        general_pom.selectors.select_item("Parfume Gallery")
        refund_pom.elements.create_form_cassa_input().click()
        general_pom.selectors.select_item("Parfume Market")
        refund_pom.elements.create_form_cassir_input().click()
        general_pom.selectors.select_item("Parfume Admin")
        refund_pom.elements.create_form_client_input().click()
        general_pom.selectors.select_item("Davron Fayziyev")
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(2000)
        cy.wait(2000)
        refund_pom.elements.refund_table_first_product_code_field().type('3760184353527', {force: true})
        refund_pom.elements.refund_inner_save_button().click()
        cy.get('._extra_1c0tj_12 > :nth-child(1)').click( {force: true})
        general_pom.errorCheckers.alert_message("Успешно Обновлено")
    })
    it("Edit Возврат", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(2000)
        refund_pom.elements.refund_table_first_item_old_client_field().click()
        general_pom.table_buttons.edit_save_button().click()
    })
    it("Delete Возврат", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
})