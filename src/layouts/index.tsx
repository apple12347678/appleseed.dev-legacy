import React from 'react';

import RootProvider from './RootProvider';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <RootProvider>
      <main>{children}</main>
    </RootProvider>
  );
}
