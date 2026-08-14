import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monitor Dashboard',
  description: 'Command Center',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
