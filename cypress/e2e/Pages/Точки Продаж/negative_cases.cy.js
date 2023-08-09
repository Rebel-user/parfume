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

    it('Add page', () => {
        general_pom.table_buttons.add_button().click()
        sell_pom.elements.add_input().click()
        general_pom.selectors.select_item('NEXT')
        sell_pom.elements.add_input_name().click()
        general_pom.table_buttons.add_form_submit_button().click()
        fillial_pom.elements.negative_add_page_input().should('have.text', 'Это обязательное поле')

        
    })

    it('Edit page', () => {
        general_pom.table_buttons.edit_button().click()
        sell_pom.elements.edit_input().click().clear()
        general_pom.table_buttons.edit_save_button().click()
        cy.get(':nth-child(1) > :nth-child(3) > .MuiFormControl-root').find('p').first().should('have.text', 'Это обязательное поле')

    })

    it('Table click', () =>{
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        fillial_pom.elements.add_page_input().click().clear()
        general_pom.table_buttons.add_form_submit_button().click()
        fillial_pom.elements.negative_add_page_input().should('have.text', 'Это обязательное поле')
    })


})