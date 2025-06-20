
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Twitter, Linkedin, Mail } from 'lucide-react';

export const ComingSoonFooter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to the future! 🚀",
        description: "You'll be first to experience autonomous GTM.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Final CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
            Join the{' '}
            <span className="font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GTM Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Be among the first to experience autonomous go-to-market. From prompt to pipeline, automatically.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-gray-300 rounded-lg py-3 px-4 focus:border-blue-500 focus:ring-blue-500"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium shadow-sm transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : (
                <span className="flex items-center gap-2">
                  Get Early Access
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-6 pt-8">
            <p className="text-sm text-gray-500 font-light">Follow our progress:</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
                <Twitter className="w-4 h-4 text-gray-500 hover:text-blue-500" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
                <Linkedin className="w-4 h-4 text-gray-500 hover:text-blue-600" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
                <Mail className="w-4 h-4 text-gray-500 hover:text-gray-700" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">C</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900">ConversllyAI</h3>
              </div>
              <p className="text-gray-500 mt-2 font-light">Autonomous GTM Engine</p>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">Product</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">Roadmap</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">Contact</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-light">Privacy</a>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-200" />
          
          <div className="text-center text-gray-500 text-sm font-light">
            Copyright © 2025 ConversllyAI. All rights reserved. • Launching Q1 2026
          </div>
        </div>
      </div>
    </footer>
  );
};
