//uses our admin.html, similar to RObert's admin.js with admin.html
const adminForm = document.getElementById("adminForm");
const productRows = document.getElementById("productRows");

const productController = new ProductController()
//test:console.log(productController)

//helper to display product on local storage
//needs most recent version so use getLocalStorage
const displayProduct = async function () {
 //getLocalStorage will change to fetch once we add a database
 let productArr = await productController.getAllProducts()
 //the empty string below wipes what's there before adding in a whole new list again
 productRows.innerHTML = ""
 productArr.forEach(product => {
   let newRow = document.createElement("tr");
   newRow.setAttribute("data-id", product.id)
   newRow.innerHTML =
     `<td><img src="${product.url}"></td>
 <td>${product.name}</td>
 <td>${product.description}</td>
 <td>${product.price}</td>
 <td>${product.quantity}</td>`

   productRows.append(newRow);
 })
 console.log(productArr)
}
//const addProductToTable = function (productArr) {
//  const productTable = document.getElementById("product-table");

//addProductToTable(incomingData);

adminForm.addEventListener("submit", async function (event) {
 event.preventDefault()
 //test: console.log("hello")

 const productPhoto = document.getElementById("productPhoto").value;
 const productName = document.getElementById("productName").value;
 const productDescription = document.getElementById("productDescription").value;
 const productPrice = document.getElementById("productPrice").value;
 const productQuantity = document.getElementById("productQuantity").value;
 //test:console.log(productPhoto, productName, productDescription, productPrice, productQuantity)

 //add product which creates an ojbect and pushes into productArr so we see that object in the Array
 //shows id going up by 1 in the console
await productController.createProduct(productPhoto, productName, productDescription, productPrice, productQuantity)
 //productController.setLocalStorage()
 //console.log(productController.productArr)
await displayProduct()
 adminForm.reset();
});

displayProduct()