const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
try {
  const categories = await Category.findAll({
    include: [{ model: Product }],
  });
  res.status(200).json(categories);
} catch (err) {
  res.status(500).json(console.error('not found'));
  // find all categories
  // be sure to include its associated Products
}});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
  } catch (err) {
    res.status(500).json(console.error('not found'));
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(console.error('not found'));
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(console.error('not found'));
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(console.error('not found'));
  }
  // delete a category by its `id` value
});

module.exports = router;
