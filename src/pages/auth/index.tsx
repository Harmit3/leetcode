import Navbar from '@/components/Navbar';
import React from 'react';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    
    return <div className='bg-gradient-to-b from-gray-500 to-black h-screen realative '>
                <div className='max-width-7xl max-auto'>
                     <Navbar />
                </div>
    </div>
};

export default AuthPage;