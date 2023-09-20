import { FC, ReactNode } from 'react';

type props = {
  children: ReactNode;
};
const AuthLayout: FC<props> = ({ children }) => {
  return <div className="bg-slate-200 p-10 rounded-sm">{children}</div>;
};

export default AuthLayout;
