// 1 no:-

// console.log("Name=Mohammed Niyaj")
// console.log("Rollno=1001")
// console.log("Branch=b.tech")
// console.log("Address=Hydrabad")
// console.log("college=Naresh It")

// 2:-

// let a=20,b=10
// console.log(`Addition is =${a+b}`)
// console.log(`substraction is =${a-b}`)
// console.log(`Multiplication is =${a*b}`)
// console.log(`Division is =${a/b}`)
// console.log(`modulatiom is =${a%b}`)

// 3:-

// let a=20,b=10
// console.log(`Addition is =${a-(-b)}`)

// 4:-

// let num=+prompt("Enter value");
// console.log(`output = ${Math.floor((num/10))+(num%10)}`)

// 5:-

// let num=+prompt("Enter value");
// console.log(`output = ${Math.floor((num/100))+(num%10)}`)

// 6:-

// let side=+prompt()
// let length=+prompt(),breath=+prompt()
// console.log(`The area of the square with side ${side} is : ${side*side}`)
// console.log(`The area of the rectangle with side ${breath} and ${length} : ${breath*length}`)

// 7:-

// let a=10,b=20;
// console.log(`Before swapping :a=${a},b=${b}`)

// c=a,a=b,b=c;
// console.log(`After swapping :a=${a},b=${b}`)

// 8:-

// let a=10,b=20;
// console.log(`Before swapping :a=${a},b=${b}`)

// a=a+b,b=a-b,a=a-b

// console.log(`After swapping :a=${a},b=${b}`)

// 9:-

// let a=26;
// console.log(`output : ${Math.floor(a/10)*10}`)

// 10:-

// let a=+prompt()
// console.log(`output : ${(Math.floor(a/10)+1)*10}`)
// =============================================================================================
//                            DAY-2
// ===============================================================================================
// 1:-
    // let a=+prompt()
    // if(a%2==0){
    //     console.log("Even")
    // }else{
    //     console.log("Odd")
    // }
    // another type solution:

    // a%2==0 || console.log("Odd")
    // a%2==1 || console.log("Even");

    // 2:-

    // let a=+prompt()
    // let b=+prompt()
    // a>b || console.log(`max = ${b}`)
    // b>a || console.log(`max = ${a}`);

    // 3:-

    // let a=+prompt()
    // let b=+prompt()
    // let c=+prompt()
    // a>b || console.log(`max = ${b}`)
    // b>c || console.log(`max = ${c}`)
    // c>a || console.log(`max = ${a}`);

    // 4:-

    // let a=+prompt()
    // let b=+prompt()
    // let c=+prompt()
    // a>b&&a>c?console.log(`Max=${a}`):b>a&&b>c?console.log(`Max=${b}`):console.log(`Max=${c}`);

     // 5:-

    // let a=+prompt()
    // a%2==0?console.log("Even"):console.log("Odd");

    // 6:-

    // let cost=3500,pro=27,vat=12.7,ser=3.87;

    // sell=cost+(cost*pro)/100;

    // profit=sell-cost;

    // vat_value=(sell*vat)/100;

    // service=ser*sell/100;

    // console.log(`Cost price : RS. ${cost.toFixed(2)}`)
    // console.log(`profit ${pro}%:RS ${profit.toFixed(2)}`)
    // console.log(`selling price (Without VAT & Service charge): RS.${sell.toFixed(2)}`)
    // console.log(`VAT${vat}%:RS ${vat_value.toFixed(2)}`)
    // console.log(`Service charge${ser}%:RS ${service.toFixed(2)}`)
    // console.log(`Total selling price (with VAT & service charge): RS ${(sell+vat_value+service).toFixed(2)}`)

    // 7:-

    




    // 8:-

    // let num=+prompt("Enter a number")
    // num<0?console.log("you enterd negetive number"):num>0?console.log("you enterd positive no"):console.log("you entered zero");

// =========================================================================
//                                 DAY-3
// ==============================================================================
// 1:-
// let isAccountActive =prompt(Boolean);
// if(isAccountActive=="true"){
//     console.log("Your account is acrtive.You proceed with your transaction.")
// }else{
//     console.log("Your account is currently inactive. Please contact support.")
// }

// 2:-
// let password=prompt(length)
// if(password.length>=8){
//     console.log(" Password meets minimum length requirements. Good job!")
// }else{
//     console.log("Password is too short. Please use at least 8 characters.")
// }

// 3:-

// let num=+prompt("Enter value here")
// if(num>=1200){
//     console.log(`customers total spentding:$${num}.Loyality Tier:Platinum.`)
// }else if(num>=500&& num<1200){
//     console.log(`customers total spentding:$${num}.Loyality Tier:Gold.`)
// }else if(num>=100 && num<500){
//     console.log(`customers total spentding:$${num}.Loyality Tier:Silver.`)
// }else{
//     console.log("Bronze")
// }

// 4:-

// let vehiclespeed=+prompt()
// if(vehiclespeed<30){
//     console.log(`Vehicle speed: ${vehiclespeed}km/h. Classification: slow`)
// }else if(vehiclespeed>=30&&vehiclespeed<60){
//     console.log(`Vehicle speed: ${vehiclespeed}km/h. Classification: normal`)
// }else if(vehiclespeed>=60&&vehiclespeed<90){
//     console.log(`Vehicle speed: ${vehiclespeed}km/h. Classification: fast`)
// }else{
//     console.log("Exsessive")
// }

// 6:-
// let num=+prompt()
// switch(num){
    
//     case 1:console.log("Monday");break;
//     case 2:console.log("Tuesday");break;
//     case 3:console.log("Wednessday");break;
//     case 4:console.log("Thursday");break;
//     case 5:console.log("Friday");break;
//     case 6:console.log("Saturday");break;
//     case 7:console.log("Sunday");break;
//     default :console.log(" Invalid day number");
// }

// 7:-

// let num1=+prompt()
// let num2=+prompt()
// let operator=prompt()

// switch(operator){
//     case '+' :console.log(`Result of ${num1}+${num2} is : ${num1+num2}`);break;
//     case '-' :console.log(`Result of ${num1}-${num2} is : ${num1-num2}`);break;
//     case '*' :console.log(`Result of ${num1}*${num2} is : ${num1*num2}`);break;
//     case '/' :if(num1==0||num2==0){
//     console.log("Error: Division by zero");
// }else{
//     console.log(`Result of ${num1}/${num2} is : ${num1/num2}`)
// };break;
        
//     default : console.log("Error :Invalid operator")
// }

// ===================================================================================
//                                               DAY-4
// =====================================================================================

// 1:-

// let num=+prompt()
// if(num<0){
//         console.log('Loop condition false initially, negative values are not allowed.');
//     }
// while(num>=0)
//         {
//     console.log(num);
//     num--;
//     }

// 2:-

// let attempts=+prompt();
// let isloggedIn=false;
// let correctpassword="Niyaj123";
// while(attempts>0 && isloggedIn==false){
//     let yourpassword=prompt(`enter your password.( ${attempts} attempts left)`)
//     if(yourpassword==correctpassword){
//         isloggedIn=true;
//         console.log("Login successful!");
//     }else{
//         attempts--;
//     }
// }
// if(attempts==0 && isloggedIn==false){
//     console.log("Incorrect password. No attempts left. Account locked.")
// }

// 3:-

// let workon=true;
// let ending="stop";
// while(workon)
// {
//     let yourinput=prompt(`enter "stop as it is"`)
//     if(yourinput==ending){
//         workon=false;
//     }
// }

// 4:-

// let maxloadincreament=+prompt()

// let loadprogress=0;
// while(loadprogress<100){
//     let incremnt=Math.floor(Math.random()*maxloadincreament)+5;
//     console.log(`loading....${loadprogress+incremnt}%`)
// }
// ========================================================================================
//                                 DAY-5
// =========================================================================================

// 1:-

//  let num=+prompt()
// let sum=0,i=1
// while(i<=num)
// {
//     console.log(`Adding ${i} . Current sum :${sum+=i++}`)
    
// }console.log(`Total sum of  ${num} is :${sum}`)

// 2:-

// let num=+prompt()
// let char=prompt()
// for(let i=1;i<=num;i++){
//     let a="";
//     for(let j=1;j<=i;j++){
//         a=a+char   
//     }console.log(`Progress:${a}`)
// }

// 3:-






// ==========================================================================================================================
//                                                  DAY-6
// ===========================================================================================================================

// 1:-

// let pass=prompt("Enter a  pasword");
// function checkPasswordStrenth(a,b){
//     let hasDigit=false;
//     if(a.length<b){
//         return false;
//     }
//     for(let i of a){
//         if(i>=0 && i<=9){
//             hasDigit=true;
//         }
//     }
// }
// let value=checkPasswordStrenth(pass,8);
// console.log(value);

// 2:-

// function analyzeWordForVowelConsonant(a){
//     let vowel=false;
//     let consonant=false;
//     for(let i of a){
//         i.toLowerCase();
//         if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
//             vowel=true;
//         }else{
//             consonant=true;
//         }
//     }if(vowel&&consonant){
//         console.log("The string contains vowels and consonants");
//     }else if(vowel){
//         console.log("The string contains only vowels");
//     }else{
//         console.log("The string contains only consonants");
//     }
// }

// let word=prompt("Enter your password");
// let value=analyzeWordForVowelConsonant(word);

// 3:-

// let word=prompt("enter a word");
// let string=function(a){
//     let reversedsrting= " ";
//     for(let i=a.length;i>=0;i--){
//         reversedsrting=reversedsrting+a.charAt(i);
//     }return reversedsrting;
// }
// console.log(string(word));

 // 4:-

 
// let string=prompt("Enter your word");
// const name= ((str)=> str.toLowerCase());
// console.log(name(string));


// ======================================================================================================
//                                                          DAY-7
// =====================================================================================================

// 1:-

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let x=arr.forEach((e,i)=>{
//     console.log(e)
// })

// 2:-
// let numbers=[45,3,25,78,12]
// numbers.sort((e,i)=>e-i);
// console.log(numbers);
// numbers.sort((e,i)=>i-e)
// console.log(numbers)


// // 3:-

// let mixedArray = [12, "apple", 45, "banana", "cherry", 78, "orange"];

// let numbers = [];
// let strings = [];

// mixedArray.forEach(item => {
//   if (typeof item === "string") {
//     strings.push(item);
//   } else if (typeof item === "number") {
//     numbers.push(item);
//   } else {
//   }
// });

// console.log("Numbers:", numbers); 
// console.log("Strings:", strings); 


// 4:-

// let numbers=[3,12,25,45,78]
// let evenarray=[];
// let oddarray=[];

// numbers.forEach(item=>{
//     if(item%2==0){
//         evenarray.push(item);
//     }else{
//         oddarray.push(item);
//     }
// });
// console.log("evenarray : ",evenarray);
// console.log("oddarray : ",oddarray);

// 5:


let numbers=[+prompt()]
let sum=0;
numbers.forEach((e,i)=>{
    sum=sum+e;
})
console.log(sum);








