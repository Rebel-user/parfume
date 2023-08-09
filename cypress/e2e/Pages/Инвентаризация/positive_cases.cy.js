const general_pom = require("../../POM/general_pom");
const inventarization_pom = require("../../POM/inventarization_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Инвентаризация", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.inventarization_icon().click()
    })
    it("Создать Инвентаризация и Закончить", () => {
        //! Create New Inventarization
        general_pom.table_buttons.add_button().click()
        inventarization_pom.elements.add_inventarization_filial_input().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        cy.esc()
        inventarization_pom.elements.add_inventarization_user_input().click()
        general_pom.selectors.select_item('Parfume Admin')
        cy.esc()
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(2000)

        //! Inventarization of first product of filial
        cy.wait(2000)
        let productCode = "3701278602220"
        cy.pastle(inventarization_pom.elements.add_inventarization_product_code_input(), productCode)
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
        cy.wait(3000)
        inventarization_pom.elements.table_first_item_count().type("3701278602220")
        
        //! Inventarization of second product of filial
        
        cy.wait(3000)
        cy.pastle( inventarization_pom.elements.add_inventarization_product_code_input(), "3701278602220")

        //! Finish Inventarization
        inventarization_pom.elements.add_inventarization_finish_button().click()
    })
    it("Создать Инвентаризация и Создать Заявку", () => {
        //! Create New Inventarization
        general_pom.table_buttons.add_button().click()
        inventarization_pom.elements.add_inventarization_filial_input().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        cy.esc()
        inventarization_pom.elements.add_inventarization_user_input().click()
        general_pom.selectors.select_item('Parfume Admin')
        cy.esc()
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(2000)
        
        //! Inventarization of first product of filial 1 times
        cy.wait(2000)
        let productCode = "3701278602220"
        cy.pastle(inventarization_pom.elements.add_inventarization_product_code_input(), productCode)
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
        
        //! Create Docs and Finish
        inventarization_pom.elements.add_inventarization_create_docs_button().click()
        cy.wait(2000)
        inventarization_pom.elements.add_inventarization_finish_button().click()
        
    })
    it("Open Инвентаризация", () => {
        general_pom.table_buttons.table_first_item().click()
        inventarization_pom.elements.openedItemLabel().should('have.text', ' * Филиал:')
    })
    it("Delete Инвентаризация", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
    })
})