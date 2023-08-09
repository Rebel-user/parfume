class MovingShipping {
    elements = {
        add_new_form_product_code_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        accept_moving_shipping_button: () => cy.get('._extra_1c0tj_12 > :nth-child(3)'),
    }
}

module.exports = new MovingShipping()