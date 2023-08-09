const general_pom = require("../../POM/general_pom");
const movement_of_goods_pom = require("../../POM/brak_pom");
const brak_pom = require("../../POM/brak_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Движение товаров", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Заявки')
        general_pom.sidebar_icons.zy_kassa().click()
    })

    it('Table column check', () => {
        brak_pom.elements2.table_colum().should('have.text', 'Филиал ')
        brak_pom.elements2.table_column0().should('have.text', 'Кассир ')
        brak_pom.elements2.table_column1().should('have.text', 'Касса ')
        brak_pom.elements2.table_column2().should('have.text', 'Смена-ID ')
        brak_pom.elements2.table_column3().should('have.text', 'Недостаток ')
        brak_pom.elements2.table_column4().should('have.text', 'Описание ')
        brak_pom.elements2.table_column5().should('have.text', 'Кто изменил ')
        brak_pom.elements2.table_column6().should('have.text', 'Статус ')
    })

    it('ADD page', () => {
        general_pom.table_buttons.add_button().click()
        brak_pom.elements.add_input().click()
        general_pom.selectors.select_first()
        cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').click()
        general_pom.selectors.select_first()
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
    })

    it('Edit page', () => {
        general_pom.table_buttons.edit_button().click()
        brak_pom.elements.edit_input().click()
        general_pom.selectors.select_first()
        general_pom.table_buttons.edit_save_button().click()
    })

    it('Table click', () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').click()
        brak_pom.elements.add_input().click()
        general_pom.selectors.select_first()
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

})