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

    it('Table column check', () =>{
        costum_pom.elements.table_column().should('have.text', 'Фото ')
        costum_pom.elements.table_column0().should('have.text', 'Ф.И.О ')
        costum_pom.elements.table_column1().should('have.text', 'Номер телефона ')
        costum_pom.elements.table_column2().should('have.text', 'Дата рождение ')
        costum_pom.elements.table_column3().should('have.text', 'Пол ')
    })

    it('Add page', () =>{
        general_pom.table_buttons.add_button().click()
        costum_pom.elements.add_input().type('submit')
        costum_pom.elements.add_input_num().type('998997272')
        costum_pom.elements.add_input_brth().click().type('0').type('6').type('0').type('2').type('2').type('0').type('2').type('3').type('{enter}')
        costum_pom.elements.add_input_sex().click({force: true})
        general_pom.selectors.select_first()
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')

    })

    it('Edit button', () =>{
            general_pom.table_buttons.edit_button().click()
            cy.get('.CTableBody > .CTableRow > :nth-child(3)').find('input').first().click().type('1')
            general_pom.table_buttons.edit_save_button().click()
            
        })
    
        it('Table click', () =>{
            cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').click()
            fillial_pom.elements.add_page_input().type('1')
            general_pom.table_buttons.add_form_submit_button().click()
            general_pom.errorCheckers.alert_message('Успешно обновлен')
        })

        // it('Filter button', () =>{
        //     cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click({force: true})
        //     cy.get('.MuiList-root').click({force: true}).find('input').first().type('submit11')
        //     general_pom.selectors.select_item('submit11')
        //     cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').should('have.text','submit11')
        // })
    
        it('Delete button', () =>{
            general_pom.table_buttons.table_first_item_delete_button().click()
            general_pom.errorCheckers.alert_message('Успешно обновлен')
        })


})
