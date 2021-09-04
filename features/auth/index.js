import React, {useState} from 'react'
import axios from 'axios'
import {toast, ToastContainer} from "react-nextjs-toast"


const Auth = () => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleUserName = (e) => setUserName(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(userName, email, password);
    }

    const register = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/register', {
            'name': userName,
            'email': email,
            'password': password
        });

        const data = res.data;

        console.log(data);
    }


    return (
        <div className="w-1/2 auth shadow p-10 mx-auto">
            <h1 className="text-4xl font-black text-center mb-5">Login</h1>
            <ToastContainer />
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="w-1/3">      
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe" onChange={handleUserName}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="w-1/3">      
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" placeholder="Jane@doe.com" onChange={handleEmail} />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="w-1/3">      
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" placeholder="Jane Doe" onChange={handlePassword}/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="w-1/3">      
    
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-blue-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-white cursor-pointer leading-tight focus:outline-none focus:bg-purple-400 focus:border-purple-500" id="inline-full-name" type="submit" value="LOGIN" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Auth
