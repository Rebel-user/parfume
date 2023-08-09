class Staff{
    elements={
        table_column: () => cy.get('th[id="36bc2274-0c0d-47af-8aeb-7a799c0a8d0b"]'),
        table_column0: () => cy.get('th[id="978e1507-3965-4f21-a522-041072e261cd"]'),
        table_column1: () => cy.get('th[id="22144ff4-7c1c-4102-9697-80f3ccaf3941"]'),
        table_column3: () => cy.get('th[id="f768f5ec-519b-41d8-a4ed-494da984898c"]'),
        table_column4: () => cy.get('th[id="4727f71f-575b-4b02-96e7-44036232b7cf"]'),
        table_column5: () => cy.get('th[id="34819025-a7c4-44f8-8e39-4abb8023b7bb"]'),
        table_column6: () => cy.get('th[id="c603e491-8c4a-4d9f-88d3-cd1c5aabb92f"]'),


        //ADD
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_input_name: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_input_num: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_input_login: () => cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        add_input_password: () => cy.get('._formColumn_14nop_27 > :nth-child(5)').find('input').first(),

        filter_input: () => cy.get('._autocompleteButton_sp167_1')
        
    }
}

module.exports = new Staff()