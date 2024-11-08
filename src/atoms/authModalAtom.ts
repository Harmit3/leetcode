import { atom } from 'recoil';


/*will define what kinda authModalStates are for login,signup and forgot password */ 
type AuthModalState = {

    isOpen: boolean,
    type: 'login' | 'register' | 'forgotPassword';

};

/* defined what kinda authModalState is for login*/ 
const initialAuthModalState: AuthModalState = {

    isOpen: false,
    type: 'login',

};

export const authModalState = atom<AuthModalState>({
    key: 'authModalState',          /*can identify with this key that this is unique */
    default: initialAuthModalState,
});




