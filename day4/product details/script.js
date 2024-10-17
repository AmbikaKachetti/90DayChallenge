let containerEle = document.getElementById('product_details_container');
var products = [];

// Function to display products
function productpage() {
    // Clear previous products
    containerEle.innerHTML = '';

    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => {
            products = json;
            console.log(products);
            displayProducts();
        });
}

// Function to display products
function displayProducts() {
    for (let i = 0; i < products.length; i++) {
        // CARD CONTAINER
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('product_card');
        containerEle.appendChild(cardContainer);

        // Image Container
        let imagesConatiner = document.createElement('div');
        imagesConatiner.classList.add('product_card_image');
        cardContainer.appendChild(imagesConatiner);

        // Images
        let imageEle = document.createElement('img');
        imageEle.src = products[i].image;  // Changed from srcset to src
        imageEle.style.height = '100px';
        imageEle.style.width = '100px';
        imageEle.style.position = 'relative';
        imagesConatiner.appendChild(imageEle);

        // Card Details Container
        let cardDetailsEle = document.createElement('div');
        cardDetailsEle.classList.add('product_card_details');
        cardContainer.appendChild(cardDetailsEle);

        // Title
        let h4Ele = document.createElement('h4');
        h4Ele.textContent = products[i].title;
        h4Ele.classList.add('para_style1');
        cardDetailsEle.appendChild(h4Ele);

        // Description
        let pEle = document.createElement('p');
        pEle.textContent = products[i].description;
        pEle.classList.add('para_style');
        cardDetailsEle.appendChild(pEle);

        // Price
        let h3Ele = document.createElement('h3');
        h3Ele.textContent = '₹ ' + products[i].price + ' Only';
        cardDetailsEle.appendChild(h3Ele);

        // Rating Container
        let ratingContainer = document.createElement('div');
        ratingContainer.classList.add('rating_stars');
        cardDetailsEle.appendChild(ratingContainer);

        let ratingStars = document.createElement('div');
        ratingStars.classList.add('stars');
        ratingStars.innerHTML = 'Ratings : ';
        ratingContainer.appendChild(ratingStars);

        // Star Element
        let starEle1 = document.createElement('i');
        starEle1.classList.add('fa', 'fa-star');
        starEle1.style.paddingRight = '2px';
        starEle1.style.color = 'rgb(253, 122, 0)';
        ratingStars.appendChild(starEle1);

        // Rating
        let h6Ele = document.createElement('span');
        h6Ele.textContent = ' ' + products[i].rating.rate;
        h6Ele.style.color = 'black';
        ratingStars.appendChild(h6Ele);

        let btnContainer = document.createElement('div');
        btnContainer.classList.add('button');
        cardDetailsEle.appendChild(btnContainer);

        let buttonEle = document.createElement('button');
        buttonEle.innerHTML = 'Add to Cart';
        buttonEle.style.padding = '10px';
        buttonEle.style.borderRadius = '12px';
        buttonEle.style.border = 'none';
        buttonEle.style.backgroundColor = '#f5d90a';
        buttonEle.style.boxShadow = '0 0 5px black';
        btnContainer.appendChild(buttonEle);
    }
}

// Functions for navigation (placeholders)
function homePage() {
    containerEle.innerHTML = '<h1>Welcome to the Home Page</h1>';
}

function aboutPage() {
    containerEle.innerHTML = '<h1>About Us</h1><p>This is an about page.</p>';
}
