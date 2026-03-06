import React from 'react';
import { Exhibition } from '../types';

const exhibitions: Exhibition[] = [
  {
    id: 'special-1',
    title: 'THE SPLENDOR OF HAN',
    subtitle: '大汉楚王：徐州北洞山楚王墓出土文物',
    date: 'LIMITED TIME',
    image: 'https://picsum.photos/800/600?random=101',
    location: 'Special Exhibition Hall',
    isSpecial: true,
  },
  {
    id: 'history',
    title: 'ANCIENT JIANGSU',
    subtitle: '江淮流韵：江苏古代文明',
    date: 'PERMANENT',
    image: 'https://picsum.photos/800/600?random=102',
    location: 'History Hall',
    isSpecial: false,
  },
  {
    id: 'republic',
    title: 'OLD NANJING STREETS',
    subtitle: '民国馆：一条街，一座城',
    date: 'PERMANENT',
    image: 'https://picsum.photos/800/600?random=103',
    location: 'Republic of China Hall',
    isSpecial: false,
  },
  {
    id: 'art',
    title: 'MASTERPIECES',
    subtitle: '历代绘画与书法陈列',
    date: 'PERMANENT',
    image: 'https://picsum.photos/800/600?random=104',
    location: 'Art Hall',
    isSpecial: false,
  }
];

const Exhibitions: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="border-b border-black p-6 md:p-12 flex flex-col md:flex-row justify-between items-end">
        <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">Curated View</h2>
            <p className="text-lg font-bold">展览陈列</p>
        </div>
        <p className="max-w-md text-sm font-bold uppercase tracking-wide mt-4 md:mt-0">
            Featuring "One Museum, Six Halls"
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {exhibitions.map((ex, index) => (
          <div 
            key={ex.id} 
            className={`group relative border-b border-black ${index % 2 === 0 ? 'md:border-r' : ''} hover:bg-gray-50 transition-colors cursor-pointer`}
          >
             <div className="aspect-[16/9] w-full overflow-hidden border-b border-black">
              <img 
                src={ex.image} 
                alt={ex.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col h-full justify-between min-h-[220px]">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <span className={`text-xs font-bold px-2 py-1 uppercase ${ex.isSpecial ? 'bg-black text-white' : 'border border-black text-black'}`}>
                            {ex.date}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide text-gray-500">{ex.location}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none mb-2 group-hover:underline decoration-4 underline-offset-4">
                        {ex.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-600">{ex.subtitle}</p>
                </div>
                
                <div className="mt-8 flex justify-between items-end">
                     <span className="text-xs font-bold uppercase border-b border-black pb-1 group-hover:bg-black group-hover:text-white transition-colors">
                        Explore Gallery
                     </span>
                     {ex.id === 'republic' && (
                        <span className="text-xs font-mono text-gray-400 uppercase">
                            Immersive Experience
                        </span>
                     )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;