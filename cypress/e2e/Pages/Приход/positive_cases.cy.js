const coming_pom = require("../../POM/coming_pom");
const general_pom = require("../../POM/general_pom");


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Приход", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        general_pom.sidebar_icons.coming_icon().click()
    })
    it("Create new Приход", () => {
        general_pom.table_buttons.add_button().click()
        cy.wait(3000)
        coming_pom.elements.coming_add_couriers_input().click()
        general_pom.selectors.select_item('Oliver Jake')
        coming_pom.elements.coming_add_number_of_delivering_input().type("100")
        coming_pom.elements.coming_add_number_of_installment_input().type("100")
        coming_pom.elements.coming_add_number_of_cass_facture_input().type("100")
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.alert_message('Успешно создан')
        general_pom.table_buttons.back_button().click()
        general_pom.table_buttons.table_first_item().click()
        cy.wait(5000)
        cy.pastle(cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(), '3348901362665')
        cy.wait(2000)
        cy.get('._extra_1c0tj_12 > :nth-child(1)').click()
        cy.wait(2000)
        // general_pom.errorCheckers.checkErrorNotiflicationMessage('Касса успешно закрыта')
    })
    it("Edit Приход", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(2000)
        coming_pom.elements.edit_coming_all_summ_input().type('100')
        general_pom.table_buttons.edit_save_button().click()
    })
    it(" Приход", () => {
        general_pom.table_buttons.table_first_item().click()
        general_pom.errorCheckers.opened_item_label('ID номер прихода:')
    })
    it("Delete Приход", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
    })
})