class Costum{
    elements={
        table_column: () => cy.get('th[id="6eeac10d-d677-461f-9522-f6f0a6397c92"]'),
        table_column0: () => cy.get('th[id="66193c3a-e67c-498b-98c3-81f0002e3d1f"]'),
        table_column1: () => cy.get('th[id="589b517e-7dc8-4eea-ae7c-481cb8e1a913"]'),
        table_column2: () => cy.get('th[id="896f05f2-a7d9-4606-b946-9ce2702545e8"]'),
        table_column3: () => cy.get('th[id="03887505-d4ec-4b5a-8be1-03861bf17c72"]'),


        //ADD
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_input_num: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_input_brth: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_input_sex: () => cy.get('._formColumn_14nop_27 > :nth-child(6)').find('input').first(),

    }
}

module.exports = new Costum()