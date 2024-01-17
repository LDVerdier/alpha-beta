import { ReactNode } from 'react';

import { HomeLink } from './HomeLink';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <HomeLink />
      </header>
      <body>{children}</body>
    </>
  );
};
