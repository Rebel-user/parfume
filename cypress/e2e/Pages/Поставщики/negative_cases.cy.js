const couriers_pom = require("../../POM/couriers_pom");
const general_pom = require("../../POM/general_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Negative cases Поставщик", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.couriers_icon().click()
    })
    it("Create new Поставщик", () => {
        general_pom.table_buttons.add_button().click()
        couriers_pom.elements.courier_add_label_input().type('     ')
        couriers_pom.elements.courier_add_phone_number_input().type('     ')
        couriers_pom.elements.courier_add_oked_input().type('     ')
        couriers_pom.elements.courier_add_bank_input().type('     ')
        couriers_pom.elements.courier_add_inn_input().type('     ')
        couriers_pom.elements.courier_add_mfo_input().type('     ')
        couriers_pom.elements.courier_add_bank_cass_input().type('     ')
        general_pom.table_buttons.add_form_submit_button().click()
    })
    it("Edit Поставщик", () => {
        general_pom.table_buttons.edit_button().click()
        couriers_pom.elements.courier_edit_table_first_item_label_input().clear().type('     ')
        general_pom.table_buttons.edit_save_button().click()
    })
    
})