class Consultant {
    elements = {
        add_consultant_lname_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_consultant_fname_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_consultant_dad_name_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        add_consultant_date_of_birth_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(5)').find('input').first(),
        add_consultant_filial_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(6)').find('input').first(),
        add_consultant_gender_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(7)').find('input').first(),
        add_consultant_address_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(8)').find('input').first(),
        add_consultant_phone_number_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(9)').find('input').first(),
        add_consultant_phone_number_additional_input: () => cy.get(':nth-child(1) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(10)').find('input').first(),
        add_consultant_pinfl_input: () => cy.get(':nth-child(2) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(1)').find('input').first(),
        add_consultant_passport_seria_input: () => cy.get(':nth-child(2) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(2)').find('input').first(),
        add_consultant_passport_number_input: () => cy.get(':nth-child(2) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(3)').find('input').first(),
        add_consultant_passport_expire_date_input: () => cy.get(':nth-child(2) > ._body_1y9oj_27 > ._formColumn_14nop_27 > :nth-child(4)').find('input').first(),
        add_consultant_status_input: () => cy.get(':nth-child(3) > ._body_1y9oj_27 > ._formColumn_14nop_27 > .FRow').find('input').first(),

        // ! Edit Consultant
        edit_consultant_table_first_item_passport_seria: () => cy.get('.CTableBody > :nth-child(1) > :nth-child(6)').find('input').first()
    }
}

module.exports = new Consultant()