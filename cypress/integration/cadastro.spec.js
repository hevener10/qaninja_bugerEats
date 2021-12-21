describe("Cadastro", () => {
  it("Usuario deve se tornar um entregador", () => {
    cy.viewport(1440, 900);
    cy.visit("https://buger-eats.vercel.app");
    cy.get('[id="page-home"] div main h1').should(
      "have.text",
      "Seja um parceiro entregador pela Buger Eats"
    );

    cy.get("a[href='/deliver']").click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );
    var entregador = {
      nome: "Hevener Ancelmo",
      cpf: "00000014141",
      email: "email@email.com",
      whatsapp: "11999999999",

      endereco: {
        cep: "75860000",
        rua: "Rua dos tapajos",
        numero: "100",
        complemento: "casa",
        bairro: "Centro",
        cidade_uf: "Quirinópolis/GO",
      },
    };

    cy.get('input[name="name"]').type(entregador.nome);
    cy.get('input[name="cpf"]').type(entregador.cpf);
    cy.get('input[name="email"]').type(entregador.email);
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp);
    cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
    cy.get('input[type="button"][value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type(entregador.endereco.numero);
    cy.get('input[name="address-details"]').type(
      entregador.endereco.complemento
    );
  });
});
