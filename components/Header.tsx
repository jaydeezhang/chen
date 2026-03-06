import React, { useState, useEffect } from 'react';
import { Tab } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Header: React.FC<HeaderProps> = ({ currentTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Tab.HOME, label: '首页' },
    { id: Tab.EXHIBITIONS, label: '展览' },
    { id: Tab.COLLECTIONS, label: '藏品' },
    { id: Tab.GUIDE, label: '导览' },
    { id: Tab.MAP, label: '地图' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white text-black border-b border-black h-16 flex items-center">
      <div className="w-full px-4 md:px-8 flex justify-between items-center h-full">
        {/* Typographic Logo */}
        <div 
            className="cursor-pointer flex items-center h-full border-r border-transparent md:border-black pr-8"
            onClick={() => onTabChange(Tab.HOME)}
        >
          <h1 className="font-sans font-black text-xl md:text-2xl tracking-tighter uppercase leading-none">
            Nanjing Museum <span className="hidden md:inline-block text-sm font-bold align-middle ml-2">南京博物院</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex h-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`h-full px-6 font-bold text-sm uppercase tracking-wide transition-colors duration-200 flex items-center border-l border-black -ml-[1px]
                ${currentTab === item.id ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
            className="md:hidden p-2 border border-black hover:bg-black hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-black md:hidden">
            <div className="flex flex-col">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            onTabChange(item.id);
                            setMobileMenuOpen(false);
                        }}
                        className={`py-4 px-6 text-left border-b border-gray-200 font-bold uppercase ${
                            currentTab === item.id ? 'bg-black text-white' : 'text-black'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;