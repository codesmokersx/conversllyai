
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
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Join the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              GTM Revolution
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience autonomous go-to-market. From prompt to pipeline, automatically.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-gray-300 rounded-xl py-4 px-5 text-lg focus:border-blue-500 focus:ring-blue-500 transition-all"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
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
            <p className="text-lg text-gray-500">Follow our progress:</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-xl transition-all">
                <Twitter className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-xl transition-all">
                <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-100 rounded-xl transition-all">
                <Mail className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">ConversllyAI</h3>
              </div>
              <p className="text-gray-500 mt-3 text-lg">Autonomous GTM Engine</p>
            </div>
            
            <div className="flex gap-10 text-lg">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">Product</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">Roadmap</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors font-medium">Privacy</a>
            </div>
          </div>
          
          <Separator className="my-12 bg-gray-200" />
          
          <div className="text-center text-gray-500 text-lg">
            Copyright © 2025 ConversllyAI. All rights reserved. • Launching Q1 2026
          </div>
        </div>
      </div>
    </footer>
  );
};
