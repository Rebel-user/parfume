const general_pom = require("../../POM/general_pom");
const cer_num_pom = require("../../POM/cer_num_pom");
const cer_gen_pom = require("../../POM/cer_gen_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат перемещения-отправка", () => {
    beforeEach(() => {
        cy.viewport(1700, 700)
        cy.login("medion_admin", "admin_medion123")
        general_pom.sidebar_icons.module_button().click()
        general_pom.selectors.select_item('Товары')
        general_pom.sidebar_icons.cer_gen_icon().click()
    })  

    it('ADD page', () => {
        general_pom.table_buttons.add_button().click()
        cer_gen_pom.elements.add_input().click()
        cer_gen_pom.elements.add_input_fill().click( {force: true})
        general_pom.selectors.select_first()
        cer_gen_pom.elements.add_input_click().click( {force: true})
        general_pom.table_buttons.add_form_submit_button().click( {force: true})
        cy.get(':nth-child(1) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root').should('have.text', '​Это обязательное поле')
    })

    it('Edit page', () =>{
        general_pom.table_buttons.edit_button().click()
        cy.get(':nth-child(1) > :nth-child(4) > .MuiFormControl-root').find('input').first().click({force: true}).clear()
        general_pom.table_buttons.edit_save_button().click()
        cy.get(':nth-child(1) > :nth-child(4) > .MuiFormControl-root').should('have.text', '​Это обязательное поле')
    })

    it('Table check', () =>{
        cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').click()
        cy.get('._formColumn_14nop_27 > :nth-child(1)').find('[aria-label="Clear"]').click({force: true})
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get(':nth-child(1) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root').should('have.text', '​Это обязательное поле')
    })

 

})