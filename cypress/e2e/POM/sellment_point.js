class SellmentPoints {
    elements = {
        //! Create Sellment Point
        add_point_name_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_point_filial_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),

        //! Edit Sellment Point
        edit_point_table_first_item_name: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').find('input').first(),

        //! Filter Sellment Point
        filial_selector: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        table_first_item_filial: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)'),
    }
}

module.exports = new SellmentPoints()