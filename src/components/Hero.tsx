
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Play } from 'lucide-react';
import { ConversllyLogo } from './ConversllyLogo';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Enter your email to join early access",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the future of outbound",
        description: "You're on the early access list. We'll be in touch soon.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header with Logo */}
      <header className="px-6 py-6">
        <ConversllyLogo size="md" variant="white" />
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
              Outbound Sales.
              <br />
              <span className="text-gray-300">
                Automated.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                By AI.
              </span>
            </h1>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                ConversllyAI orchestrates cold calls, emails, LinkedIn, and CRM without manual effort.
              </h2>
              <p className="text-lg text-gray-400 font-light">
                No reps. No playbooks. Pure performance.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8 pt-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg font-medium transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : (
                    <span className="flex items-center gap-2">
                      Join Early Access
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="outline"
                size="lg"
                className="h-12 border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 px-6 rounded-lg font-medium transition-colors"
              >
                <Play className="w-4 h-4 mr-2" />
                See It In Action
              </Button>
            </div>
          </div>

          {/* Trust indicator */}
          <div className="pt-12">
            <p className="text-sm text-gray-500">
              Early access limited to first 100 companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
