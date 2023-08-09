class General {
    sidebar_icons = {
        module_button: () => cy.get('.RectangleIconButton'),

        sellment_page_icon: () => cy.get('[aria-label="Продажа"]'),
        consumption_sidebar_icon: () => cy.get('[aria-label="Расход"]'),
        smena_sidebar_icon: () => cy.get('[aria-label="Смена "]'),
        kassa_transactions_icon: () => cy.get('[aria-label="Касса Транзакций"]'),
        kassa_type_payment_icon: () => cy.get('[aria-label="Касса Тип оплаты"]'),
        refund_icon: () => cy.get('[aria-label="Возврат"]'),
        clients_icon: () => cy.get('[aria-label="Клиенты"]'),
        incassation_icon: () => cy.get('[aria-label="Инкассация"]'),
        accept_money_icon: () => cy.get('[aria-label="Приемка денег"]'),
        sellment_point_icon: () => cy.get('[aria-label="Точки Продаж"]'),
        refund_product_type_icon: () => cy.get('[aria-label="Возврат Продукты Тип"]'),
        consultant_icon: () => cy.get('[aria-label="Консультант"]'),
        organization_icon: () => cy.get('[aria-label="Филиал"]'),
        sell_icon: () => cy.get('[aria-label="Точки Продаж"]'),
        staff_icon: () => cy.get('[aria-label="Сотрудники"]'),
        costum_icon: () => cy.get('[aria-label="Клиенты"]'),
        kart_icon: () => cy.get('[aria-label="Дисконтные карты"]'),
        product_icon: () => cy.get('[aria-label="Продукты"]'),

    }
    table_buttons = {
        add_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > .undefined'),
        edit_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > :nth-child(2)'),
        edit_save_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > :nth-child(2)'),
        add_form_submit_button: () => cy.get('#submit'),
        table_first_item: () => cy.get('.CTableBody > :nth-child(1)'),
        table_first_item_delete_button: () => cy.get(':nth-child(1) > [style="padding: 0px;"]'),
        inner_add_button: () => cy.get('.success'),
        inner_save_button: () => cy.get('*[data-testid = SaveIcon]'),
    }
    selectors = {
        select_item: (context) => cy.get('div[role="presentation"]').find('div').contains(context).click(),
        select_first: () => cy.get('div[role="presentation"]').find('div').first().click(),
    }
    errorCheckers = {
        alert_message: () => cy.get('.MuiAlert-message'),
        checkErrorNotiflicationMessage: (message) => {
            this.errorCheckers.alert_message().should('have.text', message)
        },
        opened_item_label: () => cy.get('div[class = label]').first(),
        checkOpenedItemLabel: (context) => {
            this.errorCheckers.opened_item_label().should('have.text', `  ${context}`)
        }
    }
}

module.exports = new General()