const general_pom = require("../../POM/general_pom");;
const zayavki_pom = require("../../POM/zayavki_pom");
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
        general_pom.sidebar_icons.zay_inventory_icon().click()
    })  

    it('Table check', () => {
        zayavki_pom.elements.table_colum0().should('have.text', 'Сотрудник ')
        zayavki_pom.elements.table_column().should('have.text', 'Филиал ')
        zayavki_pom.elements.table_colum1().should('have.text', 'Статус ')
        zayavki_pom.elements.table_colum2().should('have.text', 'Описание ')

    })

    it('ADD page', () => {
        general_pom.table_buttons.add_button().click()
        brak_pom.elements.add_input().click()
        general_pom.selectors.select_first()
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
    })

    it('Edit page', () => {
        general_pom.table_buttons.edit_button().click()
        brak_pom.elements.edit_input().click({force: true})
        general_pom.table_buttons.edit_save_button().click()
        // general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

    it('Table click', () => {
        brak_pom.elements.table_click().click()
        brak_pom.elements.add_input().click()
        general_pom.selectors.select_item('NEXT')
        general_pom.table_buttons.add_form_submit_button().click()
    })

    it('Filter click', () => {
        zayavki_pom.elements.filter_input().click()
        general_pom.selectors.select_item('NEXT')
        zayavki_pom.elements.fiter_check().should('have.text', 'NEXT ')
    })

    it('Delete button', () =>{
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.alert_message('Успешно обновлен')
    })

})


