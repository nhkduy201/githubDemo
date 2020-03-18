function Cat() {
  this.name = "Tom";
  this.age = 10;
  this.stomach = [];
}
Cat.prototype.eat = function(mouse) {
  this.stomach.push(mouse);
};
module.exports = Cat;
