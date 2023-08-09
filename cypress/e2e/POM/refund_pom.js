class Refund {
    elements = {
        //! Create Refund
        create_form_filial_input: () =>cy.get('._formColumn_14nop_27 > :nth-child(2)').find("input").first(),
        create_form_cassa_input: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find("input").first(),
        create_form_cassir_input: () => cy.get('._formColumn_14nop_27 > :nth-child(4)').find("input").first(),
        create_form_client_input: () => cy.get('._formColumn_14nop_27 > :nth-child(6)').find("input").first(),
        refund_table_first_product_name_field: () => cy.get('table[id = resizeMe] > tbody').find('tr').first().find('td').eq(1).find('input').first(),
        refund_table_first_product_code_field: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        refund_table_first_product_type_field: () =>cy.get('.ql-editor').find('input').first(),
       
        refund_inner_save_button: () => cy.get('._cardHeader_1qan5_6 > :nth-child(2) > :nth-child(2)'),
        refund_table_first_item_old_client_field: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(8) > div').find('input[type = checkbox]').first(),
        refund_table_filial_clear_button: () => cy.get(':nth-child(1) > :nth-child(5) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]'),

        // ! Open Refund
        opened_item_label: () => cy.get(':nth-child(1) > .label')
    }
}

module.exports = new Refund()