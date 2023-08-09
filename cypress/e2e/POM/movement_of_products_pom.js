class MovementOfProducts {
    elements = {
        filter_by_product_input: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_transaction_number_input: () => cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_filial_input: () => cy.get(':nth-child(4) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_product_search_input: () => cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first(),
        founded_list_first_product_code: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(6)'),
        founded_list_first_transaction_number: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)'),
        founded_list_first_filial: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)'),
    }
}

module.exports = new MovementOfProducts()