'use client';

import { useMiniKit } from '@coinbase/minikit';

export function Header() {
  const { context } = useMiniKit();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              Base Mini App
            </h1>
          </div>
          
          {context?.user && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-medium">
                  {context.user.displayName?.[0] || '?'}
                </span>
              </div>
              <span className="text-sm text-gray-700">
                {context.user.displayName || 'User'}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
