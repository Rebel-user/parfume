const general_pom = require("../../POM/general_pom");
const cer_num_pom = require("../../POM/cer_num_pom");
const cer_gen_pom = require("../../POM/cer_gen_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Товары')
        general_pom.sidebar_icons.cer_gen_icon().click()
    })  

    it('Table column check', () => {
        cer_gen_pom.elements.table_column().should('have.text','Филиал ')
        cer_gen_pom.elements.table_column0().should('have.text','Сертификаты ')
        cer_gen_pom.elements.table_column1().should('have.text','Серийный буквы ')
        cer_gen_pom.elements.table_column2().should('have.text','Начальный номер ')
        cer_gen_pom.elements.table_column3().should('have.text','Конечьный номер ')
        cer_gen_pom.elements.table_column4().should('have.text','Количество ')
    })

    it('ADD page', () => {
        general_pom.table_buttons.add_button().click()
        cer_gen_pom.elements.add_input().click()
        general_pom.selectors.select_first()
        cer_gen_pom.elements.add_input_fill().click()
        general_pom.selectors.select_first()
        cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').type('100')
        cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').type('AA')
        cy.get('._formColumn_14nop_27 > :nth-child(7)').find('input').type('103900')
        cer_gen_pom.elements.add_input_click().click().type('submit')
        general_pom.table_buttons.add_form_submit_button().click()
       
    })

    it('Edit page', () =>{
        general_pom.table_buttons.edit_button().click()
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').find('input').first().click()
        general_pom.selectors.select_item('Korzinka-Аэропорт')
        general_pom.table_buttons.edit_save_button().click()
    })

    it('Table check', () =>{
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first().click().type('1')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлено')
    })

    it('Filter check', () =>{
        cer_num_pom.elements.Filter_input().click()
        cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        // cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').should('have.text', 'Korzinka-Аэропорт ')
    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

})