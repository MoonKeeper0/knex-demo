/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Doggy', pet_type_id: 3, food_type_id:1},
    {id: 2, name: 'BIrdy', pet_type_id: 1, food_type_id:2},
    {id: 3, name: 'Neko', pet_type_id: 2, food_type_id:3} 
  ]);
};
