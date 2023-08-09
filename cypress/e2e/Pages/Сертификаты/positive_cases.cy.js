const general_pom = require("../../POM/general_pom");
const fillial_pom = require("../../POM/fillial_pom");
const kart_pom = require("../../POM/kart_pom");
const product_pom = require("../../POM/product_pom");
const sertificat_pom = require("../../POM/sertificat_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Товары')
        general_pom.sidebar_icons.cert_icon().click()
    })

    it('Table column check', () =>{
        sertificat_pom.elements.table_column().should('have.text', 'Название ')
        sertificat_pom.elements.table_colomn0().should('have.text', 'Сумма сертификата ')
        sertificat_pom.elements.table_colomn1().should('have.text', 'Количество ')
    })

    it('Add page', () =>{
        general_pom.table_buttons.add_button().click()
        sertificat_pom.elements.add_input().click().type('submit')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')

    })

    it('Edit page', () =>{
        general_pom.table_buttons.edit_button().click()
        sertificat_pom.elements.edit_input().click().type('1000 000')
        general_pom.table_buttons.edit_save_button().click()
    })

    it('Table check', () =>{
        sertificat_pom.elements.check_input().click()
        sertificat_pom.elements.add_input().click().type('1')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлено')
    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    

    


})