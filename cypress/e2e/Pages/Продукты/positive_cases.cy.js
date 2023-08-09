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

    it('Table column check', () => {
        product_pom.elements.table_column().should('have.text', 'Категории ')
        product_pom.elements.table_column0().should('have.text', 'Наименование ')
        product_pom.elements.table_column1().should('have.text', 'Артикул ')
        product_pom.elements.table_column2().should('have.text', 'Штрихкод ')
        product_pom.elements.table_column3().should('have.text', 'Цена ')

    })

    it('Add Page', () => {
        general_pom.table_buttons.add_button().click()
        product_pom.elements.add_input().click({force: true}).type('submit')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
    })

    it('Edit page', () =>{
        general_pom.table_buttons.edit_button().click()
        kart_pom.elements.edit_input().click().type('1')
        general_pom.table_buttons.edit_save_button().click()

    })

    it('Table click', () =>{
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        fillial_pom.elements.add_page_input().click().type('1')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    it('Filter button', () =>{
        product_pom.elements.filter_input().click()
        // general_pom.selectors.select_item('3701278602220')
        // cy.get('.CTableBody > :nth-child(1) > :nth-child(6)').should('have.text','3701278602220')
    })

    it('Filter button', () =>{
        cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click()
        // general_pom.selectors.select_item('ANBT13')
        // cy.get('.CTableBody > :nth-child(1) > :nth-child(5)').should('have.text','ANBT13')
    })

    it('Filter button', () =>{
        product_pom.elements.filter_input3().click()
        product_pom.elements.filter_input3a().type('Altesse Mysore')
        general_pom.selectors.select_item('Altesse Mysore')
        cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').should('have.text','Altesse Mysore ')

    })






})