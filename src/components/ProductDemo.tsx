
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Video, Phone } from 'lucide-react';

const demoFeatures = [
  "🎧 Hear an AI call with a live prospect",
  "🛡️ Watch it handle common objections", 
  "📊 Track meeting outcomes in real-time",
  "✨ Refine messaging on the fly"
];

export const ProductDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            See Converslly in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Watch how our AI handles real sales conversations and books meetings automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video Placeholder */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-bright-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-navy" />
                    </div>
                    <p className="text-white font-medium">Live AI Call Demo</p>
                    <p className="text-gray-300 text-sm">3:24 duration</p>
                  </div>
                  
                  {/* Floating call stats */}
                  <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-green-500/30">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-xs font-medium">LIVE CALL</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-bright-yellow rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Button 
                className="bg-bright-yellow text-navy hover:bg-yellow-300 px-8 py-6 text-lg font-medium w-full sm:w-auto"
              >
                <Video className="w-5 h-5 mr-2" />
                Watch the Demo
              </Button>
              
              <p className="text-gray-300 text-center sm:text-left">
                or
              </p>
              
              <Button 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get a Personalized Walkthrough
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
