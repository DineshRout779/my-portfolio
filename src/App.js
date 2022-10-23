import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const path = useLocation();

  // scroll to top on change of route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
