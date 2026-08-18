const products = [
    {
        id: "ss-1",
        name: "Pro-Biotix Ultra Gut Complex",
        description: "Clinical grade multi-strain probiotic capsules containing 50 Billion CFU and prebiotics.",
        longDescription: "Our flagship specialty supplement for gut health. Formulated with 12 clinically researched probiotic strains and prebiotic organic inulin inside acid-resistant delayed-release capsules to guarantee delivery to the lower colon.",
        price: "$39.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Restores beneficial digestive flora and supports bowel regularity",
            "Bolsters immune systems, as 70% of immune cells reside in the gut",
            "Delayed-release capsules protect bacteria from stomach acids"
        ],
        ingredients: [
            { name: "Probiotic Strain Blend (L. acidophilus, B. lactis, etc.)", amount: "50 Billion CFU" },
            { name: "Organic Jerusalem Artichoke Inulin (Prebiotic)", amount: "150 mg" },
            { name: "Fructooligosaccharides (FOS)", amount: "50 mg" }
        ],
        dosage: "Take 1 capsule daily with a glass of water, ideally on an empty stomach in the morning.",
        specifications: {
            "Servings": "30 Delayed-Release Capsules",
            "Form": "Acid-Resistant Capsules",
            "Certification": "GMP Certified, Dairy-Free, Vegan",
            "Storage": "Refrigeration recommended but not required. Shelf stable below 23°C."
        }
    },
    {
        id: "ss-2",
        name: "Ultra Joint Flex Protect",
        description: "Synergistic joint support blend with Glucosamine, Chondroitin, and Turmeric.",
        longDescription: "A specialized joint health formulation combining clinical doses of Glucosamine Sulfate, Chondroitin, Methylsulfonylmethane (MSM), and standardized Turmeric extract to reduce joint discomfort and support cartilage repair.",
        price: "$35.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Promotes joint lubrication, cushioning, and cartilage rebuilding",
            "Reduces systemic swelling and post-exercise joint soreness",
            "Enriched with black pepper extract to increase turmeric absorption by 2000%"
        ],
        ingredients: [
            { name: "Glucosamine Sulfate 2KCl", amount: "1500 mg" },
            { name: "Chondroitin Sulfate Sodium", amount: "800 mg" },
            { name: "MSM (Methylsulfonylmethane)", amount: "500 mg" },
            { name: "Turmeric Root Extract (95% Curcuminoids)", amount: "200 mg" },
            { name: "Bioperine (Black Pepper Extract)", amount: "5 mg" }
        ],
        dosage: "Take 3 capsules daily with a meal, or as directed by your healthcare professional.",
        specifications: {
            "Servings": "90 Capsules (30-day supply)",
            "Form": "Bovine Gelatin Capsules",
            "Certification": "GMP Certified, Shellfish-Derived",
            "Storage": "Store in a cool dry place. Keep container closed."
        }
    },
    {
        id: "ss-3",
        name: "Max-Strength Omega-3 Fish Oil",
        description: "Triple strength molecularly distilled fish oil providing 1200mg EPA/DHA.",
        longDescription: "A pharmaceutical-grade wild-caught fish oil concentrate. Undergoes molecular distillation to eliminate heavy metals, PCBs, and impurities, providing heavy doses of active EPA and DHA fatty acids in enterically coated capsules.",
        price: "$29.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Supports cardiovascular system, arterial flexibility, and heart rhythms",
            "Essential for neurological function, cognitive focus, and mood regulation",
            "Enteric coating prevents fishy burps and digestive backflow"
        ],
        ingredients: [
            { name: "Purified Fish Oil Concentrate (Wild Anchovy, Sardine)", amount: "2000 mg" },
            { name: "EPA (Eicosapentaenoic Acid)", amount: "800 mg" },
            { name: "DHA (Docosahexaenoic Acid)", amount: "400 mg" }
        ],
        dosage: "Take 2 softgels daily with a meal containing fats.",
        specifications: {
            "Servings": "60 Softgels",
            "Form": "Enteric-Coated Softgels",
            "Certification": "GMP Certified, Friend of the Sea Certified",
            "Storage": "Store in dark cupboard below 21°C."
        }
    },
    {
        id: "ss-4",
        name: "Cognitive Alpha GPC Brain Booster",
        description: "Highly bioavailable choline compound for memory, acetylcholine, and focus.",
        longDescription: "A premium nootropic supplement providing Alpha GPC (L-alpha-glycerylphosphorylcholine), the most bioavailable source of choline. Crosses the blood-brain barrier to support memory formation.",
        price: "$44.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Direct precursor to Acetylcholine, the learning neurotransmitter",
            "Improves memory recall, mental processing speed, and focus",
            "Promotes physical power output and growth hormone secretion in athletes"
        ],
        ingredients: [
            { name: "Alpha GPC (L-alpha-glycerylphosphorylcholine 50%)", amount: "600 mg" }
        ],
        dosage: "Take 2 capsules daily, preferably with a morning meal or light snack.",
        specifications: {
            "Servings": "60 Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, Soy-Free, Non-GMO",
            "Storage": "Hygrascopic capsules. Keep desiccant packet in bottle and seal tightly."
        }
    },
    {
        id: "ss-5",
        name: "Adrenal Calm adaptogen complex",
        description: "Stress-relieving botanical formulation with Ashwagandha, Rhodiola, and L-Theanine.",
        longDescription: "Formulated to combat chronic adrenal fatigue and cortisol imbalance. Combines clinically-studied KSM-66 Ashwagandha, Siberian Rhodiola Rosea, and calming L-Theanine to promote relaxed alert states.",
        price: "$32.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Regulates elevated cortisol levels to reduce physical anxiety",
            "Prevents mid-day energy crashes and fatigue caused by stress",
            "Improves sleep quality and calms overactive minds"
        ],
        ingredients: [
            { name: "KSM-66 Ashwagandha Root Extract (5% Withanolides)", amount: "600 mg" },
            { name: "Rhodiola Rosea Root Extract (3% Rosavins)", amount: "200 mg" },
            { name: "L-Theanine", amount: "200 mg" },
            { name: "Magnesium (as Glycinate)", amount: "100 mg" }
        ],
        dosage: "Take 2 capsules daily, either in the morning or split (1 morning, 1 night).",
        specifications: {
            "Servings": "60 Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, Vegan, Gluten-Free",
            "Storage": "Store at room temperature in a dry drawer."
        }
    },
    {
        id: "ss-6",
        name: "Liposomal Glutathione Skin Radiance",
        description: "Master antioxidant syrup in capsules for cellular detoxification and skin glow.",
        longDescription: "A clinical dose of Setria L-Glutathione encapsulated in liposomes to bypass stomach digestion. Acts as a master liver detoxifier, cells protector, and reduces melanin synthesis for skin evening.",
        price: "$49.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Master cellular antioxidant: recycles other cellular antioxidants like Vitamin C & E",
            "Promotes natural liver detoxification pathways",
            "Supports skin brightness and reduces hyperpigmentation patches"
        ],
        ingredients: [
            { name: "Setria L-Glutathione (Reduced Form)", amount: "500 mg" },
            { name: "Sunflower Phosphatidylcholine Complex (Liposomal)", amount: "400 mg" }
        ],
        dosage: "Take 2 capsules daily with water on an empty stomach.",
        specifications: {
            "Servings": "30 Servings (60 Capsules)",
            "Form": "Liposomal Gel Capsules",
            "Certification": "GMP Certified, Allergen-Free",
            "Storage": "Store in dry place below 22°C. Protect from heat."
        }
    },
    {
        id: "ss-7",
        name: "Collagen-Skin Peptide Renew",
        description: "Hydrolyzed Type I & III Grass-Fed Collagen peptides with Hyaluronic Acid.",
        longDescription: "A beauty-focused collagen powder supplement containing pure pasture-raised hydrolyzed bovine peptides. Fortified with Hyaluronic Acid and Vitamin C to support hair strength and skin moisture matrix.",
        price: "$37.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Replenishes natural skin collagen levels which decline after age 25",
            "Hyaluronic acid retains moisture, plumping skin structure",
            "Strengthens thin hair follicles and reduces nail brittleness"
        ],
        ingredients: [
            { name: "Hydrolyzed Bovine Collagen Peptides (Type I & III)", amount: "10,000 mg" },
            { name: "Hyaluronic Acid (as Sodium Hyaluronate)", amount: "120 mg" },
            { name: "Vitamin C (as Ascorbic Acid)", amount: "90 mg" }
        ],
        dosage: "Mix 1 scoop daily into 8 oz of your favorite warm or cold beverage (coffee, tea, juice).",
        specifications: {
            "Servings": "30 Scoops per Tub",
            "Form": "Unflavored Powder",
            "Certification": "GMP Certified, Grass-Fed, Paleo-Friendly",
            "Storage": "Store in a dry cupboard. Seal tub tight after use."
        }
    },
    {
        id: "ss-8",
        name: "Sleep-Max 5-HTP Rest Complex",
        description: "Precursor formula for Serotonin and Melatonin synthesis to encourage deep REM sleep.",
        longDescription: "A specialized sleep complex providing 5-HTP (5-Hydroxytryptophan) along with synergistic co-factors like Magnesium and Valerian Root to optimize the natural sleep-wake cycle.",
        price: "$26.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Converts directly into Serotonin, which stabilizes mood and sleep",
            "Increases restorative REM sleep stages",
            "Soothes muscle restlessness and relaxes neural activity"
        ],
        ingredients: [
            { name: "5-HTP (from Griffonia simplicifolia Seed Extract)", amount: "100 mg" },
            { name: "Valerian Root Extract", amount: "300 mg" },
            { name: "Magnesium (as Bisglycinate)", amount: "150 mg" },
            { name: "Melatonin", amount: "3 mg" }
        ],
        dosage: "Take 1 capsule 45 minutes before sleep with a small glass of water.",
        specifications: {
            "Servings": "60 Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, Vegan",
            "Storage": "Store in dry place. Do not drive or operate machinery after ingestion."
        }
    },
    {
        id: "ss-9",
        name: "Thyroid T3-T4 Support Formula",
        description: "Optimized mineral and adaptogen blend for thyroid and metabolic health.",
        longDescription: "A targeted formulation containing Iodine, Selenium, L-Tyrosine, and Ashwagandha. Designed to support normal T3 and T4 thyroid hormone conversion and maintain a healthy, active metabolism.",
        price: "$28.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Provides essential substrates Iodine and Tyrosine for thyroid hormones",
            "Selenium acts as a key catalyst in hormone conversion pathways",
            "Combats cold sensitivity, sluggishness, and slow thyroid function"
        ],
        ingredients: [
            { name: "Iodine (from Organic Kelp)", amount: "150 mcg" },
            { name: "Selenium (as L-Selenomethionine)", amount: "200 mcg" },
            { name: "L-Tyrosine", amount: "500 mg" },
            { name: "Ashwagandha Extract", amount: "200 mg" },
            { name: "Vitamin B12 (as Methylcobalamin)", amount: "100 mcg" }
        ],
        dosage: "Take 2 capsules daily, preferably with breakfast.",
        specifications: {
            "Servings": "60 Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, Vegetarian",
            "Storage": "Keep in cool dry cupboard."
        }
    },
    {
        id: "ss-10",
        name: "Pro-Digest Enzyme Multi",
        description: "Full-spectrum vegetarian digestive enzymes to ease bloating and gas.",
        longDescription: "A clinical complex of 15 vegetarian digestive enzymes, including Amylase, Protease, Lipase, Lactase, and Cellulase. Designed to enhance nutrient absorption and break down proteins, fats, fibers, and dairy.",
        price: "$24.99",
        image: "../images/product_specialty.png",
        benefits: [
            "Prevents occasional gas, bloating, and indigestion after meals",
            "Lactase enzyme breaks down lactose in milk and dairy products",
            "Enables superior nutrient extraction from daily meals"
        ],
        ingredients: [
            { name: "Amylase (Carb Digest)", amount: "20,000 DU" },
            { name: "Protease (Protein Digest)", amount: "50,000 HUT" },
            { name: "Lipase (Fat Digest)", amount: "3,000 FIP" },
            { name: "Lactase (Dairy Digest)", amount: "1,000 ALU" },
            { name: "Cellulase (Fiber Digest)", amount: "2,000 CU" }
        ],
        dosage: "Take 1 capsule at the start of each major meal.",
        specifications: {
            "Servings": "60 Capsules",
            "Form": "Vegetable Capsules",
            "Certification": "GMP Certified, 100% Vegetarian Strains",
            "Storage": "Keep in cool dry place. Do not freeze."
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
    window.location.href = `../products/detail.html?category=specialty-supplements&id=${productId}`;
}
