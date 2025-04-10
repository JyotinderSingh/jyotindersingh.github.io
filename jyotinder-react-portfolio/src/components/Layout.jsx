import React from 'react';
import Header from './Header';
import Footer from './Footer';

// The Outlet component from react-router-dom will render the matched route's component here
import { Outlet } from 'react-router-dom'; 

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Page content will be rendered here */}
      </main>
      <Footer />
    </>
  );
}

export default Layout; 