
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
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Development Roadmap
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our journey to building the world's first autonomous GTM engine
          </p>
        </div>

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl hover:-translate-y-1 border-l-4 border-l-gray-600 hover:border-l-cyan-500 rounded-2xl overflow-hidden border border-gray-700/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-600/30">
                      <Circle className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="text-sm font-semibold px-4 py-2 border-cyan-500/30 bg-cyan-500/10 text-cyan-300 backdrop-blur-sm">
                        {item.phase}
                      </Badge>
                      <span className="text-lg text-gray-500">•</span>
                      <span className="text-lg text-gray-400 font-medium">{item.date}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 max-w-3xl mx-auto border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Launch Target: Q1 2026
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              The complete autonomous GTM engine, ready to transform how businesses approach outbound sales and marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
