import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    others: "Email or text-based SDRs",
    converslly: "Voice-first, human-like cold calls"
  },
  {
    others: "Scripted bots", 
    converslly: "Dynamic, adaptive conversations"
  },
  {
    others: "Tools that don't talk",
    converslly: "End-to-end integration"
  },
  {
    others: "Basic analytics",
    converslly: "Call-level insights, objection tagging"
  },
  {
    others: "1:1 scaling",
    converslly: "1 AI agent = 10 SDRs"
  }
];

export const Comparison = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-bright-yellow/10 text-navy border-bright-yellow/30">
            Why ConversllyAI is Different
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Built for real sales conversations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This makes our platform stand apart from generic LLM tools and basic automation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Others Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-600 mb-6 text-center">
                🛠️ Others do
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <Card key={index} className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{item.others}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* ConversllyAI Column */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6 text-center">
                ✅ ConversllyAI does
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <Card key={index} className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item.converslly}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
