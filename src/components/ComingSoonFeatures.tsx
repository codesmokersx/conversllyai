
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
    color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600",
    hoverColor: "group-hover:from-blue-100 group-hover:to-blue-200"
  },
  {
    icon: Mail,
    title: "Email Sequence Automation",
    description: "Personalized email campaigns that adapt based on prospect behavior and engagement patterns in real-time",
    badge: "AI-Powered",
    color: "bg-gradient-to-br from-green-50 to-green-100 text-green-600",
    hoverColor: "group-hover:from-green-100 group-hover:to-green-200"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Social Selling",
    description: "Automated LinkedIn outreach with personalized messages and strategic connection requests that feel authentic",
    badge: "Social AI",
    color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-600",
    hoverColor: "group-hover:from-purple-100 group-hover:to-purple-200"
  },
  {
    icon: Database,
    title: "Unified CRM Orchestration",
    description: "Single dashboard managing all touchpoints, conversations, and pipeline progression across every channel",
    badge: "Integration",
    color: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600",
    hoverColor: "group-hover:from-orange-100 group-hover:to-orange-200"
  },
  {
    icon: Brain,
    title: "Autonomous Decision Making",
    description: "AI that learns from every interaction to optimize messaging, timing, and strategy across all channels automatically",
    badge: "Learning AI",
    color: "bg-gradient-to-br from-red-50 to-red-100 text-red-600",
    hoverColor: "group-hover:from-red-100 group-hover:to-red-200"
  },
  {
    icon: Target,
    title: "Prompt-to-Pipeline",
    description: "Simply describe your ideal customer and goals. AI builds and executes the complete multi-channel strategy",
    badge: "Revolutionary",
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600",
    hoverColor: "group-hover:from-indigo-100 group-hover:to-indigo-200"
  }
];

export const ComingSoonFeatures = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Complete GTM Automation
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ConversllyAI handles every aspect of your outbound motion from initial research to deal closure, all from a single prompt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group hover:-translate-y-2 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-10">
                <div className={`w-20 h-20 ${feature.color} ${feature.hoverColor} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <div className="space-y-5">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-0 px-4 py-2 text-sm font-medium">
                    {feature.badge}
                  </Badge>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-10">
              How it works: Prompt → Pipeline
            </h3>
            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">1</div>
                <p className="text-xl font-bold text-gray-900">Describe Your Goals</p>
                <p className="text-gray-600 text-lg">"Find and book 20 demos with SaaS CTOs"</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">2</div>
                <p className="text-xl font-bold text-gray-900">AI Builds Strategy</p>
                <p className="text-gray-600 text-lg">Multi-channel sequences, messaging, timing</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">3</div>
                <p className="text-xl font-bold text-gray-900">Autonomous Execution</p>
                <p className="text-gray-600 text-lg">Calls, emails, LinkedIn, all automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
