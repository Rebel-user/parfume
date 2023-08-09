class WriteOff {
    elements = {
        //! Create New Write-Off
        add_write_off_product_code_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_write_off_filial_input: () => cy.get('._formColumn_14nop_27 > :nth-child(3)'),
        add_write_off_type_input: () => cy.get('._formColumn_14nop_27 > :nth-child(4)'),
        add_write_off_users_input: () => cy.get('._formColumn_14nop_27 > :nth-child(6)'),
        write_off_product_button: () => cy.get('._extra_1c0tj_12 > :nth-child(2)'),

        //! Edit Write-Off
        edit_write_off_table_first_item_type: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(6)'),
        edit_write_off_table_first_item_type_clear_button: () => cy.get(':nth-child(1) > :nth-child(6) > .css-13sljp9 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]').first(),

        //! Filters Write-Off
        filter_by_sklad: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_type: () => cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        founded_items_first_sklad: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)'),
        founded_items_first_type: () => cy.get(':nth-child(1) > :nth-child(3) > .flex > div'),
    }
}

module.exports = new WriteOff()