# WalletConnect Setup

To enable full WalletConnect functionality (for mobile wallet connections), you need to get a free project ID from WalletConnect Cloud.

## Steps:

1. Go to https://cloud.walletconnect.com
2. Sign up for a free account
3. Create a new project
4. Copy your Project ID
5. Create a `.env` file in the `client` directory with:
   ```
   REACT_APP_WALLETCONNECT_PROJECT_ID=your-project-id-here
   ```
6. Restart your development server

## Note:
The wallet connection will still work without a project ID, but mobile wallet connections via WalletConnect may be limited. For production, it's recommended to set up a project ID.

