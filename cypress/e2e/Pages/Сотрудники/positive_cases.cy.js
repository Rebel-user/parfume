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

    it('Table column check', () =>{
        staff_pom.elements.table_column().should('have.text', 'Номер телефона ')
        staff_pom.elements.table_column0().should('have.text','Логин ')
        staff_pom.elements.table_column1().should('have.text','Имя ')
        staff_pom.elements.table_column3().should('have.text','Фамилия ')
        staff_pom.elements.table_column4().should('have.text','Роль ')
        staff_pom.elements.table_column5().should('have.text','Филиал ')
        staff_pom.elements.table_column6().should('have.text','Точка Продажа ')
    })

    it('ADD page', () =>{
        general_pom.table_buttons.add_button().click()
        staff_pom.elements.add_input().click( {force: true}).type('submit')
        staff_pom.elements.add_input_name().click( {force: true}).type('submit')
        staff_pom.elements.add_input_num().click( {force: true}).type('998997272')
        staff_pom.elements.add_input_login().click( {force: true}).type('submit')
        staff_pom.elements.add_input_password().click( {force: true}).type('12345')
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

        it('Filter', () =>{
            staff_pom.elements.filter_input().click();
            
            general_pom.selectors.select_first();
        })

    
        it('Delete button', () =>{
            general_pom.table_buttons.table_first_item_delete_button().click()
            general_pom.errorCheckers.alert_message('Успешно обновлен')
        })



})