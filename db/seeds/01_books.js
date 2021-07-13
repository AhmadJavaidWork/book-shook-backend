exports.seed = function (knex) {
  return knex('books')
    .del()
    .then(function () {
      return knex('books').insert([
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
        },
      ]);
    });
};
