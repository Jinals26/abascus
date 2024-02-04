const products = [
    { name: 'Stylish Suit', image: 'suit.jpg', link: 'suit.html' },
    { name: 'Casual Shirt', image: 'shirt.jpg', link: 'shirt.html' },
    { name: 'Classic Tie', image: 'tie.jpg', link: 'tie.html' },
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    const image = document.createElement('img');
    image.width = 300;
    image.height = 300;
    image.src = `images/${product.image}`; // Assume images are in an "images" folder
    image.alt = product.name;
    image.classList.add('product-image');

    const info = document.createElement('div');
    info.classList.add('product-info');
    info.style.textAlign = 'center';
    info.style.color = "white"
    info.innerHTML = `<h2>${product.name}</h2>`;

    card.appendChild(image);
    card.appendChild(info);

    card.onclick = function () {
        window.location.href = product.link;
    };
    return card;
}

// Display product cards
const featuredProductsContainer = document.getElementById('featuredProducts');

products.forEach(product => {
    const card = createProductCard(product);
    featuredProductsContainer.appendChild(card);
});