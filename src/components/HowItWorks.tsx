
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    step: "01",
    title: "Add Leads",
    description: "Upload your prospect list or connect your CRM. Our AI instantly analyzes and prioritizes contacts.",
    color: "bg-blue-50 text-blue-700"
  },
  {
    step: "02", 
    title: "Set Funnel Logic",
    description: "Define your sales process, objection handling, and conversion goals. AI learns your playbook.",
    color: "bg-purple-50 text-purple-700"
  },
  {
    step: "03",
    title: "AI Dials + Talks",
    description: "ConversllyAI makes calls, has conversations, and handles objections just like your best SDR.",
    color: "bg-green-50 text-green-700"
  },
  {
    step: "04",
    title: "Call Summaries Auto-Synced", 
    description: "Every conversation is transcribed, analyzed, and synced to your CRM with next steps identified.",
    color: "bg-orange-50 text-orange-700"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From prospect to qualified lead in four simple steps. Set it up once, watch it run forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-gray-200 h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Badge className={`${step.color} text-lg font-bold px-3 py-1`}>
                      {step.step}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Arrow for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
