import './css/FormsNewAccount.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormNewAccount = () => {

    const  navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    }
    const goToMenu = () => {
        navigate('/');
    }

    useEffect(() => {
        const selector = document.getElementById('selector');
        const createButton = document.getElementById('subButton');

        const changeSelector = () => {            
            const selectorDiv = document.getElementById('selectorDiv');
            const select = selector.value;
            
            if(select === "Admin"){
                selectorDiv.style.display="flex";                
                selectorDiv.style.justifyContent="center";                
                selectorDiv.style.alignItems="center";                
            }
            else{
                selectorDiv.style.display="none";                
            }
        }
        
        const getIP = async () => {
            const URL = 'https://api.ipify.org?format=json';
            const response = await fetch(URL);
            const data = await response.json();
            return data.ip;
        };                

        const sendInfo = async () => {
            const name = document.getElementById("name").value;
            const password = document.getElementById("Password").value;
            const adminValue = document.getElementById('selector').value;
            const userIP = await getIP(); 
            const date = new Date('2014-03-05')

        
            let formData = {
                username: name,
                password: password,
                user_IP: userIP, 
                is_admin: adminValue,
                connection: date
            };
        
            const url = "http://localhost:8080/PostUser";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData) 
            });
        
            const responseData = await response.text(); 
            console.log(responseData);
        };

        const CheckPassword = () => {
            const Password1 = document.getElementById("Password").value;
            const Password2 = document.getElementById("ConfirmPassword").value;
            const span = document.getElementById('DontMacth');
            const span2 = document.getElementById('PassEmpty');
            
            if(Password1 === "" || Password2 === "" ? span2.style.display='block' : span2.style.display='none')
                
            if(Password1 === Password2)
            {
                span.style.display='none';
                console.log("php sent!")
                sendInfo();
                goToLogin();
                
            } else{
                span.style.display='block';                
                span2.style.display='block';                
            }            
        }
        createButton.addEventListener( 'click', function(e){
            e.preventDefault();
            CheckPassword();
        }); 
        selector.addEventListener('change', changeSelector)
    });

  return (
    <div className='loginForm'>
        <h1>Create Account</h1>
        <form action="#" method="post">   

        <span className='PasswordWrong' id='DontMacth'>Password does not mactch</span>
        <span className='PasswordWrong' id='PassEmpty'>Type a password</span>

        <label htmlFor="">Username</label>
        <input type="text" placeholder='Username' name='Name' id='name'/>
        <label htmlFor="">Passowrd</label>
        <input type="Password" placeholder='Password' id='Password' name='Password'/>
        <label htmlFor="">Confirm your passowrd</label>
        <input type="Password" placeholder='Password' id='ConfirmPassword'/>

        <select name="Is_admin" id="selector" >
            <option value="user" >user</option>
            <option value="Admin" n>Admin</option>
        </select>        
        <div style={{ display: 'none' }} id='selectorDiv'>            
        <label htmlFor="">Write the code</label>
        <input type="number" />
        </div>
        <div className='formsbuttons'>
        <input type='submit' id='subButton'/>
        </div>        
    </form> 

    <div>
        <ul>
        <li>
            <a onClick={goToLogin} href="">Login in here</a>
        </li>
        <li>
            <a onClick={goToMenu} href="">Go Back</a>
        </li>            
        </ul>
    </div>

    </div> 
  )
}

export default FormNewAccount