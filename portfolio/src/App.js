import React, { useState } from 'react';
import Home from './pages/Home';
import TechSkills from './pages/TechSkills';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Navbar from './components/Navbar';




function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  const showPage = () => {
    if (currentPage === 'Home') {
      return <Home/>
    } else if (currentPage === 'TechSkills') {
      return <TechSkills/>
    } else {
      return <Portfolio/>
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} handlePageChange={handlePageChange} /> 
      {showPage()}
      <Footer/>
    </div>
  );
}


export default App;
