
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      
      return knex('Fruit Trees').insert([
        { treename: 'apple tree', password: 'pass', type: 'apple'},
        { treename: 'plum tree', password: 'pass', type: 'plum'},
        { treename: 'lemon tree', password: 'pass', type: 'lemon'}
      ]);
    
};
