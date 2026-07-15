import { useEffect, useState } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Templates from './pages/Templates';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <><Header /><Main /></>;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'templates':
        return <Templates />;
      default:
        return <><Header /><Main /></>;
    }
  };

  return (
    <>
      <ResumeProvider>
        <Navbar setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
      </ResumeProvider>
    </>
  );
}

export default App;