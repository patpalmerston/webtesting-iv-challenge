const db = require('../database/dbConfig');
const Trees = require('./fruitTreesModel');

describe('trees model', () => {
  describe('insert()', () => {
    describe('remove()', () => {
      beforeEach(async () => {
        await db('Fruit Trees').truncate();
      })

      it('should remove the record', async () => {
        await Trees.insert({ treename: 'Peach Tree' });
        const trees = await db('Fruit Trees');
        console.log(trees);
        expect(trees).toHaveLength(1);

        const id = trees[0].id;

        await Trees.remove(trees[0].id);
        const deletedTrees = await db('Fruit Trees');
        expect(deletedTrees).not.toHaveLength(1)
      })
    })

    beforeEach(async () => {
      await db('Fruit Trees').truncate();
    })

    it('should insert the provided hobbits into the db', async () => {
      await Trees.insert({ treename: 'bubble tree' });
      await Trees.insert({ treename: 'yummy tree' });

      const trees = await db('Fruit Trees');
      expect(trees).toHaveLength(2)
    })

    //another way to do the same thing

    it('should insert the provided hobbits into the db', async () => {
      let tree = await Trees.insert({ treename: 'flower' });
      expect(tree.treename).toBe('flower');

      tree = await Trees.insert({ treename: 'sam' });
      expect(tree.treename).toBe('sam');
    })




  })
})