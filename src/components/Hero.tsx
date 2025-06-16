
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Bell, Sparkles, Zap, Users, Trophy } from 'lucide-react';

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
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as ConversllyAI is ready.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
        {/* Enhanced Coming Soon Badge */}
        <div className="animate-fade-in">
          <Badge className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-base font-medium shadow-2xl border border-white/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
            Coming Q1 2026
            <Zap className="w-5 h-5 ml-3" />
          </Badge>
        </div>
        
        {/* Enhanced Main Headline */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
            Let Your AI SDR Make{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              1,000 Cold Calls
            </span>{' '}
            a Day
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Real conversations. Real objections. Real meetings — without hiring.
          </p>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ConversllyAI is a voice-first AI agent that automates cold calling, handles objections, and books demos — all powered by advanced LLMs.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Early Signups</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-purple-400" />
                <div>
                  <div className="text-2xl font-bold text-white">1M+</div>
                  <div className="text-sm text-gray-400">Training Calls</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-pink-400" />
                <div>
                  <div className="text-2xl font-bold text-white">GPT-4.1</div>
                  <div className="text-sm text-gray-400">Powered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Waitlist Form */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-lg mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Get Early Access</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-white/20 bg-white/5 backdrop-blur-sm rounded-xl py-4 px-6 text-center text-white placeholder:text-gray-400 text-lg focus:ring-2 focus:ring-purple-500"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 py-4 rounded-xl font-semibold shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 hover:scale-105 text-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Joining Waitlist...' : (
                  <span className="flex items-center justify-center gap-3">
                    Join the Waitlist
                    <ArrowRight className="w-6 h-6" />
                  </span>
                )}
              </Button>
            </form>
            
            <p className="text-gray-300 mt-6 text-center">
              Be among the first <span className="font-bold text-purple-400">100 users</span> to shape the future of AI sales
            </p>
          </div>
        </div>

        {/* Enhanced Quote Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="text-4xl">💬</div>
                <div className="text-left">
                  <p className="text-white font-medium mb-4 text-xl leading-relaxed">
                    "We're building something that will book 11+ qualified demos in your first week — on autopilot."
                  </p>
                  <p className="text-gray-300">— ConversllyAI Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Expected Launch */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <p className="text-gray-400 mb-3 text-lg">Expected Launch</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Q1 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};
