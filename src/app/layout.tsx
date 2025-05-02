import './globals.css';
import { TrpcProvider } from '@/utils/trpcProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Pokedex App</title>
      </head>
      <body style={{ backgroundImage: "url('/pokemon.png')", backgroundAttachment:'fixed' }}>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
