
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ComingSoonFeatures } from '@/components/ComingSoonFeatures';
import { Timeline } from '@/components/Timeline';
import { ComingSoonFooter } from '@/components/ComingSoonFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <ComingSoonFeatures />
        <Timeline />
        <ComingSoonFooter />
      </div>
    </div>
  );
};

export default Index;
