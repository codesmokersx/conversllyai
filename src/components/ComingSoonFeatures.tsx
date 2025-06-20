
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Linkedin, Database, Brain, Target } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: "Voice Outreach Engine",
    description: "AI-powered voice calls that handle objections, book meetings, and nurture prospects naturally",
    badge: "Core Feature",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Mail,
    title: "Email Sequence Automation",
    description: "Personalized email campaigns that adapt based on prospect behavior and engagement",
    badge: "AI-Powered",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Linkedin,
    title: "LinkedIn Social Selling",
    description: "Automated LinkedIn outreach with personalized messages and connection requests",
    badge: "Social AI",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Database,
    title: "Unified CRM Orchestration",
    description: "Single dashboard managing all touchpoints, conversations, and pipeline progression",
    badge: "Integration",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Brain,
    title: "Autonomous Decision Making",
    description: "AI that learns from every interaction to optimize messaging and timing across channels",
    badge: "Learning AI",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Target,
    title: "Prompt-to-Pipeline",
    description: "Describe your ideal customer and goals. AI builds and executes the complete strategy",
    badge: "Revolutionary",
    color: "bg-indigo-50 text-indigo-600"
  }
];

export const ComingSoonFeatures = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Complete GTM Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            ConversllyAI handles every aspect of your outbound motion — from initial research to deal closure — all from a single prompt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white group hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-0">
                    {feature.badge}
                  </Badge>
                  <h4 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-3xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              How it works: Prompt → Pipeline
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-medium text-sm">1</div>
                <p className="text-sm font-medium text-gray-900">Describe Your Goals</p>
                <p className="text-xs text-gray-600 font-light">"Find and book 20 demos with SaaS CTOs"</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-medium text-sm">2</div>
                <p className="text-sm font-medium text-gray-900">AI Builds Strategy</p>
                <p className="text-xs text-gray-600 font-light">Multi-channel sequences, messaging, timing</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-medium text-sm">3</div>
                <p className="text-sm font-medium text-gray-900">Autonomous Execution</p>
                <p className="text-xs text-gray-600 font-light">Calls, emails, LinkedIn - all automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
