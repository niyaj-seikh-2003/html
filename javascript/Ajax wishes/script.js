

// setTimeout(()=>{
//     document.getElementById('h1').textcontent='Welcome'
// },5000);
// let c=10;
// let timer=setInterval(()=>{
//     document.getElementById('para')
// })


const para =document.getElementById('show')

setTimeout(()=>{
    para.textContent="Welcome Everone"
    timer()
},1000)
let c=10;
function timer()
{
    let x=setInterval(()=>{
        para.textContent=c--;
        if(c==-1)
        {
            para.textContent="wishYou All The Best"
            clearInterval(x)
        }
    },1000)
}
