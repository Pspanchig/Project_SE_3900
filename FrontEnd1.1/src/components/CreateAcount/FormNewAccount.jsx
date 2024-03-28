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
    const changeSelector = () => {            
        const selectorDiv = document.getElementById('selectorDiv');
        const select = selector.value;

        if(select === "Admin"){
            selectorDiv.style.display="flex";
            selectorDiv.style.flexDirection='column'                
            // selectorDiv.style.justifyContent="center";                
            // selectorDiv.style.alignItems="center";
            selectorDiv.style.textAlign='center'
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
            connection: date,
            canAccesMID: false,
            canAccesPup: false,
            canAccesINF: false,
            canAccesTCS: false,
            canAccesMQS: false,
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
    };
    const CheckPassword = () => {
        const Password1 = document.getElementById("Password").value;
        const Password2 = document.getElementById("ConfirmPassword").value;
        const span = document.getElementById('DontMacth');
        const span2 = document.getElementById('PassEmpty');       
        const span3 = document.getElementById('nullSelector');       
        const span4 = document.getElementById('WrongAdminCode');       
        const adminCode = document.getElementById('adminCodeInput');
        const code = adminCode.value;
        const selectorDiv = document.getElementById('selector');
        const select = selectorDiv.value;
        
        // console.log(code + "Este es el codgio que llega");
        // console.log(select + "Este es el select que llega");
        
        if((Password1 === Password2) && (Password1 !== "" && Password2 !== ""))
        {
            if(select ==="user"){
                sendInfo();
                goToLogin();                                            
            }
            else if(select === "null"){
                span3.style.display='block';                    
                setTimeout(() => {
                    span3.style.display='none';                    
                }, 2000);            
            } 
            else if(select ==="Admin" && code == 1120){
                sendInfo();
                goToLogin();                                            
            }
                else if(select ==="Admin" && code !== 1120){
                span4.style.display='block';                    
                setTimeout(() => {
                    span4.style.display='none';                    
                }, 2000);            
            } 


        } 
           
        else if(Password1 !== Password2){
            span.style.display='block';                    
            setTimeout(() => {
                span.style.display='none';                    
            }, 2000);            
        }            
        else if(Password1 === "" && Password2 === ""){
            span2.style.display='block';            
            setTimeout(() => {
                span2.style.display='none';
            }, 2000);
        }
    }
    useEffect(() => {
        
        const selector = document.getElementById('selector');
        const createButton = document.getElementById('subButton');
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

        <span className='PasswordWrong' id='WrongAdminCode'>wrong admin code</span>
        <span className='PasswordWrong' id='nullSelector'>Select user or admin</span>
        <span className='PasswordWrong' id='DontMacth'>Password does not mactch</span>
        <span className='PasswordWrong' id='PassEmpty'>Type a password</span>

        <label htmlFor="">Username</label>
        <input type="text" placeholder='Username' name='Name' id='name'/>
        <label htmlFor="">Passowrd</label>
        <input type="Password" placeholder='Password' id='Password' name='Password'/>
        <label htmlFor="">Confirm your passowrd</label>
        <input type="Password" placeholder='Password' id='ConfirmPassword'/>

        <select name="Is_admin" id="selector" >
            <option value="null" >select user or admin</option>
            <option value="user" >user</option>
            <option value="Admin" n>Admin</option>
        </select>        
        <div style={{ display: 'none' }} id='selectorDiv'>            
        <label htmlFor="" id='writeCode'>Write the code</label>
        <br />
        <input id='adminCodeInput' type="number" />
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