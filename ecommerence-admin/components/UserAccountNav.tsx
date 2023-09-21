'use client';

import { Button } from './ui/button';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { BiSolidUserCircle } from 'react-icons/bi';
const UserAccountNav = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
          })
        }
        variant="default"
      >
        Sign Out
      </Button>
      {session?.user.image ? (
        <Image
          className="rounded-sm"
          src={session.user.image}
          width={36}
          height={36}
          alt="user image"
        />
      ) : (
        <BiSolidUserCircle size={36} />
      )}
    </div>
  );
};

export default UserAccountNav;
