function Equality(val){
    if(val == 10){
        return "equal";
    }
    return "not equal";
}

var result = Equality(10);
document.getElementById("demo").innerHTML = result ;

function switchOfStuff(val) {
    let answer = "";
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
    return answer;
  }

  var fun = switchOfStuff("b");
document.getElementById("demo1").innerHTML = fun;

function isLess(a, b) {
   
    return a <= b;
  }
  
 var less =  isLess(10, 15);
 document.getElementById("demo2").innerHTML = less;
  


 const myObj = {
    v1 : "Value 1",
    v2 : "Value 2",

 };

 const a = myObj.v1;
 const b = myObj["v2"];
 document.getElementById("demo3").innerHTML = a;
 document.getElementById("demo4").innerHTML = b;


 const objDog = {
    name1 : "druv",
    age : 4,
    tail : [1],
    color : "red"
 }
const variab = objDog["name1"];
document.getElementById("demo5").innerHTML = variab;
//updating object property

objDog.color = "blue";
document.getElementById("demo6").innerHTML = objDog.color;

//adding new property to js

objDog.bark = "Boww";
document.getElementById("demo7").innerHTML = objDog.bark;

//delete property from JS object
delete objDog.age;
document.getElementById("demo8").innerHTML = objDog.age;



    
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  // After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.


  const a3 = "bravo";
  const a33 = lookup[a3];
  document.getElementById("demo9").innerHTML = a33;


  
    const arr = [];
    let i = 0;
    while(i<5){
        arr.push(i);
        i++;
    }
    document.getElementById("demo10").innerHTML = arr;

  

const arr1 = [];
for(let i=0; i<20; i++){
    arr1.push(i);
}
document.getElementById("demo11").innerHTML = arr1;

const ab = Math.floor(Math.random() * 20);

document.getElementById("demo12").innerHTML =  ab;
document.getElementById("demo13").innerHTML =  parseInt("007");
document.getElementById("demo14").innerHTML =  parseInt("abc");
document.getElementById("demo15").innerHTML =  parseInt(10);














