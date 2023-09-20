import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';

type GoogleSignInButtonProps = {
  children: ReactNode;
};
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => {
    console.log('login with google');
  };

  return (
    <Button onClick={loginWithGoogle} className="w-full gap-2">
      {children}
      <FcGoogle size={24} />
    </Button>
  );
};

export default GoogleSignInButton;
