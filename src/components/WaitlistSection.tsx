
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Twitter } from 'lucide-react';

export const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "You're in!",
        description: "Welcome to the first 100 companies. We'll be in touch soon.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Secure Your Spot. Early Access is Limited.
          </h2>
          <p className="text-xl text-blue-100 font-light">
            We're inviting the first 100 companies. Join now and let ConversllyAI revolutionize your outbound.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 bg-white text-gray-900 border-0 rounded-lg focus:ring-2 focus:ring-white/20"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="h-12 bg-gray-900 text-white hover:bg-gray-800 px-6 rounded-lg font-medium transition-colors"
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

        <div className="flex items-center justify-center gap-4">
          <Button 
            variant="outline"
            size="lg"
            className="h-12 border-white/30 bg-transparent text-white hover:bg-white/10 px-6 rounded-lg font-medium transition-colors"
          >
            <Twitter className="w-4 h-4 mr-2" />
            Follow Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
};
