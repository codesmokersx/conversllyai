
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Twitter, Linkedin, Mail, Sparkles, Users, Trophy } from 'lucide-react';

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
        description: "You'll be among the first to experience ConversllyAI in Q1 2026.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      {/* Final CTA Section */}
      <div className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-gray-400">Early Signups</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20">
              <div className="flex items-center gap-4">
                <Trophy className="w-8 h-8 text-purple-400" />
                <div>
                  <div className="text-3xl font-bold text-white">1M+</div>
                  <div className="text-gray-400">Training Calls</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20">
              <div className="flex items-center gap-4">
                <Sparkles className="w-8 h-8 text-pink-400" />
                <div>
                  <div className="text-3xl font-bold text-white">Q1 2026</div>
                  <div className="text-gray-400">Launch Date</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Be among the first{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              100 users
            </span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Join our exclusive early access program and help shape the future of AI-powered sales automation.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-white/20 bg-white/10 backdrop-blur-sm rounded-xl py-4 px-6 text-white placeholder:text-gray-400 text-lg focus:ring-2 focus:ring-purple-500"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 px-10 py-4 rounded-xl font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? 'Joining...' : (
                <span className="flex items-center gap-3">
                  Get Notified
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-8 pt-12">
            <p className="text-gray-400">Follow our journey:</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </Button>
              <Button variant="ghost" size="sm" className="p-3 hover:bg-white/10 rounded-xl">
                <Mail className="w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer Links */}
      <div className="py-16 bg-black/20 backdrop-blur-sm border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">ConversllyAI</h3>
                <p className="text-gray-400 font-light">The future of AI sales is coming Q1 2026</p>
              </div>
            </div>
            
            <div className="flex gap-10 text-base">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-light hover:underline">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-light hover:underline">Roadmap</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-light hover:underline">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-light hover:underline">Privacy</a>
            </div>
          </div>
          
          <Separator className="my-10 bg-white/10" />
          
          <div className="text-center text-gray-400 font-light">
            Copyright © 2025 ConversllyAI. All rights reserved. • Launching Q1 2026
          </div>
        </div>
      </div>
    </footer>
  );
};
