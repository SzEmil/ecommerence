import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

type GoogleSignInButtonProps = {
  children: ReactNode;
};
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => {
    signIn('google', { callbackUrl: `${window.location.origin}/admin` });
  };

  return (
    <Button onClick={loginWithGoogle} className="w-full gap-2">
      {children}
      <FcGoogle size={24} />
    </Button>
  );
};

export default GoogleSignInButton;
