import React from 'react';
import { Header } from './app.header';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='layout-app-container'>
    <Header />
    {children}
  </div>
);
