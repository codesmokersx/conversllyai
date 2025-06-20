
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
    color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-cyan-500/30"
  },
  {
    icon: Mail,
    title: "Email Sequence Automation",
    description: "Personalized email campaigns that adapt based on prospect behavior and engagement patterns in real-time",
    badge: "AI-Powered",
    color: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400",
    hoverColor: "group-hover:from-emerald-500/30 group-hover:to-teal-500/30"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Social Selling",
    description: "Automated LinkedIn outreach with personalized messages and strategic connection requests that feel authentic",
    badge: "Social AI",
    color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400",
    hoverColor: "group-hover:from-purple-500/30 group-hover:to-pink-500/30"
  },
  {
    icon: Database,
    title: "Unified CRM Orchestration",
    description: "Single dashboard managing all touchpoints, conversations, and pipeline progression across every channel",
    badge: "Integration",
    color: "bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-400",
    hoverColor: "group-hover:from-orange-500/30 group-hover:to-red-500/30"
  },
  {
    icon: Brain,
    title: "Autonomous Decision Making",
    description: "AI that learns from every interaction to optimize messaging, timing, and strategy across all channels automatically",
    badge: "Learning AI",
    color: "bg-gradient-to-br from-rose-500/20 to-pink-500/20 text-rose-400",
    hoverColor: "group-hover:from-rose-500/30 group-hover:to-pink-500/30"
  },
  {
    icon: Target,
    title: "Prompt-to-Pipeline",
    description: "Simply describe your ideal customer and goals. AI builds and executes the complete multi-channel strategy",
    badge: "Revolutionary",
    color: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20 text-indigo-400",
    hoverColor: "group-hover:from-indigo-500/30 group-hover:to-blue-500/30"
  }
];

export const ComingSoonFeatures = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Complete GTM Automation
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ConversllyAI handles every aspect of your outbound motion from initial research to deal closure, all from a single prompt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-2xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl group hover:-translate-y-2 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50"
            >
              <CardContent className="p-10">
                <div className={`w-20 h-20 ${feature.color} ${feature.hoverColor} backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 border border-gray-600/30`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <div className="space-y-5">
                  <Badge variant="secondary" className="bg-gray-700/50 text-gray-300 border-0 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                    {feature.badge}
                  </Badge>
                  <h4 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-10">
              How it works: Prompt → Pipeline
            </h3>
            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/25">1</div>
                <p className="text-xl font-bold text-white">Describe Your Goals</p>
                <p className="text-gray-400 text-lg">"Find and book 20 demos with SaaS CTOs"</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/25">2</div>
                <p className="text-xl font-bold text-white">AI Builds Strategy</p>
                <p className="text-gray-400 text-lg">Multi-channel sequences, messaging, timing</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/25">3</div>
                <p className="text-xl font-bold text-white">Autonomous Execution</p>
                <p className="text-gray-400 text-lg">Calls, emails, LinkedIn, all automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
