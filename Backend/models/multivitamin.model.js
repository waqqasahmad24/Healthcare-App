const mongoose = require('mongoose');

const multivitaminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand name is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Men', 'Women', 'Kids', 'Seniors', 'Prenatal', 'General Health', 'Sports & Fitness'],
      default: 'General Health',
    },
    form: {
      type: String,
      enum: ['Tablet', 'Capsule', 'Gummy', 'Softgel', 'Liquid', 'Powder'],
      default: 'Capsule',
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be positive'],
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 10,
      min: [0, 'Stock cannot be negative'],
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    benefits: [
      {
        type: String,
      },
    ],
    keyIngredients: [
      {
        name: { type: String, required: true },
        amount: { type: String, required: true },
        dailyValue: { type: String },
      },
    ],
    servingSize: {
      type: String,
      default: '1 Capsule Daily',
    },
    servingsPerContainer: {
      type: Number,
      default: 30,
    },
    dietaryFlags: [
      {
        type: String,
      },
    ],
    imageUrl: {
      type: String,
      default: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for text search
multivitaminSchema.index({ name: 'text', brand: 'text', description: 'text' });

const Multivitamin = mongoose.model('Multivitamin', multivitaminSchema);

module.exports = Multivitamin;
