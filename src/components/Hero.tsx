
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Bell, Sparkles } from 'lucide-react';

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
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Coming Soon Badge */}
        <div className="animate-fade-in">
          <Badge className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Coming Soon
          </Badge>
        </div>
        
        {/* Main Headline */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight tracking-tight">
            Let Your AI SDR Make{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              1,000 Cold Calls
            </span>{' '}
            a Day
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Real conversations. Real objections. Real meetings — without hiring.
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            ConversllyAI is a voice-first AI agent that will automate cold calling, handle objections, and book demos — all powered by advanced LLMs.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Bell className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-medium text-gray-900">Get Early Access</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-200 rounded-lg py-3 px-4 text-center"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-3 rounded-lg font-medium shadow-lg transition-all duration-200 hover:shadow-xl"
                disabled={isLoading}
              >
                {isLoading ? 'Joining Waitlist...' : (
                  <span className="flex items-center justify-center gap-2">
                    Join the Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              Be among the first 100 users to shape the future of AI sales
            </p>
          </div>
        </div>

        {/* Early Traction */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-4">Backed by experts • Trained on 1M+ sales calls • Built on GPT-4.1 & LLaMA 3.2</p>
            
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="text-2xl">💬</div>
                <div className="text-left">
                  <p className="text-gray-900 font-medium mb-2">
                    "We're building something that will book 11+ qualified demos in your first week — on autopilot."
                  </p>
                  <p className="text-gray-500 text-sm">— ConversllyAI Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expected Launch */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <p className="text-gray-600 mb-2">Expected Launch</p>
            <p className="text-2xl font-medium text-gray-900">Q2 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};
