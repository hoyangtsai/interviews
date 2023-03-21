function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

const cheese = new Food('cheese', 12);

console.log(cheese instanceof Product) // false
console.log(cheese instanceof Food) // true
