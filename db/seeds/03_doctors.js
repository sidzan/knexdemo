exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('doctor').del()
      .then(function () {
        // Inserts seed entries
        return knex('doctor').insert([
          {
            user_id: 1,
          },
          {
            user_id: 2,
          }
        ]);
      });
  };