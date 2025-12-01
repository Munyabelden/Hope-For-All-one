/* script.js */

// --- 1. The Product Database (Keep this exactly the same) ---
const productsDB = {
    "f270-heat-press": {
        title: "The Ultimate Family Memory Maker (F270 Heat Press)",
        category: "Customization Station",
        description: "Forget boring gifts. This isn't just a machine; it's a magic wand that turns children's artwork, treasured family photos, or inside jokes into permanent, professional-grade mugs and tumblers. The unique heart-shaped transfer capability adds an extra touch of love that you can't find anywhere else. Safe enough for supervised family craft nights, powerful enough for professional results.",
        image: "assets/heat press.webp",
        features: ["Fits Mugs & Tumblers", "Exclusive Heart Transfer Mode", "Digital Temp Control for Safety"],
        hasColors: false
    },
    "tufting-bundle": {
        title: "Complete Rug Tufting Fabric Start-Up",
        category: "Fiber Arts & Rug Making",
        description: "Ready to make that fluffy rug you've seen on social media? This is your foundation. We supply the professional-grade Primary Fabric (your canvas) and the essential non-slip Backing Fabric to finish it off. Available in bundles to get you started faster, or grab them individually at your local shop as you need them.",
        image: "assets/turfting rug.jpg",
        features: ["Durable Primary Canvas", "Non-Slip Finish Backing", "Available Singly or Bundled"],
        hasColors: false
    },
    "tufting-tools": {
        title: "Pro-Level Tufting Sculpting Tools",
        category: "Fiber Arts & Rug Making",
        description: "Take your yarn art from 'fuzzy' to 'fantastic'. Our precision Tufting Trimmer and the accompanying Shearing Guide allow you to carve 3D effects, level out pile heights, and give your rugs a professional, crisp finish. It's satisfying yarn-sculpting action!",
        image: "assets/Trimming tools.jpg",
        features: ["Ergonomic Trimmer Grip", "Clear Acrylic Guide for Accuracy", "Create 3D Textures"],
        hasColors: false
    },
    "electric-scissors": {
        title: "Zip-Snip Electric Craft Scissors",
        category: "Kid-Friendly Crafts",
        description: "Make cutting out hundreds of shapes fun instead of a chore! These electric scissors are a game-changer for scrapbookers, fabric crafters, and parents helping with school projects. They zip through materials safely and easily, saving your hands and speeding up the fun part of creating.",
        image: "assets/electric scissors.avif",
        features: ["Battery Operated Action", "Safe-Cut Design", "Great for varied materials"],
        hasColors: true,
        colors: ["#2196F3", "#ffffff", "#F44336", "#4CAF50"] // Using actual hex codes for the dots
    }
};

// --- 2. The Main Dynamic Loading Logic ---
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && productsDB[productId]) {
        const product = productsDB[productId];

        // --- Existing code that populates the main area ---
        document.getElementById('pd-title').innerText = product.title;
        document.getElementById('pd-category').innerText = product.category;
        document.getElementById('pd-description').innerText = product.description;
        const imgElement = document.getElementById('pd-image');
        imgElement.src = product.image;
        imgElement.alt = product.title;

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

        // === NEW ADDITION HERE ===
        // Once the main product loads, run the function to load the others.
        // We pass the 'productId' so it knows which one to skip.
        loadRelatedProducts(productId);
        // =========================


    } else {
        document.querySelector('.container').innerHTML = "<h2>Oh no! Product not found. Head back home.</h2>";
    }
}


// --- NEW FUNCTION: Load Related Products ---
function loadRelatedProducts(currentId) {
    const relatedGrid = document.getElementById('related-grid');
    // Clear anything currently there just in case
    relatedGrid.innerHTML = '';

    // Loop through every product ID in our database object
    Object.keys(productsDB).forEach(id => {
        // THE CRITICAL STEP: Only proceed if the ID is NOT the current one
        if (id !== currentId) {
            const prod = productsDB[id];
            
            // Create the HTML for a mini-card using a template string
            const cardHTML = `
                <a href="product-detail.html?id=${id}" class="related-card">
                    <div class="related-image-wrapper">
                        <img src="${prod.image}" alt="${prod.title}">
                    </div>
                    <h4>${prod.title}</h4>
                    <span class="view-link">View Item</span>
                </a>
            `;

            // Add this card to the grid container
            relatedGrid.innerHTML += cardHTML;
        }
    });
}


// Only run this logic if we are on the product-detail.html page
if (window.location.pathname.includes("product-detail.html")) {
    window.addEventListener('DOMContentLoaded', loadProductDetails);
}
