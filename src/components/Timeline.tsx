
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Core GTM Engine Development",
    description: "Building the foundational autonomous GTM orchestration system with voice, email, and LinkedIn integration",
    status: "upcoming",
    date: "Q2 2025"
  },
  {
    phase: "Phase 2", 
    title: "Multi-Channel Integration",
    description: "Advanced voice, email, LinkedIn, and CRM integrations with unified orchestration and real-time optimization",
    status: "upcoming",
    date: "Q3 2025"
  },
  {
    phase: "Phase 3",
    title: "AI Learning & Optimization",
    description: "Advanced AI decision-making engine with autonomous strategy optimization and predictive analytics",
    status: "upcoming",
    date: "Q4 2025"
  },
  {
    phase: "Phase 4",
    title: "Beta Launch",
    description: "Limited beta release with select GTM teams and enterprises for testing and feedback collection",
    status: "upcoming",
    date: "Q4 2025 - Q1 2026"
  },
  {
    phase: "Phase 5",
    title: "Full Platform Launch",
    description: "Complete autonomous GTM engine available to all businesses with full feature set and enterprise support",
    status: "upcoming",
    date: "Q1 2026"
  }
];

export const Timeline = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Development Roadmap
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our journey to building the world's first autonomous GTM engine
          </p>
        </div>

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 border-l-4 border-l-gray-200 hover:border-l-blue-500 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
                      <Circle className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="text-sm font-semibold px-4 py-2 border-blue-200 text-blue-700">
                        {item.phase}
                      </Badge>
                      <span className="text-lg text-gray-400">•</span>
                      <span className="text-lg text-gray-600 font-medium">{item.date}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 max-w-3xl mx-auto border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Launch Target: Q1 2026
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              The complete autonomous GTM engine, ready to transform how businesses approach outbound sales and marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
