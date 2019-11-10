
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Some Guy', email: 'test1@test.com'},
        { name: 'Some Girl', email: 'test2@test.com'},
        { name: 'Somone Else', email: 'test3@test.com'},
      ]);
    });
};
