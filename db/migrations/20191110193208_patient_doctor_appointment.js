
exports.up = function(knex, Promise) {
  return knex.schema
    .alterTable('users', function (table) {
      table.string('type');
    })
    .createTable('patient', function (table) {
      table.increments('id');
      table.integer('user_id').references('id').inTable('users');
    })
    .createTable('doctor', function (table) {
      table.increments('id');
      table.integer('user_id').references('id').inTable('users');
    })
    .createTable('appointment', function (table) {
      table.increments('id');
      table.integer('patient_id').references('id').inTable('users');
      table.integer('doctor_id').references('id').inTable('users');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .alterTable('users', function (table) {
      table.dropColumn('type');
    })
    .dropTable('patient')
    .dropTable('doctor')
    .dropTable('appointment')
};