import Link from 'next/link';
import react from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';


type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, isOpen: true}));
    };
    return <div className='flex items-center justify-between h-20  px-4 md:px-12'>
        <Link href="/" className='flex items-center justify-center h-20'>
            <Image src='/logo-full.png' alt='Leetclone' height={200} width={200} />
        </Link>

        <div className='hidden md:flex items-center space-x-6' >
            <button className="bg-brand-orange text-white px-4 py-2 sm:px-4 rounded-md text-white font-medium
                               hover:bg-opacity-90  hover:text-brand-orange hover:bg-white hover:border-2  hover:border-brand-orange 
                               border-2 border-transperanttransition duration-300 ease-in-out " onClick={handleClick}>
              
              Sign In
            </button>

        </div>

    </div>
}

export default Navbar;
