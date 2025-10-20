import React from 'react';
import TopHeader from './components/TopHeader';
import CenterHeader from './components/CenterHeader';
import Bottom from './components/Bottom';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <TopHeader />
      <CenterHeader />
      <Bottom />
      <div className='mb-[30px]'></div>
      <Hero />
      <div className='mb-[40px]'></div>
      <Footer />
    </div>
  );
};

export default App;