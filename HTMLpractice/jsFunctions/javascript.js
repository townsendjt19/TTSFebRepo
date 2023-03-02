// let billAmount=100; 

// const gratuity = (billAmount)=>{

    

//     return (billAmount*.10);



// }

// const totalWithGrat = (billAmount) =>{

//   let  total = gratuity(billAmount) + billAmount;

    
//     return ("Your total including gratuity is: " + total.toFixed(2));
    
// }


// console.log(totalWithGrat(billAmount));


//must always call functions with parameters or it will not run

//this is a different syntax for functions...supposed to be more modern


// function outer(){

//   function inner() {
   
//   }

//   inner();
// }

// outer();



// let shopping_list=['pop tarts', 'ramen noodles','chips', 'salsa', 'coffee'];

// shopping_list.push('fruit loops');

// shopping_list[4]=('fair trade coffee');

// shopping_list.splice(2,3, 'rice', 'beans');

// let cart = [];



// shopping_list.pop(shopping_list[length]);
// shopping_list.pop(shopping_list[length-length]);

// let item; 

// while(!shopping_list.length==0){

//  item = shopping_list.pop(shopping_list[length]);

//  cart.push(item); 

// }

// console.log(cart+',')



// let superHeroes = [["Batman", "Bruce Wayne"],
// ["Spiderman", "Peter Parker"],
// ["The Flash", "Barry Allen"]]; 

// let secretIdentity; 
// superHeroes.map() = secretIdentity; 

// superHeroes.map() = 


// let calculator = {
// 	add: function(a,b) {
// 		return a + b;
// 	}
// }

// calculator.add(2,3) // 5


// let players = [
// 	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
// 	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
// 	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
// 	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
// 	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
// 	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
// 	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
// ];


// //Players named 'Mike'
// players.find(function(player){
// 	return player.firstName === 'Mike'
// });

// //Running backs
// players.filter(function(player){
// 	return player.position === 'RB';
// });

// //LastNames
// players.map(function(player){
// 	return player.lastName;
// });

// //Full names of all running backs with more than 5 touchdowns.
// players.filter(function(player){
// 		return player.touchdowns > 5 && player.position == 'RB';
// 	}).map(function(player){
// 		return `${player.firstName} ${player.lastName}`;
// 	});
	
// //Number of touchdowns by runningbacks
// players.filter(function(player){
// 		return player.position =='RB';
// 	}).reduce(function(total, player){
// 		total += player.touchdowns;
// 	},0);

let slideshow = {

	photoList = ["pic1_name","pic2_name"],

	photoIndex = 0,

	nextPhoto: function (){

		if
	}


}