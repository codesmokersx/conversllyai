
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Bell } from 'lucide-react';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Enter your email to join the future",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the future",
        description: "You'll be first to experience what's next.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Subtle space background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-cyan-300/25 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Subtle horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/10 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Main Headline */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-tight">
            The Future of Outbound
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Is Already Thinking
            </span>
          </h1>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              A new kind of go-to-market system.
            </h2>
            <p className="text-lg text-gray-400 font-light">
              Autonomous. Invisible. In motion.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-8 pt-8">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-950/50 border-gray-800 text-white placeholder-gray-500 rounded-lg py-3 px-4 text-center focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all backdrop-blur-sm"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 py-3 px-6 rounded-lg font-light transition-all"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : (
                  <span className="flex items-center justify-center gap-2">
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
              className="border-gray-700 bg-transparent text-gray-300 hover:bg-gray-900/50 py-3 px-6 rounded-lg font-light transition-all"
            >
              <Bell className="w-4 h-4 mr-2" />
              Get Notified
            </Button>
          </div>
        </div>

        {/* Subtle status indicator */}
        <div className="pt-12">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-400/60 rounded-full animate-pulse"></div>
            System in development
          </div>
        </div>
      </div>
    </section>
  );
};
