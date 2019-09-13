const router = require('express').Router();
const db = require('../fruitTrees/fruitTreesModel');

router.get('/trees', async (req, res) => {
  const trees = await db.getAll();

  res.status(200).json(trees)
})

module.exports = router;