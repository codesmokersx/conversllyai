
import React from 'react';
import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Solution } from '@/components/Solution';
import { ProductDemo } from '@/components/ProductDemo';
import { Comparison } from '@/components/Comparison';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Solution />
      <ProductDemo />
      <Comparison />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
