
exports.seed = function (knex) {

  // Deletes ALL existing entries
  return knex('users').del().then(() => {
    knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { name: 'Dr. Sijan', email: 'sijan@test.com', type: "doctor" },
          { name: 'Dr. ALissa', email: 'alissa@test.com', type: "doctor" },
          { name: 'PT. P1', email: 'pt1@test.com', type: "patient" },
          { name: 'PT. P2', email: 'pt2@test.com', type: "patient" },
          { name: 'PT. P3', email: 'pt3@test.com', type: "patient" },
        ]);
      });
  })


};
