
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const painPoints = [
  "100+ dials a day with <2% connect rate",
  "Scripted calls sound robotic and get hung up on",
  "Sales tools are fragmented — call tools, CRMs, scripts, analytics",
  "You're scaling headcount, not pipeline"
];

export const PainPoints = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            "Your SDRs are burning out,{' '}
            <span className="text-red-600">not booking out.</span>"
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            The cold calling process is broken. Here's what's keeping sales teams stuck:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-800 text-lg leading-relaxed font-normal">
                    {point}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
