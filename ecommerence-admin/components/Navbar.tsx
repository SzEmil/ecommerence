import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Store } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="z-100 bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Store />
        </Link>
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link className={buttonVariants()} href="/sign-in">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
