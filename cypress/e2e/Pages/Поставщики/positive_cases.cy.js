const couriers_pom = require("../../POM/couriers_pom");
const general_pom = require("../../POM/general_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Поставщик", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.couriers_icon().click()
    })
    it("Create new Поставщик", () => {
        general_pom.table_buttons.add_button().click()
        couriers_pom.elements.courier_add_label_input().type('Test')
        couriers_pom.elements.courier_add_phone_number_input().type('998000000000')
        couriers_pom.elements.courier_add_oked_input().type('ABC123')
        couriers_pom.elements.courier_add_bank_input().type('TBC')
        couriers_pom.elements.courier_add_inn_input().type('AB12345')
        couriers_pom.elements.courier_add_mfo_input().type('AB12345')
        couriers_pom.elements.courier_add_bank_cass_input().type('AB-1234-5678-9101')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно создан')
    })
    it("Edit Поставщик", () => {
        general_pom.table_buttons.edit_button().click()
        couriers_pom.elements.courier_edit_table_first_item_label_input().clear().type('Test #edited')
        general_pom.table_buttons.edit_save_button().click()
    })
    it("Open Поставщик", () => {
        general_pom.table_buttons.table_first_item().click()
        general_pom.errorCheckers.opened_item_label('Активный:')
    })
    it("Delete Поставщик", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
    })
    it("Filter", () => {
        cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click()
        general_pom.selectors.select_item("Oliver Jake")
        cy.esc()
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').should('have.text','Oliver Jake')
        cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1 > .MuiButtonBase-root').click()
        cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click()
        general_pom.selectors.select_item("90 007 77 77")
        cy.esc()
        cy.get('.CTableBody > .CTableRow > :nth-child(5)').should('have.text','90 007 77 77')
    })
})