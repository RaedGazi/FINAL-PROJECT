//similar to Robert's gearController.js
//need this to set product, and have an object to work with that has all the logic for your product
class ProductController {
  constructor() {
      /*currentID is because as you add new product
      you need a unique id for each product, it's the
       one piece of data that only exists for that
       item. local storage doesn't create Ids so we
       need to make one for our product*/
          //this.currentID = 0
      //this array gets stored in local storage as key-value pairs
      this.productArray = []
  }
  //assign ID to product and put in the array so need actions:
  //create object and add to array, takes in your event listener from admin.js

  async createProduct(url, name, description, price, quantity) {
     const productObj = {
          url,
          name,
          description,
          price,
          quantity,
      }
      let response = await fetch("http://localhost:8080/api/products",{
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       // JSON.stringify() turns our object into a string
       body: JSON.stringify(productObj),
      })
      let products = await response.json();
      console.log(product)
  }

//control setting and getting item
/*  setLocalStorage() {
     //do || [] instead of using an if statement to show to use what's in local storage and if there's nothing in there return empty array
      localStorage.setItem("product", JSON.stringify(this.productArray))
      //currentID is just for local storage, you won't need it when you have a database linked, you need it to update and delete
      localStorage.setItem("current-id", JSON.stringify(this.currentID)) */
  //}
  //getItem takes in the key and returns current value or null if it doesn't exist
//to get something out and do something with it, we PARSE what's in local storage
  async getAllProducts() {
      let response = await fetch("http://localhost:8080/api/products")
      let products = await response.json();
      this.productArray = products
    return this.productArray
  }
}
//
//clear local storage by hitting the circle with the line through it
//