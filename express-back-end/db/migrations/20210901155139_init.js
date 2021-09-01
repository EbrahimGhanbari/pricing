module.exports.up = async function (knex, Promise) {
  await knex.schema.createTable("staffs", function (table) {
    table.increments("id");
    table.string("first_name", 50).notNullable();
    table.string("last_name", 50).notNullable();
    table.string("email", 255).notNullable().unique();
    table.string("phone", 50);
    table.string("address", 255);
    table.timestamps(true, true);
  });

  await knex.schema.createTable("costumers", (table) => {
    table.increments("id");
    table.string("first_name", 50).notNullable();
    table.string("last_name", 50).notNullable();
    table.string("email", 255).notNullable().unique();
    table.string("phone", 50);
    table.string("address", 255);
    table.timestamps(true, true);
  });

  await knex.schema.createTable("quotes", (table) => {
    table.increments("id");
    table
      .integer("owner_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("staffs");
    table
      .integer("costumer_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("costumers");

    table.string("from", 255).notNullable();
    table.string("destination", 255).notNullable();
    table.timestamp("departure_date").notNullable();
    table.timestamp("return_date");
    table.integer("number_of_traveller").unsigned().notNullable();
    table.decimal("price").notNullable();
    table.string("quote_status").defaultTo("pending");
    table.timestamps(true, true);
  });
};

module.exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("quotes");
  await knex.schema.dropTableIfExists("costumers");
  await knex.schema.dropTableIfExists("staffs");
};
