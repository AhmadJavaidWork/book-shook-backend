exports.seed = function (knex) {
  return knex('authors')
    .del()
    .then(function () {
      return knex('authors').insert([
        { name: 'Patrick Rothfuss', age: 44 },
        { name: 'Brandon Sanderson', age: 42 },
        { name: 'Terry Pratchett', age: 66 },
      ]);
    });
};
