import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Core AI Development",
    description: "Building the foundational AI conversation engine",
    status: "upcoming",
    date: "Q3 2025"
  },
  {
    phase: "Phase 2", 
    title: "Voice Integration",
    description: "Integrating advanced voice synthesis and recognition",
    status: "upcoming",
    date: "Q4 2025"
  },
  {
    phase: "Phase 3",
    title: "CRM Integrations",
    description: "Seamless integration with popular CRM platforms",
    status: "upcoming",
    date: "Q3 2025 - Q2 2026"
  },
  {
    phase: "Phase 4",
    title: "Beta Launch",
    description: "Limited beta release to early access users",
    status: "upcoming",
    date: "Q2 2025"
  },
  {
    phase: "Phase 5",
    title: "Public Launch",
    description: "Full product launch with all features",
    status: "upcoming",
    date: "Q4 2025"
  }
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            Our roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Here's how we're bringing ConversllyAI to life
          </p>
        </div>

        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <Card key={index} className={`border-0 shadow-sm transition-all duration-300 ${
              item.status === 'completed' ? 'bg-green-50 border-l-4 border-l-green-500' :
              item.status === 'in-progress' ? 'bg-blue-50 border-l-4 border-l-blue-500' :
              'bg-white border-l-4 border-l-gray-200'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : item.status === 'in-progress' ? (
                      <Clock className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-500">{item.phase}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 font-light">
                      {item.description}
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
