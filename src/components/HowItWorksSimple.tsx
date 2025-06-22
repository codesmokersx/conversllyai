
import React from 'react';

export const HowItWorksSimple = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
          Just Tell It Who You Want to Close.
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-gray-600 font-normal leading-relaxed">
            ConversllyAI builds the strategy, handles the outreach, follows up, books the meeting, and updates your CRM all by itself.
          </p>
          
          <div className="space-y-4 pt-6">
            <p className="text-lg text-gray-700">
              You don't need to configure it.
            </p>
            <p className="text-lg text-purple-600 font-medium">
              You just need to start it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
