import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Navigation/Header';
import { Footer } from '../components/Footer/Footer';
import { FloatingActions } from '../components/FloatingActions/FloatingActions';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#59616B] overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#025EC1] focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};
