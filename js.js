// //1.  Higher order function
// // a function which takes another function an argument or returns function  is called higher oreder function
// // arr.sort() => it helps to sort the array
// // arr.map => it itrets the array and do changes acroding to logic that you passed as function;
// // var arr = [1,2,3,4,5];
// // function pod(i){
// //     return i*5
// // }
// // var res = arr.map((i)=>pod(i))
// // console.log(res)
// //arr.filter => it crete new filter array acording the condition that you passed in argument if its satisfies the conding then add the element to thwe array
// // var arr = [0,0,1,0,1,0,1,0,1];
// // var ans = arr.filter((i)=>i===1)
// // console.log(ans)
// //arr.reduce() => it reduce the arry in single value  acroding to you argument;
// // var arr = [1,2,3,4,5];
// // var ans = arr.reduce((i,j)=>i+j);
// // console.log(ans)
// //arr.forEach => it act same as a loop it itretes all element for array
// // var arr = [1,2,3,4,5];
// // arr.forEach((i,j)=>console.log(i,j))

// // Array.prototype.sum = function(arr){
// //     var sum = 0;
// //     for(let i = 0; i < this.length; i++){
// //         sum += this[i]
// //     }
// //     return sum
// // }
// // var arr = [1,2,3,4,5];
// // console.log(arr.sum());


// // 2. Promise =>  promise ia an object which handle ansynchronus opretion like network request and reterns completation or faliure of opration

// // function sleep(time){
// //     return new Promise((resolve, reject) =>{
// //         if(typeof time == 'number'){
// //             setTimeout(()=>{
// //                 resolve("awake")
// //             },1000)
// //         }
// //         else{
// //             reject("sleep")
// //         }
// //     })
// // }
// // const test = async () =>{
// //     try{
// //         let data = await sleep('n');
// //         console.log(data);
// //     }
// //     catch(err){
// //         console.log(err);
// //     }
// // }
// // test()
// // var arr = "1,2,3,4,5";
// // function Pod(arr){
// //     return new Promise((resolve, reject) =>{
// //         if(Array.isArray(arr)){
// //             var sum = arr.reduce((i,j)=>i*j);
// //             setTimeout(()=>{
// //                 resolve(sum);
// //             },1000)
// //         }
// //         else{
// //             reject("plese pass array")
// //         }
// //     })
// // }
// // const test = async ()=>{
// //     try{
// //         let data = await Pod(arr);
// //         console.log(data);
// //     }
// //     catch(err){
// //         console.log(err);
// //     }
// // }
// // test()
// // var arr = [1,2,3,4,5];
// // function all(arr){
// //     return new Promise((resolve, reject) =>{
// //         if(Array.isArray(arr)){
// //             setTimeout(()=>{
// //                 resolve(arr[4]);
// //             },1000)
// //         }
// //         else{
// //             resolve("sorry");
// //         }
// //     })
// // }
// // const test = async ()=>{
// //     try{
// //         var data = await all(arr);
// //         console.log(data)
// //     }
// //     catch(err){
// //         console.log(err)
// //     }
// // }
// // test()
// //promise.all => it takes array and ist resolve all than return in array;
// //promise.race => it takes array and returns the responce which promice fullfiels first;

// // async await is function used to handle promise and async behaviour and make your code cleaner

// //Hoisting = it is process of javaScript to move decleration of var and function to top of their scope and allocate memory in global excution contex in call stack;
 
// // var x;
// // console.log(x);
// // fun();
// // function fun(){
// //     console.log("hii")
// // }

// //scope => it mens the accesbiltiy of variables and in javaScript all var function have their lexical stop to its parent and this hirechy continues to global scope;
// // var a = 10;
// // function fun(){
// //     return function outer(){
// //         return function inner(){
// //             console.log(a);
// //         }
// //     }
// // }
// // fun()()()


// // closer => it is a combination of functions bundeld to gather with a accesbiltiy to their lexical enivironment its also memoized the last call;
// // function debounce(func, delay) {
// //     let id;
// //     return ()=>{
// //         id && clearTimeout(id)
// //         id = setTimeout(()=>{
// //             func()
// //         },delay)
// //     }
// // }
// // function throttle(func, delay) {
// //     let curr = 0;
// //     if(Date.now()-curr > delay){
// //         func()
// //         curr = Date.now()
// //     }
// // }


// //ProtoTypal inhertiance is feature of javaScript that object can inhertis method and prporety from another object like array inhertis propertry from arry,prototpe and if we check its proto than you see it inherits their prototype from object;


// //contructor is a special function which create instance of object it can call by new keyworrd. its purpose to create a new object and takes property values from existing object;

// // function Person(name, age,adress){
// //   this.name = name;
// //   this.age = age;
// //   this.adress = adress;
// //   this.diplay =  function (){
// //       console.log(this.name ,"+", this.adress ,"+",this.adress)
// //   }   
// // }
// // const child = new Person("nikhil",20,"deoghar")
// // Person.prototype.greet = function(){
// //     console.log(this.name, "welcome")
// // }
// // console.log(child.greet())

// //callbacks = when you pass arguments in form of function is called callbacks

// //ist class function = decleration of function in variables and passing it to as an argument and returning it this know as ist class function
// // pure function are thsose function whose return value doesnt change untill you changes the parms ;its only depends upon its local input other state out of their not affect it;


// //class = its is contructor with sugar syntax basicaly it helps other language devloper to understand it better

// // class Person{
// //     contructor(name,age){
// //         this.name = name;
// //         this.age = age;
// //     }
// //     sleep(){
// //         console.log("sleep")
// //     }
// // }
// // class Coder extends Person{
// //     contructor(name,age,role){
// //         super(name,age)
// //         this.role = role;
// //     }
// //     code(){
// //         console.log('coding')
// //     }
// // }
// // var dev = new Coder('nikhil',20,'eng');
// // console.log(dev.code())

// //call helps object to borrow method from other object;
// // function print(){
// //     console.log(this.name);
// // }
// // var obj = {
// //     name:'nikhil',
// //     age:'20'
// // };
// // print.call(obj);

// //applay is same as call method only difference is that its take argument in form array

// //bind basicaly makes a copy method in variables and not invoke imeditly its depends you when you want to use

// //pollyfill of bind method
// // var obj = {
// //     name: 'nikhil',
// //     age: 20
// // };
// // var print = function(name,age) {
// //     console.log(`hi i am ${this.name} ${this.age} years`)
// // }
// // Function.prototype.myBind = function(...args) {
// //     let obj = this;
// //     parms = args.slice(1);
// //     return function(){
// //         obj.apply(args[0],parms)
// //     }
// // }
// // var res = print.myBind(obj);
// // console.log(res());

// //function cuurying refers the process to transform a function with multiple arguments to less arguments in same function

// //printName('nikhil')
// // var printName
// // function printName(name){
// //     console.log("hii",name)
// // }
// // printName = function (name){
// //     console.log("by",name)
// // }


// // console.log(typeof([]))

// // var x = 2;
// // var y = "3";
// // console.log(x-y)

// // var x = 1;
// // var y = true;
// // console.log(x===y)

// // var obj = {
// //     name:"nikhil",
// //     print:function(){
// //         console.log(this.name);
// //     }
// // }
// // var obj2 = {name:"masai"}
// // var res = obj.print.bind(obj2)
// // console.log(res)

// //currying example


// // var a,b,c,d
// //  a=5,b=5,c=5,d=5;
// // function fun(a){
// //     return function x(b){
// //         return function y(c){
// //             return function z(d){
// //                 return a+b+c+d;
// //             }
// //         }
// //     }
// // }
// // console.log(fun(a)(b)(c)(d))
// // function fun(){
// //     var let = 10;
// //     console.log(a)
// // }
// // fun()
// // console.log(a)

// //memoization is the form of caching or remembering last return value

// // function fun(a){
// //     return a+25;
// // }
// // console.log(fun(5))
// // console.log(fun(10))

// // function memo (){
// //     var cach = {};
// //     return function(num){
// //         if(num in cach){
// //             console.log("cacherd")
// //             return cach[num]
// //         }
// //         else{
// //             cach[num] = num + 25;
// //             return cach[num]
// //         }
// //     }
// // }
// // console.log(memo()(25))
// // console.log(memo()(35))
// // var sum
// // function fun(a){
// //     return ((sum)=>{
// //         sum+=a
// //     })()
// // }
// // console.log(fun(5))
// // const count = 0;
// // function increment(){
// //     ((prev)=>prev+1)
// // }


// //desStructuring
// // var person = {
// //     a:'1',
// //     b:'2',
// //     c:'3'
// // }
// // const {a,b,c,} = person;
// // console.log(a,b,c)
// // function func1(){
// //     setTimeout(()=>{
// //       console.log(x);
// //       console.log(y);
// //     },3000);
  
// //     var x = 2;
// //     let y = 12;
// // }
// // func1()
// // function func2(){
// //     for(let i = 0; i < 3; i++){
// //       setTimeout(()=> console.log(i),1000);
// //   }
  
// //   }
  
// //   func2();
// // (function(){
// //     setTimeout(()=> console.log(1),0);
// //     console.log(2);
// //     setTimeout(()=> console.log(3),1000);
// //     console.log(4);
// //   })();
// // const fun = ()=>{
// //     this.bind()
// //     var name = "function"
// //     console.log(this)
// // }
// // fun()
// // const sum = (x,y)=>{
// //     x = x && 3;
// //     y = y || 10;
// //     return x + y
// // }
// // console.log(sum(20,2))

// // Array.prototype.prime = function(){
// //     var res = [];
// //     for(let i = 0; i < this.length; i++){
// //         if(this[i]%2==0){
// //             res.push(this[i]);
// //         }
// //     }
// //     return res;
// // }
// // var arr = [2,3,4,5,6,7,8];
// // var res = [1,2,3]
// // console.log(res.prime())

// const obj = {
//         a: (a,b,c)=>a+b+c;
//         b: (a,b,c)=>a+b-c;
//         c: (a,b,c)=>a+b+c;
//         },
//     },
// };
    

// function fun(){
//     a=4
//     return a;
// }
// // fun()
// console.log(fun())
// var arr = [1,2,3,4,5];
// for(var i=0; i<arr.length; i++){
//     setTimeout(function(i){
//         return function(){
//             console.log(arr[i],i);
//         }
//     }(i),i*100)
// }

// (function fun(){
//     console.log(5)
// }())

// var str = "masai";
// var arr = str.split('/n');
// console.log(arr)

// var str = ['masai','javaScript','html','css'];
// var obj = {};
// for(let i=str.length-2;i>=0;i--){
//     obj[str[i]] = {...obj};
//     delete obj[str[i+1]]
// }
// console.log(obj.masai.javaScript);

//flatening a object
// var n = 0;
// function fun(n,str,obj){
//     if(n==str.length-1){
//         return obj
//     }
//     else{
//         n++
//         return {[str[n]] : fun(n,str,obj)}
//     }
// }
// console.log(fun(n,str,obj))


//flatering an array
// var arr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]];
// function customFlat(arr){
//     let res = [];
//     arr.forEach((el)=>{
//         if(Array.isArray(el)){
//             res.push(...customFlat(el))
//         }
//         else{
//             res.push(el)
//         }
//     })
//     return res
// }
// console.log(customFlat(arr))


// var arr = [1,2,3,4,5];
// for(var i = 0; i < arr.length; i++){
//     setTimeout(function(i){
//         return function(){
//             console.log(i,arr[i]);
//         }
//     }(i),i*100)
// }

//memoized function 
// function memoized(fn){
//     const res = {};
//     return function(...args){
//         var cahe = JSON.stringify(args);
//         if(!res[cahe]){
//             // console.log(...args)
//             res[cahe] = fn.call(this,...args);
//             return res[cahe]
//         }
//         else{
//             return res[cahe];
//         }
//     }
// }

// var pod = (a,b)=>{
//     for(var i=0; i<1000000; i++){

//     }
//     return a*b
// };
// const memoizedPod = memoized(pod)
// console.log(memoizedPod(1,3))
// console.log(memoizedPod(1,3))

//infinite currying
//  function fun(a){
//      return function(b){
//          if(!b){
//              return a
//          }
//          else {
//              return fun(a+b)
//          }
//      }
//  }
//  console.log(fun(5)(6)(7)(3)())

//prototype method chain

// const obj = {
//     total: 0,
//     add(a){
//         this.total += a
//         return this
//     },
//     multiple(a){
//         this.total *= a
//         return this
//     },
//     sub(a){
//         this.total -= a
//         return this
//     }
// }
// var res = obj.add(10).multiple(10).sub(1)
// console.log(res.total)