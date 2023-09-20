'use client';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

type providerProps = {
  children: ReactNode;
};
const Provider: FC<providerProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
