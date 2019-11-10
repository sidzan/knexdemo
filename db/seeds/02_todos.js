exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          title: 'go to store for milk',
          user_id: 1,
        },
        {
          title: 'walk the dog',
          user_id: 2,
        },
        {
          title: 'go to the gym',
          user_id: 3,
        },
        {
          title: 'stop the damn leafblowers outside',
          user_id: 3,
        },
        {
          title: 'get the mail',
          user_id: 3,
        },
        {
          title: 'get some headphones',
          user_id: 3,
        },
      ]);
    });
};