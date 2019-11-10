exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('appointment').del()
        .then(function () {
            // Inserts seed entries
            return knex('appointment').insert([
                {
                    doctor_id: 1,
                    patient_id: 1,
                },
                {
                    doctor_id: 1,
                    patient_id: 2,
                },
                {
                    doctor_id: 2,
                    patient_id: 1,
                },
                {
                    doctor_id: 2,
                    patient_id: 2,
                },
                {
                    doctor_id: 2,
                    patient_id: 3,
                },
            ]);
        });
};