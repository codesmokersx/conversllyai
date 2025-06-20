
import React from 'react';
import { Hero } from '@/components/Hero';
import { MidSection } from '@/components/MidSection';
import { CredibilitySection } from '@/components/CredibilitySection';
import { FinalCTA } from '@/components/FinalCTA';
import { MinimalFooter } from '@/components/MinimalFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <MidSection />
      <CredibilitySection />
      <FinalCTA />
      <MinimalFooter />
    </div>
  );
};

export default Index;
