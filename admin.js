//uses our admin.html, similar to RObert's admin.js with admin.html
const adminForm = document.getElementById("adminForm");
const prodRows = document.getElementById("prodRows");

const prodController = new ProdController()
//test:console.log(prodController)

//helper to display product on local storage
//needs most recent version so use getLocalStorage
const displayProd = async function () {
 //getLocalStorage will change to fetch once we add a database
 let prodArr = await prodController.getAllProducts()
 //the empty string below wipes what's there before adding in a whole new list again
 prodRows.innerHTML = ""
 prodArr.forEach(prod => {
   let newRow = document.createElement("tr");
   newRow.setAttribute("data-id", prod.id)
   newRow.innerHTML =
     `<td><img src="${prod.url}"></td>
 <td>${prod.name}</td>
 <td>${prod.description}</td>
 <td>${prod.price}</td>
 <td>${prod.quantity}</td>`

   prodRows.append(newRow);
 })
 console.log(prodArr)
}
//const addProdToTable = function (prodArr) {
//  const prodTable = document.getElementById("product-table");

//addProdToTable(incomingData);

adminForm.addEventListener("submit", async function (event) {
 event.preventDefault()
 //test: console.log("hello")

 const prodPhoto = document.getElementById("prodPhoto").value;
 const prodName = document.getElementById("prodName").value;
 const prodDescription = document.getElementById("prodDescription").value;
 const prodPrice = document.getElementById("prodPrice").value;
 const prodQuantity = document.getElementById("prodQuantity").value;
 //test:console.log(prodPhoto, prodName, prodDescription, prodPrice, prodQuantity)

 //add product which creates an ojbect and pushes into prodArr so we see that object in the Array
 //shows id going up by 1 in the console
await prodController.createSupply(prodPhoto, prodName, prodDescription, prodPrice, prodQuantity)
 //prodController.setLocalStorage()
 //console.log(prodController.prodArr)
await displayProd()
 adminForm.reset();
});

displayProd()

