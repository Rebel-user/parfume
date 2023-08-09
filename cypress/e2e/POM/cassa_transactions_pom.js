class CassaTransactions {
    elements = {
        create_filial_field: () => cy.get(':nth-child(2) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        cassa_type_transaction_field: () => cy.get(':nth-child(4) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        cassa_type_payment_field: () => cy.get(':nth-child(5) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        users: () => cy.get(':nth-child(6) > .component > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),

        //! Edit CassaTransactions
        table_first_item_type_transactions_list_button: () => cy.get(':nth-child(1) > :nth-child(7) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > [data-testid="ArrowDropDownIcon"]'),

        //! Open CassaTransactions
        opened_item_header: () => cy.get(':nth-child(1) > .label'),

        //! Filter CassaTransactions
        filter_by_id_field: () => cy.get('._autocompleteButton_sp167_1'),
        filter_by_id_input: () => cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root'),
        first_item_cassa_id: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)'),

        //! Negative cases
        validation_error_field: () => cy.get(':nth-child(1) > .component > .MuiFormControl-root').find("p").first(),
        table_first_item_clear_button: () => cy.get(':nth-child(1) > :nth-child(7) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]').first()
    }
}

module.exports = new CassaTransactions()