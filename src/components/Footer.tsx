
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
    <footer className="bg-white border-t border-gray-200">
      {/* Final CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-normal text-gray-900 leading-tight">
            Join the First <span className="text-blue-600">100</span> Users
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            We're onboarding our first 100 users who will shape the future of AI-powered sales.
            Be one of them.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-gray-200 rounded-lg py-3 px-4"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium shadow-sm"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : (
                <span className="flex items-center gap-2">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
          
          <p className="text-sm text-gray-500">
            No spam. We'll only reach out when we're ready.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">C</span>
                </div>
                <h3 className="text-2xl font-normal text-gray-900">ConversllyAI</h3>
              </div>
              <p className="text-gray-500 mt-2 font-light">Let AI take the first call</p>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">Product</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">Team</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">Contact</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">LinkedIn</a>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-200" />
          
          <div className="text-center text-gray-500 text-sm font-light">
            Copyright © 2025 ConversllyAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
