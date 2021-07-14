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
          bio: "Patrick James Rothfuss (born June 6, 1973) is an American writer of epic fantasy. He is best known for his projected trilogy The Kingkiller Chronicle, which has won him several awards, including the 2007 Quill Award for his debut novel, The Name of the Wind. Its sequel, The Wise Man's Fear, topped The New York Times Best Seller list.",
        },
        {
          name: 'Brandon Sanderson',
          age: 42,
          picture:
            'https://images.gr-assets.com/authors/1394044556p8/38550.jpg',
          bio: "Brandon Sanderson (born December 19, 1975) is an American author of epic fantasy and science fiction. He is best known for the Cosmere fictional universe, in which most of his fantasy novels, most notably the Mistborn series and The Stormlight Archive, are set. Outside of the Cosmere, he has written several young adult[a] and juvenile series including The Reckoners, the Skyward series, and the Alcatraz series. He is also known for finishing Robert Jordan's high fantasy series The Wheel of Time.",
        },
        {
          name: 'Terry Pratchett',
          age: 66,
          picture:
            'https://cdn.britannica.com/22/182022-050-FA6F34B9/Terry-Pratchett-2011.jpg',
          bio: "Sir Terence David John Pratchett OBE (28 April 1948 – 12 March 2015) was an English humorist, satirist, and author of fantasy novels, especially comical works.[1] He is best known for his Discworld series of 41 novels. Pratchett's first novel, The Carpet People, was published in 1971. The first Discworld novel, The Colour of Magic, was published in 1983, after which Pratchett wrote an average of two books a year. The final Discworld novel, The Shepherd's Crown, was published in August 2015, five months after his death.",
        },
      ]);
    });
};
