exports.seed = function (knex) {
  return knex('books')
    .del()
    .then(function () {
      return knex('books').insert([
        { authorId: 1, name: 'Name of the Wind', genre: 'Fantasy' },
        { authorId: 2, name: 'The Final Empire', genre: 'Fantasy' },
        { authorId: 3, name: 'The Long Earth', genre: 'Sci-Fi' },
        { authorId: 2, name: 'The Hero of Ages', genre: 'Fantasy' },
        { authorId: 3, name: 'The Colour of Magic', genre: 'Fantasy' },
        { authorId: 3, name: 'The Light Fantastic', genre: 'Fantasy' },
      ]);
    });
};
