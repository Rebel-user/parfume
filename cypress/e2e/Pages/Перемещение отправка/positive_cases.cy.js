const general_pom = require("../../POM/general_pom");
const moving_sending_pom = require("../../POM/moving_sending_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Перемещение Отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.moving_sending_icon().click()
    })
    it("Create Перемещение Отправка", () => {
        cy.wait(2000)
        general_pom.table_buttons.add_button().click()
        cy.wait(2000)
        cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').first().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        cy.get('._formColumn_14nop_27 > :nth-child(5)').click()
        general_pom.selectors.select_item('Kontinent')
        moving_sending_pom.elements.add_product_submit_button().click()
        cy.wait(5000)
        cy.pastle(moving_sending_pom.elements.add_product_code_input(), "2731122296260")
        cy.wait(1000)
        cy.get('._extra_1c0tj_12 > :nth-child(1)').click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Перемещение-Отправка успешно сделана!')
    })
    it("Edit Перемещение Отправка", () => {
        general_pom.table_buttons.edit_button().click()
        // moving_sending_pom.elements.edit_product_to_filial_clear_button().click({force: true})
        moving_sending_pom.elements.edit_product_to_filial_list_input().click()
        general_pom.selectors.select_item('NEXT')
        general_pom.table_buttons.edit_save_button().click()
    })
    it("Open Перемещение Отправка", () => {
        general_pom.table_buttons.table_first_item().click()
        general_pom.errorCheckers.checkOpenedItemLabel('Штрихкод:')
    })
    it("Delete Перемещение Отправка", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
    })
})