const general_pom = require("../../POM/general_pom");
const fillial_pom = require("../../POM/fillial_pom");
const consul_pom = require("../../POM/staff_pom");
const staff_pom = require("../../POM/staff_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Организация')
        general_pom.sidebar_icons.staff_icon().click()
    })

    it('ADD page', () =>{
        general_pom.table_buttons.add_button().click()
        staff_pom.elements.add_input().click( {force: true}).type('submit')
        staff_pom.elements.add_input_name().click( {force: true})
        staff_pom.elements.add_input_num().click( {force: true}).type('998997272')
        staff_pom.elements.add_input_login().click( {force: true}).type('submit')
        staff_pom.elements.add_input_password().click( {force: true}).type('12345')
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get('._formColumn_14nop_27 > :nth-child(2)').should('have.text',  ' * Фамилия:​Это обязательное поле')
    })

    it('Edit button', () =>{
            general_pom.table_buttons.edit_button().click()
            fillial_pom.elements.edit_page_input().click().clear()
            general_pom.table_buttons.edit_save_button().click()
            cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').should('have.text', '​Это обязательное поле')
        })
    
        it('Table click', () =>{
            cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
            fillial_pom.elements.add_page_input().click({force: true} ).clear()
            general_pom.table_buttons.add_form_submit_button().click()
            cy.get('._formColumn_14nop_27 > :nth-child(2)').find('p').first().should('have.text', 'Это обязательное поле')
            
        })
    

})