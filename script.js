const form = document.getElementById("adminForm");

form.addEventListener("submit", function (event) {
  // prevents the page from refreshing
  event.preventDefault();

  const prodSupplier = document.getElementById("supplier").value;
  const prodName = document.getElementById("name").value;
  const prodDescription = document.getElementById("description").value;
  const prodPhoto = document.getElementById("photo")
  const prodPrice = document.getElementById("price")
  const prodQuantity = document.getElementById("quantity")

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

// imagine this data is coming in from a database when the page loads
let incomingData = [
    {
      name: "Robert",
      position: "Instructor",
      department: "Catalyst",
    },
    {
      name: "Melissa",
      position: "TA",
      department: "Catalyst",
    },
    {
      name: "Steven",
      position: "TA",
      department: "Catalyst",
    },
  ];

const addProdToTable = function (prodArr) {
  const prodTable = document.getElementById("product-table");

  //   forEach is a builtin method for arrays
  prodArr.forEach((prod) => {
    // Step1: create element
    let newRow = document.createElement("tr");

    // Step2: give it content
    newRow.innerHTML = 
    `<td>${prod.supplier}</td>
    <td>${prod.name}</td>
    <td>${prod.description}</td>
    <td>${prod.photo}</td>
    <td>${prod.price}</td>
    <td>${prod.quantity}`;

    // Step 3: append to parent
    prodTable.append(newRow);
  });
};

// this function call will display the incoming data to the page when the page loads
addProdToTable(incomingData);
