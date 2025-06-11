
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, Play } from 'lucide-react';

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
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Badge */}
        <Badge variant="outline" className="inline-flex items-center px-4 py-2 rounded-full border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium">
          Backed by experts • Trained on 1M+ sales calls • Built on GPT-4.1 & LLaMA 3.2
        </Badge>
        
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight tracking-tight">
            Let Your AI SDR Make{' '}
            <span className="text-blue-600">1,000 Cold Calls</span>{' '}
            a Day
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Real conversations. Real objections. Real meetings — without hiring.
          </p>
          
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            ConversllyAI is a voice-first AI agent that automates cold calling, handles objections, refines scripts, and books demos — all powered by LLMs and Twilio.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-sm"
          >
            Book a Live Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            See how it works
          </Button>
        </div>
        
        <p className="text-sm text-gray-500">
          👇 Or watch a live conversation below
        </p>

        {/* Social Proof */}
        <div className="max-w-md mx-auto bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="text-2xl">💬</div>
            <div className="text-left">
              <p className="text-gray-900 font-medium mb-2">
                "Converslly booked 11 qualified demos in our first week — on autopilot."
              </p>
              <p className="text-gray-500 text-sm">— Early Beta Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
