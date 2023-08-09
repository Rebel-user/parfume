class Coming {
    elements = {
        //! Create
        coming_add_couriers_input: () =>cy.get('._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        coming_add_users_input: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        coming_add_filial_input: () => cy.get('._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        coming_add_number_of_delivering_input: () => cy.get('._formColumn_14nop_27 > :nth-child(6)').find('input').first(),
        coming_add_number_of_installment_input: () => cy.get('._formColumn_14nop_27 > :nth-child(7)').find('input').first(),
        coming_add_number_of_cass_facture_input: () => cy.get('._formColumn_14nop_27 > :nth-child(8)').find('input').first(),
        do_coming_button: () => cy.get('._extra_1c0tj_12 > :nth-child(2)'),

        //! Edit
        edit_coming_all_summ_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(4)').find('input').first(),
    }
}

module.exports = new Coming()