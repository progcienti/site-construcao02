function showPromotion() {
    document.getElementById('promotion-modal').style.display = 'block';
}

function closePromotion() {
    document.getElementById('promotion-modal').style.display = 'none';
}

function addToCart(product, price) {
    alert(`${product} adicionado ao carrinho por R$${price.toFixed(2)}`);
}
function filterProducts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const products = document.getElementsByClassName('product');
    
    Array.from(products).forEach(product => {
        const productName = product.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}
