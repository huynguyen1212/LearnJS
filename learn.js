// var a = 1;
// // console.log(a);
// var myBestFriend = {
//   nickName : 'Đức',
//   age : 20,
//   gender : 'male'
// };

// // myBestFriend.age = 21;
// // console.log(myBestFriend);

// myBestFriend['nickName'] = 'Cớn';
// myBestFriend['age'] = 21;
// console.log(myBestFriend['nickName']);



// var  myDog = {
//   weight: 5,
//   age: 1,
//   name: 'Đần',
//   back: function () {
//     console.log('meo meo, My name is', this.name);
//   },
//   eat: function (bone) {
//     this.weight = this.weight + bone.weight;
//   }
// };

// var bone = { weight : 0.5};
// console.log('Before eating', myDog.weight);

// myDog.eat(bone);
// console.log('After eating', myDog.weight);



// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('=====')

// for(var j = 9; j >= 0; j--) {
//   console.log(j);
// }

// var students = [
//   {name: 'Huy', age: 20},
//   {name: 'Tuấn', age: 20},
//   {name: 'Thái', age: 20}
// ];

// for (var i = 0; i < 3; i++) {
//   console.log(students[i].name, students[i].age);
// }

// for (var student of students) {
//   console.log(student.name, student.age);
// }

// var content = '';
// for(var student of students) {
//   content += '<li>' + student.name + '</li>';
// }

// document.getElementById('contact').innerHTML = content;

// var myDog = {
//   name: 'Đần',
//   age: 1,
//   weight: 5
// };

// for (var key in myDog) {
//   console.log(key, myDog[key]);
// }



// var a = [1, 3, 2];
// var b = [10, 20];
// // var c = b.concat(a);
// // var c = a.push(10); // lenght
// // var c = a.pop();
// // var c = a.shift();
// var c = a.unshift(10); // lenght
// console.log(c);

// var coffeeMachine = {
//   makeCoffee: function (onFinish) {
//     console.log('Making coffee....');
//     onFinish();
//   }
// };

// var beep = function() {
//   console.log('Tít tít');
// };

// coffeeMachine.makeCoffee(beep);

// coffeeMachine.makeCoffee(function() {
//   console.log('Bip bip');
// });






//array.methds

//array.map (tạo ra mảng mới lấy nguồn từ 1 mảng cũ)
// chuyển đổi các phần tử mảng cũ thành phần tử khác cuả mảng khác thông qua một hàm
// var number = [1, 2, 3, 4, 5];
// var squareNumber = number.map (function(x) {
//   return x*x;
// });
// console.log(squareNumber);



// array.filter lọc các phần tử mảng cũng với điều kiện của một function, đc mảng mới
// var numbers = [1, 2, 3, 4];
// var evemNumbers = numbers.filter(function(x) {
//   return x % 2 === 0;
// });
// console.log (evemNumbers);



// array.find chả về phần tử đầu tiên thỏa mãn điều kiện trong hàm function, đc một phần tử
// var numbers = [1, 2, 3, 4];
// var evemNumbers = numbers.find(function(x) {
//   return x % 2 === 0;
// });
// console.log (evemNumbers);



// array.reduce dung hai giá trị ở mảng cũ để tính gì đó rồi lấy giá trị vừa tính và giá trị tiếp theo trong mảng cũ để tính tiếp. cứ thế đến giá trị cuối cũng của mảng cũ
// var numbers = [1, 2, 3, 4];
// var evemNumbers = numbers.reduce(function (a, b) {
//   return a + b;
// });
// console.log(evemNumbers);

// array.reduce có init, trèn giá trị init vào đầu mảng rồi làm như array.reduce bình thường

// var numbers = [1, 2, 3, 4];
// var evemNumbers = numbers.reduce(function(a, b) {
//   console.log(a, b);
//   return a + b;
// }, 0);
// console.log (evemNumbers);

// var products = [
//   {name: 'A', quantity: 2, unitPrice: 10},
//   {name: 'B', quantity: 3, unitPrice: 20},
//   {name: 'C', quantity: 4, unitPrice: 30}
// ];
// var total = products.reduce(function(currentTotal, product) {
//   return currentTotal + product.quantity * product.unitPrice;
// }, 0);
// console.log (total);





// array.sort, sắp xếp các phần tử trong mảng, quy ước là trả về nhỏ hơn 0 thi sx tăng dần, lớn hơn 0 thì nhỏ dần, = 0 thi để nguyên
// var numbers = [2, 9, 3, 4, 1];
// var ascendingNumbers = numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log (ascendingNumbers);
// var descendingNumbers = numbers.sort(function(a, b) {
//   return b - a;
// });
// console.log(descendingNumbers);

// var employees = [
//   {name: 'Tí', age: 18},
//   {name: 'Tèo', age: 20},
//   {name: 'Maria', age: 19}
// ];
// var sortedEmployees = employees.sort(function(a, b) {
//   return a.age - b.age;
// });
// console.log (sortedEmployees);






// Math object

// Math.PI là lấy số pi 
// function discArea(r) {
//   return r * r * Math.PI;
// }
// var s = discArea(5);
// console.log(s);

// // Math.ceil  làm tròn lên
// console.log (Math.ceil(9.2));

// // Math.floor làm tròn xuống
// console.log (Math.floor(9.7));

// // Math.max tìm số lớn nhất
// console.log (Math.max(1, 10, -1, 20));

// // Math.min tìm số nhỏ nhất
// console.log (Math.min(1, 10, -1, 20));

// //Math.random tìm số bất kì
// function tossACoin() {
//   var random = Math.random();
//   console.log(random);
//   return random > 0.5;
// }
// console.log('Mặt ngửa: ', tossACoin());






// 'new' keyword

// var mouse = {
//     weight: 0.2,
//     getWeight: function() {
//       return this.weight;
//     }
//   };
//   //console.log (mouse.getWeight());

//   // contructor function for use keyword 'new'
//   function Mouse(color, weight) {
//     this.type = 'mouse';
//     this.color = color;
//     this.weight = weight;

//     // this.sleep = function() {
//     //   console.log('Sleeping....');
//     // }
//   }

//   var mouse1 = new Mouse('white', 0.2);
//   var mouse2 = new Mouse('black', 0.5);
//   //console.log(mouse1);
//   //console.log(mouse2);


//   // prototypes, là loại giống this.(kiểu), đc tạo một lần trong contructor function, nó ẩn và đc chia sẻ ho tất cả các hàm gọi 'new'
//   Mouse.prototype.sleep = function() {
//     console.log('Sleeping....');
//   };
//   var jerry = new Mouse('orange', 20);
//   var mickey = new Mouse('white', 10);
//   console.log(jerry, mickey);

//   console.log(jerry.sleep(), mickey.sleep());
//   console.log(jerry.sleep() === mickey.sleep());


// function Mouse(color) {
//   this.color = color;
//   this.dead = false;
// }
// Mouse.prototype.die = function() {
//   this.dead = true;
// };
var Mouse = require('./mouse');
var Cat = require('./cat');
// function Cat() {
//   this.stomach = [];
// };
// Cat.prototype.eat = function (mouse) {
//   this.stomach.push(mouse);
//   mouse.die();
// };
var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey, jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);