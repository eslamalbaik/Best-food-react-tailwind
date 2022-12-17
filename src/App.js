import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadLineCard from './components/HeadLineCard';
import Food from './components/Food';
import Category from './components/Category';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCard />
      <Food />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
