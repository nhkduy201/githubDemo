function Gorilla(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Gorilla.prototype.eat = function(dog) {
  this.stomach.push(dog);
}
module.exports = Gorilla