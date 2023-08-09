class Clients {
    elements = {
        // ! Create Client
        add_client_fio_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_client_phone_number_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_client_birth_date_input: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_client_gender_input: () => cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').first(),

        //! Edit Client
        edit_table_first_item_fio_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').find('input').first(),

        //! Open Client
        opened_item_header: () => cy.get('._formColumn_14nop_27 > :nth-child(1) > .label'),

        // ! Negative cases
        validation_error_text: () => cy.get(':nth-child(2) > .component > .MuiFormControl-root').find('p').first()
    }
}

module.exports = new Clients()