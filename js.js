//1.  Higher order function
// a function which takes another function an argument or returns function  is called higher oreder function
// arr.sort() => it helps to sort the array
// arr.map => it itrets the array and do changes acroding to logic that you passed as function;
// var arr = [1,2,3,4,5];
// function pod(i){
//     return i*5
// }
// var res = arr.map((i)=>pod(i))
// console.log(res)
//arr.filter => it crete new filter array acording the condition that you passed in argument if its satisfies the conding then add the element to thwe array
// var arr = [0,0,1,0,1,0,1,0,1];
// var ans = arr.filter((i)=>i===1)
// console.log(ans)
//arr.reduce() => it reduce the arry in single value  acroding to you argument;
// var arr = [1,2,3,4,5];
// var ans = arr.reduce((i,j)=>i+j);
// console.log(ans)
//arr.forEach => it act same as a loop it itretes all element for array
// var arr = [1,2,3,4,5];
// arr.forEach((i,j)=>console.log(i,j))

// Array.prototype.sum = function(arr){
//     var sum = 0;
//     for(let i = 0; i < this.length; i++){
//         sum += this[i]
//     }
//     return sum
// }
// var arr = [1,2,3,4,5];
// console.log(arr.sum());


// 2. Promise =>  promise ia an object which handle ansynchronus opretion like network request and reterns completation or faliure of opration

// function sleep(time){
//     return new Promise((resolve, reject) =>{
//         if(typeof time == 'number'){
//             setTimeout(()=>{
//                 resolve("awake")
//             },1000)
//         }
//         else{
//             reject("sleep")
//         }
//     })
// }
// const test = async () =>{
//     try{
//         let data = await sleep('n');
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// test()
//promise.all => it takes array and ist resolve all than return in array;
//promise.race => it takes array and returns the responce which promice fullfiels first;

// async await is function used to handle promise and async behaviour and make your code cleaner

//Hoisting = it is process of javaScript to move decleration of var and function to top of their scope and allocate memory in global excution contex in call stack;
 
// var x;
// console.log(x);
// fun();
// function fun(){
//     console.log("hii")
// }

//scope => it mens the accesbiltiy of variables and in javaScript all var function have their lexical stop to its parent and this hirechy continues to global scope;
// var a = 10;
// function fun(){
//     return function outer(){
//         return function inner(){
//             console.log(a);
//         }
//     }
// }
// fun()()()


// closer => it is a combination of functions bundeld to gather with a accesbiltiy to their lexical enivironment its also memoized the last call;
// function debounce(func, delay) {
//     let id;
//     return ()=>{
//         id && clearTimeout(id)
//         id = setTimeout(()=>{
//             func()
//         },delay)
//     }
// }
// function throttle(func, delay) {
//     let curr = 0;
//     if(Date.now()-curr > delay){
//         func()
//         curr = Date.now()
//     }
// }


//ProtoTypal inhertiance is feature of javaScript that object can inhertis method and prporety from another object like array inhertis propertry from arry,prototpe and if we check its proto than you see it inherits their prototype from object;


//contructor is a special function which create instance of object it can call by new keyworrd. its purpose to create a new object and takes property values from existing object;

// function Person(name, age,adress){
//   this.name = name;
//   this.age = age;
//   this.adress = adress;
//   this.diplay =  function (){
//       console.log(this.name ,"+", this.adress ,"+",this.adress)
//   }   
// }
// const child = new Person("nikhil",20,"deoghar")
// Person.prototype.greet = function(){
//     console.log(this.name, "welcome")
// }
// console.log(child.greet())

//callbacks = when you pass arguments in form of function is called callbacks

//ist class function = decleration of function in variables and passing it to as an argument and returning it this know as ist class function
// pure function are thsose function whose return value doesnt change untill you changes the parms ;its only depends upon its local input other state out of their not affect it;


//class = its is contructor with sugar syntax basicaly it helps other language devloper to understand it better

// class Person{
//     contructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sleep(){
//         console.log("sleep")
//     }
// }
// class Coder extends Person{
//     contructor(name,age,role){
//         super(name,age)
//         this.role = role;
//     }
//     code(){
//         console.log('coding')
//     }
// }
// var dev = new Coder('nikhil',20,'eng');
// console.log(dev.code())

//call helps object to borrow method from other object;
// function print(){
//     console.log(this.name);
// }
// var obj = {
//     name:'nikhil',
//     age:'20'
// };
// print.call(obj);

//applay is same as call method only difference is that its take argument in form array

//bind basicaly makes a copy method in variables and not invoke imeditly its depends you when you want to use

//pollyfill of bind method
// var obj = {
//     name: 'nikhil',
//     age: 20
// };
// var print = function(name,age) {
//     console.log(`hi i am ${this.name} ${this.age} years`)
// }
// Function.prototype.myBind = function(...args) {
//     let obj = this;
//     parms = args.slice(1);
//     return function(){
//         obj.apply(args[0],parms)
//     }
// }
// var res = print.myBind(obj);
// console.log(res());

//function cuurying refers the process to transform a function with multiple arguments to less arguments in same function

//printName('nikhil')
// var printName
// function printName(name){
//     console.log("hii",name)
// }
// printName = function (name){
//     console.log("by",name)
// }


// console.log(typeof([]))