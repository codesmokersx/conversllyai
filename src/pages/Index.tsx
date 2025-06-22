
import React from 'react';
import { Hero } from '@/components/Hero';
import { PositioningSection } from '@/components/PositioningSection';
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid';
import { HowItWorksSimple } from '@/components/HowItWorksSimple';
import { WhoItsFor } from '@/components/WhoItsFor';
import { WaitlistSection } from '@/components/WaitlistSection';
import { CleanFooter } from '@/components/CleanFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <PositioningSection />
      <CapabilitiesGrid />
      <HowItWorksSimple />
      <WhoItsFor />
      <WaitlistSection />
      <CleanFooter />
    </div>
  );
};

export default Index;
