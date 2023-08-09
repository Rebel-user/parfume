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
        product_icon: () => cy.get('[aria-label="Продукты"]'),
        kategor_icone: () => cy.get('[aria-label="Категории"]'),
        cert_icon: () => cy.get('[aria-label="Сертификаты"]'),
        cer_num_icon: () => cy.get('[aria-label="Серийный номер сертификата"]'),
        cer_gen_icon: () => cy.get('[aria-label="Cертификаты генератор"]'),
        zay_per_icon: () => cy.get('[aria-label="Бракованние товары заявка"]'),
        zay_inventory_icon: () => cy.get('[aria-label="Заявки инвентаризация"]'),
        zay_per_icon2: () => cy.get('[aria-label="Заявки Перемещение-Принятие"]'),
        zy_kassa: () => cy.get('[aria-label="Касса Заявки"]'),
        inventarization_icon: () => cy.get('[aria-label="Инвентаризация"]'),
        write_off_icon: () => cy.get('[aria-label="Списание"]'),
        movement_of_products_icon: () => cy.get('[aria-label="Движение товаров"]'),
        refund_moving_icon: () => cy.get('[aria-label="Возврат Перемещение-Отправка"]'),
        coming_icon: () => cy.get('[aria-label="Приход"]'),
        couriers_icon: () => cy.get('[aria-label="Поставщики"]'),
        remainder_icon: () => cy.get('[aria-label="Остаток"]'),
        moving_sending_icon: () => cy.get('[aria-label="Перемещение-Отправка"]'),
        moving_shipping_icon: () => cy.get('[aria-label="Перемещение-Принятие"]'),

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
        back_button: () => cy.get('.BackButton'),
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