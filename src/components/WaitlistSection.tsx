
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
    <section className="py-20 bg-purple-600">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-normal text-white">
            We're letting in the first 100 companies.
          </h2>
          <p className="text-xl text-purple-100 font-normal">
            Join early access. Let Converslly run your outbound for you.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 bg-white text-gray-900 border-0 rounded-lg"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="h-12 bg-white text-purple-600 hover:bg-gray-50 px-6 rounded-lg font-medium transition-colors"
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

        <div className="flex items-center justify-center gap-4">
          <Button 
            variant="outline"
            size="lg"
            className="h-12 border-purple-400 bg-transparent text-purple-100 hover:bg-purple-500/20 px-6 rounded-lg font-medium transition-colors"
          >
            <Twitter className="w-4 h-4 mr-2" />
            Follow the Launch
          </Button>
        </div>
      </div>
    </section>
  );
};
