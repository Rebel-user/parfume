class RefundProductType {
    elements = {
        //! Create
        add_refund_product_type_name_input: () => cy.get('.FRow').find('input').first(),
        add_refund_product_type_slug_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),

        //! Edit
        edit_refund_product_type_table_first_item_name: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').find('input').first(),
    }
}

module.exports = new RefundProductType()