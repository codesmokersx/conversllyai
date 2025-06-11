import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-700 text-sm font-medium">Why ConversllyAI is Different</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            Built for real sales conversations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            This makes our platform stand apart from generic LLM tools and basic automation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Others Column */}
            <div>
              <h3 className="text-2xl font-normal text-gray-600 mb-8 text-center">
                🛠️ Others do
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <Card key={index} className="border-0 shadow-sm bg-red-50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700 font-light">{item.others}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* ConversllyAI Column */}
            <div>
              <h3 className="text-2xl font-normal text-gray-900 mb-8 text-center">
                ✅ ConversllyAI does
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <Card key={index} className="border-0 shadow-sm bg-green-50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
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
