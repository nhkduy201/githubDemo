function Horse() {
  this.name = name;
  this.age = age;
  this.stomach = 0;
}

Horse.prototype.eat = function() {
  this.stomach++;
};
module.exports = Horse;
