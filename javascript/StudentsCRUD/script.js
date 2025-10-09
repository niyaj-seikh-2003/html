const form=document.querySelector('#fr')
const nameInput=document.getElementById('name')
const emailInput=document.getElementById('email')
const passwordInput=document.getElementById('password')
const confirmPasswordInput=document.getElementById('cnfpassword')
const errorsDiv=document.getElementById('errors')
function add()
{
    form.classList.toggle('hide')
   
}
document.getElementById('btn').addEventListener('click',add);
function submitLogic(e)
{
    e.preventDefault();
    errorsDiv.textContent=""
          if(nameInput.value.trim() == '')
              {
                  const p=document.createElement("p");
                  p.textContent="name is required";
                  errorsDiv.appendChild(p)
          
              }
              if(emailInput.value.trim() == '')
              {
                  const p=document.createElement("p");
                  p.textContent="email is required";
                  errorsDiv.appendChild(p)
          
              }
              if(passwordInput.value.trim() == '')
              {
                  const p=document.createElement("p");
                  p.textContent="password is required";
                  errorsDiv.appendChild(p)
          
              }
              if(confirmPasswordInput.value.trim() == '')
              {
                  const p=document.createElement("p");
                  p.textContent="confirm password is required";
                  errorsDiv.appendChild(p)
          
              }
              if(passwordInput.value.length <=8)
              {
                const p=document.createElement("p");
                  p.textContent="password should be atleast 8 character";
                  errorsDiv.appendChild(p)
              }
              if(passwordInput.value !='' && passwordInput.value != confirmPasswordInput)
              {
                const p=document.createElement("p");
                  p.textContent="password and confirm password are not matching";
                  errorsDiv.appendChild(p)
              }
}     
document.getElementById('fr').addEventListener('submit',submitLogic)
document.getElementById('showpwd').addEventListener('click',function()
{
    passwordInput.type=passwordInput.type == 'password ' ? 'text':'password';
})
document.getElementById("showpwd2").addEventListener('click',function()
{
    passwordInput.type=passwordInput.type == "password" ? "text":"password";
})