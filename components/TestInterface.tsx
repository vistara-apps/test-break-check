'use client';

import { useState } from 'react';
import { useMiniKit } from '@coinbase/minikit';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { WalletStatus } from './WalletStatus';
import { MiniKitInfo } from './MiniKitInfo';
import { TestActions } from './TestActions';

export function TestInterface() {
  const [activeTab, setActiveTab] = useState<'wallet' | 'minikit' | 'actions'>('wallet');
  
  const tabs = [
    { id: 'wallet' as const, label: 'Wallet', icon: '💳' },
    { id: 'minikit' as const, label: 'MiniKit', icon: '🔧' },
    { id: 'actions' as const, label: 'Actions', icon: '⚡' },
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="card">
        {activeTab === 'wallet' && <WalletStatus />}
        {activeTab === 'minikit' && <MiniKitInfo />}
        {activeTab === 'actions' && <TestActions />}
      </div>
    </div>
  );
}
