class Cer_num{
    elements={
        table_column: () => cy.get('th[id="d4c0e833-4e68-43c9-bf7f-7a0ebd129f69"]'),
        table_column0: () => cy.get('th[id="384aaae0-885e-434b-889a-ec4dd812a62f"]'),
        table_column1: () => cy.get('th[id="e30d2db2-0912-4c08-a98c-f52790034ca5"]'),
        table_column2: () => cy.get('th[id="8199caf1-1083-49ec-8442-8a612f08a536"]'),
        table_column3: () => cy.get('th[id="26c307b0-ea41-4d5c-bf44-4bac8c2303c1"]'),
        table_column4: () => cy.get('th[id="2c92d4ab-57c3-4ac6-890a-daa278264760"]'),
        table_column5: () => cy.get('th[id="076a7971-0657-424a-b8c4-7a0f3234e80b"]'),
        table_column6: () => cy.get('th[id="d551b4a2-5e6d-4b38-abe8-044eb7a7144e"]'),

        //ADD
        add_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),

        Filter_input: () => cy.get(':nth-child(1) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        
    }
}

module.exports = new Cer_num()