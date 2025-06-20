
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
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Coming Soon Badge */}
        <div className="animate-fade-in">
          <Badge className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border-0 hover:bg-gray-200 transition-colors">
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            Coming Q1 2026
          </Badge>
        </div>
        
        {/* Main Headline */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
            The Autonomous{' '}
            <span className="font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GTM Engine
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            From prompt to pipeline. Build and run your entire outbound motion — voice, email, LinkedIn, and CRM — from a single prompt.
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            ConversllyAI orchestrates your complete go-to-market strategy autonomously, handling everything from lead generation to deal closure.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md mx-auto border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Get Early Access</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-300 rounded-lg py-3 px-4 text-center focus:border-blue-500 focus:ring-blue-500"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-lg font-medium transition-colors shadow-sm"
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
            
            <p className="text-sm text-gray-500 mt-4 font-light">
              Be among the first to experience autonomous GTM
            </p>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Voice Outreach</p>
                <p className="text-xs text-gray-600 font-light">AI-powered calls</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">✉️</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Email Sequences</p>
                <p className="text-xs text-gray-600 font-light">Personalized at scale</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">💼</span>
                </div>
                <p className="text-sm font-medium text-gray-900">LinkedIn Automation</p>
                <p className="text-xs text-gray-600 font-light">Social selling</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-sm font-medium text-gray-900">CRM Integration</p>
                <p className="text-xs text-gray-600 font-light">Unified pipeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <p className="text-gray-600 mb-2 font-light">One prompt. Complete GTM automation.</p>
            <p className="text-xl font-light text-gray-900">Expected Launch: Q1 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};
