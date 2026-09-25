const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getFeaturedProducts,
  getCategories,
  getBrands,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  seedProducts
} = require('../controllers/multivitamin.controller');

// Specific routes registered before dynamic :id route
router.get('/featured', getFeaturedProducts);
router.get('/meta/categories', getCategories);
router.get('/meta/brands', getBrands);
router.post('/seed', seedProducts);

// Collection & CRUD routes
router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
