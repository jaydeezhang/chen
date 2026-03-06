import React, { useState } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Exhibitions from './components/Exhibitions';
import Collections from './components/Collections';
import Guide from './components/Guide';
import Map from './components/Map';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (currentTab) {
      case Tab.HOME:
        return (
          <>
            <Hero onExplore={(tab) => setCurrentTab(tab)} />
            <div className="border-t border-black">
                <Exhibitions />
            </div>
          </>
        );
      case Tab.EXHIBITIONS:
        return (
            <div className="pt-20 min-h-screen bg-white">
                <Exhibitions />
            </div>
        );
      case Tab.COLLECTIONS:
        return (
            <div className="pt-20 min-h-screen bg-white">
                <Collections />
            </div>
        );
      case Tab.GUIDE:
        return (
            <div className="pt-20 min-h-screen bg-white">
                <Guide />
            </div>
        );
      case Tab.MAP:
        return (
            <div className="pt-20 min-h-screen bg-white">
                <Map />
            </div>
        );
      default:
        return <Hero onExplore={(tab) => setCurrentTab(tab)} />;
    }
  };

  return (
    <div className="font-sans antialiased text-black bg-white min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Header currentTab={currentTab} onTabChange={setCurrentTab} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;