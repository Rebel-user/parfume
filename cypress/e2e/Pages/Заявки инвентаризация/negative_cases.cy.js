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

    it('ADD page', () => {
        general_pom.table_buttons.add_button().click()
        general_pom.table_buttons.add_form_submit_button().click()
        cy.get('._formColumn_14nop_27 > :nth-child(1)').find('p').should('have.text',  'Это обязательное поле')
    })

    it('Edit page', () => {
        general_pom.table_buttons.edit_button().click()
        cy.get(':nth-child(1) > :nth-child(4) > .css-13sljp9 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]').click({force: true})
        general_pom.table_buttons.edit_save_button().click()
        
    })

    it('Table click', () => {
        brak_pom.elements.table_click().click({ multiple: true })
        general_pom.table_buttons.add_form_submit_button().click()
        
    })


})