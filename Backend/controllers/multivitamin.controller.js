const Multivitamin = require('../models/multivitamin.model');
const sampleMultivitamins = require('../utils/seedData');

// 1. GET ALL MULTIVITAMINS (With Search, Filter, Pagination, Sorting)
const getAllProducts = async (req, res) => {
  try {
    const { category, brand, form, dietary, minPrice, maxPrice, search, sort, page = 1, limit = 10 } = req.query;

    const query = {};

    // Filter parameters
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (form) query.form = form;
    if (dietary) query.dietaryFlags = { $in: dietary.split(',') };

    // Price filtering
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Text search
    if (search) {
      query.$text = { $search: search };
    }

    // Sorting
    let sortOptions = {};
    if (sort === 'price-low') sortOptions.price = 1;
    else if (sort === 'price-high') sortOptions.price = -1;
    else if (sort === 'rating') sortOptions.rating = -1;
    else sortOptions.createdAt = -1;

    // Pagination calculation
    const skip = (Number(page) - 1) * Number(limit);

    const products = await Multivitamin.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit));

    const totalCount = await Multivitamin.countDocuments(query);

    res.status(200).json({
      success: true,
      count: products.length,
      total: totalCount,
      currentPage: Number(page),
      totalPages: Math.ceil(totalCount / Number(limit)),
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 2. GET FEATURED MULTIVITAMINS
const getFeaturedProducts = async (req, res) => {
  try {
    const featured = await Multivitamin.find({ isFeatured: true }).limit(6);
    res.status(200).json({ success: true, count: featured.length, data: featured });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 3. GET CATEGORIES METADATA
const getCategories = async (req, res) => {
  try {
    const categories = await Multivitamin.distinct('category');
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 4. GET BRANDS METADATA
const getBrands = async (req, res) => {
  try {
    const brands = await Multivitamin.distinct('brand');
    res.status(200).json({ success: true, data: brands });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 5. GET SINGLE MULTIVITAMIN BY ID
const getProductById = async (req, res) => {
  try {
    const product = await Multivitamin.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Multivitamin product not found' });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Invalid product ID or server error' });
  }
};

// 6. CREATE NEW MULTIVITAMIN PRODUCT
const createProduct = async (req, res) => {
  try {
    const newProduct = await Multivitamin.create(req.body);
    res.status(201).json({ success: true, message: 'Multivitamin created successfully', data: newProduct });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 7. UPDATE MULTIVITAMIN BY ID
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Multivitamin.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Multivitamin product not found' });
    }
    res.status(200).json({ success: true, message: 'Multivitamin updated successfully', data: updatedProduct });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 8. DELETE MULTIVITAMIN BY ID
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Multivitamin.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Multivitamin product not found' });
    }
    res.status(200).json({ success: true, message: 'Multivitamin deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 9. SEED SAMPLE MULTIVITAMIN DATA
const seedProducts = async (req, res) => {
  try {
    await Multivitamin.deleteMany({});
    const inserted = await Multivitamin.insertMany(sampleMultivitamins);

    res.status(201).json({
      success: true,
      message: 'Sample multivitamin data seeded successfully!',
      count: inserted.length,
      data: inserted
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getFeaturedProducts,
  getCategories,
  getBrands,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  seedProducts
};
