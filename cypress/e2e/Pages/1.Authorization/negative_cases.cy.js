Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
import general_pom from "../../POM/general_pom";
import auth_pom from "../../POM/auth_pom";

describe("Login Negative cases", () => {
    it("Login with empty spaces", () => {
        auth_pom.login("        ", "        ")
        cy.wait(2000)
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Пользователь не найден')
    })
    it("Login with invalid login", () => {
        auth_pom.login("admin_qa_test", "admin_qa")
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Пользователь не найден')
    })
    it("Login with invalid password", () => {
        auth_pom.login("admin_qa", "admin_qa_test")
        general_pom.errorCheckers.checkErrorNotiflicationMessage('Пользователь не найден')
    })
    it("Login without entering data", () => {
        auth_pom.visit_url()
        auth_pom.elements.login_button().click()
        auth_pom.checkLoginValidationError()
    })
})