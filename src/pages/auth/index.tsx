import { authModalState } from '@/atoms/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue } from 'recoil';

type AuthPageProps = {

};

const AuthPage: React.FC<AuthPageProps> = () => {

   const authModal = useRecoilValue(authModalState);

   const [user,loading,error]=useAuthState(auth);
   const [pageLoading,setPageLoading]=useState(true);
   const router=useRouter();
   
   useEffect(()=>{
      if(user) router.push('/');
      if(!loading && !user) setPageLoading(false);
   },[user,router,loading]);

   if(pageLoading) return null;

   return (

      <div className='bg-gradient-to-b from-gray-500 to-black h-screen relative '>

         <div className='max-width-7xl max-auto'>
            <Navbar />
            <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
               <img src='/hero.png' alt='Hero img'></img>
            </div>
            {authModal.isOpen && <AuthModal/>}             {/*if it is open then & only then show this component*/}
         </div>
      </div>

   );
};

export default AuthPage;