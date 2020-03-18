function Dog() {
  this.name = "Husky";
  this.age = 15;
  this.stomach = [];
}
Dog.prototype.eat = function(cat) {
  this.stomach.push(cat);
};

module.exports = Dog;
