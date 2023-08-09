Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import refund_product_type_pom from "../../POM/refund_product_type_pom";

describe("Negative cases Возврат Продукт Тип", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.refund_product_type_icon().click()
    })
    it("Create new Возврат продукт тип", () => {
        general_pom.table_buttons.add_button().click()
        refund_product_type_pom.elements.add_refund_product_type_name_input().type("       ")
        general_pom.table_buttons.add_form_submit_button().click()
    })
    it("Edit Возврат продукт тип", () => {
        general_pom.table_buttons.edit_button().click()
        refund_product_type_pom.elements.edit_refund_product_type_table_first_item_name().clear()
        general_pom.table_buttons.edit_save_button().click()
    })
})