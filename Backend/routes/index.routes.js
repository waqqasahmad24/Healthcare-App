const express = require('express');
const router = express.Router();

// Health Check / API Root Route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Multivitamins API 🌿',
    status: 'Server is up and running',
    endpoints: {
      getAllProducts: 'GET /api/multivitamins',
      getSingleProduct: 'GET /api/multivitamins/:id',
      getCategories: 'GET /api/multivitamins/meta/categories',
      getBrands: 'GET /api/multivitamins/meta/brands',
      getFeatured: 'GET /api/multivitamins/featured',
      createProduct: 'POST /api/multivitamins',
      updateProduct: 'PUT /api/multivitamins/:id',
      deleteProduct: 'DELETE /api/multivitamins/:id',
      seedSampleData: 'POST /api/multivitamins/seed',
    },
  });
});

module.exports = router;
