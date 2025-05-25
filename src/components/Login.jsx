import React from 'react'
import * as Icon from 'react-feather'

const Login = () => {
    return (
        <div className="w-full justify-center bg-white flex flex-col items-center h-screen">
            <form class="form" className='bg-white border  p-5 rounded-md space-y-2'>
                <div className="w-full text-center flex flex-col justify-center items-center">
                    <img src="../images/logo.png" alt="" className="h-14 w-14" />
                    <h1 className="text-2xl font-bold text-gray-900">Login</h1>
                </div>
                <div class="flex-column">
                    <label>Email </label></div>
                <div class="inputForm">
                    <Icon.Mail />
                    <input type="text" class="input" placeholder="Enter your Email" />
                </div>

                <div class="flex-column">
                    <label>Password </label></div>
                <div class="inputForm">
                    <Icon.Lock />
                    <input type="password" class="input" placeholder="Enter your Password" />
                    <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
                </div>

                <div class="flex-row">
                    <div>
                        <input type="checkbox" />
                        <label>Remember me </label>
                    </div>
                    <span class="span">Forgot password?</span>
                </div>
                <button class="button-submit">Sign In</button>
                <p class="p">Don't have an account? <span class="span">Sign Up</span>

                </p><p class="p line">Or With</p>

                <div class="flex-row">
                    <button class="btn google">


                        Google

                    </button><button class="btn apple">


                        Apple

                    </button></div></form>
        </div>

    )
}

export default Login
