exports.up = async (knex) => {
  await knex.schema.createTable('books', async (table) => {
    table.increments('id').primary();
    table.integer('authorId').unsigned().notNullable();
    table.foreign('authorId').references('id').inTable('authors');
    table.string('name', 255).notNullable();
    table.string('genre', 255).notNullable();
    table.text('picture').notNullable();
    table.text('description').notNullable();
    table.text('plotSummary').notNullable();
    table.timestamps(false, true);
  });
  await knex.raw(`
    CREATE TRIGGER update_timestamp
    BEFORE UPDATE
    ON books
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp();
  `);
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('books');
};
