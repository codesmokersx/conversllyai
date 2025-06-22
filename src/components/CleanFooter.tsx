
import React from 'react';
import { Mail, Twitter } from 'lucide-react';
import { ConversllyLogo } from './ConversllyLogo';

export const CleanFooter = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-8">
          
          {/* Logo */}
          <div className="flex justify-center">
            <ConversllyLogo size="sm" />
          </div>
          
          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <a 
              href="mailto:akash@converslly.com" 
              className="flex items-center gap-2 hover:text-purple-600 transition-colors font-normal"
            >
              <Mail className="w-4 h-4" />
              akash@converslly.com
            </a>
            <a 
              href="https://twitter.com/conversllyai" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 transition-colors font-normal"
            >
              <Twitter className="w-4 h-4" />
              @conversllyai
            </a>
          </div>
          
          {/* Brand message */}
          <div className="text-gray-500 text-center max-w-md mx-auto">
            <p className="font-normal">
              Made by founders who've lived the GTM mess.
              <br />
              Now building what replaces it.
            </p>
          </div>
          
          {/* Legal */}
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors font-normal">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors font-normal">Terms</a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm font-normal">
            © 2025 ConversllyAI
          </div>
        </div>
      </div>
    </footer>
  );
};
