const general_pom = require("../../POM/general_pom");
const moving_sending_pom = require("../../POM/moving_sending_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Negative cases Перемещение Отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.moving_sending_icon().click()
    })
    it("Create Перемещение Отправка", () => {
        general_pom.table_buttons.add_button().click()
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(2000)
        moving_sending_pom.elements.add_product_to_filial().click()
        cy.esc()
        cy.wait(2000)
        moving_sending_pom.elements.add_product_code_input().type("C-0000001", {force: true})
        cy.wait(1000)
        moving_sending_pom.elements.add_product_submit_button().click()
    })
    it("Edit Перемещение Отправка", () => {
        general_pom.table_buttons.edit_button().click()
        // moving_sending_pom.elements.edit_product_to_filial_clear_button().click({force: true})
        general_pom.table_buttons.edit_save_button().click()
    })
})