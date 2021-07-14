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
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
        {
          authorId: 1,
          name: 'Name of the Wind',
          genre: 'Fantasy',
          picture:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610826947l/186074.jpg',
          description:
            "The Name of the Wind, also called The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.",
        },
        {
          authorId: 2,
          name: 'The Final Empire',
          genre: 'Fantasy',
          picture:
            'https://mediad.publicbroadcasting.net/p/kwit/files/styles/x_large/public/201903/final_empire.jpg',
          description:
            'Mistborn: The Final Empire, also known simply as Mistborn or The Final Empire, is a fantasy novel written by American author Brandon Sanderson. It was published on July 17, 2006 by Tor Books and is the first novel in the Mistborn trilogy, followed by The Well of Ascension in 2007 and The Hero of Ages in 2008.            ',
        },
        {
          authorId: 3,
          name: 'The Long Earth',
          genre: 'Sci-Fi',
          picture: 'https://m.media-amazon.com/images/I/51P-Im8F3oL.jpg',
          description:
            'The Long Earth is the first novel in a collaborative science fiction series by British authors Terry Pratchett and Stephen Baxter.',
        },
        {
          authorId: 2,
          name: 'The Hero of Ages',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/81RPa1UMMwL.jpg',
          description:
            'Mistborn: The Hero of Ages is an epic fantasy novel written by American author Brandon Sanderson. It was published on October 14, 2008 by Tor Books and is the third novel in the Mistborn trilogy. It is preceded by The Well of Ascension in 2007 and followed by The Alloy of Law in the Mistborn: Era 2 series, Wax and Wayne in 2011.',
        },
        {
          authorId: 3,
          name: 'The Colour of Magic',
          genre: 'Fantasy',
          picture:
            'https://images-na.ssl-images-amazon.com/images/I/91aC4cYBeQL.jpg',
          description:
            'The Colour of Magic is a 1983 fantasy comedy novel by Terry Pratchett, and is the first book of the Discworld series. The first printing of the British edition consisted of only 506 copies. Pratchett has described it as "an attempt to do for the classical fantasy universe what Blazing Saddles did for Westerns."',
        },
        {
          authorId: 3,
          name: 'The Light Fantastic',
          genre: 'Fantasy',
          picture:
            'https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2013/06/15/terry-pratchett-the-light-fantastic-scaled.jpg',
          description:
            'The Light Fantastic is a comic fantasy novel by Terry Pratchett, the second of the Discworld series. It was published on 2 June 1986, the first printing being of 1,034 copies. The title, taken from a poem by John Milton, in which it refers to dancing lightly with extravagance.',
        },
      ]);
    });
};
