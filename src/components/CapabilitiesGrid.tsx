
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Phone, Mail, RefreshCw, Link, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: "Understands Who to Target",
    description: "Just tell it your ICP — Converslly builds the entire approach"
  },
  {
    icon: Phone,
    title: "Makes Real Calls",
    description: "Calls sound human. They adapt. They convert."
  },
  {
    icon: Mail,
    title: "Sends Contextual Follow-Ups",
    description: "Across email and LinkedIn — matched to voice tone and objection"
  },
  {
    icon: RefreshCw,
    title: "Reacts to What Happens",
    description: "Missed call? Bounced email? It handles next steps on its own"
  },
  {
    icon: Link,
    title: "Syncs to Your Stack",
    description: "CRM, Calendars, Workflows — already integrated"
  },
  {
    icon: TrendingUp,
    title: "Improves With Every Run",
    description: "Converslly learns what works and gets sharper every day"
  }
];

export const CapabilitiesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
            Complete Outbound Automation
          </h2>
          <p className="text-xl text-gray-600 font-normal max-w-2xl mx-auto">
            Everything you need to run outbound at scale, without the manual work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border border-gray-200 hover:border-gray-300 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
