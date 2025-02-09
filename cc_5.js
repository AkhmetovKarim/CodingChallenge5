//Task 1: Customer Profile

//Declare customer object
let customer = {
    name: "Jane Doe",
    age: 35,
    email: "john.doe@email.com"
};
//Log with template literals
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

//Task 2: Order Details

//Declare an object order
let order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",

    //Add method 
    displayOrder: function() {
        console.log(`Order Id: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};
order.displayOrder();

//Task 3 - Shopping Cart

let cartItems = ["Jägermeister", "Svedka", "Smirnoff"];//Declare an array
cartItems.push("Four Loko"); // Add a new product
cartItems.pop();             // remove last item
cartItems.unshift("Hennessy"); //Add an item in the beginning
cartItems.shift();             //remove first item
console.log(cartItems);      //log final array