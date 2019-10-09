
exports.up = knex =>
knex.schema.hasTable('car').then(exists => {
  if (!exists) {
    return knex.schema.createTable('car', table => {
      table.bigincrements('id')
        .primary()
        .unsigned();
      table.string('name').notNullable();
      table.string('brand');
      table.string('price');
      table.integer('age').notNullable().defaultTo(0);

      table.timestamps();
    });
  }
  return true;
});

exports.down = knex => knex.schema.dropTableIfExists('car');
