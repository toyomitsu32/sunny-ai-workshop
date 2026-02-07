
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmpathySection from './components/EmpathySection';
import FailurePoints from './components/FailurePoints';
import Approach from './components/Approach';
import Steps from './components/Steps';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import InvestmentSection from './components/InvestmentSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <EmpathySection />
        <FailurePoints />
        <Approach />
        <Steps />
        <Benefits />
        <Pricing />
        <InvestmentSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
