// filter.js

const filterSize = document.getElementById('filter-size');
const filterColor = document.getElementById('filter-color');
const resetFilters = document.getElementById('reset-filters');
const products = document.querySelectorAll('.product');

// Funzione per applicare i filtri
function applyFilters() {
    const selectedSize = filterSize.value;
    const selectedColor = filterColor.value;

    let productsVisible = false; // Controlla se almeno un prodotto è visibile

    products.forEach(product => {
        const productSize = product.getAttribute('data-size');
        const productColor = product.getAttribute('data-color');

        // Verifica se il prodotto soddisfa i filtri
        if ((selectedSize === '' || selectedSize === productSize) &&
            (selectedColor === '' || selectedColor === productColor)) {
            product.style.display = 'block';
            product.classList.add('fade-in');
            productsVisible = true;
        } else {
            product.style.display = 'none';
            product.classList.remove('fade-in');
        }
    });

    // Se nessun prodotto è visibile, mostra un messaggio
    const noProductsMessage = document.querySelector('.no-products-message');
    if (productsVisible) {
        noProductsMessage.style.display = 'none';
    } else {
        noProductsMessage.style.display = 'block';
    }
}

// Funzione per resettare i filtri
resetFilters.addEventListener('click', () => {
    filterSize.value = '';
    filterColor.value = '';
    applyFilters();
});

// Event listeners per aggiornare i filtri
filterSize.addEventListener('change', applyFilters);
filterColor.addEventListener('change', applyFilters);

// Esegui il filtro iniziale per mostrare tutti i prodotti
applyFilters();
