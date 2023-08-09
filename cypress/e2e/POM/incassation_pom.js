class Incassation {
    elements = {
        edit_incassation_table_first_item_cassa_clear_button: () => cy.get(':nth-child(4) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('button[aria-label="Clear"]'),
        cassa_list_button: () => cy.get(':nth-child(1) > :nth-child(4) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment'),
        kassa_in: () => cy.get(':nth-child(4) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first()
    }
}

module.exports = new Incassation()