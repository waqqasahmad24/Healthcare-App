const products = [
    {
        id: "pb-1",
        name: "Pro-Core Whey Peanut Crunch",
        description: "High-protein whey crisp bar with roasted peanuts and sugar-free chocolate coating.",
        longDescription: "Our flagship protein bar engineered for muscle hypertrophy and recovery. Loaded with 22g of micro-filtered whey protein isolate, real dry-roasted peanuts, and a sugar-free premium milk chocolate shell.",
        price: "$28.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "Provides 22g of fast-digesting Whey Protein Isolate and Concentrate",
            "Only 2g of active impact sugars; keto-compliant dietary fiber ratio",
            "Satisfying crunchy crisp texture with real peanuts"
        ],
        ingredients: [
            { name: "Whey Protein Blend (Isolate & Concentrate)", amount: "22 g" },
            { name: "Roasted Peanuts", amount: "8 g" },
            { name: "Prebiotic Soluble Corn Fiber", amount: "12 g" },
            { name: "Erythritol (Sweetener)", amount: "6 g" }
        ],
        dosage: "Consume 1 bar immediately post-workout, or as a high-protein snack between meals.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "60g per Bar",
            "Certification": "GMP Certified, Gluten-Free, Kosher",
            "Storage": "Store in a cool, dry place. Keep away from heat to prevent melting."
        }
    },
    {
        id: "pb-2",
        name: "Keto Keto-Fudge Almond Butter",
        description: "High-fat, low-carb functional bar formulated for ketogenic nutritional states.",
        longDescription: "A specialized performance nutrition bar designed to support nutritional ketosis. Blended with creamy almond butter, grass-fed collagen peptides, and MCT oil fats to boost ketone output.",
        price: "$32.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "Rich in clean fats (14g) to fuel brain power and sustained stamina",
            "Zero added sugar and less than 3g net carbs per bar",
            "Features Hydrolyzed Bovine Collagen for joint and skin health"
        ],
        ingredients: [
            { name: "Almond Butter", amount: "12 g" },
            { name: "Grass-Fed Hydrolyzed Collagen", amount: "10 g" },
            { name: "Medium Chain Triglyceride (MCT) Oil", amount: "3 g" },
            { name: "Cocoa Butter & Unsweetened Chocolate", amount: "6 g" }
        ],
        dosage: "Eat 1 bar as a meal replacement or high-fat fuel snack before strenuous tasks.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "55g per Bar",
            "Certification": "GMP Certified, Keto Certified, Gluten-Free",
            "Storage": "Store below 22°C. Refrigeration optional for firmer texture."
        }
    },
    {
        id: "pb-3",
        name: "Plant-Power Salted Caramel Vegan",
        description: "Pea and brown rice protein bar with organic salted caramel coating.",
        longDescription: "A delicious 100% plant-based protein bar combining high-purity pea and organic brown rice isolates. Drizzled in a rich organic caramel sauce and sea salt, providing full amino acid coverage.",
        price: "$29.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "20g complete plant protein with optimal BCAA profile",
            "Sweetened with organic monk fruit; no soy or synthetic sweeteners",
            "Gentle on digestion, lactose-free and allergen-friendly"
        ],
        ingredients: [
            { name: "Plant Protein Blend (Pea & Rice Protein)", amount: "20 g" },
            { name: "Organic Almond Butter", amount: "10 g" },
            { name: "Organic Sea Salt & Natural Caramel Flavor", amount: "0.5 g" },
            { name: "Soluble Tapioca Fiber", amount: "14 g" }
        ],
        dosage: "Perfect as a vegan meal addition, snack, or post-workout nutrient replenishment.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "65g per Bar",
            "Certification": "GMP Certified, 100% Vegan, Non-GMO",
            "Storage": "Store at room temperature in a dry pantry."
        }
    },
    {
        id: "pb-4",
        name: "Lean-Burn L-Carnitine Double Fudge",
        description: "Metabolism-boosting protein bar with added L-Carnitine and Green Tea extract.",
        longDescription: "A weight management protein bar delivering 15g protein along with therapeutic amounts of L-Carnitine Tartrate and Green Tea extract to help promote thermogenesis and fat oxidation.",
        price: "$27.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "Supports fat metabolism and energy conversion with 1000mg L-Carnitine",
            "High satiety prebiotic fibers reduce mid-day sweet cravings",
            "Under 190 calories, making it a perfect low-calorie diet companion"
        ],
        ingredients: [
            { name: "Milk Protein Isolate", amount: "15 g" },
            { name: "L-Carnitine L-Tartrate", amount: "1000 mg" },
            { name: "Green Tea Extract (EGCG)", amount: "250 mg" },
            { name: "Cocoa Powder", amount: "4 g" }
        ],
        dosage: "Consume 1 bar 45 minutes prior to fat-burning exercise, or as a snack between breakfast and lunch.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "50g per Bar",
            "Certification": "GMP Certified, Low Fat, Sugar-Free",
            "Storage": "Store in cool, dry conditions below 24°C."
        }
    },
    {
        id: "pb-5",
        name: "Max-Mass Oats & Whey Bar",
        description: "Heavyweight meal replacement bar packed with complex carbs and whey.",
        longDescription: "Designed for hardgainers and high-energy athletes. A massive, nutrient-dense bar combining rolled organic oats, sweet honey, and premium whey to provide glycogen replenishment and muscle blocks.",
        price: "$34.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "30g high-grade proteins for sustained protein synthesis",
            "45g clean complex carbohydrates for glycogen reloading",
            "Keeps athletes fueled for hours during long endurance workouts"
        ],
        ingredients: [
            { name: "Organic Rolled Oats", amount: "25 g" },
            { name: "Whey Protein Concentrate & Soy Nuggets", amount: "30 g" },
            { name: "Natural Honey & Raisins", amount: "12 g" },
            { name: "MCT Fats", amount: "5 g" }
        ],
        dosage: "Eat 1 bar as a heavy meal replacement or 2 hours prior to extensive training blocks.",
        specifications: {
            "Pack Size": "10 Bars per Box",
            "Weight": "100g per Bar",
            "Certification": "GMP Certified, High Calorie",
            "Storage": "Store at room temperature. Do not expose to humidity."
        }
    },
    {
        id: "pb-6",
        name: "Fiber-Fit Oats & Berry Clean",
        description: "Prebiotic dietary fiber bar with blueberries, oats, and collagen.",
        longDescription: "Focuses on gastrointestinal regularity and skin collagen replenishment. Combines soluble prebiotics with real dried wild blueberries, steel-cut oats, and hydrolyzed marine collagen.",
        price: "$26.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "Delivers 15g of soluble prebiotic fiber to feed healthy gut flora",
            "Supports skin elasticity and joint hydration with 5g Marine Collagen",
            "Low glycemic load prevents blood glucose spikes"
        ],
        ingredients: [
            { name: "Marine Collagen Peptides", amount: "5 g" },
            { name: "Organic Blueberries (Dried)", amount: "6 g" },
            { name: "Soluble Tapioca Fiber", amount: "15 g" },
            { name: "Milk Protein Isolate", amount: "10 g" }
        ],
        dosage: "Enjoy 1 bar daily with a large glass of water to maximize fiber swelling and satiety.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "50g per Bar",
            "Certification": "GMP Certified, Preservative-Free",
            "Storage": "Keep in a cool dry space, out of sunlight."
        }
    },
    {
        id: "pb-7",
        name: "Superfood Greens & Matcha Energy",
        description: "Plant-protein bar packed with spirulina, chlorella, and organic matcha green tea.",
        longDescription: "An alkalizing green energy bar. Blends plant-based pea proteins with a therapeutic scoop of organic super greens, antioxidant-rich matcha powder, and sweet organic dates.",
        price: "$31.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "Contains natural matcha caffeine for clean, jitter-free focus",
            "Provides trace elements and chlorophyll from spirulina and chlorella",
            "100% cold-processed raw ingredients to preserve live enzymes"
        ],
        ingredients: [
            { name: "Organic Matcha Green Tea Powder", amount: "1.5 g" },
            { name: "Alkalizing Green Blend (Spirulina, Chlorella, Wheatgrass)", amount: "3 g" },
            { name: "Pea Protein Isolate", amount: "15 g" },
            { name: "Organic Date Paste", amount: "10 g" }
        ],
        dosage: "Eat 1 bar in the afternoon as a healthy energy booster instead of coffee.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "55g per Bar",
            "Certification": "GMP Certified, Raw, Organic, Vegan",
            "Storage": "Store below 20°C. Can be refrigerated to preserve freshness."
        }
    },
    {
        id: "pb-8",
        name: "Chia-Crisp Cranberry Almond",
        description: "Crunchy bar packed with chia seeds, cranberries, and almond slices.",
        longDescription: "An omega-3 rich crunch bar combining whole chia seeds, sliced raw almonds, and tart cranberries bound together with natural organic honey and whey crisps. Excellent heart healthy snack.",
        price: "$27.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "Rich source of plant-derived Omega-3 (Alpha-Linolenic Acid)",
            "High antioxidant load from real dried cranberries",
            "Light, crispy texture makes it easy to digest during activity"
        ],
        ingredients: [
            { name: "Organic Chia Seeds", amount: "6 g" },
            { name: "Sliced Raw Almonds", amount: "12 g" },
            { name: "Dried Cranberries (Sweetened with Apple Juice)", amount: "8 g" },
            { name: "Whey Protein Crisps", amount: "15 g" }
        ],
        dosage: "Consume before or during moderate endurance exercises like cycling or hiking.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "50g per Bar",
            "Certification": "GMP Certified, Natural Flavors Only",
            "Storage": "Store at room temperature in dark conditions."
        }
    },
    {
        id: "pb-9",
        name: "Pro-Burn Cookie Dough Whey Isolate",
        description: "Soft cookie dough flavored whey bar with sugar-free chocolate chips.",
        longDescription: "An incredibly soft, gourmet protein bar designed to taste like authentic cookie dough. Packed with high-purity whey protein isolate, prebiotic fiber, and unsweetened sugar-free dark chocolate chips.",
        price: "$30.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "21g pure Whey Protein Isolate for clean muscle recovery",
            "Extremely soft texture that doesn't harden over time",
            "Keto-friendly recipe; no artificial flavors or dyes"
        ],
        ingredients: [
            { name: "Whey Protein Isolate", amount: "21 g" },
            { name: "Cashew Butter", amount: "8 g" },
            { name: "Sugar-Free Chocolate Chips", amount: "5 g" },
            { name: "Stevia Extract (Sweetener)", amount: "0.1 g" }
        ],
        dosage: "Take 1 bar after workouts or simply as a healthy dessert alternative.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "60g per Bar",
            "Certification": "GMP Certified, Gluten-Free",
            "Storage": "Store in a cool cupboard away from heat vents."
        }
    },
    {
        id: "pb-10",
        name: "Sleep-Ease Nighttime Chocolate Cherry",
        description: "Nighttime protein bar with calming tart cherry and chamomile.",
        longDescription: "A unique nighttime snack providing slow-digesting micellar casein protein to feed muscles overnight, coupled with natural tart cherry concentrate (containing melatonin) and calming chamomile.",
        price: "$29.99",
        image: "../images/product_protein_bar.png",
        benefits: [
            "Micellar casein delivers slow-release amino acids for up to 7 hours",
            "Tart cherry extract promotes natural melatonin production",
            "Soothes muscle spasms and prepares body for sleep"
        ],
        ingredients: [
            { name: "Micellar Casein Protein", amount: "15 g" },
            { name: "Tart Cherry Juice Concentrate", amount: "3 g" },
            { name: "Chamomile Flower Extract", amount: "150 mg" },
            { name: "Almond Butter", amount: "6 g" }
        ],
        dosage: "Eat 1 bar 45-60 minutes before bedtime to prevent overnight muscle breakdown and aid rest.",
        specifications: {
            "Pack Size": "12 Bars per Box",
            "Weight": "55g per Bar",
            "Certification": "GMP Certified, Low Glycemic",
            "Storage": "Store below 22°C. Keep protected from humidity."
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
    window.location.href = `../products/detail.html?category=protein-bars&id=${productId}`;
}
