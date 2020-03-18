var Dog = require("./Dog");
var Cat = require("./Cat");
var Mouse = require("./Mouse");
var dog = new Dog("Husky", 15);
var cat = new Cat("Tom", 10);
var mouse = new Mouse("Jerry", 5);
dog.sayHi();
cat.eat(mouse);
dog.eat(cat);
