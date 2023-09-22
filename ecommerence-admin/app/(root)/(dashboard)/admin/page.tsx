'use client';

import { authOptions } from '@/lib/auth';
import { useSession } from 'next-auth/react';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect } from 'react';

const page = () => {
  const { data: session } = useSession();
  const onOpen = useStoreModal(state => state.onOpen);
  const isOpen = useStoreModal(state => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  if (session?.user) {
    return (
      <div>
        <h2 className="text-2xl">
          Admin page - welcome back{' '}
          {session?.user.username || session?.user.name}
        </h2>
      </div>
    );
  }
  return <h2 className="text-2xl">Please login to get access to admin page</h2>;
};

export default page;
