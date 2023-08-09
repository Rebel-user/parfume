// const general_pom = require("../../POM/general_pom");
// const movement_of_goods_pom = require("../../POM/movement_of_products_pom")

// Cypress.on('uncaught:exception', (err, runnable) => {
//     return false;
// });

// describe("Negative cases Движение товаров", () => {
//     beforeEach(() => {
//         cy.viewport(1700, 700)
//         cy.login("medion_admin", "admin_medion123")
//         general_pom.sidebar_icons.module_button().click()
//         general_pom.selectors.select_item('Склад')
//         general_pom.sidebar_icons.movement_of_products_icon().click()
//     })
//     it("Filter by товар", () => {
//         movement_of_goods_pom.elements.filter_by_product_input().click()
//         movement_of_goods_pom.elements.filter_by_product_search_input().type('3123460036504')
//         general_pom.selectors.select_item('3123460036504')
//         cy.esc()
//         movement_of_goods_pom.elements.founded_list_first_product_code().should('have.text', '3123460036504 ')
//     })
//     it("Filter by transaction number", () => {
//         movement_of_goods_pom.elements.filter_by_transaction_number_input().click()
//         movement_of_goods_pom.elements.filter_by_product_search_input().type('M-000009')
//         general_pom.selectors.select_item('M-0000092')
//         cy.esc()
//         movement_of_goods_pom.elements.founded_list_first_transaction_number().should('have.text', 'M-0000092')
//     })
//     it("Filter by filial", () => {
//         movement_of_goods_pom.elements.filter_by_filial_input().click()
//         movement_of_goods_pom.elements.filter_by_product_search_input().type('Fla')
//         general_pom.selectors.select_item('Flash')
//         cy.esc()
//         movement_of_goods_pom.elements.founded_list_first_filial().should('have.text', 'Flash ')
//     })
// })

