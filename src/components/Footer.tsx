
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

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
    <footer className="bg-gray-900 text-white">
      {/* Final CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Join the First 100 Users
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're onboarding our first 100 users who will shape the future of AI-powered sales.
            Be one of them.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
          
          <p className="text-sm text-blue-100 mt-4">
            No spam. We'll only reach out when we're ready.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">ConversllyAI</h3>
              <p className="text-gray-400">Let AI take the first call</p>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Product</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
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
