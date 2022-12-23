import React, { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';




function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  const showPage = () => {
    if (currentPage === 'Home') {
      return <Home/>
    } else if (currentPage === 'Contact') {
      return <Contact/>
    } else {
      return <Portfolio/>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header/> 
      <Navbar setCurrentPage={setCurrentPage} handlePageChange={handlePageChange} />
      {showPage()}
      <Footer/>
    </div>
  );
}


export default App;
