
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll reach out when we're ready for you.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-navy text-white">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-navy to-navy/90 py-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Join the First <span className="text-bright-yellow">100</span> Users
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're onboarding our first 100 users who will shape the future of AI-powered sales.
            Be one of them.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-bright-yellow text-navy hover:bg-yellow-300 px-8 group"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : (
                <span className="flex items-center gap-2 font-medium">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              )}
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam. We'll only reach out when we're ready.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-bright-yellow rounded-full flex items-center justify-center text-navy font-bold text-sm">C</div>
                <h3 className="text-2xl font-bold text-white">ConversllyAI</h3>
              </div>
              <p className="text-gray-400 mt-2">Let AI take the first call</p>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-bright-yellow transition-colors">Product</a>
              <a href="#" className="text-gray-400 hover:text-bright-yellow transition-colors">Team</a>
              <a href="#" className="text-gray-400 hover:text-bright-yellow transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-bright-yellow transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400 text-sm">
            Copyright © 2025 ConversllyAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
