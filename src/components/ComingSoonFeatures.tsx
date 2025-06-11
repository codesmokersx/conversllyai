
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Target, RotateCcw, BarChart3, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Conversations",
    description: "Natural voice interactions with human-like tone and timing",
    status: "In Development"
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Precision outreach to your ideal customer profiles",
    status: "In Development"
  },
  {
    icon: RotateCcw,
    title: "Seamless Integration",
    description: "Works with your existing CRM and sales tools",
    status: "In Development"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into call performance and outcomes",
    status: "Planned"
  },
  {
    icon: Zap,
    title: "Real-time Learning",
    description: "AI that improves with every conversation",
    status: "Planned"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security for your sensitive data",
    status: "Planned"
  }
];

export const ComingSoonFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            What we're building
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A complete AI sales solution that will revolutionize how teams approach cold outreach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed font-light mb-4">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                  {feature.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
