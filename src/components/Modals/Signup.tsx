import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
type SignupProps = {

};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type: 'login' }));
    };


    return (
        <form className='space-y-6 px-6 pb-4'>
            <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>

            {/* For Email */}
            <div>
                <label htmlFor="email" className="text-sm font-bold block mb-2 text-gray-200">
                    Email Address
                </label>
                <input type="email" name="email" id="email" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'

                    placeholder='name@example.com'

                />
            </div>

            {/* Display name */}
            <div>
                <label htmlFor="displayName" className="text-sm font-bold block mb-2 text-gray-200">
                    Display Name
                </label>
                <input type="displayName" name="displayName" id="displayName" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'

                    placeholder='Jhon Smith'

                />
            </div>

            {/* For password */}
            <div>
                <label htmlFor="password" className="text-sm font-bold block mb-2 text-gray-200">
                    Password
                </label>
                <input type="password" name="password" id="password" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'

                    placeholder='*********'

                />
            </div>

            {/* For Register button*/}
            <button type="submit" className='w-full text-white focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
                Register
            </button>




            <div className='text-sm font-md text-gray-200'>

                Already have an account?  {"  "}
                <a href="#" className='text-blue-700 hover:underline' onClick={handleClick}> {"  "}Log In</a>
            </div>

        </form>
    )
}
export default Signup;