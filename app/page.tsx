import { TestInterface } from '@/components/TestInterface';
import { Header } from '@/components/Header';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Base Mini App Test
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testing MiniKit integration with OnchainKit components on Base network.
              This app demonstrates core functionality and wallet connectivity.
            </p>
          </div>
          
          <TestInterface />
        </div>
      </div>
    </main>
  );
}
