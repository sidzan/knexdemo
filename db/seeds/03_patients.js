exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('patient').del()
        .then(function () {
            // Inserts seed entries
            return knex('patient').insert([
                {
                    user_id: 3,
                },
                {
                    user_id: 4,
                },
                {
                    user_id: 5,
                }
            ]);
        });
};