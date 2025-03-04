const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
});

function loadProducts() {
    // This function would typically fetch product data from an API or database
    const products = [
        { id: 1, name: 'Graphic Tee', price: 29.99, image: 'images/graphic-tee.jpg' },
        { id: 2, name: 'Hoodie', price: 49.99, image: 'images/hoodie.jpg' },
        { id: 3, name: 'Joggers', price: 39.99, image: 'images/joggers.jpg' }
    ];
    displayProducts(products);
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

function setupEventListeners() {
    document.getElementById('cart-button').addEventListener('click', () => {
        alert('Cart functionality is not implemented yet.');
    });
}