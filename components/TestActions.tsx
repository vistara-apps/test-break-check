'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';

export function TestActions() {
  const { isConnected } = useAccount();
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addResult = (result: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
  };

  const runConnectivityTest = async () => {
    setIsLoading(true);
    addResult('Starting connectivity test...');
    
    try {
      // Test basic connectivity
      addResult(`Wallet connected: ${isConnected}`);
      addResult(`Network: Base`);
      addResult(`Environment: ${process.env.NODE_ENV}`);
      
      // Test API endpoints
      try {
        const response = await fetch('/api/health');
        if (response.ok) {
          addResult('API health check: ✅ Passed');
        } else {
          addResult('API health check: ❌ Failed');
        }
      } catch {
        addResult('API health check: ❌ No API endpoint');
      }
      
      addResult('Connectivity test completed');
    } catch (error) {
      addResult(`Test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Test Actions</h3>
      
      <div className="space-y-3">
        <div className="flex space-x-2">
          <button
            onClick={runConnectivityTest}
            disabled={isLoading}
            className="btn-primary"
          >
            {isLoading ? 'Running Test...' : 'Run Connectivity Test'}
          </button>
          
          <button
            onClick={clearResults}
            disabled={testResults.length === 0}
            className="btn-secondary"
          >
            Clear Results
          </button>
        </div>

        {testResults.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-2">Test Results:</p>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {testResults.map((result, index) => (
                <p key={index} className="text-xs font-mono text-gray-700">
                  {result}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Available Tests:</h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Wallet connectivity status</li>
            <li>• Network configuration</li>
            <li>• API endpoint health</li>
            <li>• Environment variables</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
