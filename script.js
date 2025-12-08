/* script.js - FIXED INFINITE LOOP & ADDED NEW PRODUCT */

// Global variable to track current carousel image index
let currentImageIndex = 0;

// --- 1. The Product Database ---
const productsDB = {
    "duckbill-scissors": {
        title: "Professional Duckbill Napping Scissors",
        category: "Tufting Tools & Finishing",
        description: "High carbon steel blade with offset handle. 175mm long with rubber coated handles. Ideal for trimming off loose carpets fibres and imperfections. The offset handle prevents accidental gouging.",
        images: [
            "assets/duckbill.jpg",
            "assets/duckbill1.jpg",
            "assets/duckbill2.jpg",
            "assets/duckbill3.jpg",
            "assets/duckbill4.jpg" 
        ],
        features: ["High carbon steel blade", "Offset handle prevents gouging", "Rubber coated handles", "175mm overall length", "Price: R300"],
        hasColors: false
    },
    "red-electric-scissors": {
        title: "Vloxo Red Cordless Electric Scissors",
        category: "Power Cutting Tools",
        description: "Vloxo red electric scissors are a versatile and powerful cutting tool designed for various materials, including fabric, cardboard, leather, and carpet. Equipped with a rechargeable battery for up to 3-4 hours of continuous cutting time. Ergonomic design reduces hand fatigue.",
        images: [
            "assets/e red.jpg",
            "assets/e red1.jpg",
            "assets/e red3.jpg",
            "assets/e red4.jpg"
        ],
        features: ["Cordless & Rechargeable", "High-speed cutting (up to 10,000 RPM)", "Safety Lock switch", "Cuts fabric, leather, cardboard, carpet", "Price: R1300"],
        hasColors: false 
    },
    "white-electric-scissors": {
        title: "Sleek White Electric Craft Scissors",
        category: "Power Cutting Tools",
        description: "These sleek and modern white electric scissors make cutting a breeze. With their ergonomic design and comfortable grip, you can cut through various materials with ease and precision. Features one button operation and a safety lock.",
        images: [
            "assets/e white.jpg",
            "assets/e white1.jpg",
            "assets/e white2.jpg",
            "assets/e white3.jpg"
        ],
        features: ["Sharp Stainless Steel Blade", "One Button Operation", "Cordless/battery-operated", "Safety Lock", "Price: R1200"],
        hasColors: false
    },
    "backing-fabric": {
        title: "Non-Slip Tufting Backing Fabric (1.8m x 2m)",
        category: "Tufting Essentials",
        description: "Finish your tufted projects with this flexible fabric. This standard backing cloth will protect any flooring or surface. Made of non-woven fabrics, this thick rug backing will provide a non-slip grip.",
        images: [
            "assets/backing.jpg",
            "assets/backing1.jpg",
            "assets/backing2.jpg"
        ],
        features: ["Size: 1.8m x 2m", "Material: Non woven fabrics", "Thick, Non-Slip finish", "Price: R350"],
        hasColors: false
    },
    "primary-fabric": {
        title: "Primary Tufting Fabric with Guide Lines (1.5m x 2m)",
        category: "Tufting Essentials",
        description: "[Easy to Follow Marking] Our Primary Tufting Fabric features a yellow marking line that serves as a guide for precise and even tufting. It is soft, durable, and resistant to wear and tear—the perfect base for your creativity.",
        images: [
            "assets/primary.jpg",
            "assets/primary1.jpg",
            "assets/primary2.jpg",
            "assets/primary3.jpg"
        ],
        features: ["Size: 1.5m x 2m", "Yellow marking lines for guidance", "Durable and resistant to wear", "Price: R350"],
        hasColors: false
    },
    "fabric-combo-bundle": {
        title: "The Complete Tufting Fabric Starter Combo",
        category: "Tufting Bundles",
        description: "Exceptional products for rug makers of all levels. This combo includes our durable Primary Rug Tufting Fabric for effortless tufting, plus our high-grip Backing Fabric to ensure your finished rugs stay securely in place.",
        images: [
            "assets/combo.jpg",
            "assets/combo1.jpg"
        ],
        features: ["Includes: 1.5m x 2m Primary Fabric", "Includes: 1.8m x 2m Backing Fabric", "Superior Durability & Grip", "Price: R800 (Bundle Deal)"],
        hasColors: false
    },
     "trimmer-blades": {
        title: "Tufting Trimmer Spare Blade Set",
        category: "Tool Accessories",
        description: "The Tuft Trimmer Replacement Blade Set is designed to deliver superior precision and performance. Featuring a 38mm DLC Black Diamond Carbon Blade, this set offers the ideal combination of sharpness and durability for removing bulk effectively.",
        images: [
            "assets/blades.jpg",
            "assets/blades1.jpg"
        ],
        features: ["38mm DLC Black Diamond Carbon Blade", "Superior precision and sharpness", "High durability replacement part", "Price: R120"],
        hasColors: false
    },
    "f270-tumbler-press": {
        title: "Freesub Heat Transfer Mug & Tumbler Press F270",
        category: "Customization Station / Sublimation",
        description: "Unlock your creativity with this innovative machine. Create personalized mugs, tumblers, and ceramic items with ease. Features a unique heat-shaped transfer design and a user-friendly interface with adjustable temperature (0-400°C) and time settings for optimal results.",
        images: [
            "assets/free sub.jpg",
            "assets/free sub (2).jpg",
            "assets/free sub (3).jpg",
            "assets/free sub (4).jpg"
        ],
        features: ["Mug & Tumbler compatible", "Unique Heat-Shaped Transfer", "Temp Range: 0-400°C (32-752°F)", "Adjustable Pressure", "Price: R3600"],
        hasColors: false
    },
    "wax-melter-5l": {
        title: "Commercial 5L Wax Melter & Candle Maker Kit",
        category: "Candle & Soap Making",
        description: "Fast heating! This 1200W pot melts 1kg of soy wax in just 10 minutes. With a large 5L capacity (melts 3.5kg at once), it's ideal for small shops or DIY enthusiasts. Features 4-level temp adjustment (70-150°C) and an insulation reminder light.",
        images: [
            "assets/wax-melter.jpg",
            "assets/wax-melter1.jpg",
            "assets/wax-melter2.jpg"
        ],
        features: ["5L Capacity (melts 3.5kg wax)", "Fast Heating 1200W power", "4-Level Temp Adj (70-150°C)", "Includes Jug, Wicks, Wick Holders", "Price: R2400"],
        hasColors: false
    },
    // --- NEW PRODUCT ADDED HERE ---
    "trimmer-with-guide": {
        title: "Rosewood Electric Carpet Carving Trimmer with Guide",
        category: "Tufting Tools & Finishing",
        description: "Achieve precise tuft trimming with ease using this electric trimmer with a customizable shearing guide. Designed for upholstery, furniture, and textile applications, this tool ensures accurate and consistent results. Features high-quality sharp blades and an ergonomic design for comfortable maneuvering.",
        images: [
            "assets/trimmer-guide.jpg",
            "assets/trimmer-guide1.jpg",
            "assets/trimmer-guide2.jpg",
            "assets/trimmer-guide (2).jpg"
        ],
        features: ["Adjustable Guide for precise control", "High-quality sharp stainless steel blades", "Ergonomic comfortable grip", "Adjustable tuft size (approx. 6mm to 25mm)", "Perfect for upholstery and furniture making", "Price: R1100"],
        hasColors: false
    }
};


// --- 2. Function to Load ALL Products onto Homepage ---
function loadHomepageProducts() {
    const gridContainer = document.getElementById('homepage-product-grid');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    Object.keys(productsDB).forEach(id => {
        const prod = productsDB[id];
        const cardHTML = `
            <a href="product-detail.html?id=${id}" class="fun-card">
                <img src="${prod.images[0]}" alt="${prod.title}" class="card-img" onerror="this.onerror=null; this.src='https://via.placeholder.com/300?text=Image+Coming+Soon'">
                <div class="card-content">
                    <h3>${prod.title}</h3>
                    <p style="font-weight: bold; color: var(--primary-purple);">${prod.category}</p>
                    <span class="card-cta">View Details!</span>
                </div>
            </a>
        `;
        gridContainer.innerHTML += cardHTML;
    });
}


// --- 3. The Dynamic Loading Logic for Detail Page (CAROUSEL) ---
function loadProductDetails() {
    if (!window.location.pathname.includes("product-detail.html")) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && productsDB[productId]) {
        const product = productsDB[productId];

        document.getElementById('pd-title').innerText = product.title;
        document.getElementById('pd-category').innerText = product.category;
        document.getElementById('pd-description').innerText = product.description;
        
        // === CAROUSEL IMAGE LOADING ===
        const carouselContainer = document.getElementById('carousel-images-track');
        carouselContainer.innerHTML = ''; 
        currentImageIndex = 0; 

        product.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'carousel-img';
            if (index === 0) img.classList.add('active');
            img.alt = `${product.title} view ${index + 1}`;
            
             img.onerror = function() { 
                 this.onerror = null; // Stop the loop!
                 this.src = 'https://via.placeholder.com/500?text=Image+Not+Found'; 
             };

            carouselContainer.appendChild(img);
        });

        const btns = document.querySelectorAll('.carousel-btn');
        if (product.images.length <= 1) {
            btns.forEach(btn => btn.style.display = 'none');
        } else {
            btns.forEach(btn => btn.style.display = 'block');
        }
        // ==============================

        const featureList = document.getElementById('pd-features');
        featureList.innerHTML = ''; 
        product.features.forEach(feature => {
            let li = document.createElement('li');
            li.innerText = feature;
            featureList.appendChild(li);
        });

        const colorContainer = document.getElementById('pd-colors-wrapper');
        if (product.hasColors) {
            colorContainer.style.display = "block";
            const colorDots = document.getElementById('pd-color-dots');
            colorDots.innerHTML = ''; 
            product.colors.forEach(colorHex => {
                let dot = document.createElement('div');
                dot.className = 'color-dot';
                dot.style.backgroundColor = colorHex;
                colorDots.appendChild(dot);
            });
        } else {
            colorContainer.style.display = "none";
        }

        loadRelatedProducts(productId);

    } else {
        document.querySelector('.container').innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Product not found in database. <br><a href='index.html'>Return Home</a></h2>";
    }
}

// --- 4. New Function to handle Carousel Clicks ---
function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-img');
    if (images.length <= 1) return; 

    images[currentImageIndex].classList.remove('active');
    currentImageIndex += direction;

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    images[currentImageIndex].classList.add('active');
}


// --- 5. Related Products Logic ---
function loadRelatedProducts(currentId) {
    const relatedGrid = document.getElementById('related-grid');
    if (!relatedGrid) return; 
    
    relatedGrid.innerHTML = '';

    Object.keys(productsDB).forEach(id => {
        if (id !== currentId) {
            const prod = productsDB[id];
            const cardHTML = `
                <a href="product-detail.html?id=${id}" class="related-card">
                    <div class="related-image-wrapper">
                        <img src="${prod.images[0]}" alt="${prod.title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300?text=No+Image'">
                    </div>
                    <h4>${prod.title}</h4>
                    <span class="view-link">View Item</span>
                </a>
            `;
            relatedGrid.innerHTML += cardHTML;
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    loadHomepageProducts(); 
    loadProductDetails();
});
