Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import general_pom from "../../POM/general_pom"
import consumption_pom from "../../POM/consumption_pom";

describe("Negative cases Расход", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
        general_pom.sidebar_icons.consumption_sidebar_icon().click()
    })
    it("Add new Расход", () => {
        general_pom.table_buttons.add_button().click()
        consumption_pom.elements.payment_summ_field().type('-100000')
        general_pom.table_buttons.add_form_submit_button().click()
        //! Bug #1 Item should not be saved
    })
    it("Edit Расход", () => {
        general_pom.table_buttons.edit_button().click()
        consumption_pom.elements.table_consumption_type_field_button().click()
        cy.esc()
        general_pom.table_buttons.edit_save_button().click()
        //! Bug #2 Item should not be saved
    })
//     it("Filter Расход", () => {
//         consumption_pom.elements.filter_by_filial_input().click()
//         general_pom.selectors.select_item("Korzinka")
//         cy.esc()
//         consumption_pom.elements.table_first_item_cassir().click()
//         general_pom.selectors.select_item("next next")
//     })
})