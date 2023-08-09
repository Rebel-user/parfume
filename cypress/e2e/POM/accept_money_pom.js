class AcceptMoney {
    elements = {
        add_new_filial_input: () => cy.get('._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        cassa_point_input: () => cy.get('._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        worker_input: () => cy.get('._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        label_input: () => cy.get('._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        summ_input: () => cy.get('._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        smena_input: () => cy.get('._formColumn_14nop_27 > :nth-child(6)').find('input').first(),

        // ! Edit AccemptMoney
        table_first_item_label: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(2)').find('input').first()
    }
}

module.exports = new AcceptMoney()