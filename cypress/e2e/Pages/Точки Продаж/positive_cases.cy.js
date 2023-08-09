const general_pom = require("../../POM/general_pom");
const refund_moving_pom = require('../../POM/fillial_pom');
const fillial_pom = require("../../POM/fillial_pom");
const sell_pom = require("../../POM/sell_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Организация')
        general_pom.sidebar_icons.sell_icon().click()
    })

    it('Table column check', () => {
        sell_pom.elements.table_column().should('have.text', 'Филиал ')
        sell_pom.elements.table_column1().should('have.text','Название ')
        sell_pom.elements.table_column2().should('have.text','Описание ')
    })

    it('Add page', () => {
        general_pom.table_buttons.add_button().click()
        sell_pom.elements.add_input().type('NEXT')
        general_pom.selectors.select_item('NEXT')
        sell_pom.elements.add_input_name().click().type('Test')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
    })

    it('Edit page', () => {
        general_pom.table_buttons.edit_button().click()
        sell_pom.elements.edit_input().click()

    })

    it('Table click', () =>{
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        fillial_pom.elements.add_page_input().click().type('1')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    it('filter', () =>{
        cy.get('._autocompleteButton_sp167_1').click()
        general_pom.selectors.select_item('Kontinent')
        cy.get('.CTableBody > .CTableRow > :nth-child(2)').should('have.text', 'Kontinent ')

    })

})