class Consul{
    elemants={
        talbe_column: () => cy.get('th[id="58faf119-5004-4fb3-8767-63bd1cc8b84f"]'),
        talbe_column0: () => cy.get('th[id="08c08d41-302b-49f2-8141-8bb8f8599a16"]'),
        talbe_column1: () => cy.get('th[id="0b7faa79-e6d4-4adc-970d-bb513f989739"]'),
        talbe_column2: () => cy.get('th[id="fba0a616-5e25-4429-963a-9d15d008fe8f"]'),
        talbe_column3: () => cy.get('th[id="710eb07f-98c0-4018-98dd-cd4ef917f588"]'),


        //Add
        add_input_name: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_input_name1: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_input_name2: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        add_input_brth: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        add_input_fill: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(6)').find('input').first(),
        add_input_sex: () => cy.get('._formColumn_14nop_27 > :nth-child(7)').find('input').first(),
        add_input_num: () => cy.get('._formColumn_14nop_27 > :nth-child(9)').find('input').first(),


        //Negative
        add_input_name2neg: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(4)').find('p').first(),

        
    }
}

module.exports = new Consul()