const general_pom = require("../../POM/general_pom");


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

    it('ADD page', () => {
        general_pom.table_buttons.add_button().click()
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get('._formColumn_14nop_27 > :nth-child(2)').find('p').should('have.text',  'Это обязательное поле')
    })

    it('Table click', () => {
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        cy.get('._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').find('button[aria-label="Clear"]').click({force: true})
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get('._formColumn_14nop_27 > :nth-child(2)').find('p').should('have.text',  'Это обязательное поле')
    })

})