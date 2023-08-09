const general_pom = require("../../POM/general_pom");
const vozvrat_pom = require("../../POM/vozvrat_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Negative cases Возврат Перемещение отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Склад')
        cy.get('[aria-label="Возврат Перемещение-Отправка"] > ._menuItem_farjc_34').click()
    })

    it("Add Возврат Перемещение отправка", () => {
        general_pom.table_buttons.add_button().click()
        vozvrat_pom.elements.add_input0().click()
        general_pom.selectors.select_item('Parfume Admin')
        vozvrat_pom.elements.add_input1().click()
        vozvrat_pom.elements.add_input2().click()
        general_pom.selectors.select_item('NEXT')
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get(':nth-child(4) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root').find('p').first().should('have.text', 'Это обязательное поле')

    })

})