
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Circle } from 'lucide-react';

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
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Development Roadmap
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Our journey to building the world's first autonomous GTM engine
          </p>
        </div>

        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <Card key={index} className="border-0 bg-gray-900/30 backdrop-blur-xl transition-all duration-300 rounded-2xl border border-gray-800 hover:border-gray-700 hover:bg-gray-900/40">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
                      <Circle className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs font-normal px-3 py-1 border-gray-700 bg-gray-800/30 text-gray-300">
                        {item.phase}
                      </Badge>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-400 font-light">{item.date}</span>
                    </div>
                    <h4 className="text-lg font-normal text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-sm font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto border border-gray-800">
            <h3 className="text-2xl font-light text-white mb-4">
              Launch Target: Q1 2026
            </h3>
            <p className="text-base text-gray-400 leading-relaxed font-light">
              The complete autonomous GTM engine, ready to transform how businesses approach outbound sales and marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
