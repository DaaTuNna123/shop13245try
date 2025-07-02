
const productsData = [
    {
        id: 1,
        image: "pc1.png",
        category: "PC",
        name: "ULTRA PC Intel Core I5-12400F Asus PRIME H610M-R SSD 512GB 16GB RTX3050 6GB",
        price: 626,
        rating: 5
    },
    {
        id: 2,
        image: "pc2.png",
        category: "PC",
        name: "ROG STRIX GAMING RTX4090",
        price: 1799.99,
        rating: 5
    },
    {
        id: 3,
        image: "pc3.png",
        category: "PC",
        name: "Intel Core i7",
        price: 329.99,
        rating: 3
    },
    {
        id: 4,
        image: "pc4.png",
        category: "PC",
        name: "Corsair H150",
        price: 129.99,
        rating: 4
    },
    {
        id: 5,
        image: "pc5.png",
        category: "PC",
        name: "Logitech G305",
        price: 49.99,
        rating: 4
    },
    {
        id: 6,
        image: "pc6.png",
        category: "Keyboard",
        name: "Keychron V2",
        price: 79.99,
        rating: 2
    },
    {
        id: 7,
        image: "pc7.png",
        category: "PC",
        name: "HyperX QuadCast",
        price: 139.99,
        rating: 3
    },
    {
        id: 8,
        image: "pc8.png",
        category: "PC",
        name: "HyperX Cloud 3",
        price: 99.99,
        rating: 3
    }
];

// Function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<li><i class="fa fa-star checked"></i></li>';
        } else {
            stars += '<li><i class="fa fa-star"></i></li>';
        }
    }
    return stars;
}

// Function to render products
function renderProducts(products) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'content';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="shp">${product.category}</h3>
            <p>${product.name}</p>
            <h6>$${product.price.toFixed(2)}</h6>
            <ul>
                ${generateStarRating(product.rating)}
            </ul>
            <button class="buy-1">Buy Now</button>
        `;
        gallery.appendChild(productElement);
    });
    
    // Add event listeners to buy buttons
    document.querySelectorAll('.buy-1').forEach(button => {
        button.addEventListener('click', function() {
            // Add to cart functionality can be implemented here
            alert('Product added to cart!');
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render products on page load
    renderProducts(productsData);
    
    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slider-indicator');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    const intervalTime = 3000;
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
        resetAutoSlide();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
        resetAutoSlide();
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, intervalTime);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Initialize slider
    updateSlider();
    startAutoSlide();
    
    // Add event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateSlider();
            resetAutoSlide();
        });
    });
    
    // Price filtering functionality
    const priceSortSelect = document.getElementById('price-sort');
    
    priceSortSelect.addEventListener('change', function() {
        const sortOrder = this.value;
        if (!sortOrder) {
            renderProducts(productsData);
            return;
        }
        
        const sortedProducts = [...productsData].sort((a, b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });
        
        renderProducts(sortedProducts);
    });
    
    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    document.querySelectorAll('.buy-1').forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});













document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if(e.target.classList.contains('buy-1')) {
            e.preventDefault(); 
            
        }
    });
});