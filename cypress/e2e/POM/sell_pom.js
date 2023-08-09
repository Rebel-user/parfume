class Sell{
    elements={
        table_column2: () => cy.get('#cff57527-3001-4d32-87b1-bfdd45d37e1d'),
        table_column: () => cy.get('th[id="30bf357a-a510-40e6-a3cf-77d62d17d22e"]'),
        table_column1: () => cy.get('th[id="0cfa29f0-ae70-4c7a-bc1e-6e69545960e6"]'),

        //ADD page
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_input_name: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),

        //EDIT page
        edit_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').find('input').first(),

    }
}

module.exports = new Sell()