//variable string//
let mystr = "jaspreet kaur";
console.log("my name is", mystr);

//variable number//
let Age = 27;
console.log("this is my age", Age);

//age differnce b/w two person age exercise 3///
let juliaAge = 32;
let ageDiff = Age - 32;
console.log("julia age", ageDiff);

//Condtional  age exercise 4///
let myAge = 30;
if (myAge < 21) {
  console.log("you are not older than 21");
} else {
  console.log("you are older than 21");
}
///compare age///
let myNewAge = 30;
let anuAge = 15;

if (myNewAge < anuAge) {
  console.log("Anu is older then you");
} else if (myNewAge == anuAge) {
  console.log("you have the same age Anu");
} else {
  console.log("Anu is younger than you");
}

//sorting an array//
let webdev = [
  "Jaspreet",
  "Thomas",
  "Karolina",
  "Rahul",
  "Halil",
  "Stian",
  "Yaser",
];
console.log(webdev);
let classNameSort = webdev.sort();
console.log("sort", classNameSort);
let first = classNameSort[0];
console.log(" first name sort", first);

let last = classNameSort[classNameSort.length - 1];
console.log("last name sort", last);

//looping over an array even number//
let studentage = ["23", "34", "21", "27", "29", "30"];
let i = 0;
while (i < studentage.length) {
  if (studentage[i] % 2 === 0) {
    console.log("student age", studentage[i]);
  }
  i++;
}
///functions/// find smallest number//
let arr = [34, 11, 19, 55, 100];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log("smallest", smallest);

///bigest number///
let call = [34, 11, 19, 55, 100];
let biggest = arr[0];

for (let i = 3; i < arr.length; i++) {
  if (arr[i] > biggest) {
    biggest = arr[i];
  }
}
console.log("biggest", biggest);

///two parameter exercise:5///
let position = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45];
var index = 14;

function print_array_element(arr, i) {
  let parameterOfIndex = arr[i];
  console.log("function print parameter", parameterOfIndex);
}
print_array_element(position, index);

///Repate number exercise:6///
let numeric = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];
console.log(
  "repeat number",
  numeric.filter((a, b, c) => c.indexOf(a) !== b)
);
///exercise :7 color///
let color = ["Red", "Green", "White", "Black"];
const newColor = function () {
  console.log("about color", color.join());
  /// console.log(color.join("+"));///
};
newColor();

///java script string exercise:1///
let rev = 0;
let num = 123456;

rev = Number(String(num).split("").reverse().join(""));

console.log("Reverse number : " + rev);

/// returns setring exercise:2///
function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("webdevlopment"));

///exercise:3 uppercase letter///
function uppercase(str) {
  var case1 = str.split(" ");
  var newarray1 = [];

  for (var x = 0; x < case1.length; x++) {
    newarray1.push(case1[x].charAt(0).toUpperCase() + case1[x].slice(1));
  }
  return newarray1.join(" ");
}
console.log(uppercase("my hobby is nothing"));

///longest word exercise:4///
function data(str) {
  var show = str.split(" ");
  show.sort(function (a, b) {
    return b.length - a.length;
  });
  return show[0];
}
console.log(data((str = "punjabi is my favourite language ")));

///Extera function exercise =1///
let n1 = 4;
let n2 = 6;
function multiply(n1, n2) {
  console.log(n1 * n2);
}
multiply(n1, n2);

///EXERCISE:2////
function calc(a, b) {
  return a * b;
}
console.log(calc(3, 9));

///exerciser:3 three time values///

function MULTIPLY(price, shipping) {
  return price * shipping;
}
console.log("first ", MULTIPLY(123, 23));
console.log("second", MULTIPLY(23, 43));
console.log("third", MULTIPLY(13, 3));

///Exercise 5 replace  word with another value///
var myArray = ["j", "a", "s", "p", "r", "e", "e", "t", "k", "a", "a", "r"];

function replaceSCharacters(myArray) {
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] == "a") {
      myArray.splice(i, 1, "3");
    }
  }
  console.log(" Replacing array elements with splice(): " + myArray);
}

replaceSCharacters(myArray);

var myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

function returnSumOfElements(myParameter) {
  for (i = 0; i < myParameter.length; i++) {
    sum = sum + myParameter[i];
  }
  return sum;
}

function smallestNumber(myParameter) {
  myParameter.sort((a, b) => a - b);
  return myParameter[0];
}

var mySmallestNumber = smallestNumber(myArray);
myResult = returnSumOfElements(myArray);
console.log(
  " The sum of all array elements is " +
    myResult +
    " and the smallest number is " +
    mySmallestNumber
);
///exercise:7 Return the sum of even numbers from an array///
var myNumbers = [2, 4, 5, 6, 12, 16, 8, 2];
var evenNumbers = 0;

function evenNumbersOnly(myNumbers) {
  for (i = 0; i < myNumbers.length; i++) {
    let rest = myNumbers[i] % 2;
    if (rest === 0) {
      evenNumbers = evenNumbers + myNumbers[i];
    }
  }
  return evenNumbers;
}
myResult = evenNumbersOnly(myNumbers);
console.log(" The sum of the even numbers is: " + myResult);

///Exercise:8 function that adds the even positions of an array///
var myNumbers = [1, 2, 8, 3, 2, 3, 4];
let even = 0;

function addEvenPositions() {
  for (i = 0; i < myNumbers.length; i++) {
    var rest = i % 2;
    if (rest === 0) {
      even = even + myNumbers[i];
    }
  }
  return even;
}
myResult = addEvenPositions(myNumbers);
console.log(" sum of even positioned elements is " + myResult);

///start dom exercise///
// Exercise 1 - Create HTML list elements with JS//
let myBandList = ["Dire Straits', 'Kansas', 'Steely Dan"];

function addBands(myParameter) {
  for (i = 0; i < myParameter.length; i++) {
    const ulTag = document.querySelector("ul");
    const listItem = document.createElement("li");
    listItem.textContent = myParameter[i];
    ulTag.appendChild(listItem);
  }
  console.log(" List items of bands generated.");
}
addBands(myBandList);
