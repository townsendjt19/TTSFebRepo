// console.log("Hello World!");
// console.log("Hello World!!!");


// let numOfCups=0 ; 

// if (numOfCups<3){
  
//     console.log("Yes I'll take another cup of coffee.");
// } else {
    
//     console.log("I think I'm okay for now.") ;
// }

// //logic is kinda like java though.

// //useful to use the let charaters for each type of variable.

// let temp = 80;

// console.log("The temperature is 80 degrees.")

// if (temp>80){
//     console.log("time to swim")
//     temp = 60; temp = 90; 
// }


// let precip = true; 
 
// if (temp>80&&!precip){

// }
// let indoors = true; 

// if (indoors ||( temp>80 && precip==false)){

//     console.log("time to swim");
// }


// //let bottlesOnWall = 99; 

// for (let bottlesOnWall = 99;bottlesOnWall>=0;bottlesOnWall--){

    
    
//     if (bottlesOnWall==0){

//      console.log("Hey! We need more root beer!")
//     }
//     else {
//         console.log(bottlesOnWall + " bottles of root beer on the wall")
//     }
// }

//let y =66+6;
//console.log(y);

//console.log(y + "6");



//control slash to comment after highlighting things


let x = 5
switch(x) {
	case 3:
		console.log('three')
	case 1:
		console.log(1);
		break;
	case 2:
		console.log(2);
		break;
	default:
		console.log('default')
}

let day = "Thursday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("Today is not Monday, Tuesday, or Wednesday.");
}

function saySomething(something){

    console.log(something);

}

// saySomething("Hello function"); //logs hello function

// function add(number1, number2) {
//     return number1 + number2;
// }

// let sum = add(10,2);
// console.log(sum); // 3
// function add(a,b) {
// 	console.log(a,b)
// }

// add(1); // '1,undefined'
// add(1,2,3,4,5) // '1,2'




// function add() {
	
//     let sum = 0;
	
//     for(let i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
	
// console.log(add(1,2,3,4,5,6,7,8));


function add(...rest) {
	let sum = 0;
	for(let i = 0; i < rest.length; i++) {
		sum += rest[i];
	}
	return sum;
}
	
add(1,2,3,4,5,6,7,8);

console.log(add(1,112,3,4,5,6,7,8));

const addNumbers = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
  }
  