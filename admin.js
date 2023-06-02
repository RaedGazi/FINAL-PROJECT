const adminForm = document.getElementById("adminForm");
const prodRows = document.getElementById("prodRows");

const prodController = new ProdController()
//test:console.log(prodController)

//helper to display product on local storage
//needs most recent version so use getLocalStorage
const displayProd = function () {
 //getLocalStorage will change to fetch once we add a database
  let prodArr = prodController.getLocalStorage()
 //the empty string below wipes what's there before adding in a whole new list again
 prodRows.innerHTML = ""  

prodArr.forEach(prod => {
let newRow = document.createElement("tr");
newRow.setAttribute("data-id", prod.id)
  newRow.innerHTML =
  `<td>${prod.name}</td>
  <td>${prod.description}</td>
  <td>${prod.photo}</td>
  <td>${prod.quantity}
  <td>${prod.price}</td>`
  
  prodRows.append(newRow);
})
console.log(prodArr)
}
  //const addProdToTable = function (prodArr) {
    //  const prodTable = document.getElementById("product-table");
    
    //addProdToTable(incomingData); 
    
    adminForm.addEventListener("submit", function (event) {
      event.preventDefault()
      //test: console.log("hello")
      
      const prodName = document.getElementById("prodName").value;
      const prodDescription = document.getElementById("prodDescription").value;
      const prodPhoto = document.getElementById("prodPhoto").value;
      const prodQuantity = document.getElementById("prodQuantity").value;
      const prodPrice = document.getElementById("prodPrice").value;
      //test:console.log(prodSupplier, prodName, prodDescription, prodPhoto, prodQuantity, prodPrice)
      
      //add product which creates an ojbect and pushes into prodArr so we see that object in the Array
      //shows id going up by 1 in the console
      prodController.addProduct(prodName, prodDescription, prodPhoto, prodQuantity, prodPrice)
      prodController.setLocalStorage()
      console.log(prodController.prodArr)
      displayProd()
      adminForm.reset();
    });
  
    displayProd()

    