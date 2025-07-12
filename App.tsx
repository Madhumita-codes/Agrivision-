
import React, { useState } from 'react';
import DiseaseAnalyzer from './components/DiseaseAnalyzer';
import FarmingChat from './components/FarmingChat';
import { PlantIcon, ChatIcon } from './components/shared/IconComponents';

type ActiveTab = 'analyzer' | 'chat';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('analyzer');

  const TabButton = ({ tabName, label, icon }: { tabName: ActiveTab; label: string; icon: React.ReactNode }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-300 ease-in-out border-b-4 ${
        activeTab === tabName
          ? 'text-brand-green-dark border-brand-green-dark bg-white'
          : 'text-gray-500 border-transparent hover:bg-green-100 hover:text-brand-green'
      }`}
    >
      {icon}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-brand-green-light font-sans text-brand-gray">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="bg-brand-green rounded-full p-2 text-white">
                <PlantIcon className="w-8 h-8" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-brand-green-dark tracking-tight">
                AgroVision AI
              </h1>
            </div>
          </div>
          <nav className="flex">
            <TabButton tabName="analyzer" label="Disease Analyzer" icon={<PlantIcon className="w-5 h-5" />} />
            <TabButton tabName="chat" label="Farming Q&A" icon={<ChatIcon className="w-5 h-5" />} />
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-200px)]">
          {activeTab === 'analyzer' && <DiseaseAnalyzer />}
          {activeTab === 'chat' && <FarmingChat />}
        </div>
      </main>
      
      <footer className="text-center py-4 text-sm text-gray-500">
        <p>Powered by Google Gemini. For informational purposes only.</p>
      </footer>
    </div>
  );
};

export default App;
