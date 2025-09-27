
// let a = 10, b = 5;
// let c =a+b;
// console.log("The sum is "+c)
// let a = +prompt("Enter a value");
// let b = +prompt("Enter b value");
// let c;
// console.log("the substract is "+(a-b))
// console.log("the sum result"+(a+b))
// console.log("the multiplication result is"+(a*b))
// console.log("the division result is "+(a/b))

// let r=+prompt("Enter r value")
// const p=3.14;
// console.log((p*r*r));
// let num=25.4168;
// console.log(typeof num)
// console.log(num.toFixed(2))
// console.log(num.toPrecision(3))
// num=25;
// console.log(num.toString(2))
// console.log(Math.sqrt(16))
// console.log(Math.cbrt(27))
// console.log(Math.pow(2,3))
// console.log(Math.abs(-786))
// console.log(Math.max(1,2,3,8,9))
// console.log(Math.min(1,2,3,8,9,4))
// console.log(Math.ceil(21.6))
// console.log(Math.floor(21.6))
// console.log(Math.round(2.1))
// console.log(Math.round(2.6))
// console.log(Math.round(Math.random()*6))
// console.log(Math.ceil(Math.random()*6))
// console.log(Math.ceil(Math.random()*6)+7)
// let n="niyaj"
// y='niyaj'
// console.log(`my name is ${n}`)
// console.log('tha gandhijii said "good morning"',"the time is 0'clock","my name is n")
// let p=10;
// q=15;
// console.log(`the sum of ${p} and ${q} is ${p+q}`)
// console.log(`the multiplication of ${p} and ${q} is ${p*q}`)

// let str="javascript"
// console.log(str.length)
// console.log(str[0])
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str)
// console.log(str.charAt(2))
// console.log(str.indexOf('j'))
// console.log(str.indexOf('a'))
// console.log(str.lastIndexOf('a'))
// console.log(str.endsWith("pt"))
// console.log(str.startsWith("kt"))
// console.log(str.slice(1,5))
// console.log(str.slice(6))
// console.log(str.split('a'))

// str="js is so easy"
// console.log(str.split(' ').length-1)
// str="my name is seikh mohammed niyajuddin"
// console.log(str.split('a').length-1+str.split('e').length-1+str.split('i').length-1+str.split('o').length-1+str.split('u').length-1)


// let str="Niyaj",str2=" ";
// for(i=0;i<str.length;i++)
// {
//     str2=str2 + " " + str.charAt(i);
//     console.log(str2)
// }

// let arr=[5,4,3,2,1]
// for(let i of arr)
// {
//     console.log(i)
// }

// let i=2
// do{
//     console.log(i)
//     i+=2;
// }
// while(i<=20);

// let arr=[5,4,3,2,1]
// let sum=0;
// for (let i of arr){
//     sum=i+sum;
// }console.log(sum)

// let n=+prompt()
// let sum=0;
// let multi=1;
// while(n>0){
//     rem=n%10;
//     sum+=rem;
//     multi*=rem;
//     n=Math.floor(n/10);
// }if(sum==multi){
//     console.log("perfect no")
// }else{
//     console.log("not a perfect no")
// }

// let marks=[[0,20,30,40],[0,10,20,30,],[10,10,10,10]]
// for(let i in marks){sum=0;
//     for(let j of marks[i]){
//         sum+=j;
//     }console.log(`the sum of test ${+i+1} is ${sum}`)
// }

// let arr=[1,2,3,4,5]
// arr.push("niyaj");
// console.log(arr);
// arr.pop()
// console.log(arr)
// arr.unshift("niyaj seikh")
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.splice(2,3)
// console.log(arr)
// arr=[2,5,8,9,6,]
// arr.forEach(function (e,i){
//     console.log(e)
// })
// let sum=0;
// arr.forEach(function(e,i){
//     sum=sum+e;
// })
// console.log(sum)
// arr=[9,6,7,4,5]
// arr.forEach(function(ele,ind){
//     console.log(ele**3)
// })
// arr=[9,6,7,4,5]
// let x=arr.map((ele,ind)=>{
// return ele*ele;
// })
// console.log(x)
// let h=arr.map((ele,ind)=>{
//     return ele**3;
// })
// console.log(h)
// let y=arr.filter((ele,ind)=>{
//     return ele<7;
// })
// console.log(y)
// console.log(arr.indexOf(7));
// arr=[5,4,7,6,8,9,10]
// let z=arr.filter((ele,ind)=>{
//     if(ele%2!=0){
//         return ind;
//     }
// })
// console.log(z)
// arr=[5,4,7,6,8,3,10]

// let res=arr.reduce((p,c)=>{
//     return p+c;
// },0)
// console.log(res);
// let obj={
//     name:"Niyaj",
//     age:22
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// Object.freeze(name)


// let names=["raja","puja","john","maaja"]
// let m=names.filter((e,i)=>e.endsWith('a'))
// let n=m.map((e,i)=>e.charAt(0))
// console.log(n);

// let arr=[5,8,7,6,1,9,3]
// let c=arr.find((e,i)=>e%2!=0 && e>5)
// console.log(c)
// let arr=[5,4,6,7,8,9,10]
// let y=arr.map((e,i)=>{
//     return e%2!=0 ?i:'null'
// })
// let z= y.filter((e,i)=>e!='null')
// console.log(z)

let str='niyaj'
let reversed=str.split("").reverse();
console.log(reversed)
// console.log(str.split(' ').reverse( ))

