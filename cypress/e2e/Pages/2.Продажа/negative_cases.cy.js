Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

import prodaja_pom from "../../POM/prodaja_pom";
import general_pom from "../../POM/general_pom";

describe("Negative cases Продажа", () => {
    beforeEach("Login", () => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item("Касса")
    })
    it("Create new Продажа", () => {
        prodaja_pom.elements.sellment_page_icon().click()
        cy.wait(2000)
        prodaja_pom.elements.add_button().click()
        cy.wait(2000)
        cy.get('._mainCardSide_14nop_9').scrollTo('top', {ensureScrollable: false})
        general_pom.table_buttons.add_form_submit_button().click()
        cy.wait(2000)
        prodaja_pom.elements.product_code_field().type("3760184353", {force: true})
        // general_pom.errorCheckers.checkErrorNotiflicationMessage('Товар не найден')
    })
    it("Filter Продажа Selecting multiple options", () => {
        prodaja_pom.elements.sellment_page_icon().click()
        cy.wait(2000) 
        cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click()
        cy.wait(2000)
        cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        cy.esc()
        cy.get(':nth-child(3) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1').click({force: true})
        general_pom.selectors.select_item('K-0000002')
        general_pom.selectors.select_item('K-0000001')
    })
})