
import React, { useEffect, useRef } from 'react';

export const MidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Subtle orbital animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96">
            {/* Orbital rings */}
            <div className="absolute inset-0 border border-gray-800/30 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400/40 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            <div className="absolute inset-8 border border-gray-700/20 rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-400/50 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            <div className="absolute inset-16 border border-gray-600/10 rounded-full animate-spin" style={{ animationDuration: '60s' }}>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={sectionRef}
        className="max-w-4xl mx-auto px-4 text-center space-y-16 relative z-10 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
          It doesn't ask you to build it.
          <br />
          <span className="text-gray-400">
            It already knows what to do.
          </span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4 text-xl md:text-2xl font-light">
            <p className="text-gray-300">Not a platform.</p>
            <p className="text-gray-300">Not another tool.</p>
          </div>
          
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
            A system that listens, learns, and acts.
          </p>
          
          <p className="text-xl text-gray-400 font-light pt-8">
            All you have to do... is tell it who to talk to.
          </p>
        </div>
      </div>
    </section>
  );
};
