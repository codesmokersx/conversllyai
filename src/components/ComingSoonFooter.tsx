
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
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      {/* Final CTA Section */}
      <div className="py-32 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Join the{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              GTM Revolution
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience autonomous go-to-market. From prompt to pipeline, automatically.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-xl py-4 px-5 text-lg focus:border-cyan-500 focus:ring-cyan-500/20 transition-all backdrop-blur-sm"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : (
                <span className="flex items-center gap-3">
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-8 pt-12">
            <p className="text-lg text-gray-400">Follow our progress:</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-800/50 rounded-xl transition-all backdrop-blur-sm">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-800/50 rounded-xl transition-all backdrop-blur-sm">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-800/50 rounded-xl transition-all backdrop-blur-sm">
                <Mail className="w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <h3 className="text-3xl font-bold text-white">ConversllyAI</h3>
              </div>
              <p className="text-gray-400 mt-3 text-lg">Autonomous GTM Engine</p>
            </div>
            
            <div className="flex gap-10 text-lg">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Product</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Roadmap</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Contact</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors font-medium">Privacy</a>
            </div>
          </div>
          
          <Separator className="my-12 bg-gray-800" />
          
          <div className="text-center text-gray-400 text-lg">
            Copyright © 2025 ConversllyAI. All rights reserved. • Launching Q1 2026
          </div>
        </div>
      </div>
    </footer>
  );
};
