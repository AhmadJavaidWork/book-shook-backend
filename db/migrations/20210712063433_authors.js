exports.up = async (knex) => {
  await knex.schema.createTable('authors', async (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.integer('age').unsigned().notNullable();
    table.timestamps(false, true);
  });
  await knex.raw(`
    CREATE TRIGGER update_timestamp
    BEFORE UPDATE
    ON authors
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp();
  `);
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('authors');
};
