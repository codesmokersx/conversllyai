
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll reach out when we're ready for you.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              Private Beta Opening Soon
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Let AI Take the{' '}
              <span className="text-blue-600">First Call</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              ConversllyAI handles cold calls so your team can focus on closing, not chasing.
            </p>
          </div>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 px-8"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>

          <p className="text-sm text-gray-500">
            No spam. We'll only reach out when we're ready.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 pt-4">
            <Badge variant="outline" className="bg-white">
              Backed by GTM leaders
            </Badge>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">100+</span> early adopters waiting
            </div>
          </div>
        </div>

        {/* Right side - Dashboard Preview */}
        <div className="relative">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-600">ConversllyAI Dashboard</div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Active Campaigns</h3>
                <Badge className="bg-green-100 text-green-800">3 Live</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-blue-900">SaaS Outreach Q1</span>
                    <span className="text-sm text-blue-700">87% success rate</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Enterprise Follow-up</span>
                    <span className="text-sm text-gray-700">92% success rate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coming Soon Badge */}
          <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            Coming Soon to Beta Users
          </div>
        </div>
      </div>
    </section>
  );
};
