
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to what's next",
        description: "You'll be first to launch with the future.",
      });
      setEmail('');
      setUserType('');
    }, 1000);
  };

  return (
    <section className="py-32 bg-black">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-12">
        <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
          Be the first to launch with
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            what's next
          </span>
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-950/50 border-gray-800 text-white placeholder-gray-500 rounded-lg py-4 px-6 text-center focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all backdrop-blur-sm"
            disabled={isLoading}
          />
          
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full bg-gray-950/50 border border-gray-800 text-white rounded-lg py-4 px-6 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all backdrop-blur-sm"
          >
            <option value="" className="bg-gray-950">Select your role (optional)</option>
            <option value="founder" className="bg-gray-950">Founder</option>
            <option value="gtm-lead" className="bg-gray-950">GTM Lead</option>
            <option value="early-access" className="bg-gray-950">Early Access</option>
          </select>
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-white text-black hover:bg-gray-100 py-4 px-8 rounded-lg font-light transition-all"
            disabled={isLoading}
          >
            {isLoading ? 'Joining...' : (
              <span className="flex items-center justify-center gap-2">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};
