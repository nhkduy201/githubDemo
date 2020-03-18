function Chicken() {
  this.name = "Con ga";
  this.age = 5;
  this.stomach = [];
}

Chicken.prototype.eat = function(rice) {
  this.stomach.push(rice);
};
