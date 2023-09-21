import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center">
      {/* <Link className={buttonVariants()} href="/admin">
        Open Admin Dashboard
      </Link> */}
    </div>
  );
}
