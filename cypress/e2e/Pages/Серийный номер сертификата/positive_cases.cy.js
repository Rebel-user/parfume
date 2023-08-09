const general_pom = require("../../POM/general_pom");
const sertificat_pom = require("../../POM/cer_num_pom");
const cer_num_pom = require("../../POM/cer_num_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Товары')
        general_pom.sidebar_icons.cer_num_icon().click()
    })  

    it('Table column check', () => {
        cer_num_pom.elements.table_column().should('have.text', 'Филиал ')
        cer_num_pom.elements.table_column0().should('have.text', 'Категория ')
        cer_num_pom.elements.table_column1().should('have.text', 'Серийный номер сертификата ')
        cer_num_pom.elements.table_column2().should('have.text', 'Сумма сертификата ')
        cer_num_pom.elements.table_column3().should('have.text', 'Дата создания ')
        cer_num_pom.elements.table_column4().should('have.text', 'Статус ')
        cer_num_pom.elements.table_column5().should('have.text', 'Дата продажи ')
        cer_num_pom.elements.table_column6().should('have.text', 'Дата списания ')

    })

    it('Add page', () => {
        general_pom.table_buttons.add_button().click()
        cer_num_pom.elements.add_input().click().type('Kontinent')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
    })

    it('Edit page', () =>{
        general_pom.table_buttons.edit_button().click()
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').find('input').first().click()
        general_pom.selectors.select_first()
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
        general_pom.selectors.select_item('Parfume Galler')
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').should('have.text', 'Parfume Gallery ')
    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })


})