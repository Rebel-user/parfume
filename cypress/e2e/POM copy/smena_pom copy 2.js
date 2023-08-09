class Smena {
    elements = {
        //! Create New Smena
        open_smena_button: () => cy.get('._extra_1c0tj_12 > :nth-child(4)'),
        close_smena_button: () => cy.get('._extra_1c0tj_12 > :nth-child(2)'),

        //! Edit Smena
        edit_cassir_open_list: () => cy.get(':nth-child(1) > :nth-child(5) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator'),

        table_cassir_clear_button: () => cy.get(':nth-child(1) > :nth-child(5) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]').first(),
    }
}

module.exports = new Smena()