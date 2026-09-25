const products = [
    {
        id: "cs-1",
        name: "Lipo-Iron Liquid Hematinic",
        description: "Liposomal iron syrup designed for maximal red blood cell support with zero digestive discomfort.",
        longDescription: "A clinical-strength liposomal iron syrup, providing high-absorption iron micro-encapsulated in lipids. Specifically engineered to avoid gastric irritation and constipation while raising hemoglobin levels rapidly.",
        price: "$29.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Up to 5x higher absorption rate compared to standard ferrous sulfate",
            "Extremely gentle on the stomach; non-constipating formulation",
            "Pleasant natural berry flavor with no metallic aftertaste"
        ],
        ingredients: [
            { name: "Iron (as Liposomal Iron Pyrophosphate)", amount: "30 mg" },
            { name: "Vitamin B6 (as Pyridoxine HCl)", amount: "5 mg" },
            { name: "Vitamin B12 (as Methylcobalamin)", amount: "100 mcg" },
            { name: "Folic Acid", amount: "400 mcg" }
        ],
        dosage: "Take 10 ml (2 teaspoons) daily, or as recommended by your physician. Shake well before use.",
        specifications: {
            "Volume": "250 ml",
            "Form": "Liposomal Liquid Syrup",
            "Certification": "GMP Certified, Gluten-Free, Soy-Free",
            "Storage": "Refrigerate after opening and consume within 60 days."
        }
    },
    {
        id: "cs-2",
        name: "Tuss-Ease Bronchial Calmer",
        description: "Herbal clinical syrup for calming respiratory spasms and clearing mucus.",
        longDescription: "A soothing bronchial syrup combining clinically studied English Ivy Leaf and Wild Cherry Bark extracts. It acts as an expectorant to thin mucus and calm cough irritations naturally.",
        price: "$18.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Thins lung congestion and aids in expelling stubborn mucus",
            "Calms tickly throats and bronchial airway spasms",
            "Non-drowsy formulation, ideal for daytime and nighttime use"
        ],
        ingredients: [
            { name: "English Ivy Leaf Extract (Hedera helix)", amount: "35 mg" },
            { name: "Wild Cherry Bark Extract", amount: "100 mg" },
            { name: "Thyme Leaf Extract", amount: "50 mg" },
            { name: "Organic Honey base", amount: "2000 mg" }
        ],
        dosage: "Adults take 10 ml every 4-6 hours as needed. Do not exceed 40 ml in 24 hours.",
        specifications: {
            "Volume": "200 ml",
            "Form": "Viscous Expectorant Syrup",
            "Certification": "GMP Certified, Alcohol-Free, Non-Drowsy",
            "Storage": "Store at room temperature. Keep out of direct sunlight."
        }
    },
    {
        id: "cs-3",
        name: "Calcigen-D3 High Absorption Bone Liquid",
        description: "Liquid calcium syrup enriched with Vitamin D3 and K2 for bone mineralization.",
        longDescription: "A highly bioavailable liquid syrup providing calcium citrate, vitamin D3, and vitamin K2 (MK-7) to optimize skeletal strength and ensure calcium is directed to the bones, not the arteries.",
        price: "$25.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Liquid formulation enables fast, complete absorption",
            "Vitamin K2 guides calcium directly into the skeletal matrix",
            "Supports teeth structure and neuromuscular transmission"
        ],
        ingredients: [
            { name: "Calcium (as Citrate)", amount: "600 mg" },
            { name: "Vitamin D3 (Cholecalciferol)", amount: "25 mcg (1000 IU)" },
            { name: "Vitamin K2 (as Menaquinone-7)", amount: "45 mcg" },
            { name: "Magnesium (as Citrate)", amount: "200 mg" }
        ],
        dosage: "Take 15 ml (1 tablespoon) daily, preferably with dinner.",
        specifications: {
            "Volume": "300 ml",
            "Form": "Calibrated Suspension Syrup",
            "Certification": "GMP Certified, Dairy-Free, Gluten-Free",
            "Storage": "Shake well. Store in dry place below 25°C."
        }
    },
    {
        id: "cs-4",
        name: "Elderberry Immune Defender Syrup",
        description: "Triple-action black elderberry concentrate with Vitamin C and Zinc.",
        longDescription: "A potent, highly concentrated Black Elderberry syrup formulated to provide advanced cellular defense during seasonal immune challenges. Fortified with zinc glycinate and vitamin C.",
        price: "$22.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Rich in active anthocyanins for cellular defense",
            "Reduces the severity and duration of seasonal ailments",
            "Antiviral immune support for adults and kids"
        ],
        ingredients: [
            { name: "Black Elderberry Juice Concentrate (Sambucus nigra)", amount: "3800 mg" },
            { name: "Vitamin C (as Ascorbic Acid)", amount: "150 mg" },
            { name: "Zinc (as Zinc Glycinate)", amount: "10 mg" }
        ],
        dosage: "Take 10 ml daily for daily maintenance. Take 10 ml four times daily for intensive support.",
        specifications: {
            "Volume": "120 ml",
            "Form": "Concentrated Juice Syrup",
            "Certification": "GMP Certified, Preservative-Free, Vegan",
            "Storage": "Refrigerate after opening to preserve active enzymes."
        }
    },
    {
        id: "cs-5",
        name: "Lactu-Safe Digestive Regulator",
        description: "Gentle osmotic laxative syrup for restoring natural bowel rhythms.",
        longDescription: "A clinical osmotic prebiotic syrup containing lactulose. It works by drawing water into the colon to soften stools and encourage natural transit without stimulating cramping.",
        price: "$14.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Non-habit forming gentle action suitable for sensitive stomachs",
            "Functions as a prebiotic, feeding beneficial bifidobacteria",
            "Relieves occasional constipation without cramping or urgency"
        ],
        ingredients: [
            { name: "Lactulose", amount: "10 g per 15 ml" }
        ],
        dosage: "Take 15 ml to 30 ml daily. Adjust dose as bowel movement normalizes.",
        specifications: {
            "Volume": "200 ml",
            "Form": "Clear Viscous Syrup",
            "Certification": "GMP Certified, Pharmaceutical Grade",
            "Storage": "Store between 15°C and 30°C. Do not freeze."
        }
    },
    {
        id: "cs-6",
        name: "Seda-Sleep Melatonin & Chamomile",
        description: "Nighttime clinical syrup for sleep induction and biological clock reset.",
        longDescription: "A fast-acting liquid sleep syrup containing pharmaceutical-grade melatonin blended with soothing chamomile, passionflower, and lemon balm extracts to promote deep sleep cycle induction.",
        price: "$21.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Accelerates sleep onset and increases deep sleep cycles",
            "Resets circadian rhythms disturbed by jetlag or shift work",
            "Calms nervous tension before bedtime"
        ],
        ingredients: [
            { name: "Melatonin", amount: "5 mg" },
            { name: "Chamomile Flower Extract", amount: "80 mg" },
            { name: "Passionflower Herb Extract", amount: "100 mg" },
            { name: "L-Theanine", amount: "50 mg" }
        ],
        dosage: "Take 10 ml (2 teaspoons) 30 minutes before sleep. Do not drive after taking.",
        specifications: {
            "Volume": "150 ml",
            "Form": "Relaxing Herbal Syrup",
            "Certification": "GMP Certified, Non-Habit Forming",
            "Storage": "Store at room temperature. Keep away from light."
        }
    },
    {
        id: "cs-7",
        name: "B-Complex + Lysine Appetite Energizer",
        description: "Syrup for children and seniors to stimulate healthy appetite and energy.",
        longDescription: "A therapeutic vitamin syrup combining essential B-Complex vitamins with L-Lysine to assist in recovery from illness, stimulate low appetite, and support metabolic growth in demographics with eating difficulties.",
        price: "$17.99",
        image: "../images/product_syrup.png",
        benefits: [
            "L-Lysine amino acid naturally supports healthy appetite signals",
            "B-Complex assists in protein synthesis and cellular energy conversion",
            "Ideal for post-illness physical recovery"
        ],
        ingredients: [
            { name: "L-Lysine Hydrochloride", amount: "300 mg" },
            { name: "Vitamin B1", amount: "10 mg" },
            { name: "Vitamin B2", amount: "5 mg" },
            { name: "Vitamin B6", amount: "5 mg" },
            { name: "Vitamin B12", amount: "25 mcg" }
        ],
        dosage: "Children: 5 ml daily. Adults: 10 ml twice daily before meals.",
        specifications: {
            "Volume": "250 ml",
            "Form": "Orange Flavor Tonic Syrup",
            "Certification": "GMP Certified, Sugar-Free",
            "Storage": "Store in a cool dry place. Prevent freezing."
        }
    },
    {
        id: "cs-8",
        name: "L-Carnitine Liquid Burn 3000",
        description: "High-dose L-Carnitine syrup for fat metabolism and cellular energy.",
        longDescription: "A clinical-strength amino acid syrup providing 3000 mg of pure L-Carnitine per serving. Transports long-chain fatty acids into mitochondria to be burned for fuel, maximizing endurance.",
        price: "$27.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Converts stored body fat into usable physical energy",
            "Improves athletic stamina and recovery rate",
            "Rapid absorption rate compared to standard carnitine capsules"
        ],
        ingredients: [
            { name: "L-Carnitine (Free Form)", amount: "3000 mg per 15 ml" },
            { name: "Pantothenic Acid (Vitamin B5)", amount: "10 mg" }
        ],
        dosage: "Take 15 ml daily, ideally 30 minutes before exercise or on an empty stomach in the morning.",
        specifications: {
            "Volume": "473 ml",
            "Form": "Liquid Thermogenic Syrup",
            "Certification": "GMP Certified, Sugar-Free, Zero Calories",
            "Storage": "Store in a cool place. Refrigeration is not required."
        }
    },
    {
        id: "cs-9",
        name: "Co-Dimate Anti-Reflux Gavis-Gel",
        description: "Sodium alginate syrup forming a protective raft to block stomach acid reflux.",
        longDescription: "An advanced reflux syrup that forms a physical protective gel barrier (raft) on top of the stomach contents. Prevents gastric acid from ascending into the esophagus, relieving heartburn.",
        price: "$19.99",
        image: "../images/product_syrup.png",
        benefits: [
            "Immediate relief from burning acid indigestion",
            "Creates physical barrier that lasts up to 4 hours",
            "Contains no systemically absorbed systemic antacids"
        ],
        ingredients: [
            { name: "Sodium Alginate", amount: "500 mg" },
            { name: "Potassium Bicarbonate", amount: "100 mg" },
            { name: "Calcium Carbonate", amount: "150 mg" }
        ],
        dosage: "Take 10 ml to 20 ml after meals and at bedtime, or as directed by a doctor.",
        specifications: {
            "Volume": "200 ml",
            "Form": "Viscous Suspension Gel",
            "Certification": "GMP Certified, Sugar-Free",
            "Storage": "Do not refrigerate. Store below 30°C."
        }
    },
    {
        id: "cs-10",
        name: "D-3 Premium Drops 5000 IU",
        description: "Concentrated Vitamin D3 syrup for correction of clinical deficiency.",
        longDescription: "A concentrated, oil-soluble D3 syrup providing high potency Vitamin D3 in an olive oil base. Designed to treat moderate to severe Vitamin D deficiency and support skeletal and immune systems.",
        price: "$23.99",
        image: "../images/product_syrup.png",
        benefits: [
            "5000 IU per milliliter for rapid correction of vitamin deficits",
            "Dissolved in premium organic extra virgin olive oil for maximum solubility",
            "Maintains calcium homeostasis and supports cognitive health"
        ],
        ingredients: [
            { name: "Vitamin D3 (Cholecalciferol)", amount: "125 mcg (5000 IU) per ml" }
        ],
        dosage: "Take 1 ml (20 drops) daily with a meal, or as directed by a healthcare professional.",
        specifications: {
            "Volume": "50 ml",
            "Form": "Oil-Based Drops",
            "Certification": "GMP Certified, Preservative-Free",
            "Storage": "Keep in dark, dry place. Do not freeze."
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
    window.location.href = `../products/detail.html?category=clinical-syrups&id=${productId}`;
}
