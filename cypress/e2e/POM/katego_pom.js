class Kategor{
    elements={
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first()


    }
}

module.exports = new Kategor()