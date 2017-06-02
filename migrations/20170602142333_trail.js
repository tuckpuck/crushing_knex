exports.up = function(knex, Promise) {
  return knex.schema.createTable("trail", function(table) {
    table.increments();
    table.text("description");
    table.float("length");
    table.float("elevation");
    table.text("condition");
    table.date("condition_date");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trail");
};
