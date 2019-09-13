const db = require('../database/dbConfig');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(tree) {
  const [ id ] = await db('Fruit Trees').insert(tree, 'id')

  return db('Fruit Trees')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('Fruit Trees')
    .where({ id })
    .del();
}

function getAll() {
  return db('Fruit Trees')
}

function findById(id) {
  return db('Fruit Trees')
    .where({ id })
    .first();
}
