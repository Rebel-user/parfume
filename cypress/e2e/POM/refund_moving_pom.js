class RefundMoving {
    elements = {
        page_table_second_column_name: () => cy.get('#c6dc68d5-0f46-4ee7-a9b9-fbab196e905b'),
        page_table_third_column_name: () => cy.get('#e7d61db5-05cb-4598-8184-aa7e3a01c194'),
        page_table_fourth_column_name: () => cy.get('#fb02d917-9329-42d2-a977-ac9820245084'),
        page_table_fivth_column_name: () => cy.get('#e7aedcb8-3357-41ad-9fa9-2255bd727afd'),
        page_table_sixth_column_name: () => cy.get('#e81f2692-c8d7-4ed7-ae96-a078a83cebe3')
    }
}

module.exports = new RefundMoving()