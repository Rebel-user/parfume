class Fill{
    elements={
        table_column: () => cy.get('th[id="4ec463df-7bb7-4eff-b71a-9321d3606123"]'),
        table_column0: () => cy.get('th[id="eec892cb-3727-4b55-8cf6-cf53f1ce7b9e"]'),
        table_column1: () => cy.get('th[id="5bbd603c-1cef-47f4-b0f7-059af6bb7278"]'),
        table_column2: () => cy.get('th[id="e7557cb0-2ec9-4952-999d-1d17dcaaf138"]'),
        table_column3: () => cy.get('th[id="f8299192-8a36-48cb-9da9-88303270085d"]'),


        add_page_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),

        edit_page_input: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)').find('input').first(),

        negative_add_page_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('p').first(),


    }
}

module.exports = new Fill()