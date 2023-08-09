class Couriers {
    elements = {
        //! Create
        courier_add_status_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        courier_add_label_input: () =>cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        courier_add_phone_number_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        courier_add_oked_input: () => cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        courier_add_bank_input: () => cy.get('._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        courier_add_inn_input: () => cy.get('._formColumn_14nop_27 > :nth-child(6)').find('input').first(),
        courier_add_mfo_input: () => cy.get('._formColumn_14nop_27 > :nth-child(7)').find('input').first(),
        courier_add_bank_cass_input: () => cy.get('._formColumn_14nop_27 > :nth-child(8)').find('input').first(),

        //! Edit
        courier_edit_table_first_item_label_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').find('input').first(),
    }
}

module.exports = new Couriers()