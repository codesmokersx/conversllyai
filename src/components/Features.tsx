
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: "🤖",
    title: "Human-Like AI Calling",
    description: "Sounds real, handles objections naturally, and adapts conversation flow based on prospect responses.",
    badge: "Core Feature"
  },
  {
    icon: "🎯", 
    title: "Smart Lead Prioritization",
    description: "AI scores and ranks prospects automatically based on conversion probability and engagement signals.",
    badge: "AI-Powered"
  },
  {
    icon: "🧠",
    title: "Script Refinement Engine", 
    description: "Continuously optimizes messaging and pitch delivery based on real-time feedback and results.",
    badge: "Learning AI"
  },
  {
    icon: "🔌",
    title: "CRM + Data Integrations",
    description: "Seamlessly connects with Apollo, HubSpot, Lusha, Salesforce, and 50+ other sales tools.",
    badge: "Enterprise Ready"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            What ConversllyAI Does
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered cold calling that actually converts. Built for modern sales teams who want results, not busy work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-navy/10 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 overflow-hidden group">
              <div className="absolute h-1 bg-bright-yellow w-0 group-hover:w-full transition-all duration-500 top-0 left-0"></div>
              <CardHeader className="pb-4">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-navy/5 text-navy">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-lg text-navy">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
