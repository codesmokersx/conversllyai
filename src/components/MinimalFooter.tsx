
import React from 'react';
import { Mail, Twitter } from 'lucide-react';

export const MinimalFooter = () => {
  return (
    <footer className="py-16 bg-black border-t border-gray-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-400">
            <a 
              href="mailto:akash@converslly.com" 
              className="flex items-center gap-2 hover:text-white transition-colors font-light"
            >
              <Mail className="w-4 h-4" />
              akash@converslly.com
            </a>
            <a 
              href="https://twitter.com/conversllyai" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors font-light"
            >
              <Twitter className="w-4 h-4" />
              @conversllyai
            </a>
          </div>
          
          {/* Legal */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors font-light">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors font-light">Terms</a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm font-light">
            © 2025 ConversllyAI
          </div>
        </div>
      </div>
    </footer>
  );
};
