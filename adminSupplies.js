//from supply HTML:
const prodCards = document.getElementById("prodCards")

const prodController = new ProdController()

const displayProd = function () {
    let prodArr = prodController.getLocalStorage()
    prodCards.innerHTML = ""
    prodArr.forEach(prod => {
        let card = document.createElement("div");
        card.classList.add("card", "card-body")
        card.innerHTML =
            `<div class="card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">${prod.name}</h5>
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


{/* <div class="card" style="width: 18rem;">
        <img src="https://images.ciamedical.com/image/data/manual_import/LdYdg3mu68gTogRU-320x320.jpg"
          class="card-img-top" alt="Standard Gown">
        <div class="card-body">
          <h5 class="card-title">Trimax Astound Standard Gown</h5>
          <p class="card-text">Inspired by long days on your feet, our surgical gowns stand up to the rigors of your
            work,
            helping to keep you safe from potentially harmful elements. In creating Astound Gown, we worked closely with
            healthcare professionals like you to make sure your needs and expectations were not just met, but exceeded.
          </p>

          <!--ADD TO CART FUNCT (ATCF) START-->
          
          <!--ATCF END-->

        </div>
        <a href="#" class="btn btn-primary">Add to your cart</a>
      </div> */}