/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex.schema.raw('TRUNCATE pet_type CASCADE');
  // Deletes ALL existing entries
  await knex('pet_type').del()
  await knex('pet_type').insert([
    {id: 1, name: 'Bird'},
    {id: 2, name: 'Cat'},
    {id: 3, name: 'Dog'}
  ]);
};
