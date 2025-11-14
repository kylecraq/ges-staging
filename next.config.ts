import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    // Provide the path to the messages that you're using in `AppConfig`
    createMessagesDeclaration: './src/messages/en.json'
  }
});

const nextConfig: NextConfig = {
  output: 'export', // static export
  images: {
    unoptimized: true
  }
};

export default withNextIntl(nextConfig);
