import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase'
import { useRouter } from 'next/router';
import { doc, setDoc } from 'firebase/firestore';
import { getDisplayName } from 'next/dist/shared/lib/utils';
import { toast } from 'react-toastify';

type SignupProps = {

};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, type: 'login' }));
    };
    const [inputs, setInputs] = useState({ email: '', displayName: '', password: '' });
    const router = useRouter();
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!inputs.email || !inputs.password || !inputs.displayName) return alert("Please fill all fields");
        try {
            toast.loading("Creating your account", { position: "top-center", toastId: "loadingToast" })
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) return;
            const userData = {
                uid: newUser.user.uid,
                email: newUser.user.email,
                getDisplayName: inputs.displayName,
                createdAt: Date.now(),
                updatAt: Date.now(),
                likedProblems: [],
                dislikeProblems: [],
                solvedProblems: [],
                starredProblems: [],

            }
            await setDoc(doc(firestore, 'users', newUser.user.uid), userData);
            router.push('/');

        } catch (error: any) {

            toast.error(error.message, { position: "top-center", })
        } finally {
            toast.dismiss("loadingToast")
        }
    };


    useEffect(() => { if (error) alert(error.message) }, [error]);

    return (
        <form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
            <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>

            {/* For Email */}
            <div>
                <label htmlFor="email" className="text-sm font-bold block mb-2 text-gray-200">
                    Email Address
                </label>
                <input onChange={handleChangeInput} type="email" name="email" id="email" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'

                    placeholder='name@example.com'

                />
            </div>

            {/* Display name */}
            <div>
                <label htmlFor="displayName" className="text-sm font-bold block mb-2 text-gray-200">
                    Display Name
                </label>
                <input onChange={handleChangeInput} type="displayName" name="displayName" id="displayName" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'

                    placeholder='Jhon Smith'

                />
            </div>

            {/* For password */}
            <div>
                <label htmlFor="password" className="text-sm font-bold block mb-2 text-gray-200">
                    Password
                </label>
                <input onChange={handleChangeInput} type="password" name="password" id="password" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'

                    placeholder='*********'

                />
            </div>

            {/* For Register button*/}
            <button type="submit" className='w-full text-white focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
                {loading ? "Registering..." : "Register"}
            </button>




            <div className='text-sm font-md text-gray-200'>

                Already have an account?  {"  "}
                <a href="#" className='text-blue-700 hover:underline' onClick={handleClick}> {"  "}Log In</a>
            </div>

        </form>
    )
}
export default Signup;