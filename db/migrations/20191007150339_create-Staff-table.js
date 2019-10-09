
exports.up = knex =>
knex.schema.hasTable('staff').then(exists => {
  if (!exists) {
    return knex.schema.createTable('staff', table => {
      table.bigincrements('id')
        .primary()
        .unsigned();
      table.bigInteger('user_id').unsigned().index().references('id').inTable('users')
      table.string('dept').notNullable();
      table.string('designation').notNullable();
      table.integer('age').notNullable().defaultTo(0);
      table.text('address', 'longtext').nullable();

      table.timestamps();
    });
  }
  return true;
});

exports.down = knex => knex.schema.dropTableIfExists('staff');
