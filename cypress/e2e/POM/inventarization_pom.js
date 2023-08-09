class Inventarization {
    elements = {
        add_inventarization_filial_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_inventarization_user_input: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_inventarization_product_code_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        table_first_item_count: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        table_second_item_count: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(4)'),
        add_inventarization_create_docs_button: () => cy.get('._extra_1c0tj_12 > :nth-child(2)'),
        add_inventarization_finish_button: () => cy.get('._extra_1c0tj_12 > :nth-child(3)'),
        openedItemLabel: () => cy.get(':nth-child(2) > .label').first(),
    }
}

module.exports = new Inventarization()