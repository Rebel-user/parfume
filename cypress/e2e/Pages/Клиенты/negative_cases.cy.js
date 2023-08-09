const general_pom = require("../../POM/general_pom");
const costum_pom = require("../../POM/costum_pom");
const fillial_pom = require("../../POM/fillial_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Клиенты')
        general_pom.sidebar_icons.costum_icon().click()
    })

    it('Add page', () =>{
        general_pom.table_buttons.add_button().click()
        costum_pom.elements.add_input().click({force: true})
        costum_pom.elements.add_input_num().click().type('998997272')
        costum_pom.elements.add_input_brth().click().type('0').type('6').type('0').type('2').type('2').type('0').type('2').type('3').type('{enter}')
        costum_pom.elements.add_input_sex().click()
        general_pom.selectors.select_first()
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get('._formColumn_14nop_27 > :nth-child(1)').find('p').first().should('have.text','Это обязательное поле')

    })

    it('Edit button', () =>{
            general_pom.table_buttons.edit_button().click()
            cy.get('.CTableBody > .CTableRow > :nth-child(3)').find('input').first().click().clear()
            general_pom.table_buttons.edit_save_button().click()
            cy.get('.CTableBody > .CTableRow > :nth-child(3)').should('have.text', '​Это обязательное поле​​​')
            
    })

          it('Table click', () =>{
                cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
                fillial_pom.elements.add_page_input().click({force: true}).clear()
                general_pom.table_buttons.add_form_submit_button().click()
                fillial_pom.elements.negative_add_page_input().should('have.text', 'Это обязательное поле')
            })


})