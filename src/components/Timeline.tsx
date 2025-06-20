
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Core GTM Engine Development",
    description: "Building the foundational autonomous GTM orchestration system",
    status: "upcoming",
    date: "Q2 2025"
  },
  {
    phase: "Phase 2", 
    title: "Multi-Channel Integration",
    description: "Voice, email, LinkedIn, and CRM integrations with unified orchestration",
    status: "upcoming",
    date: "Q3 2025"
  },
  {
    phase: "Phase 3",
    title: "AI Learning & Optimization",
    description: "Advanced AI decision-making and autonomous strategy optimization",
    status: "upcoming",
    date: "Q4 2025"
  },
  {
    phase: "Phase 4",
    title: "Beta Launch",
    description: "Limited beta release with select GTM teams and enterprises",
    status: "upcoming",
    date: "Q4 2025 - Q1 2026"
  },
  {
    phase: "Phase 5",
    title: "Full Platform Launch",
    description: "Complete autonomous GTM engine available to all businesses",
    status: "upcoming",
    date: "Q1 2026"
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Our journey to building the world's first autonomous GTM engine
          </p>
        </div>

        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-sm transition-all duration-300 bg-white hover:shadow-md border-l-4 border-l-gray-200 hover:border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Circle className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        {item.phase}
                      </Badge>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600 font-light">{item.date}</span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Launch Target: Q1 2026
            </h3>
            <p className="text-gray-600 font-light">
              The complete autonomous GTM engine, ready to transform how businesses approach outbound sales and marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
