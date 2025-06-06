
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-navy">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8 text-white">
          <div className="space-y-4">
            <Badge variant="outline" className="bg-transparent border-bright-yellow text-bright-yellow">
              Private Beta Opening Soon
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Let AI Take the{' '}
              <span className="text-gradient bg-gradient-to-r from-bright-yellow to-yellow-300">First Call</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              ConversllyAI handles cold calls so your team can focus on closing, not chasing.
            </p>
          </div>

          {/* Benefits list */}
          <div className="space-y-2">
            {['Reduce SDR burnout', 'Increase conversion rates', 'Cut acquisition costs'].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-bright-yellow" />
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-bright-yellow hover:bg-yellow-300 text-navy font-medium px-8 group"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : (
                <span className="flex items-center gap-2">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </form>

          <p className="text-sm text-gray-400">
            No spam. We'll only reach out when we're ready.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 pt-4">
            <Badge variant="outline" className="bg-white/10 border-white/30 text-white">
              Backed by GTM leaders
            </Badge>
            <div className="text-sm text-gray-300">
              <span className="font-semibold">100+</span> early adopters waiting
            </div>
          </div>
        </div>

        {/* Right side - Dashboard Preview */}
        <div className="relative animate-float hidden lg:block">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="bg-navy/80 px-6 py-4 border-b border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-300">ConversllyAI Dashboard</div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-100">Active Campaigns</h3>
                <Badge className="bg-green-900/50 text-green-300 border-green-700">3 Live</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="bg-navy/50 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-bright-yellow">SaaS Outreach Q1</span>
                    <span className="text-sm text-bright-yellow">87% success rate</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-bright-yellow h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-100">Enterprise Follow-up</span>
                    <span className="text-sm text-gray-300">92% success rate</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-white/60 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coming Soon Badge */}
          <div className="absolute -top-4 -right-4 bg-bright-yellow text-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            Coming Soon to Beta Users
          </div>

          {/* Glowing effect */}
          <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-bright-yellow/30 to-cyan-600/30 blur-lg opacity-60"></div>
        </div>
      </div>
    </section>
  );
};
