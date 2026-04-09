describe('Teste de E2E da Aplicação Angular', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve exibir o saldo corretamente', () => {
    cy.contains('Saldo').should('be.visible');
  })

  it('deve adicionar uma nova transação de depósito', () => {
    cy.get('[data-cy="select-tipo-movimentacao"]').select('DEPOSITO');

    cy.get('[data-cy="input-valor"]').type('100');
    
    cy.get('[data-cy="button-submit"]').click();

    cy.get('[data-cy="select-tipo-movimentacao"]').should('have.value', 'DEPOSITO');
    cy.get('[data-cy="input-valor"]').should('have.value', '1');

    cy.get('p').contains('Conta Corrente').next().invoke('text').then(saldoAtualizado => {
      expect(parseFloat(saldoAtualizado.replace('R$', '').trim())).to.be.greaterThan(0);
    })
  })
})