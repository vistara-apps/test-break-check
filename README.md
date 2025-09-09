# Base Mini App Test

A test application built with Next.js 15, MiniKit, and OnchainKit to verify Base Mini App functionality.

## Features

- ✅ Next.js 15 with App Router
- ✅ MiniKit integration for Base Mini Apps
- ✅ OnchainKit components for Base network
- ✅ Wallet connectivity testing
- ✅ MiniKit context information
- ✅ Mobile-first responsive design
- ✅ TypeScript throughout

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Copy `.env.local` and add your API keys:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key_here
   NEXT_PUBLIC_MINIKIT_API_KEY=your_minikit_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Testing

The app includes three main testing areas:

### 1. Wallet Status
- Check wallet connection status
- View connected address
- Connect/disconnect wallet

### 2. MiniKit Information
- View MiniKit readiness status
- Display user context from Base App
- Show client information
- Raw context data inspection

### 3. Test Actions
- Run connectivity tests
- Check API health
- Verify environment configuration

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page
│   ├── providers.tsx       # MiniKit and OnchainKit providers
│   ├── globals.css         # Global styles
│   ├── loading.tsx         # Loading UI
│   ├── error.tsx           # Error boundary
│   └── manifest.json       # Mini App manifest
├── components/
│   ├── Header.tsx          # App header
│   ├── TestInterface.tsx   # Main test interface
│   ├── WalletStatus.tsx    # Wallet connection status
│   ├── MiniKitInfo.tsx     # MiniKit context display
│   └── TestActions.tsx     # Test action buttons
└── ...config files
```

## Key Dependencies

- **@coinbase/minikit**: Base Mini App integration
- **@coinbase/onchainkit**: Base network components
- **next**: React framework
- **wagmi**: Ethereum library
- **viem**: TypeScript interface for Ethereum
- **tailwindcss**: Utility-first CSS framework

## Deployment

This app is ready for deployment to Vercel, Netlify, or any platform supporting Next.js.

Make sure to set environment variables in your deployment platform.

## Troubleshooting

1. **Build errors**: Ensure all dependencies are installed and environment variables are set
2. **Wallet connection issues**: Check that you're using a compatible wallet
3. **MiniKit context not available**: This is normal when running outside of Base App

## Learn More

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps/)
- [MiniKit Documentation](https://docs.base.org/mini-apps/technical-reference/minikit/)
- [OnchainKit Documentation](https://onchainkit.xyz/)
