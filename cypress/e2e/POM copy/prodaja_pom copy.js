class Sellment {
    elements = {
        //! Entering to prodaja_pom Page
        module_button: () => cy.get(':nth-child(1) > .RectangleIconButton'),
        cassa_item: () => cy.get('._scrollBlocksss_1fy4n_14 > :nth-child(5)'),
        sellment_page_icon: () => cy.get('[aria-label="Продажа"]'),

        //! Create new prodaja_pom
        add_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > .undefined'),
        product_code_field: () => cy.get('._mainCardSide_14nop_9').find('input').first(),
        
        payment_button: () => cy.get('._cardHeader_1qan5_6').find('li').eq(2),
        inner_add_button: () => cy.get('.success'),
        inner_save_button: () => cy.get('._cardHeader_1qan5_6 > :nth-child(2) > :nth-child(2)'),

        //! Edit prodaja_pom
        edit_button: () => cy.get('[style="display: flex; align-items: center; gap: 10px;"] > :nth-child(2)'),
        client_list_button: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(6)').find("button").first(),
        first_client_on_list: () => cy.get('div[role="presentation"]').find('div').first(),
        

        //! Open prodaja_pom
        opened_item_header: () => cy.get('div[class = label]').first(),


        //! Filter prodaja_pom
        //todo Filter by Filial
        filter_by_filial_input: () => cy.get(':nth-child(2) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        select_filial: (filial) => cy.get('.MuiList-root').find('div').contains(filial),
        first_item_filial: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(3)'),

        //todo Filter by Smena
        filter_by_smena_input: () => cy.get(':nth-child(4) > ._autocomplete_sp167_1 > ._autocompleteButton_sp167_1'),
        select_smena: (smena) => cy.get('.MuiList-root').find('div').contains(smena),
        first_item_smena: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(14)')
    }
}

module.exports = new Sellment()