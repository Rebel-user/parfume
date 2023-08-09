const write_off_pom = require("../../POM/write_off_pom");
const general_pom = require("../../POM/general_pom");


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Списание", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.write_off_icon().click()
    })
    it('Create new Списание', () => {
        general_pom.table_buttons.add_button().click()
        write_off_pom.elements.add_write_off_filial_input().find('input').first().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        write_off_pom.elements.add_write_off_type_input().type('Parfume Admin')
        general_pom.selectors.select_item('Parfume Admin')
        write_off_pom.elements.add_write_off_users_input().click()
        general_pom.selectors.select_item('Списание')
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(2000)
        cy.pastle(write_off_pom.elements.add_write_off_product_code_input(), '3607341186393')
        cy.wait(2000)
        write_off_pom.elements.write_off_product_button().click()
        
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
    })
    it('Edit Списание', () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(2000)
        write_off_pom.elements.edit_write_off_table_first_item_type_clear_button().click({force: true})
        write_off_pom.elements.edit_write_off_table_first_item_type().click()
        general_pom.selectors.select_item('От возврата товара')
        general_pom.table_buttons.edit_save_button().click()
    })
    it('Open Списание', () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        general_pom.errorCheckers.checkOpenedItemLabel('Штрих-код:')
    })
    it('Filter By Склад', () => {
        write_off_pom.elements.filter_by_sklad().click()
        cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        cy.esc()
        write_off_pom.elements.founded_items_first_sklad().should('have.text', 'Parfume Gallery ')
    })
    it('Delete Списание', () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
    })
})