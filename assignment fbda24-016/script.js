// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});
function signUpAndRedirect() {
      alert('Sign-up successful! You will be redirected to the homepage.');
      window.location.href = 'index.html';
    }

    function toggleMenu() {
      const navMenu = document.querySelector('.nav-menu');
      const navToggle = document.getElementById('nav-toggle');
      navMenu.classList.toggle('active');
      navToggle.checked = !navToggle.checked;
    }

    function closeMenu() {
      const navMenu = document.querySelector('.nav-menu');
      const navToggle = document.getElementById('nav-toggle');
      navMenu.classList.remove('active');
      navToggle.checked = false;
    }

    // Accessibility: Allow Enter key to toggle menu
    document.querySelector('.hamburger').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const navMenu = document.querySelector('.nav-menu');
      const hamburger = document.querySelector('.hamburger');
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
    
function addToCart(productName) {
      cartCount++;
      const cartCounter = document.querySelector('.cart-counter');
      cartCounter.setAttribute('data-count', cartCount);
      if (cartCount > 0) {
        cartCounter.classList.add('has-items');
      }
      alert(`${productName} added to cart! Total items: ${cartCount}`);
    }

// Load cart count from localStorage or initialize to 0
    let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
    updateCartCounter();

    function toggleMenu() {
      const navMenu = document.querySelector('.nav-menu');
      const navToggle = document.getElementById('nav-toggle');
      navMenu.classList.toggle('active');
      navToggle.checked = !navToggle.checked;
    }

    function closeMenu() {
      const navMenu = document.querySelector('.nav-menu');
      const navToggle = document.getElementById('nav-toggle');
      navMenu.classList.remove('active');
      navToggle.checked = false;
    }

    function addToCart(productName, price, imageSrc) {
      // Load existing cart items from localStorage or initialize an empty array
      let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

      // Check if the product already exists in the cart
      const existingItem = cartItems.find(item => item.name === productName);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        // Add new item to cart with quantity 1
        cartItems.push({
          name: productName,
          price: price,
          image: imageSrc,
          quantity: 1
        });
      }

      // Update cart count
      cartCount++;
      localStorage.setItem('cartCount', cartCount);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      updateCartCounter();
      alert(`${productName} added to cart! Total items: ${cartCount}. Redirecting to cart...`);
      setTimeout(() => {
        window.location.href = 'cart.html';
      }, 1000);
    }

    function updateCartCounter() {
      const cartCounter = document.querySelector('.cart-counter');
      cartCounter.setAttribute('data-count', cartCount);
      if (cartCount > 0) {
        cartCounter.classList.add('has-items');
      } else {
        cartCounter.classList.remove('has-items');
      }
    }

    // Accessibility: Allow Enter key to toggle menu
    document.querySelector('.hamburger').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const navMenu = document.querySelector('.nav-menu');
      const hamburger = document.querySelector('.hamburger');
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      const inputs = form.querySelectorAll('input, textarea');

      // Reset error states
      inputs.forEach(input => input.classList.remove('error'));

      // Basic validation
      let hasError = false;
      if (!name) {
        form.querySelector('input[name="name"]').classList.add('error');
        hasError = true;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.querySelector('input[name="email"]').classList.add('error');
        hasError = true;
      }
      if (!message) {
        form.querySelector('textarea[name="message"]').classList.add('error');
        hasError = true;
      }

      if (!hasError) {
        alert('Form submitted successfully! (This is a demo - no data sent.)');
        form.reset();
      } else {
        alert('Please fill out all fields correctly.');
      }
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const navMenu = document.querySelector('.nav-menu');
      const hamburger = document.querySelector('.hamburger');
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });

    function placeOrder() {
      alert('Order placed successfully! You will be redirected to the homepage and shop for more.');
      window.location.href = 'index.html';
    }

    function submitFeedback() {
      alert('Thank you for your feedback!');
    }