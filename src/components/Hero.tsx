
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
        description: "Enter your email to join the waitlist",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the future of outbound",
        description: "You're on the waitlist. We'll be in touch soon.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo */}
      <header className="px-6 py-6">
        <ConversllyLogo size="md" />
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight tracking-tight">
              Outbound, Done for You.
              <br />
              <span className="text-purple-600">
                By AI.
              </span>
            </h1>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl text-gray-600 font-normal leading-relaxed">
                ConversllyAI handles cold calls, emails, LinkedIn, and CRM automatically.
              </h2>
              <p className="text-lg text-gray-500 font-normal">
                No reps. No playbooks. No effort.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 pt-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 text-gray-900 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-lg font-medium transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : (
                    <span className="flex items-center gap-2">
                      Join Waitlist
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
                className="h-12 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 rounded-lg font-medium transition-colors"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch It Work
              </Button>
            </div>
          </div>

          {/* Trust indicator */}
          <div className="pt-12">
            <p className="text-sm text-gray-400">
              Trusted by 100+ companies in early access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
