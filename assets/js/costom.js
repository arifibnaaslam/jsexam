let name = "john"
let age = 25
console.log("My name is "+ name +"and I am "+ age + " Years old" );

// Quastion no 2 Condition 
let number = 9;
if (number%2==0){
    console.log("The Number is Even")
}
else
{
    console.log("The Number is Odd")
}


// Quastion no 3 LOOP

for (let i = 1; i<=5; i++)
{

    console.log(i);
}

console.log("Loop End")
// quastion no 4 Function 

 function addNumbers(a,b) {
    return a+b;
}
let sum = addNumbers(3,7);

console.log (sum);

console.log("Function end");

// Quastion no 5 Array 

let fruits = [ "Appale", "Banana", "Cherry"]
console.log(fruits);
fruits.push("Orange");

console.log(fruits);
// Added done

// Quastion no 6 Arry Methods (ForEach)

let numbers = [1,2,3,4,5]

numbers.forEach(function(item)
{
    console.log(item*2);
}
)

console.log("End ForEach");
// Quastion no 7 Change text when click

document.getElementById('changeText').onclick =function() {
    document.querySelector('h1').innerHTML = "You Clicked the botton";
  };

// Quastion no 8 Upper case

let text = "hello world"
let text2 = text.toUpperCase();
console.log(text2);

// Qustin no 9 Objects

let person = {
    name: "Alice",
    age : 30,
    
}

function greet(n){

    console.log("Hello, My name is " + n );

}

greet(person.name);








