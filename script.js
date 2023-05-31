const form = document.getElementById("adminForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const prodSupplier = document.getElementById("supplier").value;
  const prodName = document.getElementById("name").value;
  const prodDescription = document.getElementById("description").value;
  const prodPhoto = document.getElementById("photo").value;
  const prodPrice = document.getElementById("price").value;
  const prodQuantity = document.getElementById("quantity").value;

  let prodObj = {
    supplier: prodSupplier,
    name: prodName,
    description: prodDescription,
    photo: prodPhoto,
    price: prodPrice,
    quantity: prodQuantity,
  };

  let newProdArr = [prodObj];
  addEmpToTable(newProdArr);

  form.reset();
});


const addProdToTable = function (prodArr) {
  const prodTable = document.getElementById("product-table");

  prodArr.forEach((prod) => {
    let newRow = document.createElement("tr");

    newRow.innerHTML = 
    `<td>${prod.supplier}</td>
    <td>${prod.name}</td>
    <td>${prod.description}</td>
    <td>${prod.photo}</td>
    <td>${prod.price}</td>
    <td>${prod.quantity}`;

    prodTable.append(newRow);
  });
};

addProdToTable(incomingData);
