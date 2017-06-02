
exports.up = function(knex, Promise) {
  return knex.schema.createTable("hiker_trail", function(table) {
    table.increments();
    table.integer("hiker_id").index().references("hiker.id");
    table.integer("trail_id").index().references("trail.id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("hiker_trail");
};
