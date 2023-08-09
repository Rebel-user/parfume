class Product{
    elements={
        table_column: () => cy.get('#ea8bd0e7-0299-4790-8d9a-4bc6e0b139de'),
        table_column0: () => cy.get('th[id="553ef049-b6cc-42c0-879c-d16d7bf66ea6"]'),
        table_column1: () => cy.get('#bc31bdb4-6d35-44bc-96d5-1d99d938d222'),
        table_column2: () => cy.get('th[id="23a51eca-d0df-490d-98b0-92a25625f990"]'),
        table_column3: () => cy.get('#d8630616-7eb6-4cbd-a288-b853b0ae2e9a'),

        //ADD 
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),

        //Filter
        filter_input: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_input2: () => cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_input3: () => cy.get(':nth-child(3) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_input3a: () => cy.get('.MuiList-root > .MuiFormControl-root > .MuiInputBase-root').find('input').first()
    }
}

module.exports = new Product()