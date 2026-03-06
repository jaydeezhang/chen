import React from 'react';
import { Tab } from '../types';

interface HeroProps {
  onExplore: (tab: Tab) => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div className="relative w-full min-h-screen pt-16 flex flex-col md:flex-row">
      
      {/* Text Section - Brutalist Typography */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-12 border-b md:border-b-0 md:border-r border-black bg-white z-10">
        <div>
            <div className="mb-8">
                <span className="inline-block bg-black text-white text-xs font-bold uppercase px-2 py-1 mb-4">
                    Est. 1933 · National Central Museum
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-4">
                    ONE<br/>MUSEUM<br/>SIX HALLS
                </h1>
                <p className="text-2xl font-bold tracking-tight mt-6">南京博物院</p>
            </div>
            
            <div className="max-w-md text-lg leading-relaxed font-medium text-black/80 space-y-4">
                <p>
                    China's first museum established with state investment. A sanctuary of civilization housing 430,000 treasures.
                </p>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                    History · Art · Republic of China · Intangible Heritage · Digital · Special
                </p>
            </div>
        </div>

        <button 
          onClick={() => onExplore(Tab.EXHIBITIONS)}
          className="mt-12 md:mt-0 py-4 px-8 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-200 w-full md:w-auto text-center"
        >
          Plan Your Visit
        </button>
      </div>

      {/* Image Section - Full Bleed, High Contrast */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden bg-gray-100">
        <img 
            src="https://picsum.photos/1000/1200?grayscale" 
            alt="The Grand Hall" 
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 bg-white border-t border-r border-black p-3 text-xs font-bold uppercase tracking-wider z-10">
            The Main Hall (Liao Style Architecture)
        </div>
      </div>
    </div>
  );
};

export default Hero;