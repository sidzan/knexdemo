
exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.string('phone').defaultTo("0000000000");
        table.boolean('active').defaultTo(true);
      })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('phone');
        table.dropColumn('active');
      })
};