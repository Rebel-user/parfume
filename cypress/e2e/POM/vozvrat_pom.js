class Vozvrat {
    elements = {

        add_input0: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_input1: () => cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        add_input2: () => cy.get('._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        add_input_button: () => cy.get('._extra_1c0tj_12 > :nth-child(1)'),
        add_input3: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),  

    }
}

module.exports = new Vozvrat()