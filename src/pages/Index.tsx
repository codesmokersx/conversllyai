
import React from 'react';
import { Hero } from '@/components/Hero';
import { ComingSoonFeatures } from '@/components/ComingSoonFeatures';
import { Timeline } from '@/components/Timeline';
import { ComingSoonFooter } from '@/components/ComingSoonFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ComingSoonFeatures />
      <Timeline />
      <ComingSoonFooter />
    </div>
  );
};

export default Index;
