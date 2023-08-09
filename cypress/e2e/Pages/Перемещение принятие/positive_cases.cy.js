const general_pom = require("../../POM/general_pom");
const moving_shipping_pom = require("../../POM/moving_shipping_pom");


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Перемещение Принятие", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        cy.wait(2000)
        cy.get('[aria-label="Перемещение-Принятие"] > ._menuItem_farjc_34').click()
    })
    it("Принять Перемещение Принятие", () => {

        cy.get('[aria-label="Перемещение-Принятие"] > ._menuItem_farjc_34').click()
        cy.get('[aria-label="Перемещение-Принятие"] > ._menuItem_farjc_34').click()
        general_pom.table_buttons.table_first_item().click()
        cy.pastle(moving_shipping_pom.elements.add_new_form_product_code_input(), "2731122296260")
        cy.wait(2000)
        cy.get('._extra_1c0tj_12 > :nth-child(2)').click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage( 'Товары успешно приняты!')
    })
    it("Open Перемещение Принятие", () => {
        general_pom.table_buttons.table_first_item().click()
        general_pom.errorCheckers.checkOpenedItemLabel('Штрихкод:')
    })
    it("Delete Перемещение Принятие", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
    })
})