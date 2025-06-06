
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

const painPoints = [
  {
    title: "SDR burnout from repetitive calls",
    description: "Your best talent is leaving because of endless cold calling cycles"
  },
  {
    title: "Low conversion from manual outreach", 
    description: "Human inconsistency leads to unpredictable results and missed opportunities"
  },
  {
    title: "Expensive sales headcount",
    description: "Scaling your team costs $80K+ per SDR with 6-month ramp times"
  },
  {
    title: "No insight into what works",
    description: "Black box sales process with no data on what resonates with prospects"
  }
];

export const PainPoints = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Problems Keeping Sales Teams Up at Night
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Traditional cold calling is broken. Here's what every sales leader is struggling with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
