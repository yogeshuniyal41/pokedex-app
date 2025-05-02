import './globals.css';
import { TrpcProvider } from '@/utils/trpcProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <title>Pokedex App</title>
      <body>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
