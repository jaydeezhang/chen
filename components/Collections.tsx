import React, { useState, useEffect } from 'react';
import { Artifact } from '../types';
import { generateArtifactDescription } from '../services/geminiService';
import { X, Loader2 } from 'lucide-react';

// Real Treasures of Nanjing Museum
const artifacts: Artifact[] = [
  {
    id: 'c1',
    name: 'Blue-and-White Meiping',
    period: 'Yuan Dynasty',
    category: 'PORCELAIN',
    image: 'https://picsum.photos/600/600?random=11',
    baseDescription: 'The "Xiao He Chasing Han Xin" vase. One of the most precious blue-and-white porcelains in existence, showcasing master craftsmanship.',
  },
  {
    id: 'c2',
    name: 'Gold Cicada on Jade Leaf',
    period: 'Ming Dynasty',
    category: 'JADE & GOLD',
    image: 'https://picsum.photos/600/600?random=10',
    baseDescription: 'A masterpiece of realism. The gold cicada rests on a translucent jade leaf, symbolizing "shedding the shell to rebirth".',
  },
  {
    id: 'c3',
    name: 'Seven Sages of Bamboo Grove',
    period: 'Southern Dynasties',
    category: 'BRICK PAINTING',
    image: 'https://picsum.photos/600/800?random=12',
    baseDescription: 'A monumental brick relief mural found in a tomb at Xishanqiao, depicting the seven famous scholars and hermits.',
  },
  {
    id: 'c4',
    name: 'Gilt Bronze Human-Shaped Lamp',
    period: 'Eastern Han',
    category: 'BRONZE',
    image: 'https://picsum.photos/600/600?random=13',
    baseDescription: 'An ingenious eco-friendly lamp design where smoke is channeled into the body of the figure to keep the air clean.',
  },
  {
    id: 'c5',
    name: 'The Gold Beast',
    period: 'Western Han',
    category: 'GOLD',
    image: 'https://picsum.photos/600/600?random=14',
    baseDescription: 'The heaviest ancient gold object discovered in China (9kg). A leopard-like mythical creature found in Xuyi.',
  },
  {
    id: 'c6',
    name: 'Glazed Pagoda Arch',
    period: 'Ming Dynasty',
    category: 'ARCHITECTURE',
    image: 'https://picsum.photos/600/600?random=15',
    baseDescription: 'Original glazed components from the Great Porcelain Tower of Nanjing, one of the Seven Wonders of the Medieval World.',
  }
];

const Collections: React.FC = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (selectedArtifact) {
      setAiDescription('');
      setIsLoading(true);
      generateArtifactDescription(selectedArtifact.name, selectedArtifact.period)
        .then(desc => {
          setAiDescription(desc);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedArtifact]);

  return (
    <div className="min-h-screen bg-white">
       <div className="border-b border-black p-6 md:p-12 flex flex-col md:flex-row justify-between items-end">
         <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">The Treasures</h2>
            <p className="text-lg font-bold mt-2">镇院之宝</p>
         </div>
         <p className="max-w-md text-sm md:text-base mt-4 md:mt-0 font-medium text-right">
            Selected masterpieces from the 18 Treasures of Nanjing Museum.
         </p>
       </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b border-black">
            {artifacts.map((item, index) => (
                <div 
                    key={item.id}
                    onClick={() => setSelectedArtifact(item)}
                    className={`group relative cursor-pointer border-r border-b border-black ${index % 2 === 1 ? 'md:border-r' : ''} bg-white hover:bg-black hover:text-white transition-colors duration-300`}
                    style={{ marginBottom: '-1px', marginRight: '-1px' }} // Collapse borders
                >
                    <div className="aspect-square p-8 flex items-center justify-center bg-gray-50 group-hover:bg-gray-900 transition-colors">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain mix-blend-multiply group-hover:mix-blend-normal"
                        />
                    </div>
                    <div className="p-4 border-t border-black group-hover:border-white/20">
                        <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{item.category}</p>
                        <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                    </div>
                </div>
            ))}
        </div>

      {/* Brutalist Modal */}
      {selectedArtifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8">
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" onClick={() => setSelectedArtifact(null)} />
            
            <div className="relative bg-white w-full max-w-6xl h-full md:h-[80vh] border border-black shadow-2xl flex flex-col md:flex-row overflow-hidden animate-[fadeIn_0.2s_ease-out]">
                
                <button 
                    onClick={() => setSelectedArtifact(null)}
                    className="absolute top-0 right-0 z-20 p-4 bg-black text-white hover:bg-red-600 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-12 border-b md:border-b-0 md:border-r border-black">
                    <img 
                        src={selectedArtifact.image} 
                        alt={selectedArtifact.name} 
                        className="max-h-full max-w-full object-contain drop-shadow-xl" 
                    />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col overflow-y-auto">
                   <div className="mb-12">
                        <span className="inline-block border border-black px-2 py-1 text-xs font-bold uppercase mb-4">{selectedArtifact.category}</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight">{selectedArtifact.name}</h2>
                        <p className="text-xl font-medium text-gray-500">{selectedArtifact.period}</p>
                   </div>

                   <div className="space-y-8">
                       <div>
                            <h4 className="text-xs font-black uppercase tracking-widest mb-2">Object Description</h4>
                            <p className="text-lg leading-relaxed font-medium">{selectedArtifact.baseDescription}</p>
                       </div>

                       <div className="bg-gray-50 border border-black p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                                <span className="font-bold text-sm uppercase tracking-widest">AI Curator Analysis</span>
                            </div>
                            
                            {isLoading ? (
                                <div className="flex items-center gap-3 text-gray-500">
                                    <Loader2 className="animate-spin" size={20} />
                                    <span className="font-mono text-xs uppercase">Processing Data...</span>
                                </div>
                            ) : (
                                <p className="font-medium text-gray-800 leading-relaxed text-sm">
                                    {aiDescription}
                                </p>
                            )}
                       </div>
                   </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Collections;