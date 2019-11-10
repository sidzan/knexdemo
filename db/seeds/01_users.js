
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Sijan', email: 'sijan@test.com'},
        { name: 'ALissa', email: 'alissa@test.com'},
      ]);
    });
};
