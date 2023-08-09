class Brak{
    elements={
        table_colum: () => cy.get('th[id="917b6e0f-2962-42f1-88d6-1d7ceb4c13af"]'),
        table_column0: () => cy.get('th[id="9308397b-de05-4246-b0a4-56ad71667fa1"]'),
        table_column1: () => cy.get('th[id="a0676d66-d044-4555-8647-7deb64122b9a"]'),
        table_column2: () => cy.get('th[id="7dff737d-a195-4023-bae2-a352503e7bad"]'),

        //ADD
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),

        //EDIT
        edit_input: () => cy.get(':nth-child(1) > :nth-child(3) > ._autocompleteWrapper_1c7kx_1 > .MuiAutocomplete-root > .MuiFormControl-root').find('input').first(),
        edit_input_status: () => cy.get(':nth-child(1) > :nth-child(5) > .css-13sljp9 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),

        //click
        table_click: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)'),

    }

    elements2={
        table_colum: () => cy.get('th[id="0a4078c8-13f0-4e1d-a160-f1e3823f7806"]'),
        table_column0: () => cy.get('th[id="556aef9d-cdc9-459e-8c48-83d8534569c1"]'),
        table_column1: () => cy.get('th[id="2ce68cd4-21ab-47b3-b0b8-3400fbc317b3"]'),
        table_column2: () => cy.get('th[id="774e6b0f-e221-49b8-9d0c-c69fb6b4d6da"]'),
        table_column3: () => cy.get('th[id="6f4e7a85-f7d5-434e-9e3d-6afe03a4b382"]'),
        table_column4: () => cy.get('th[id="40d599e5-a973-48d5-93aa-188322d4647f"]'),
        table_column5: () => cy.get('th[id="13a17e8b-2534-41b2-a18f-20bdbaee35fd"]'),
        table_column6: () => cy.get('th[id="162dbc61-5ea3-4bc3-aac8-294c152f62cd"]'),
    }

    elements3={
        table_colum: () => cy.get('th[id="b63c483f-5276-4117-b396-6355cff57f8c"]'),
        table_column0: () => cy.get('th[id="94a0f1fa-8452-4123-bb36-5a6c37d663e1"]'),
        table_column1: () => cy.get('th[id="e7af3071-8ed3-45f1-a8f3-f8bcd6f0e56c"]'),
        table_column2: () => cy.get('th[id="d4b9cdae-d206-4033-90e2-d7b9d59148d0"]'),
    }
}



module.exports = new Brak()