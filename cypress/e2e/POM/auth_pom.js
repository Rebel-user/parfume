class Authorization {
    elements = {
        login_input: () => cy.get('._formArea_35dot_54').find('input').first(),
        password_input: () => cy.get('._formArea_35dot_54').find('input').eq(1),
        login_button: () => cy.get('._button_gpzhx_1'),
        login_validation_paragraph: () => cy.get(':nth-child(1) > .MuiFormControl-root').find('p').first(),
        password_validation_paragraph: () => cy.get(':nth-child(2) > .MuiFormControl-root').find('p').first()
    }
    visit_url(){
        cy.visit("https://test.admin.parfumgallery.uz/login")
    }
    login(login, password){
        this.visit_url()
        this.elements.login_input().type(login)
        this.elements.password_input().type(password)
        this.elements.login_button().click()
    }
    checkLoginValidationError(){
        this.elements.login_validation_paragraph().should('have.text', 'Это обязательное поле')
        this.elements.password_validation_paragraph().should('have.text', 'Это обязательное поле')
    }
}

module.exports = new Authorization()