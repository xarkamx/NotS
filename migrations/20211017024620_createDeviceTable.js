
exports.up = function(knex) {
  return knex.schema.createTable('device', function(table) {
      table.uuid('id').primary().defaultTo(knex.raw('UUID()'));
      table.text('notificationToken');
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("device")
};
