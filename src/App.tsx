import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ArchitectureSection } from './components/ArchitectureSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050807] text-gray-100 flex flex-col font-sans selection:bg-lime-500/30 selection:text-lime-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturesGrid />
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
