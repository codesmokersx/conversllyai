
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Building } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: "Founders seeking scalable sales",
    description: "Focus on product while AI handles your entire sales pipeline"
  },
  {
    icon: Target,
    title: "GTM teams frustrated by low engagement",
    description: "Finally see the results your efforts deserve with AI-powered outreach"
  },
  {
    icon: Building,
    title: "Operators expanding pipeline",
    description: "Scale outbound without increasing headcount or complexity"
  }
];

export const WhoItsFor = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Built for Modern GTM Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-colors">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                    <audience.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {audience.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {audience.description}
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
