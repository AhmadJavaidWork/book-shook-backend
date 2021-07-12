exports.seed = function (knex) {
  return knex('authors')
    .del()
    .then(function () {
      return knex('authors').insert([
        {
          name: 'Patrick Rothfuss',
          age: 44,
          picture:
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/Patrick-rothfuss-2014-kyle-cassidy.jpg',
        },
        {
          name: 'Brandon Sanderson',
          age: 42,
          picture:
            'https://images.gr-assets.com/authors/1394044556p8/38550.jpg',
        },
        {
          name: 'Terry Pratchett',
          age: 66,
          picture:
            'https://cdn.britannica.com/22/182022-050-FA6F34B9/Terry-Pratchett-2011.jpg',
        },
      ]);
    });
};
