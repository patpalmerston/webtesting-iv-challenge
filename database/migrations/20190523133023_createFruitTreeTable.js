
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Fruit Trees', trees => {
    trees.increments();

    trees
      .string('treename', 128)
      .notNullable()
      .unique();

    trees.string('password', 128).notNullable();
    trees.string('type', 48).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Fruit Trees')
};
