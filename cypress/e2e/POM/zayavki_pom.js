class Zayavki{
    elements={
        table_column: () => cy.get('th[id="5e0a0f5b-e2ee-4377-a494-63a472057bba"]'),
        table_colum0: () => cy.get('th[id="019158aa-bbbc-481b-9bce-4ac7abc848ad"]'),
        table_colum1: () => cy.get('th[id="cb0594b9-38d9-46f6-af05-be366d95419e"]'),
        table_colum2: () => cy.get('th[id="6bfad1ea-67eb-46f5-8de3-5c7eb389968f"]'),

        //FILTER
        filter_input: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        fiter_check: () => cy.get('.CTableBody > .CTableRow > :nth-child(2)')
      

    }
}

module.exports = new Zayavki()