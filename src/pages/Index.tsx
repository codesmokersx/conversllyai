
import React from 'react';
import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
