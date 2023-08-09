class Consumption {
    elements = {
        //! Create Consumption
        filial_field: () => cy.get(':nth-child(2) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        cassa_field: () => cy.get(':nth-child(3) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first(),
        consumption_type_field: () => cy.get(':nth-child(5) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        payment_type_field: () => cy.get(':nth-child(6) > .component > .css-13sljp9 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        payment_summ_field: () => cy.get('._formColumn_14nop_27 > :nth-child(7)').find('input').first(),
        first_item_table: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)'),
        confirm_consumption_button: () => cy.get('._extra_1c0tj_12 > :nth-child(2)'),

        //! Edit Consumption
        table_consumption_type_field_button: () => cy.get(':nth-child(1) > :nth-child(7) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator'),

        table_cassir_clear_button: () => cy.get(':nth-child(1) > :nth-child(6) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]').first(),

        //! Open Consumption
        opened_item_header: () => cy.get('div[class = label]').first(),

        //! Filter Consumption
        filter_by_filial_input: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_filial_input2: () => cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first(),
        table_first_item_cassir: () =>cy.get('.CTableBody > :nth-child(1) > :nth-child(7)'),
        filter_input: () => cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_input2: () => cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first(),
        
    }
}

module.exports = new Consumption()