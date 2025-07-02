document.addEventListener('DOMContentLoaded', function() {
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            
            thumbnails.forEach(t => t.classList.remove('active'));
            
          
            this.classList.add('active');
            
            
            const newImageSrc = this.getAttribute('data-image');
            mainImage.src = newImageSrc;
        });
    });
    
    
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            
            sizeOptions.forEach(o => o.classList.remove('selected'));
            
           
            this.classList.add('selected');
            
            
        });
    });
    
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-control input');
    
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    
    const addToCartBtn = document.querySelector('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartBtn.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        count += quantity;
        cartCount.textContent = count;
        
        this.textContent = 'Added to Cart';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.innerHTML = 'Add to Cart';
            this.style.backgroundColor = '#ffd814';
        }, 2000);
        
        console.log(`Added ${quantity} item(s) to cart`);
    });
    

    document.querySelector('.buy-now').addEventListener('click', function() {
        alert('This would proceed to checkout in a real application');
    });
});



// document.addEventListener('DOMContentLoaded', function() {
//     const thumbnails = document.querySelectorAll('.thumbnail');
//     const mainImage = document.getElementById('mainProductImage');
//     const mainImageLink = mainImage.parentElement;
    
//     // თამბნეილებზე დაწკაპება
//     thumbnails.forEach(thumbnail => {
//         thumbnail.addEventListener('click', function() {
//             // მთავარი სურათის განახლება
//             const newImageSrc = this.getAttribute('data-image');
//             mainImage.src = newImageSrc;
            
//             // ლინკის განახლება სრული ზომის სურათისთვის
//             mainImageLink.href = newImageSrc;
            
//             // აქტიური კლასის განახლება
//             thumbnails.forEach(t => t.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });
    
//     // მთავარ სურათზე დაწკაპება გახსნის სრულ ზომის სურათს
//     mainImage.addEventListener('click', function(e) {
//         e.preventDefault(); // ნაგულისხმევი ქცევის შეჩერება
//         window.open(this.src, '_blank'); // ახალი ჩანართი
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImages = document.querySelectorAll('.main-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            
            // დამალვა ყველა მთავარი სურათის
            mainImages.forEach(img => {
                img.style.display = 'none';
            });
            
            // აქტიური სურათის ჩვენება
            mainImages[index].style.display = 'block';
            
            // აქტიური თამბნეილის განახლება
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});