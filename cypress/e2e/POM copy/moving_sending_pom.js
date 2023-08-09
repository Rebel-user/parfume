class MovingSending {
    elements = {
        add_product_code_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)'),
        add_product_from_filial: () => cy.get('._formColumn_14nop_27 > :nth-child(5)'),
        add_product_to_filial: () => cy.get('._formColumn_14nop_27 > :nth-child(6)'),
        add_product_submit_button: () => cy.get('#submit'),
        add_product_send_button: () => cy.get('._extra_1c0tj_12 > :nth-child(2)'),
        
        edit_product_to_filial_clear_button: () => cy.get(':nth-child(1) > :nth-child(4) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]'),
        edit_product_to_filial_list_input: () => cy.get(':nth-child(1) > :nth-child(4) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first(),
    }
}

module.exports = new MovingSending()