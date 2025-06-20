
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
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Radiant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        {/* Coming Soon Badge */}
        <div className="animate-fade-in">
          <Badge className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-cyan-300 text-base font-medium border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all backdrop-blur-sm">
            <Zap className="w-5 h-5 mr-3 text-cyan-400" />
            Launching Q1 2026
          </Badge>
        </div>
        
        {/* Main Headline */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            The Autonomous{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              GTM Engine
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            From prompt to pipeline. Build and run your entire outbound motion across voice, email, LinkedIn, and CRM from a single prompt.
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ConversllyAI orchestrates your complete go-to-market strategy autonomously, handling everything from lead generation to deal closure.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-lg mx-auto border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Get Early Access</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-xl py-4 px-5 text-center text-lg focus:border-cyan-500 focus:ring-cyan-500/20 transition-all backdrop-blur-sm"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-cyan-500/25"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : (
                  <span className="flex items-center justify-center gap-3">
                    Join the Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-gray-400 mt-6">
              Be among the first to experience autonomous GTM
            </p>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all border border-blue-500/20">
                  <span className="text-3xl">🎯</span>
                </div>
                <p className="text-lg font-semibold text-white">Voice Outreach</p>
                <p className="text-sm text-gray-400">AI-powered calls</p>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all border border-emerald-500/20">
                  <span className="text-3xl">✉️</span>
                </div>
                <p className="text-lg font-semibold text-white">Email Sequences</p>
                <p className="text-sm text-gray-400">Personalized at scale</p>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all border border-purple-500/20">
                  <span className="text-3xl">💼</span>
                </div>
                <p className="text-lg font-semibold text-white">LinkedIn Automation</p>
                <p className="text-sm text-gray-400">Social selling</p>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all border border-orange-500/20">
                  <span className="text-3xl">📊</span>
                </div>
                <p className="text-lg font-semibold text-white">CRM Integration</p>
                <p className="text-sm text-gray-400">Unified pipeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center space-y-3">
            <p className="text-xl text-gray-300">One prompt. Complete GTM automation.</p>
            <p className="text-2xl font-semibold text-white">Expected Launch: Q1 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};
