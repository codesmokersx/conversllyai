
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Phone, Mail, RefreshCw, Link, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: "Understands Target Audience",
    description: "Intelligently identifies your ideal customers and builds the entire approach"
  },
  {
    icon: Phone,
    title: "Makes Human-like Calls",
    description: "Calls sound natural, adapt to conversations, and convert prospects effectively"
  },
  {
    icon: Mail,
    title: "Sends Contextual Follow-Ups",
    description: "Tailored emails and LinkedIn messages, perfectly matched to every interaction"
  },
  {
    icon: RefreshCw,
    title: "Reacts Automatically",
    description: "Self-corrects and handles next steps for missed calls or bounced emails"
  },
  {
    icon: Link,
    title: "Syncs Seamlessly",
    description: "Integrates with your existing CRM, calendars, and workflows"
  },
  {
    icon: TrendingUp,
    title: "Continuously Improves",
    description: "Learns from every outreach, constantly refining its approach for better results"
  }
];

export const CapabilitiesGrid = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Complete Outbound Automation
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Everything you need to run outbound at scale, without the manual work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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
