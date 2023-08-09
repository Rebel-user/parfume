const general_pom = require("../../POM/general_pom");
const moving_shipping_pom = require("../../POM/moving_shipping_pom");


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Negative cases Перемещение Принятие", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        cy.get('[aria-label="Перемещение-Принятие"] > ._menuItem_farjc_34').click()
    })
    it.only("Принять Перемещение Принятие", () => {

        cy.get('[aria-label="Перемещение-Принятие"] > ._menuItem_farjc_34').click()
        general_pom.table_buttons.table_first_item().click()
        cy.pastle(moving_shipping_pom.elements.add_new_form_product_code_input(), "C-00000017")
        cy.wait(2000)
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Товар не найден')
    })
})