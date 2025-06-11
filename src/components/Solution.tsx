
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-bright-yellow/10 text-navy border-bright-yellow/30">
            The ConversllyAI Solution
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            A full-stack AI SDR that makes cold calls
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ConversllyAI handles live conversations, refines scripts in real time, and integrates with your stack.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">How It Works:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-bright-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bright-yellow/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
