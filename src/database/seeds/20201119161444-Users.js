'use strict';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('users', [
    {
      nome: 'João',
      email: 'joaodasilva@hotmail.com',
      localizacao: 'São Paulo/SP',
      avatar: 'https://pt.vecteezy.com/arte-vetorial/583611-vetor-de-icone-de-localizacao',
      username: 'joão-coder',
      bio: 'Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'João2',
      email: 'joao2dasilva@hotmail.com',
      localizacao: 'São Vicente/SP',
      avatar: 'https://pt.vecteezy.com/arte-vetorial/583611-vetor-de-icone-de-localizacao',
      username: 'joão2-coder',
      bio: 'Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      created_at: new Date(),
      updated_at: new Date(),

    },

  ], {}),

  down: () => {
  }
};
