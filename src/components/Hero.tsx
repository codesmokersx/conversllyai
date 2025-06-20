
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
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        {/* Coming Soon Badge */}
        <div className="animate-fade-in">
          <Badge className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-700 text-base font-medium border border-blue-200 hover:bg-blue-100 transition-colors">
            <Zap className="w-5 h-5 mr-3 text-blue-600" />
            Launching Q1 2026
          </Badge>
        </div>
        
        {/* Main Headline */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
            The Autonomous{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              GTM Engine
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            From prompt to pipeline. Build and run your entire outbound motion across voice, email, LinkedIn, and CRM from a single prompt.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ConversllyAI orchestrates your complete go-to-market strategy autonomously, handling everything from lead generation to deal closure.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg mx-auto border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-900">Get Early Access</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-200 rounded-xl py-4 px-5 text-center text-lg focus:border-blue-500 focus:ring-blue-500 transition-all"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
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
            
            <p className="text-sm text-gray-500 mt-6">
              Be among the first to experience autonomous GTM
            </p>
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-shadow">
                  <span className="text-3xl">🎯</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">Voice Outreach</p>
                <p className="text-sm text-gray-600">AI-powered calls</p>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-shadow">
                  <span className="text-3xl">✉️</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">Email Sequences</p>
                <p className="text-sm text-gray-600">Personalized at scale</p>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-shadow">
                  <span className="text-3xl">💼</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">LinkedIn Automation</p>
                <p className="text-sm text-gray-600">Social selling</p>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-lg transition-shadow">
                  <span className="text-3xl">📊</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">CRM Integration</p>
                <p className="text-sm text-gray-600">Unified pipeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center space-y-3">
            <p className="text-xl text-gray-600">One prompt. Complete GTM automation.</p>
            <p className="text-2xl font-semibold text-gray-900">Expected Launch: Q1 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};
