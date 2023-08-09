class CassaTypePayment {
    elements = {
        add_form_type_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find("input").first(),
        add_form_slug_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)'),
        
        //! Edit CassaTypePayment
        slug_item_table: () => cy.get('table[id = resizeMe] > tbody').find('tr').first().find('input').first(),
        opened_item_header: () => cy.get('.label').first()
    }
}

module.exports = new CassaTypePayment()