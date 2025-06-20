
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to join the waitlist",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "You're on the list! 🚀",
        description: "We'll notify you as soon as ConversllyAI is ready.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Coming Soon Badge */}
        <div className="animate-fade-in">
          <Badge className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 text-sm font-normal border border-gray-800 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 text-blue-400" />
            Launching Q1 2026
          </Badge>
        </div>
        
        {/* Main Headline */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
            The Autonomous{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">
              GTM Engine
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            From prompt to pipeline. Build and run your entire outbound motion across voice, email, LinkedIn, and CRM from a single prompt.
          </h2>
          
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            ConversllyAI orchestrates your complete go-to-market strategy autonomously, handling everything from lead generation to deal closure.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="animate-fade-in pt-4" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="text-lg font-normal text-white">Get Early Access</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 rounded-xl py-3 px-4 text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-100 py-3 rounded-xl font-normal transition-all"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : (
                  <span className="flex items-center justify-center gap-2">
                    Join the Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 font-light">
              Be among the first to experience autonomous GTM
            </p>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="animate-fade-in pt-8" style={{ animationDelay: '0.3s' }}>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-3 group">
                <div className="w-12 h-12 bg-gray-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto border border-gray-800 group-hover:border-blue-500/30 transition-all">
                  <span className="text-xl">🎯</span>
                </div>
                <p className="text-sm font-normal text-white">Voice Outreach</p>
                <p className="text-xs text-gray-500 font-light">AI-powered calls</p>
              </div>
              <div className="space-y-3 group">
                <div className="w-12 h-12 bg-gray-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto border border-gray-800 group-hover:border-emerald-500/30 transition-all">
                  <span className="text-xl">✉️</span>
                </div>
                <p className="text-sm font-normal text-white">Email Sequences</p>
                <p className="text-xs text-gray-500 font-light">Personalized at scale</p>
              </div>
              <div className="space-y-3 group">
                <div className="w-12 h-12 bg-gray-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto border border-gray-800 group-hover:border-purple-500/30 transition-all">
                  <span className="text-xl">💼</span>
                </div>
                <p className="text-sm font-normal text-white">LinkedIn Automation</p>
                <p className="text-xs text-gray-500 font-light">Social selling</p>
              </div>
              <div className="space-y-3 group">
                <div className="w-12 h-12 bg-gray-900/50 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto border border-gray-800 group-hover:border-orange-500/30 transition-all">
                  <span className="text-xl">📊</span>
                </div>
                <p className="text-sm font-normal text-white">CRM Integration</p>
                <p className="text-xs text-gray-500 font-light">Unified pipeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in pt-6" style={{ animationDelay: '0.4s' }}>
          <div className="text-center space-y-2">
            <p className="text-base text-gray-400 font-light">One prompt. Complete GTM automation.</p>
            <p className="text-lg text-white font-normal">Expected Launch: Q1 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};
