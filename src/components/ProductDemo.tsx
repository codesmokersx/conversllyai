
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 leading-tight">
            See Converslly in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Watch how our AI handles real sales conversations and books meetings automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Demo Video Placeholder */}
          <div className="relative">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-900 font-medium text-lg">Live AI Call Demo</p>
                    <p className="text-gray-500 text-sm">3:24 duration</p>
                  </div>
                  
                  {/* Live indicator */}
                  <div className="absolute top-4 right-4 bg-red-500 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-medium">LIVE</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-lg text-gray-700 font-light">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Button 
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-medium text-lg shadow-sm w-full sm:w-auto"
              >
                <Video className="w-5 h-5 mr-2" />
                Watch the Demo
              </Button>
              
              <p className="text-gray-500 text-center sm:text-left">
                or
              </p>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium text-lg w-full sm:w-auto"
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
