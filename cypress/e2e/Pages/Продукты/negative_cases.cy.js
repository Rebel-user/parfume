const general_pom = require("../../POM/general_pom");
const fillial_pom = require("../../POM/fillial_pom");
const kart_pom = require("../../POM/kart_pom");
const product_pom = require("../../POM/product_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Товары')
        general_pom.sidebar_icons.product_icon().click()
    })

    it('Add Page', () => {
        general_pom.table_buttons.add_button().click()
        product_pom.elements.add_input().click({force: true})
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get('._formColumn_14nop_27 > :nth-child(1)').find('p').first().should('have.text', 'Это обязательное поле')
        
    })

    it('Edit page', () =>{
        general_pom.table_buttons.edit_button().click()
        kart_pom.elements.edit_input().click().clear()
        general_pom.table_buttons.edit_save_button().click()

    })

    it('Table click', () =>{
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first().click({force: true}).clear()
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get('._formColumn_14nop_27 > :nth-child(1)').should('have.text',' * Наименование:​Это обязательное поле')
    })




})