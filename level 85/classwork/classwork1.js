const sayHello1 = function() {
  console.log("hello");
};

const sayHello2 = () => {
  console.log("hello");
};

sayHello1();
sayHello2();console.log((function() {
    return "ეს არის შედეგი IIFE-დან!";
})());