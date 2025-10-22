// console.log("Name = Niyaj Seikh")
// console.log("Roll no is =101")
// console.log("Branch =BSc")
// console.log("Address =Odisha")
// console.log("College Name is =Naresh It")



// let a =20;
// let b= 10;
// console.log(`Addition is :${a+b}`)
// console.log(`Substraction  is :${a-b}`)
// console.log(`Multiplicatio is :${a*b}`)
// console.log(`Division is :${a/b}`)
// console.log(`Modulation is :${a%b}`)


// let a = 10;
// let b= 20;

// console.log (`Addition is :${a-(-b)}`)


// let num=+prompt("Enter a value");

// console.log(Math.floor((num/10)+(num%10)))

// let num=+prompt("Enter a value");

// console.log(Math.floor((num/100)+(num%10)));

// let square=+prompt("enter square")
// console.log(`The aea of the square is ${square} is : ${square*square}`)

// let length=+prompt()
// let breadth=+prompt()
// console.log(`the area of the rectangel with length ${length} and breadth ${breadth} is :${length*breadth}`)


// let a=10;
// let b=20;
// let c;
// console.log(`before swapping :a=${a},b=${b}`)

// c=a,a=b,b=c
// console.log(`after swapping :a=${a},b=${b}`)


// let a=10,b=20;

// console.log(`before swapping :a=${a},b=${b}`)

// a=a+b;
// b=a-b;
// a=a-b;
// console.log(`after swapping :a=${a},b=${b}`)


// let a=26;
// console.log(Math.floor(a/10)*10)

// let b=34;
// console.log(Math.floor(b/10+1)*10)



// let num=+prompt()

// num%2==0 || console.log("odd");
// num%2!=0 || console.log("Even")



// let num1=+prompt()
// let num2=+prompt()
// num1>num2 || console.log(`max=${num2}`)
// num2>num1 || console.log(`max=${num1}`)




// let num1=+prompt()
// let num2=+prompt()
// let num3=+prompt()
// num1>num2 || console.log(`max=${num2}`)
// num2>num3 || console.log(`max=${num3}`)
// num3>num1 || console.log(`max=${num1}`);




// let a=+prompt()
// let b=+prompt()
// let c=+prompt()

// a>b&&a>c?console.log(`max=${a}`):b>a && b>c ?console.log(`max=${b}`):console.log(`max=${c}`)
    



// let a=+prompt()

// a%2==0?console.log("Even"):console.log("Odd")



// let cost=3500;
// pro=27;
// vat=12.7;
// service=3.87;

// selling=cost+(cost*27)/100;
// profit=selling-cost;
// vat_value=(selling*12.7)/100;
// serviceCharge=(selling*3.87)/100;

// console.log(`cost price RS.${cost.toFixed(2)}`);
// console.log(`profit(${pro}%):RS.${profit.toFixed(2)}`);
// console.log(`selling price (without vat & setvice charge ):RS.${selling.toFixed(2)}`);
// console.log(`vat${(vat)}%:RS.${vat_value.toFixed(2)}`);
// console.log(`service charge ${(service)}% :RS.${serviceCharge.toFixed(2)}`);
// console.log(`totalselling price (with VAT & serviece charge):RS.${(selling+vat_value+serviceCharge).toFixed(2)}`)


// let n=+prompt("Enter a number")
// let r,s=0,m=1;
// while(n>0)
// {
//    r=n%10;
//     s+=r;
//     m*=r;
//     n=Math.floor(n/10);
// }
// if(s==m){console.log("Perfect")}
// else{console.log("Not perfect")}

// let mark=[[10,20,30,20],[15,19,38,10],[10,10,20,20]]

// for(let i in mark)
// {
//     sum=0;
//     for(let j of mark[i])
//     {
//         sum+=j;
//     }
//     console.log(`Mark of test ${+i+1} is ${sum}`);
// }


function addTwoNumber(a,b)
{
    return a+b;
}
let value1=addTwoNumber(5,3)
console.log(value1);

let value2=addTwoNumber(10,20)
console.log(value2)

console.log("===============================================")

function createWelcomeMassege(user)
{
    if(user && user.name)
    {
        return `Hello ${user.name} ! welcome to platform .`
    }
    else{
        return `Hello Guest ! welcome to our platform .`
    }
}

let user1={
    name:"Niyaj",
    address:"HYD",
    institute:"NIT",
    batch:"java51"
};
console.log(createWelcomeMassege(user1))

let user2={
    name:"Guest"
};
console.log(createWelcomeMassege(user2))


let user3={
};
console.log(createWelcomeMassege(user3))

console.log("===============================================")


function mergeArrays(Array1,Array2)
{
    if(Array1.length <=0 && Array2.length <=0 )
    {
        return false;
    }

let mergeArrays=Array1.concat(Array2);

let uniquearray=mergeArrays.filter((item)=>mergeArrays.indexOf(item)===mergeArrays.indexOf(item));

console.uniquearray;

return uniquearray;

}


let arr1=[1,2,3,4];
let arr2=[2,3,4,5,6];

mergeArrays(arr1,arr2)


let arr=[1,2,3,4,6]
arr.forEach(function(e,i){
    console.log(e**3)
})
let sum=0
arr.forEach(function(e,i){
    sum=sum+e;
})
console.log(sum)
let x=arr.filter(function(e,i){
    return (e>=2)
})
console.log(x)

let y=arr.map(function(e,i){
    return e;
})
console.log(y)

console.log(arr.indexOf(2))

let z=arr.filter(function(e,i){
    return e%2==0;
})
console.log(z)


let act=["neha khan","arshi khan","sakina ","mizna"]

let res=act.filter(function(e,i){
    return e.endsWith("khan")
})
console.log(res)


let odd=arr.filter(function(e,i){
   return e%2 !=0;
})
console.log(odd)


let arra=[1,8,6,9,7,3,8,4,2]
let od=arra.filter(function(e,i){
    return e%2 !=0;
})
console.log(od)


let n=["raja","niyajb","hasim","imtiyaz","namsib"]
let w=n.filter((e,i) => e.endsWith('b'))
let o =w.map((e,i) => e.charAt(0))
console.log(o)

let niyaj=[1,5,9,8,3,7]

let rev=niyaj.reverse();
console.log(rev)

let str='Niyaj'
console.log(str.split('').reverse
)

let obj={
    name:"niyaj",
    age:22

}
console.log(obj)

let b=document.getElementsByClassName('para');
console.log(b[0]);
b[0].textContent="Niyaj seikh";

let d=document.getElementById('smn');
d.textContent="Shaikh mohammed Niyajuddin";


let c=0;
function incr()
{
    if(c<20)
    {
        c++;
        document.getElementById('count').textContent=c;
    }
}
function decr()
{
    if(c>0)
    {
        c--;
        Element.textContent=c;
    }
    else{
        alert("Number should not be less then zero");
    }
}
function resert()
{
    c=0;
    Element.textContent=c;
}










