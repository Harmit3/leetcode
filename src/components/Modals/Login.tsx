import React from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    return <form className='space-y-6 px-6 pb-4'> 
            <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>

             {/* For Email */}
         <div>
            <label htmlFor="email" className="text-sm font-bold block mb-2 text-gray-200">
                Your Email Address
            </label>
            <input type="email" name="email" id="email"  className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
            
            placeholder='name@example.com'
            
            />
         </div>


         {/* For password */}
         <div>
            <label htmlFor="password" className="text-sm font-bold block mb-2 text-gray-200">
                Your Password
            </label>
            <input type="password" name="password" id="password"  className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
            
            placeholder='*********'
            
            />
         </div>

         {/* For Login button*/}
         <button type="submit" className='w-full text-white focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange
         hover:bg-brand-orange-s'> 
             LogIn
         </button>

        {/* For reser pass*/}
         <button  className='flex w-full justify-end'> 
             <a href="#" className='text-sm block text-brand-orange hover:underline w-full text-right'>
                Forgot Password?
             </a>
         </button>


         <div className='text-sm font-md text-gray-200'>
            
            Not Registered?  {"  "}
            <a href="#" className='text-blue-700 hover:underline'> {"  "}Create account</a>
         </div>
    
    </form>
};
export default Login;