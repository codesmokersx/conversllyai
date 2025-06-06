
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const founders = [
  {
    name: "Akash",
    role: "CEO", 
    bio: "Sales GTM expert who built $120K ARR at his last startup. Knows what sales teams actually need.",
    avatar: "A"
  },
  {
    name: "Krupesh",
    role: "AI/ML Lead",
    bio: "LLM fine-tuning specialist with expertise in Rust and Python. Makes AI sound human.",
    avatar: "K"
  },
  {
    name: "Kevin", 
    role: "Backend & DevOps",
    bio: "Fault-tolerant infrastructure architect. Ensures your calls never drop and data stays secure.",
    avatar: "K"
  },
  {
    name: "Karan",
    role: "Full-stack Engineer", 
    bio: "Next.js and scalable UI systems expert. Builds interfaces that sales teams actually want to use.",
    avatar: "K"
  }
];

export const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-bright-yellow/10 text-navy border-bright-yellow/30">
            Meet the Team
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Built by Sales & AI Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our founding team combines deep sales experience with cutting-edge AI expertise. 
            We've been in your shoes and built the solution we wish we had.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-2xl font-bold text-bright-yellow mx-auto mb-6 ring-4 ring-bright-yellow/20">
                  {founder.avatar}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-1">
                  {founder.name}
                </h3>
                <Badge variant="outline" className="mb-4 border-navy/20 bg-navy/5 text-navy">
                  {founder.role}
                </Badge>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {founder.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
