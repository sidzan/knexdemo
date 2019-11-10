exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          title: 'SIJAN, go to store for milk',
          user_id: 1,
        },
        {
          title: 'ALissa, walk the dog',
          user_id: 2,
        },
        {
          title: 'ALissa, go to the gym',
          user_id: 2,
        },
        {
          title: 'ALissa, stop the damn leafblowers outside',
          user_id: 2,
        },
        {
          title: 'ALissa, get the mail',
          user_id: 2,
        },
        {
          title: 'SIjan get some headphones',
          user_id: 1,
        },
      ]);
    });
};