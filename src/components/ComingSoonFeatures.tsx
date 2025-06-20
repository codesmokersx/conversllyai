
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Linkedin, Database, Brain, Target } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: "Voice Outreach Engine",
    description: "AI-powered voice calls that handle objections, book meetings, and nurture prospects naturally with human-like conversation",
    badge: "Core Feature",
  },
  {
    icon: Mail,
    title: "Email Sequence Automation",
    description: "Personalized email campaigns that adapt based on prospect behavior and engagement patterns in real-time",
    badge: "AI-Powered",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Social Selling",
    description: "Automated LinkedIn outreach with personalized messages and strategic connection requests that feel authentic",
    badge: "Social AI",
  },
  {
    icon: Database,
    title: "Unified CRM Orchestration",
    description: "Single dashboard managing all touchpoints, conversations, and pipeline progression across every channel",
    badge: "Integration",
  },
  {
    icon: Brain,
    title: "Autonomous Decision Making",
    description: "AI that learns from every interaction to optimize messaging, timing, and strategy across all channels automatically",
    badge: "Learning AI",
  },
  {
    icon: Target,
    title: "Prompt-to-Pipeline",
    description: "Simply describe your ideal customer and goals. AI builds and executes the complete multi-channel strategy",
    badge: "Revolutionary",
  }
];

export const ComingSoonFeatures = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
            Complete GTM Automation
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            ConversllyAI handles every aspect of your outbound motion from initial research to deal closure, all from a single prompt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 bg-gray-900/30 backdrop-blur-xl group hover:bg-gray-900/40 transition-all duration-300 rounded-2xl border border-gray-800 hover:border-gray-700"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-800/70 transition-all border border-gray-700">
                  <feature.icon className="w-6 h-6 text-gray-300" />
                </div>
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-gray-800/50 text-gray-400 border-0 px-3 py-1 text-xs font-normal">
                    {feature.badge}
                  </Badge>
                  <h4 className="text-lg font-normal text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm font-light">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-8">
              How it works: Prompt → Pipeline
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-normal text-sm">1</div>
                <p className="text-base font-normal text-white">Describe Your Goals</p>
                <p className="text-gray-400 text-sm font-light">"Find and book 20 demos with SaaS CTOs"</p>
              </div>
              <div className="space-y-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-normal text-sm">2</div>
                <p className="text-base font-normal text-white">AI Builds Strategy</p>
                <p className="text-gray-400 text-sm font-light">Multi-channel sequences, messaging, timing</p>
              </div>
              <div className="space-y-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-normal text-sm">3</div>
                <p className="text-base font-normal text-white">Autonomous Execution</p>
                <p className="text-gray-400 text-sm font-light">Calls, emails, LinkedIn, all automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
