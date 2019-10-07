exports.up = knex =>
  knex.schema.hasTable('users').then(exists => {
    if (!exists) {
      return knex.schema.createTable('users', table => {
        table
          .bigincrements('id')
          .primary()
          .unsigned();

        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table
          .string('email')
          .unique()
          .notNullable();
        table.string('password').notNullable();
        table
          .boolean('active')
          .notNullable()
          .defaultTo(0);
        table
          .integer('admin')
          .notNullable()
          .defaultTo(0);
        table
          .string('phone')
          .unique()
          .notNullable();
        table.string('reset_code').nullable();
        table.string('avatar').nullable();
        table.text('personal_info', 'longtext').nullable();

        table
          .string('registration_source')
          .nullable()
          .defaultTo('web');
        table
          .boolean('enable_contact_me')
          .notNullable()
          .defaultTo(0);
        table.timestamps();
      });
    }
    return true;
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
