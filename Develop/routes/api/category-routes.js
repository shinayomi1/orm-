const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');

// The `/api/products` endpoint

router.get('/', (req,res)=> {
  Category.findAll({
    include: [Product],
  })
  .then((categories)=> res.json (categories))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include:[Product],
  })
  .then((category)=> res.json(category))
  .catch((err)=> res.status(400).json(err));
});

router.post('/:id', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
