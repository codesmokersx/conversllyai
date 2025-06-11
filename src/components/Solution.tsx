
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Target, RotateCcw, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Driven Voice Conversations",
    description: "Our LLM-powered agent speaks naturally — with human-like tone, timing, and objection handling."
  },
  {
    icon: Target,
    title: "Funnel-Based Outreach",
    description: "Target your ICPs using tailored call flows and conversation strategies."
  },
  {
    icon: RotateCcw,
    title: "Integrated with Your Stack",
    description: "Works seamlessly with Twilio, Slack, CRMs, and your data warehouse."
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description: "Track call quality, objections, meeting rates, and personalize scripts based on outcomes."
  }
];

export const Solution = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-700 text-sm font-medium">The ConversllyAI Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            A full-stack AI SDR that makes cold calls
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            ConversllyAI handles live conversations, refines scripts in real time, and integrates with your stack.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-normal text-gray-900 mb-12 text-center">How It Works:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
