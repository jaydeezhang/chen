import React from 'react';

const Guide: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-6xl md:text-8xl font-black text-black mb-20 tracking-tighter uppercase">
        Visit
      </h2>
      
      <div className="border-t border-black">
        {/* Hours */}
        <div className="flex flex-col md:flex-row py-12 border-b border-black gap-12">
            <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-black uppercase tracking-wide">Hours</h3>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <span className="block text-xs font-bold uppercase text-gray-500 mb-1">Tue — Sun</span>
                    <span className="block text-3xl font-bold">09:00 — 17:00</span>
                    <span className="block text-sm font-medium mt-1">Last Entry 16:00</span>
                </div>
                <div>
                    <span className="block text-xs font-bold uppercase text-gray-500 mb-1">Monday</span>
                    <span className="block text-3xl font-bold text-gray-400">Closed</span>
                    <span className="block text-sm font-medium mt-1">Except National Holidays</span>
                </div>
            </div>
        </div>

        {/* Admission */}
        <div className="flex flex-col md:flex-row py-12 border-b border-black gap-12">
            <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-black uppercase tracking-wide">Admission</h3>
            </div>
            <div className="w-full md:w-2/3">
                <p className="text-xl font-bold mb-8">
                    Free Admission. Online Reservation Required.
                    <br/>
                    <span className="text-base font-normal text-gray-600">Passport or ID required for entry.</span>
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors">
                        WeChat Reservation
                    </button>
                    <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-colors">
                        Official Website
                    </button>
                </div>
                <p className="mt-4 text-xs font-bold uppercase text-gray-500">
                    * Tickets are released 7 days in advance at 18:00.
                </p>
            </div>
        </div>

        {/* Getting Here */}
        <div className="flex flex-col md:flex-row py-12 border-b border-black gap-12">
             <div className="w-full md:w-1/3">
                <h3 className="text-2xl font-black uppercase tracking-wide">Location</h3>
            </div>
             <div className="w-full md:w-2/3 space-y-8">
                <div>
                    <h4 className="font-bold text-lg mb-2 uppercase">Subway</h4>
                    <p className="text-lg">Line 2 to <span className="font-bold border-b-2 border-black">Minggugong Station (明故宫)</span>. Exit 1.</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-2 uppercase">Bus</h4>
                    <p className="text-lg">Route 5, 34, 36, 55, 59 to <span className="font-bold">Zhongshanmen Station</span>.</p>
                </div>
                 <div>
                    <h4 className="font-bold text-lg mb-2 uppercase">Address</h4>
                    <p className="text-lg text-gray-600">321 Zhongshan East Road, Xuanwu District, Nanjing</p>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;