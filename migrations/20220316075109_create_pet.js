/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pet', table => {
        table.increments(); // adds an auto incrementing PK column
        
        table.string('name', 250);

        table.integer('pet_type_id');
        table.foreign('pet_type_id').references;
        
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pet', table => {
        table.dropForeign('pet_type_id')
    })
    .then( () =>{
        return knex.schema.dropTableIfExists('pet')
    })
    ;
};
