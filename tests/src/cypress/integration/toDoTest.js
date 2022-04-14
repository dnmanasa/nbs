/// <reference types="Cypress" />
describe('NBS UI E2E Tests',()=>{
        
    beforeEach(() => {
    cy.visit('http://nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com/')
    })

    it('Max date can not be set beyond one year by selecting from date picker',()=>{    
        cy.get('#content').type('One')
        cy.get('.mat-datepicker-toggle-default-icon > path').click()
        cy.get('.mat-calendar-arrow').click()
        cy.get('[aria-label="2023"] > .mat-calendar-body-cell-content').click()
        cy.get('[aria-label="May 2023"] > .mat-calendar-body-cell-content').should('be.visible').click().should('be.selected')
    })

    it('Allows to set Due Date to previous day', function() {
        var date = new Date();
        date.setDate(date.getDate() - 1);
        var dateTxt=date.toLocaleString('en-us',{month:'long', day:'numeric',year:'numeric'});
        cy.get('#content').type('Two')
        cy.get('.mat-datepicker-toggle-default-icon').click()
        cy.get('[aria-label="'+dateTxt+'"] > .mat-calendar-body-cell-content').click()
        cy.contains('Create todo').should('be.disabled')
    })

    it('Create ToDo button is active even when Date input field is cleared',()=>{
        cy.contains('Create todo').should('be.disabled')
        cy.get('#content').type('Three')
        cy.get('#mat-input-1').clear()
        cy.contains('Create todo').should('be.disabled')
    })

    it('ToDo content is accepting 101 chars whereas max is 100',()=>{
        cy.get('#content').type('jfgjfffgjgfsfsnkdjflkdjfkjfdfdjfdjfkdjfkdjjkjkjkjdrertjfxffcgvhkjjnlklhvhcfxddzssszdffchgcchjvhjvhjjg')
        cy.contains('Create todo').should('be.disabled')   
    })

    it('ToDo list items is not considering sorting by ToDo content alphabetically',()=>{
        cy.get('#content').type('wxy')
        cy.contains('Create todo').click()
        cy.reload()
        cy.get('#content').type('abc')
        cy.contains('Create todo').click()  
        cy.get('tbody > :nth-child(1) > .cdk-column-content').should('have.text','abc')
        cy.get(':nth-child(2) > .cdk-column-content').should('have.text','wxy')
    })
})