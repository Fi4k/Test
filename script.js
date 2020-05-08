//Functions*************

/*function sayHello(argument) {
	// body...
	console.log("Hello!");
}

//sayHello();

var sayBye = function (argument) {
	// body...
	console.log("Bye");
}

//sayBye(); 

function sing(argument) {
	// body...
	console.log(argument);
}

sing("Ahhhhhh");
sing("lala laaaa");

function multiply(a, b) {
	// body...
	return a*b;
}

var x = multiply(5,10);

alert(multiply(4,5));*/


/*

//Loops*****************

var todos = [
	"clean room",
	"brush teeth",
	"study",
	"eat"
	];

console.log("For---------")
	for (var i = 0; i < todos.length; i++) {
		console.log(todos[i]);
	}

//	foreach()

console.log("While--------");
var i = 0;

while(i < todos.length){
	console.log(todos[i]);
	i++;
}

console.log("Do While-------");
var i = 0;

do{
	console.log(todos[i]);
	i++;
}while(i < todos.length);


console.log("foreach-----------")

todos.forEach(function(todos){
	console.log(todos);
})
*/


/*var obj = {
	age : 5,
	sex : "m"};

	var arr = ["fik", "sham", "haffie"];*/

	var button = document.getElementById("enter");
	var input = document.getElementById("userinput");
	var ul = document.querySelector("ul");

	button.addEventListener("click", function(){
	//console.log("CLick working!!");

	if(input.value.length > 0){

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

	}

	

})
	input.addEventListener("keypress", function(event){
	console.log("CLick working!!");



	if(input.value.length > 0 && event.keyCode === 13){

		console.log("In");

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

	}

	

})