
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const painPoints = [
  "100+ dials a day with <2% connect rate",
  "Scripted calls sound robotic and get hung up on",
  "Sales tools are fragmented — call tools, CRMs, scripts, analytics",
  "You're scaling headcount, not pipeline"
];

export const PainPoints = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            "Your SDRs are burning out,{' '}
            <span className="text-red-600">not booking out.</span>"
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The cold calling process is broken. Here's what's keeping sales teams stuck:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-red-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">
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
