let foo = 1;
foo = 1000;
console.log(foo);

//index     0  1  2
let book = [1, 2, 3];
book[0] = 1000;
console.log(book);



let kölistor= [ 
    //  0       1       2
    ["Alrik","sofia","Hajira"] , //0
    // 0  1 2
    [34,20,21]                   //1
]

kölistor[0][0] = "thomas"
console.log(kölistor);

// property
// key:value pair
let AlriksConsole = {
  price: 1,
  antalWheel: 2,
  money: 3,
  list: ["Alrik","Sofia","Intizar","Kim"],
  log: function (message) {
    console.log(message);
  },
};
AlriksConsole.money = 1000;
AlriksConsole["price"] = 2000 //extra
AlriksConsole.list[0] = "Thomas"

console.log(AlriksConsole);

function log(message) {
  console.log(message);
}

/*
document.getElementById
document.getElementsByTagName
*/

Math.round();
Math.ceil();

