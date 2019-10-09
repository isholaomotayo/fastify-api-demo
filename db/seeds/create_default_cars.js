
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car').del()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        {
          id: 1,
          name: 'Toyota',
          brand: 'Corolla',
          price: '2m',
          age: '1'
        },
        {
          id: 2,
          name: 'Mercedes',
          brand: 'C230',
          price: '3m',
          age: '1'
        }
      ]);
    });
};
