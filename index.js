/* //from our index HTML (similar to Robert's Gear.js with gear.html):
//also need to figure out how to add to equipmentCards on the Home Page but essentialsCards is currently working
const getProduct = async function(){
    let response = await fetch("http://localhost:8080/api/products");
    let product = await response.json();
    console.log(product);

    return product.data;
};

const productController = new ProductController();

const displayProduct = async function () {
    let productCards = document.getElementById("displayProduct");
    let productArr = await getProduct(); // Fetch products using getProduct function
    productCards.innerHTML = "";
    productArr.forEach(product => {
        let card = document.createElement("div");
        card.classList.add("card", "card-body");
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${product.url}" class="card-img-top" alt="Card image">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price}</p>
                    <p class="card-text">${product.quantity}</p>
                </div>
                <a href="#" class="btn btn-primary">Add to your cart</a>
            </div>`;
        productCards.appendChild(card); // Append card to productCards
    });
    console.log(productArr);
};

displayProduct();
 */