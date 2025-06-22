
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Building } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: "Founders doing sales themselves",
    description: "Focus on product while AI handles your pipeline"
  },
  {
    icon: Target,
    title: "GTM teams tired of low reply rates",
    description: "Finally see the results your efforts deserve"
  },
  {
    icon: Building,
    title: "Operators scaling pipeline without growing headcount",
    description: "Scale outbound without hiring more reps"
  }
];

export const WhoItsFor = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
            Built for Modern GTM Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="border border-gray-200 text-center">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto">
                    <audience.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
