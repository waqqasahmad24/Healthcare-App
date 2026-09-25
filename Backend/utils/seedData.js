const sampleMultivitamins = [
  {
    name: 'Daily Vitality Complete Men 50+',
    brand: 'NutriPulse',
    category: 'Men',
    form: 'Tablet',
    price: 24.99,
    discountPrice: 19.99,
    stock: 45,
    rating: 4.8,
    numReviews: 124,
    description: 'Comprehensive daily multivitamin formulated specially for men over 50, supporting heart, brain, and prostate health.',
    benefits: ['Energy Support', 'Heart & Immune Defense', 'Prostate Health', 'Mental Focus'],
    keyIngredients: [
      { name: 'Vitamin B12', amount: '25mcg', dailyValue: '1042%' },
      { name: 'Vitamin D3', amount: '2000IU', dailyValue: '250%' },
      { name: 'Zinc', amount: '15mg', dailyValue: '136%' },
      { name: 'Magnesium', amount: '100mg', dailyValue: '24%' }
    ],
    servingSize: '1 Tablet Daily',
    servingsPerContainer: 90,
    dietaryFlags: ['Gluten-Free', 'Non-GMO', 'Vegetarian'],
    isFeatured: true
  },
  {
    name: 'Women’s Radiant Beauty & Wellness Complex',
    brand: 'VitaGlow',
    category: 'Women',
    form: 'Capsule',
    price: 29.99,
    discountPrice: 24.50,
    stock: 60,
    rating: 4.9,
    numReviews: 210,
    description: 'Premium multivitamin packed with biotin, collagen, and essential vitamins for skin, hair, nails, and balanced energy.',
    benefits: ['Hair & Skin Glow', 'Hormonal Balance', 'Bone Density Support', 'Immune Care'],
    keyIngredients: [
      { name: 'Biotin', amount: '5000mcg', dailyValue: '16667%' },
      { name: 'Vitamin C', amount: '250mg', dailyValue: '278%' },
      { name: 'Folate', amount: '400mcg', dailyValue: '100%' },
      { name: 'Iron', amount: '18mg', dailyValue: '100%' }
    ],
    servingSize: '2 Capsules Daily',
    servingsPerContainer: 30,
    dietaryFlags: ['Gluten-Free', 'Dairy-Free', 'Non-GMO'],
    isFeatured: true
  },
  {
    name: 'SuperKids Organic Berry Gummies',
    brand: 'NatureSprout',
    category: 'Kids',
    form: 'Gummy',
    price: 18.99,
    stock: 30,
    rating: 4.7,
    numReviews: 88,
    description: 'Delicious real fruit pectin gummies providing essential vitamins D, C, B6, and Zinc for growing active kids.',
    benefits: ['Immune System Boost', 'Healthy Bone Growth', 'Brain Function'],
    keyIngredients: [
      { name: 'Vitamin C', amount: '60mg', dailyValue: '67%' },
      { name: 'Vitamin D3', amount: '1000IU', dailyValue: '125%' },
      { name: 'Zinc', amount: '5mg', dailyValue: '45%' }
    ],
    servingSize: '2 Gummies Daily',
    servingsPerContainer: 30,
    dietaryFlags: ['Organic', 'Vegan', 'Gluten-Free', 'Gelatin-Free'],
    isFeatured: false
  }
];

module.exports = sampleMultivitamins;
