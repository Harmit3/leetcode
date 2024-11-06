import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar';
import React from 'react';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    
    return (
       <>
       <div className='bg-gradient-to-b from-gray-500 to-black h-screen relative '>
                <div className='max-width-7xl max-auto'>
                     <Navbar />
                     <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
                        <img src='/hero.png' alt='Hero img'></img>
                        <AuthModal />
                     </div>
                </div>
       </div>
    </>
    );
};

export default AuthPage;