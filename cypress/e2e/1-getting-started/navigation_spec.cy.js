// cypress/e2e/navigation_spec.js
// cypress/e2e/navigation_spec.js

describe('Navigation Buttons', () => {
    beforeEach(() => {
        cy.visit('nav/contato.html'); // Atualize com o caminho correto para seu arquivo HTML
    });

    it('Scroll to Email Section', () => {
        cy.get('button[data-target="#email"]').click();
        cy.get('#email').should('be.visible');
    });

    it('Scroll to Filiais Section', () => {
        cy.get('button[data-target="#filiais"]').click();
        cy.get('#filiais').should('be.visible');
    });

    it('Scroll to Ligações Section', () => {
        cy.get('button[data-target="#ligacoes"]').click();
        cy.get('#ligacoes').should('be.visible');
    });

    it('Scroll to WhatsApp Section', () => {
        cy.get('button[data-target="#whatsapp"]').click();
        cy.get('#whatsapp').should('be.visible');
    });
});
