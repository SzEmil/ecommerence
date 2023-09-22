import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <div className="flex flex-col items-center">
        <Link className={buttonVariants()} href="/admin">
          Open Admin Dashboard
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <Link className={buttonVariants()} href="/sign-in">
        Sign in to get acces to admin dashboard
      </Link>
    </div>
  );
}
