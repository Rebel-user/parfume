class Cer_gen{
    elements={
        table_column: () => cy.get('th[id="d199afc5-f056-4f61-9327-d2856009a019"]'),
        table_column0: () => cy.get('th[id="d7387a84-ac39-4e62-be89-3f6f0797f67b"]'),
        table_column1: () => cy.get('th[id="f784d9fe-2276-407a-954a-734fa82a5fb0"]'),
        table_column2: () => cy.get('th[id="7344610a-039c-479f-82e0-a0c7f6647273"]'),
        table_column3: () => cy.get('th[id="40a1efa6-747c-4b5e-95ab-65aa5991ffde"]'),
        table_column4: () => cy.get('th[id="b8e73599-716f-43e9-b228-c1ef2aeffa2f"]'),

        //ADD
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_input_fill: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_input_click: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        
    }
}

module.exports = new Cer_gen()