const coming_pom = require("../../POM/coming_pom");
const general_pom = require("../../POM/general_pom");


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Negative cases Приход", () => {
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
        
        coming_pom.elements.coming_add_number_of_delivering_input().type("          ")
        coming_pom.elements.coming_add_number_of_installment_input().type("          ")
        coming_pom.elements.coming_add_number_of_cass_facture_input().type("          ")
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.table_buttons.back_button().click()
        
        //! BUG
    })
    it("Edit Приход", () => {
        general_pom.table_buttons.edit_button().click()
        cy.wait(2000)
        coming_pom.elements.edit_coming_all_summ_input().type('          ')
        general_pom.table_buttons.edit_save_button().click()
        //! BUG
    })
})