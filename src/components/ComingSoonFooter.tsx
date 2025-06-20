
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
    <footer className="bg-black border-t border-gray-900">
      {/* Final CTA Section */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
            Join the{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              GTM Revolution
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Be among the first to experience autonomous go-to-market. From prompt to pipeline, automatically.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-900/50 border-gray-800 text-white placeholder-gray-500 rounded-xl py-3 px-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-normal transition-all"
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
          
          <div className="flex items-center justify-center gap-6 pt-6">
            <p className="text-sm text-gray-500 font-light">Follow our progress:</p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-900/50 rounded-lg transition-all">
                <Twitter className="w-4 h-4 text-gray-500 hover:text-blue-400 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-900/50 rounded-lg transition-all">
                <Linkedin className="w-4 h-4 text-gray-500 hover:text-blue-400 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-900/50 rounded-lg transition-all">
                <Mail className="w-4 h-4 text-gray-500 hover:text-gray-300 transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 border-t border-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-medium text-lg">C</span>
                </div>
                <h3 className="text-2xl font-light text-white">ConversllyAI</h3>
              </div>
              <p className="text-gray-500 mt-2 text-sm font-light">Autonomous GTM Engine</p>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">Product</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">Roadmap</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">Contact</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors font-light">Privacy</a>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-900" />
          
          <div className="text-center text-gray-500 text-sm font-light">
            Copyright © 2025 ConversllyAI. All rights reserved. • Launching Q1 2026
          </div>
        </div>
      </div>
    </footer>
  );
};
