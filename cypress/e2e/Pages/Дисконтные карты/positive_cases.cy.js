const general_pom = require("../../POM/general_pom");
const fillial_pom = require("../../POM/fillial_pom");
const kart_pom = require("../../POM/kart_pom");


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Клиенты')
        general_pom.sidebar_icons.kart_icon().click()
    })

    it('Table column check', () =>{
        kart_pom.elements.table_column().should('have.text', 'ID Карта ')
        kart_pom.elements.table_column0().should('have.text','Штрихкод ')
        kart_pom.elements.table_column1().should('have.text','Скидка ')
    })

    it('Add page', () =>{
        general_pom.table_buttons.add_button().click()
        kart_pom.elements.add_input().click().type('12345678')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')

    })

    it('Edit page', () =>{
        general_pom.table_buttons.edit_button().click()
        kart_pom.elements.edit_input().click().type('1')
        general_pom.table_buttons.edit_save_button().click()

    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    
})
