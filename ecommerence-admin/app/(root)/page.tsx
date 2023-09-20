import User from '@/components/User';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-3">HOME</h1>
      <Link className={buttonVariants()} href="/admin">
        Open Admin Dashboard
      </Link>
      <h2>Client Session</h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
