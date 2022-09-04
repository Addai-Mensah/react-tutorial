import React, {useState,useEffect}from 'react';
import Cart from "../assets/sammy-shopping.gif";
import loader from "../assets/loading.gif";
// import axios for a library making http/s request
import axios from "axios";
import {useNavigate} from "react-router-dom"



function Login() {

    let navigate = useNavigate();




    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    // to simulate loading  effect,by knowing when the request starts and ends
    let [isLoading,setIsLoading] = useState(false);



    let handleSubmit = async (event) =>{
        // prevent page from reloading
        event.preventDefault();
        // to know when the page is loading
        setIsLoading(true);

        // check if email and password has value
        if (email && password && password.length > 6){
            // use es6 try catch to handle request success and error
            try{
                // apiurl = https://regres.in/api/login

                let api_url = " https://regres.in/api/login"
                // if your object name and value has same naming, u can type just the value name and js would infer the name
                let req = await axios.post(`${api_url}`,{
                    
                    email,
                    password
                });
                alert("login successful")
                sessionStorage.setItem("token", req.data.token);
                console.log(req);
                navigate("/login")

            }catch (err){
                console.log(err);
                alert (err.response.data.error);
            }

        }else{
            alert("please fill all input fields and makse sure your password length is greater than 6")
        }
        setIsLoading(false);
    };

  return (
    <div className="h-screen w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 bg-blue-400 h-[30vh] md:h-screen w-full flex justify-center items-center">
                <img src={Cart} alt="" />
                </div>
            <div className="col-span-1 bg-white flex flex-col justify-center items-center">
            <form 
            className="shadow h-fit md:h-[50%] w-full w-[90%] px-3 pb-3 pt-5 rounded"
            onSubmit={handleSubmit}
            >
            <h1 className="font-bold text-3xl text-center mb-4">login</h1> 
            {/* to set the value of the input field and use onchange to track when value is updated */}
            <input type="text" 
            className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-center" 
            placeholder='Enter your email'
            value={email}
            onChange={(text) => setEmail(text.target.value)}
             />
              {/* to set the value of the input field and use onchange to track when value is updated */}
            <input type="password"
             className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-center" 
             placeholder='Enter your passowrd'
             onChange={(text) => setPassword(text.target.value)}
             required
             />
             {
                isLoading ? (
                    <img src ={loader} />
            ) : (
                <button className="h-12 w-[50%] bg-blue-400 rounded text-white mx-[25%]">Login</button>
              
          )}
          
             </form>
            </div>
        </div>
    </div>
  )
}

export default Login