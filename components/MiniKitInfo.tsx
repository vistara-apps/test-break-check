'use client';

import { useMiniKit } from '@coinbase/minikit';

export function MiniKitInfo() {
  const { context, isReady } = useMiniKit();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">MiniKit Information</h3>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isReady ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <span className="text-sm font-medium">
            {isReady ? 'MiniKit Ready' : 'MiniKit Loading...'}
          </span>
        </div>

        {context && (
          <div className="space-y-3">
            {context.user && (
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-blue-600 mb-2 font-medium">User Context:</p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Display Name:</span> {context.user.displayName || 'N/A'}</p>
                  <p className="text-sm"><span className="font-medium">Username:</span> {context.user.username || 'N/A'}</p>
                  <p className="text-sm"><span className="font-medium">FID:</span> {context.user.fid || 'N/A'}</p>
                </div>
              </div>
            )}

            {context.client && (
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-xs text-green-600 mb-2 font-medium">Client Context:</p>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Name:</span> {context.client.name || 'N/A'}</p>
                  <p className="text-sm"><span className="font-medium">Version:</span> {context.client.version || 'N/A'}</p>
                </div>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-2">Raw Context Data:</p>
              <pre className="text-xs overflow-auto max-h-32">
                {JSON.stringify(context, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {!context && isReady && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-700">
              MiniKit is ready but no context data available. This might be normal if running outside of Base App.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
