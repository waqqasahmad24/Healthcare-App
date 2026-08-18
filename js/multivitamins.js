const products = [
    {
        id: "mv-1",
        name: "Ultra Vita-Shield Premium",
        description: "Daily targeted multivitamin for clinical immune and energy support.",
        longDescription: "Our flagship Advanced Multivitamin is clinically formulated with high-bioavailability micronutrients, chelated minerals, and co-enzyme B vitamins to sustain cellular energy and bolster immune defenses.",
        price: "$34.99",
        image: "../images/multi.png",
        benefits: [
            "Supports cellular energy production and mitochondrial health",
            "Promotes cardiovascular function and arterial integrity",
            "GMP-certified purity and potency tested"
        ],
        ingredients: [
            { name: "Vitamin A (Beta-Carotene)", amount: "900 mcg" },
            { name: "Vitamin C (Ascorbic Acid)", amount: "250 mg" },
            { name: "Vitamin D3 (Cholecalciferol)", amount: "50 mcg (2000 IU)" },
            { name: "Vitamin B12 (Methylcobalamin)", amount: "100 mcg" },
            { name: "Zinc (Zinc Bisglycinate)", amount: "15 mg" }
        ],
        dosage: "Take 2 capsules daily with a meal, preferably in the morning with breakfast.",
        specifications: {
            "Servings": "60 Vegetable Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, Non-GMO, Vegan",
            "Storage": "Store in a cool, dry place away from direct sunlight."
        }
    },
    {
        id: "mv-2",
        name: "Active Man Performance Multivitamin",
        description: "Engineered specifically for active males to optimize metabolic health.",
        longDescription: "An athletic-grade formulation designed for the active male. Delivers critical vitamins alongside trace minerals and botanical extracts to support stamina, hormone health, and muscle recovery.",
        price: "$39.99",
        image: "../images/multi-2.png",
        benefits: [
            "Optimizes natural energy levels and endurance",
            "Supports healthy hormone synthesis and prostate health",
            "Enriched with antioxidant botanical blend"
        ],
        ingredients: [
            { name: "Vitamin C", amount: "300 mg" },
            { name: "Magnesium (as Citrate)", amount: "150 mg" },
            { name: "Zinc (as Citrate)", amount: "20 mg" },
            { name: "Saw Palmetto Extract", amount: "160 mg" },
            { name: "L-Arginine HCl", amount: "100 mg" }
        ],
        dosage: "Take 2 tablets daily with water, ideally post-workout or during lunch.",
        specifications: {
            "Servings": "90 Tablets",
            "Form": "Coated Tablets",
            "Certification": "GMP Certified, NSF Sport Compliant",
            "Storage": "Keep tightly closed in a cool, dry location."
        }
    },
    {
        id: "mv-3",
        name: "Active Woman Vitality Complex",
        description: "Specially formulated for active women to support hormonal balance and bone density.",
        longDescription: "Formulated to address the biological needs of active women, providing enhanced iron, calcium, and bone-co-factors alongside stress-mitigating adaptogens and energy metabolites.",
        price: "$38.99",
        image: "../images/multi-3.png",
        benefits: [
            "Strengthens bone matrix structure and mineral density",
            "Promotes healthy iron levels and red blood cell production",
            "Helps regulate mood and manage daily stress levels"
        ],
        ingredients: [
            { name: "Calcium (Carbonate & Citrate)", amount: "500 mg" },
            { name: "Iron (Ferrous Bisglycinate)", amount: "18 mg" },
            { name: "Folate (L-Methylfolate)", amount: "600 mcg DFE" },
            { name: "Ashwagandha Root Extract", amount: "150 mg" },
            { name: "Cranberry Extract", amount: "100 mg" }
        ],
        dosage: "Take 2 capsules daily, preferably with a fat-containing meal.",
        specifications: {
            "Servings": "60 Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, Gluten-Free",
            "Storage": "Store at room temperature (15-25°C)."
        }
    },
    {
        id: "mv-4",
        name: "CoQ10 Multi-Cardio Protect",
        description: "Coenzyme Q10 infused multivitamin focused on cardiovascular defense.",
        longDescription: "This advanced hybrid formula combines essential multivitamins with a therapeutic dose of Coenzyme Q10 (CoQ10) to support cellular respiration, arterial flexibility, and heart health.",
        price: "$45.99",
        image: "../images/multi.png",
        benefits: [
            "Boosts cardiovascular energy output",
            "Provides heavy antioxidant protection for lipids and LDL cholesterol",
            "Helps replenish CoQ10 levels depleted by statins"
        ],
        ingredients: [
            { name: "Coenzyme Q10 (Ubiquinone)", amount: "100 mg" },
            { name: "Vitamin E (d-alpha Tocopherol)", amount: "15 mg (22.4 IU)" },
            { name: "Vitamin B6 (Pyridoxal-5-Phosphate)", amount: "10 mg" },
            { name: "Selenium (Selenomethionine)", amount: "100 mcg" }
        ],
        dosage: "Take 1 softgel daily with a meal that contains healthy fats.",
        specifications: {
            "Servings": "60 Softgels",
            "Form": "Liquid Softgel",
            "Certification": "GMP Certified, Dairy-Free",
            "Storage": "Store in a cool, dark place. Refrigeration is optional but recommended."
        }
    },
    {
        id: "mv-5",
        name: "Kids Chewy Multi-Biotic",
        description: "Delicious children's gummy packed with vitamins and live probiotics.",
        longDescription: "A kid-friendly gummy multivitamin designed to promote robust growth, bone development, and optimal digestion. Formulated with organic cane sugar, natural colorings, and active probiotics.",
        price: "$24.99",
        image: "../images/multi-2.png",
        benefits: [
            "Supports skeletal growth and teeth fortification",
            "Supports immune response and digestive regularity",
            "Free from high fructose corn syrup and synthetic dyes"
        ],
        ingredients: [
            { name: "Vitamin C (as Ascorbic Acid)", amount: "45 mg" },
            { name: "Vitamin D3 (as Cholecalciferol)", amount: "20 mcg (800 IU)" },
            { name: "Bacillus coagulans (Probiotic)", amount: "1 Billion CFU" },
            { name: "Biotin", amount: "30 mcg" }
        ],
        dosage: "Children 4 years and older chew 2 gummies daily under adult supervision.",
        specifications: {
            "Servings": "60 Gummies",
            "Form": "Pectin Gummy",
            "Certification": "GMP Certified, Vegetarian, Gelatin-Free",
            "Storage": "Keep out of reach of children. Store in dry area below 22°C."
        }
    },
    {
        id: "mv-6",
        name: "Neuro-Focus Brain Formula",
        description: "Nootropic multivitamin for heightened focus, memory, and cognition.",
        longDescription: "A specialized daily multivitamin blended with premium neuro-nutrients, herbal adaptogens, and cognitive enhancers like Bacopa and Ginkgo Biloba to promote focus, clarity, and stress response.",
        price: "$49.99",
        image: "../images/multi-3.png",
        benefits: [
            "Enhances cognitive function, information processing, and focus",
            "Protects brain cells from oxidative damage",
            "Supports healthy synthesis of key neurotransmitters"
        ],
        ingredients: [
            { name: "Methyl B12", amount: "500 mcg" },
            { name: "Bacopa Monnieri Extract (45% Bacosides)", amount: "300 mg" },
            { name: "Ginkgo Biloba Leaf Extract", amount: "120 mg" },
            { name: "Phosphatidylserine", amount: "100 mg" },
            { name: "L-Theanine", amount: "200 mg" }
        ],
        dosage: "Take 2 capsules daily, preferably with a morning meal or light snack.",
        specifications: {
            "Servings": "60 Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, Soy-Free",
            "Storage": "Store in a cool, dry place. Keep bottle sealed tight."
        }
    },
    {
        id: "mv-7",
        name: "Senior Vital 50+ Silver",
        description: "Targeted multivitamin supporting eye health, memory, and longevity.",
        longDescription: "A mature-age multivitamin adjusted to account for age-related absorption changes. Features high doses of Lutein, Lycopene, Vitamin B12, and Joint Comfort elements.",
        price: "$36.99",
        image: "../images/organic.jpg",
        benefits: [
            "Supports macular pigments and visual performance",
            "Promotes joint lubrication, mobility, and ease",
            "Boosts nutrient absorption and circulatory wellness"
        ],
        ingredients: [
            { name: "Vitamin B12", amount: "250 mcg" },
            { name: "Lutein (from Marigold Extract)", amount: "10 mg" },
            { name: "Lycopene", amount: "6 mg" },
            { name: "Glucosamine Sulfate", amount: "500 mg" },
            { name: "Vitamin D3", amount: "25 mcg (1000 IU)" }
        ],
        dosage: "Take 2 tablets daily with meals, or as recommended by a healthcare professional.",
        specifications: {
            "Servings": "60 Tablets",
            "Form": "Slick-Coated Caplets",
            "Certification": "GMP Certified, Low Sodium",
            "Storage": "Store at room temperature. Guard against excess moisture."
        }
    },
    {
        id: "mv-8",
        name: "Pregna-Vitals Prenatal Multi",
        description: "Optimal prenatal vitamin with L-Methylfolate and gentle Chelated Iron.",
        longDescription: "A pure and comprehensive prenatal multivitamin designed to support both mother and baby. Features active folate (L-Methylfolate) for fetal neural development and gentle iron for stomach comfort.",
        price: "$32.99",
        image: "../images/natures.jpg",
        benefits: [
            "Essential for neural tube development and fetal organ growth",
            "Non-constipating chelated iron prevents gestational fatigue",
            "Soothes digestive system with ginger root extract powder"
        ],
        ingredients: [
            { name: "Folate (as L-5-Methyltetrahydrofolate)", amount: "800 mcg DFE" },
            { name: "Iron (as Iron Bisglycinate Chelate)", amount: "27 mg" },
            { name: "Vitamin B6 (as Pyridoxine HCl)", amount: "25 mg" },
            { name: "Ginger Root Extract", amount: "50 mg" }
        ],
        dosage: "Take 1 tablet daily with food, or before bedtime if morning sickness occurs.",
        specifications: {
            "Servings": "60 Tablets",
            "Form": "Easy-Swallow Tablets",
            "Certification": "GMP Certified, Non-GMO Project Verified",
            "Storage": "Store in dry place. Keep container tightly sealed."
        }
    },
    {
        id: "mv-9",
        name: "Daily Balance Organics",
        description: "100% whole-food multi concentrated from organic fruits and herbs.",
        longDescription: "Made entirely from certified organic whole foods, this clean multivitamin provides naturally co-occurring vitamins, minerals, and co-factors for wholesome, balanced nourishment.",
        price: "$42.99",
        image: "../images/multi-4.png",
        benefits: [
            "Highly absorbable plant-derived nutrient matrix",
            "Includes organic digestive enzymes and organic superfood greens",
            "Completely free of synthetic chemical additives"
        ],
        ingredients: [
            { name: "Organic Whole Food Blend (Spinach, Moringa, Cranberry, etc.)", amount: "1000 mg" },
            { name: "Vitamin C (from Organic Amla)", amount: "90 mg" },
            { name: "Vitamin E (from Organic Annatto)", amount: "15 mg" }
        ],
        dosage: "Take 2 tablets daily with or without food.",
        specifications: {
            "Servings": "60 Tablets",
            "Form": "Organic Wholefood Tablets",
            "Certification": "GMP Certified, USDA Organic, Vegan",
            "Storage": "Store in a dry pantry. Do not refrigerate."
        }
    },
    {
        id: "mv-10",
        name: "Vita-Energy Effervescent Active",
        description: "Fizzy orange-flavored drink tablets providing instant energy nutrients.",
        longDescription: "An effervescent multivitamin tablet that dissolves rapidly in water. Loaded with Vitamin C, B-Vitamins, and key electrolytes to rehydrate and recharge the body quickly.",
        price: "$19.99",
        image: "../images/organic.jpg",
        benefits: [
            "Fast-acting effervescent delivery for rapid hydration",
            "High potency B-complex for immediate mental focus",
            "Delicious natural citrus flavor with zero sugar"
        ],
        ingredients: [
            { name: "Vitamin B1 (Thiamine)", amount: "15 mg" },
            { name: "Vitamin B2 (Riboflavin)", amount: "15 mg" },
            { name: "Vitamin B3 (Niacin)", amount: "50 mg" },
            { name: "Vitamin C (Ascorbic Acid)", amount: "1000 mg" },
            { name: "Magnesium (as Sulfate)", amount: "100 mg" }
        ],
        dosage: "Drop 1 tablet into an 8 oz glass of water, let dissolve completely, and drink.",
        specifications: {
            "Servings": "30 Tablets (3 tubes)",
            "Form": "Effervescent Tablets",
            "Certification": "GMP Certified, Sugar-Free",
            "Storage": "Store tubes in a dry place. Keep tubes capped tightly."
        }
    }
];

// Expose globally so products/detail.html can read it dynamically
window.categoryProducts = products;

// Render logic inside category grid
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("productGrid");
    if (grid) {
        grid.innerHTML = products.map(product => `
            <div class="product-card" onclick="viewDetails('${product.id}')">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="short-desc">${product.description}</p>
                    <div class="card-footer">
                        <span class="price">${product.price}</span>
                        <button class="view-btn" onclick="event.stopPropagation(); viewDetails('${product.id}')">View Details</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
});

function viewDetails(productId) {
    window.location.href = `../products/detail.html?category=multivitamins&id=${productId}`;
}
