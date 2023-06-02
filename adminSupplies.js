//from supply HTML:
const prodCards = document.getElementById("prodCards")

const prodController = new ProdController()

const displayProd = function () {
    let prodArr = prodController.getLocalStorage()
    prodCards.innerHTML = ""
    prodArr.forEach(prod => {
        let card = document.createElement("div");
        card.classList.add("", "")
        card.innerHTML =
            `<div class="card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">${prod.supplier}</h5>
         <p class="card-text">${prod.name}</p>
         <p class="card-text">${prod.description}</p>
         <p class="card-text">${prod.photo}</p>
          <p class="card-text">${prod.quantity}</p>
         <p class="card-text">${prod.price}</p>
         <a href="https://www.amazon.com/" class="btn btn-primary" target="_blank">Add to Cart</a>
         </div>
        </div>`

        prodRows.append(card);
    })
    console.log(prodArr)
}
displayProd()
