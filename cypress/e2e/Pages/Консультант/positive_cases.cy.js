const general_pom = require("../../POM/general_pom");
const fillial_pom = require("../../POM/fillial_pom");
const consul_pom = require("../../POM/consul_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Организация')
        general_pom.sidebar_icons.consultant_icon().click()
    })

    it('Table column check', () => {
        consul_pom.elemants.talbe_column().should('have.text','Имя ')
        consul_pom.elemants.talbe_column0().should('have.text','Фамилия ')
        consul_pom.elemants.talbe_column1().should('have.text','Номер телефона ')
        consul_pom.elemants.talbe_column2().should('have.text','Фото ')
        consul_pom.elemants.talbe_column3().should('have.text','Филиал ')
    })

    it('Add page', () => {
        general_pom.table_buttons.add_button().click()
        consul_pom.elemants.add_input_name().click({force: true}).type('Test')
        consul_pom.elemants.add_input_name1().click({force: true}).type('Test1')
        consul_pom.elemants.add_input_name2().click({force: true}).type('Test2')
        consul_pom.elemants.add_input_fill().click({force: true})
        general_pom.selectors.select_first()
        consul_pom.elemants.add_input_brth().click({force: true}).type('0').type('6').type('0').type('2').type('2').type('0').type('2').type('3').type('{enter}')
        consul_pom.elemants.add_input_sex().click({force: true})
        general_pom.selectors.select_first()
        consul_pom.elemants.add_input_num().click({force: true}).type('998997272')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')

    })

    it('Edit button', () =>{
        general_pom.table_buttons.edit_button().click()
        fillial_pom.elements.edit_page_input().click().type('Yunus obod1')
        general_pom.table_buttons.edit_save_button().click()
        
    })

    it('Table click', () =>{
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        fillial_pom.elements.add_page_input().click({force: true} ).type('1')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })
    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    it('filter', () =>{
        cy.get('._autocompleteButton_sp167_1').click()
        general_pom.selectors.select_item('Korzinka')
        // cy.get('.CTableBody > :nth-child(1) > :nth-child(6)').should('have.text', 'Korzinka-Аэропорт ')

    })



})