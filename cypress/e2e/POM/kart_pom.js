class Kart{
    elements={
        table_column: () => cy.get('#c4579507-69a7-499e-beeb-b9fa6bd81b3f'),
        table_column0: () => cy.get('th[id="62821b5f-be90-424e-afee-ce9c2e0104e0"]'),
        table_column1: () => cy.get('th[id="6da83adb-a45e-47e5-805a-c79792a1ab5f"]'),


        //ADD
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),


        //Edit
        edit_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').find('input').first(),

    }
}

module.exports = new Kart()