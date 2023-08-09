class Sertificat{
    elements={
        table_column: () => cy.get('th[id="11f9f25e-ef6c-4ec4-9701-666e2e9ea964"]'),
        table_colomn0: () => cy.get('th[id="41416675-1ba3-4bba-87cb-242a32eab22c"]'),
        table_colomn1: () => cy.get('th[id="bff4ca5e-9917-4e28-aae9-cc2c81fedde5"]'),

        //ADD
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),

        //EDIT
        edit_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').find('input').first(),

        //TAble check
        check_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)'),

    }
}

module.exports = new Sertificat()