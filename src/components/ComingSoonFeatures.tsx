
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Target, RotateCcw, BarChart3, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Conversations",
    description: "Natural voice interactions with human-like tone and timing",
    status: "In Development",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Precision outreach to your ideal customer profiles",
    status: "In Development",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: RotateCcw,
    title: "Seamless Integration",
    description: "Works with your existing CRM and sales tools",
    status: "In Development",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into call performance and outcomes",
    status: "Planned",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Real-time Learning",
    description: "AI that improves with every conversation",
    status: "Planned",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security for your sensitive data",
    status: "Planned",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const ComingSoonFeatures = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionary Features
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            What we're building
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            A complete AI sales solution that will revolutionize how teams approach cold outreach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white group hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardContent className="p-10 text-center relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed font-light mb-6 text-lg">
                  {feature.description}
                </p>
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-sm font-semibold shadow-lg`}>
                  {feature.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 border border-gray-100 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to transform your sales process?</h3>
            <p className="text-xl text-gray-600 mb-8">Join thousands of forward-thinking sales teams preparing for the AI revolution.</p>
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              Get Early Access → Q1 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
