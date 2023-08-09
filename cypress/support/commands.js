import prodaja_pom from "../e2e/POM/prodaja_pom"
import general_pom from "../e2e/POM/general_pom"
import smena_pom from "../e2e/POM/smena_pom"
Cypress.Commands.add('login', (login, password) => {
    // cy.session("Logged User", () => {
        cy.visit("https://test.admin.parfumgallery.uz/login")
        cy.get('._formArea_35dot_54').find('input').first().type(login)
        cy.get('._formArea_35dot_54').find('input').eq(1).type(password)
        cy.get('._button_gpzhx_1').click()
    // })
})
Cypress.Commands.add('esc', () => {
    cy.get('body').trigger('keydown', { keyCode: 27});
    cy.wait(500);
    cy.get('body').trigger('keyup', { keyCode: 27});
})
Cypress.Commands.add('enter', () => {
    cy.get('body').trigger('keydown', { keyCode: 13});
    cy.wait(500);
    cy.get('body').trigger('keyup', { keyCode: 13});
})
Cypress.Commands.add('cassa', () => {
    cy.wait(2000)
    prodaja_pom.elements.module_button().click()
    cy.wait(1000)
    prodaja_pom.elements.cassa_item().click()
    cy.wait(2000)
})
Cypress.Commands.add('open_smena', () => {
    general_pom.table_buttons.add_button().click()
    cy.wait(3000)
    general_pom.table_buttons.add_form_submit_button().click()
    cy.wait(1000)
    smena_pom.elements.open_smena_button().click()
})
Cypress.Commands.add('close_smena', () => {
    cy.wait(5000)
    general_pom.table_buttons.table_first_item().click()
    cy.wait(5000)
    smena_pom.elements.close_smena_button().click()
})

Cypress.Commands.add('pastle', (elem, text) => {
    elem.type(text,{ delay: 0 , force: true})
})
Cypress.Commands.add('esc', () => {
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(500);
    cy.get('body').trigger('keyup', { keyCode: 27 });
})
Cypress.Commands.add('enter', () => {
    cy.get('body').trigger('keydown', { keyCode: 13 });
    cy.wait(500);
    cy.get('body').trigger('keyup', { keyCode: 13 });
})