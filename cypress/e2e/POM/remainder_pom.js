class Remainder {
    elements = {
        filter_by_filial_input: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_product_input: () => cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_category_input: () => cy.get(':nth-child(3) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_product_code_input: () => cy.get(':nth-child(4) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        filter_by_count_input: () => cy.get(':nth-child(5) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),

        add_button_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_input0: () => cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        add_input1: () => cy.get('._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        add_input2: () => cy.get('._formColumn_14nop_27 > :nth-child(8)').find('input').first()
    }
}

module.exports = new Remainder()