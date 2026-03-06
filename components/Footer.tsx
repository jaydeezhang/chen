import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Nanjing Museum</h2>
            <p className="text-sm font-medium text-gray-400 max-w-sm">
                321 Zhongshan East Road, Xuanwu District<br/>
                Nanjing, Jiangsu, China
            </p>
        </div>
        
        <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Menu</h3>
            <ul className="space-y-3 font-bold text-lg">
                <li className="hover:text-gray-400 cursor-pointer transition-colors">About</li>
                <li className="hover:text-gray-400 cursor-pointer transition-colors">News</li>
                <li className="hover:text-gray-400 cursor-pointer transition-colors">Research</li>
                <li className="hover:text-gray-400 cursor-pointer transition-colors">Shop</li>
            </ul>
        </div>

        <div>
            <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Connect</h3>
            <ul className="space-y-3 font-bold text-lg">
                <li className="hover:text-gray-400 cursor-pointer transition-colors">WeChat</li>
                <li className="hover:text-gray-400 cursor-pointer transition-colors">Weibo</li>
                <li className="hover:text-gray-400 cursor-pointer transition-colors">Instagram</li>
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between text-xs font-mono text-gray-500">
        <p>&copy; 2024 Nanjing Museum</p>
        <p>Privacy Policy / Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;