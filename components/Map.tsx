import React, { useState } from 'react';
import { MapArea } from '../types';

const areas: MapArea[] = [
  { id: 'history', name: 'History Hall', description: 'The main exhibition "Ancient Jiangsu" tracing civilization from prehistoric times to the Qing Dynasty.', color: '#000000' },
  { id: 'special', name: 'Special Exhibition', description: 'Hosting major temporary international and domestic exhibitions.', color: '#000000' },
  { id: 'art', name: 'Art Hall', description: 'Dedicated to sculpture, calligraphy, painting, and folk art.', color: '#000000' },
  { id: 'digital', name: 'Digital Hall', description: 'Interactive exhibits combining ancient culture with modern technology.', color: '#000000' },
  { id: 'republic', name: 'Republic Hall', description: 'An immersive underground street recreating Nanjing during the Republic of China era (1912-1949).', color: '#000000' },
  { id: 'intangible', name: 'Intangible Heritage', description: 'Showcasing Jiangsu heritage like Kunqu Opera and paper cutting.', color: '#000000' },
];

const Map: React.FC = () => {
  const [activeArea, setActiveArea] = useState<MapArea | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
       <div className="mb-12 border-b border-black pb-6">
        <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">Campus Map</h2>
        <p className="mt-4 text-xl font-bold uppercase tracking-wide">One Museum, Six Halls</p>
       </div>

       <div className="flex flex-col lg:flex-row border border-black">
            {/* Schematic Map */}
            <div className="w-full lg:w-2/3 bg-gray-50 relative min-h-[500px] flex items-center justify-center border-b lg:border-b-0 lg:border-r border-black overflow-hidden">
                <div className="absolute inset-0 opacity-10" 
                     style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
                
                <svg viewBox="0 0 800 600" className="w-full h-full p-8">
                    {/* Axis */}
                    <line x1="400" y1="20" x2="400" y2="580" stroke="#000" strokeWidth="1" strokeDasharray="4,4" />

                    {/* Shapes - Wireframe Style - Approximating layout */}
                    {/* History (Main Building) */}
                    <g onClick={() => setActiveArea(areas[0])} className="cursor-pointer group">
                        <rect x="250" y="50" width="300" height="150" fill={activeArea?.id === 'history' ? 'black' : 'white'} stroke="black" strokeWidth="2" className="transition-colors"/>
                        <text x="400" y="125" textAnchor="middle" fill={activeArea?.id === 'history' ? 'white' : 'black'} className="font-sans font-bold text-lg uppercase tracking-wider pointer-events-none">History Hall</text>
                        <text x="400" y="145" textAnchor="middle" fill={activeArea?.id === 'history' ? 'white' : 'black'} className="font-sans font-medium text-xs uppercase pointer-events-none">(Main Building)</text>
                    </g>

                    {/* Art */}
                    <g onClick={() => setActiveArea(areas[2])} className="cursor-pointer group">
                        <rect x="50" y="220" width="180" height="200" fill={activeArea?.id === 'art' ? 'black' : 'white'} stroke="black" strokeWidth="2" className="transition-colors"/>
                         <text x="140" y="320" textAnchor="middle" fill={activeArea?.id === 'art' ? 'white' : 'black'} className="font-sans font-bold text-lg uppercase tracking-wider pointer-events-none">Art Hall</text>
                    </g>

                    {/* Special */}
                     <g onClick={() => setActiveArea(areas[1])} className="cursor-pointer group">
                        <rect x="570" y="220" width="180" height="200" fill={activeArea?.id === 'special' ? 'black' : 'white'} stroke="black" strokeWidth="2" className="transition-colors"/>
                        <text x="660" y="320" textAnchor="middle" fill={activeArea?.id === 'special' ? 'white' : 'black'} className="font-sans font-bold text-lg uppercase tracking-wider pointer-events-none">Special Hall</text>
                    </g>

                    {/* Republic of China (Underground/Central) */}
                    <g onClick={() => setActiveArea(areas[4])} className="cursor-pointer group">
                        <rect x="250" y="250" width="300" height="100" fill={activeArea?.id === 'republic' ? 'black' : 'white'} stroke="black" strokeWidth="2" strokeDasharray="4,2" className="transition-colors"/>
                        <text x="400" y="305" textAnchor="middle" fill={activeArea?.id === 'republic' ? 'white' : 'black'} className="font-sans font-bold text-lg uppercase tracking-wider pointer-events-none">Republic Hall</text>
                    </g>

                    {/* Digital */}
                    <g onClick={() => setActiveArea(areas[3])} className="cursor-pointer group">
                        <rect x="150" y="450" width="200" height="80" fill={activeArea?.id === 'digital' ? 'black' : 'white'} stroke="black" strokeWidth="2" className="transition-colors"/>
                        <text x="250" y="495" textAnchor="middle" fill={activeArea?.id === 'digital' ? 'white' : 'black'} className="font-sans font-bold text-xs uppercase pointer-events-none">Digital Hall</text>
                    </g>

                     {/* Intangible */}
                     <g onClick={() => setActiveArea(areas[5])} className="cursor-pointer group">
                        <rect x="450" y="450" width="200" height="80" fill={activeArea?.id === 'intangible' ? 'black' : 'white'} stroke="black" strokeWidth="2" className="transition-colors"/>
                        <text x="550" y="495" textAnchor="middle" fill={activeArea?.id === 'intangible' ? 'white' : 'black'} className="font-sans font-bold text-xs uppercase pointer-events-none">Intangible Heritage</text>
                    </g>
                </svg>

                <div className="absolute top-4 left-4 border border-black bg-white px-2 py-1 text-xs font-bold uppercase">
                    Interactive Map
                </div>
            </div>

            {/* Info Panel */}
            <div className="w-full lg:w-1/3 flex flex-col">
                <div className="flex-grow p-8 flex flex-col justify-center bg-white">
                    {activeArea ? (
                        <div className="animate-[fadeIn_0.2s_ease-out]">
                            <h3 className="text-4xl font-black uppercase mb-4 leading-none">{activeArea.name}</h3>
                            <p className="text-xl font-medium leading-relaxed">
                                {activeArea.description}
                            </p>
                        </div>
                    ) : (
                        <div className="text-gray-400">
                            <p className="text-2xl font-bold uppercase">Select an Area</p>
                            <p className="font-mono text-sm mt-2">Discover the "Six Halls"</p>
                        </div>
                    )}
                </div>
                
                <div className="border-t border-black p-8 bg-black text-white">
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Recommended Route</h4>
                    <ol className="list-decimal list-inside space-y-2 font-medium">
                        <li>History Hall (Ground Floor)</li>
                        <li>Republic Hall (Basement)</li>
                        <li>Special Exhibition (Art Hall)</li>
                        <li>Intangible Heritage Hall</li>
                    </ol>
                </div>
            </div>
       </div>
    </div>
  );
};

export default Map;