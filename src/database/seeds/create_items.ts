import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Papéis', image: 'papeis.svg' },
    { title: 'Metal', image: 'metal.svg' },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Plástico', image: 'plastico.svg' },
    { title: 'Vidro', image: 'vidro.svg' },
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    { title: 'Esponja', image: 'esponja.svg' },
    { title: 'Alumínio', image: 'aluminio.svg' },
    { title: 'Papelão', image: 'papelao.svg' },
    { title: 'Garrafa Pet', image: 'garrafa.svg' },
    { title: 'Material de Construção', image: 'material-construcao.svg' },
    { title: 'Poda de Jardinagem', image: 'poda-jardinagem.svg' },
    { title: 'Móveis', image: 'moveis.svg' },
    { title: 'Reciclados Comuns', image: 'reciclados-comuns.svg' },
  ]);
}