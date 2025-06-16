
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Circle, Clock, Rocket, Zap, Users, Globe } from 'lucide-react';

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Core AI Development",
    description: "Building the foundational AI conversation engine with advanced NLP capabilities",
    status: "upcoming",
    date: "Q2 2025",
    icon: Zap
  },
  {
    phase: "Phase 2", 
    title: "Voice Integration",
    description: "Integrating advanced voice synthesis and recognition with human-like interaction",
    status: "upcoming",
    date: "Q3 2025",
    icon: Users
  },
  {
    phase: "Phase 3",
    title: "CRM Integrations",
    description: "Seamless integration with popular CRM platforms and sales automation tools",
    status: "upcoming",
    date: "Q4 2025 - Q1 2026",
    icon: Globe
  },
  {
    phase: "Phase 4",
    title: "Beta Launch",
    description: "Limited beta release to early access users with comprehensive testing",
    status: "upcoming",
    date: "Q1 2026",
    icon: Rocket
  },
  {
    phase: "Phase 5",
    title: "Public Launch",
    description: "Full product launch with all features and global availability",
    status: "upcoming",
    date: "Q1 2026",
    icon: CheckCircle
  }
];

export const Timeline = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium mb-4 border border-white/20">
            <Rocket className="w-4 h-4 mr-2" />
            Development Roadmap
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Our roadmap to Q1 2026
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Here's how we're bringing ConversllyAI to life, step by step
          </p>
        </div>

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <Card key={index} className={`border-0 shadow-2xl transition-all duration-500 hover:scale-105 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15`}>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      item.status === 'completed' ? 'bg-green-500' :
                      item.status === 'in-progress' ? 'bg-blue-500' :
                      'bg-gradient-to-br from-purple-500 to-pink-500'
                    }`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-bold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">{item.phase}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full">{item.date}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 font-light text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final Launch Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Launch Target: Q1 2026</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us on this exciting journey as we revolutionize sales automation with AI-powered conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
