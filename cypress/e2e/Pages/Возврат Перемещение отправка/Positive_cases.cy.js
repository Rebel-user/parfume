const general_pom = require("../../POM/general_pom");
const vozvrat_pom = require("../../POM/vozvrat_pom");

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Positive cases Возврат Перемещение отправка", () => {
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
        vozvrat_pom.elements.add_input1().type('Parfume Gallery')
        general_pom.selectors.select_item('Parfume Gallery')
        vozvrat_pom.elements.add_input2().click()
        general_pom.selectors.select_item('Flash')
        general_pom.table_buttons.add_form_submit_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно создан')
        cy.wait(2000)
        cy.pastle(vozvrat_pom.elements.add_input3(), '2731122296260')
        cy.wait(2000)
        vozvrat_pom.elements.add_input_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')

    })

    it("Edit Возврат Перемещение отправка", () => {
        general_pom.table_buttons.edit_button().click()
        cy.get(':nth-child(1) > :nth-child(3) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        general_pom.selectors.select_item('Aziz Gulmurodov')
        general_pom.table_buttons.edit_save_button().click()
    })

    it("Delite Edit Возврат Перемещение отправка", () => {
        general_pom.table_buttons.table_first_item_delete_button().click()
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Успешно обновлено!')
    })

})