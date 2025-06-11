
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Demo booked!",
        description: "We'll reach out to schedule your personalized demo.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-navy">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8 text-white">
          <div className="space-y-6">
            <Badge variant="outline" className="bg-transparent border-bright-yellow text-bright-yellow">
              Backed by experts | Trained on 1M+ sales calls | Built on GPT-4.1 & LLaMA 3.2
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Let Your AI SDR Make{' '}
              <span className="text-gradient bg-gradient-to-r from-bright-yellow to-yellow-300">1,000 Cold Calls</span>{' '}
              a Day
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Real conversations. Real objections. Real meetings — without hiring.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              ConversllyAI is a voice-first AI agent that automates cold calling, handles objections, refines scripts, and books demos — all powered by LLMs and Twilio.
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="bg-bright-yellow hover:bg-yellow-300 text-navy font-medium px-8 group text-lg py-6"
              >
                <span className="flex items-center gap-2">
                  📞 Book a Live Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 group text-lg py-6"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Or see how it works
                </span>
              </Button>
            </div>
            
            <p className="text-sm text-gray-400">
              👇 Or watch a live conversation below
            </p>
          </div>

          {/* Social Proof */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="flex items-start gap-3">
              <div className="text-2xl">💬</div>
              <div>
                <p className="text-white font-medium mb-2">
                  "Converslly booked 11 qualified demos in our first week — on autopilot."
                </p>
                <p className="text-gray-400 text-sm">— Early Beta Customer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Dashboard Preview */}
        <div className="relative animate-float hidden lg:block">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="bg-navy/80 px-6 py-4 border-b border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-300">ConversllyAI Live Call</div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-100">Active Calls</h3>
                <Badge className="bg-green-900/50 text-green-300 border-green-700">🔴 Live</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="bg-navy/50 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-bright-yellow">John @ TechCorp</span>
                    <span className="text-sm text-bright-yellow">2:34 duration</span>
                  </div>
                  <p className="text-gray-300 text-sm">"Let me check with my team about scheduling a demo..."</p>
                </div>
                
                <div className="bg-navy/50 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-100">Sarah @ StartupX</span>
                    <span className="text-sm text-gray-300">Demo Booked ✅</span>
                  </div>
                  <p className="text-gray-300 text-sm">Meeting scheduled for tomorrow 2PM</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-bright-yellow">127</div>
                  <div className="text-sm text-gray-300">Calls completed today</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-bright-yellow/30 to-cyan-600/30 blur-lg opacity-60"></div>
        </div>
      </div>
    </section>
  );
};
