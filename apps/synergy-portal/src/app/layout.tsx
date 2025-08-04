import './global.css';

export const metadata = {
  title: 'Synergy Portal',
  description: 'Synergy Portal',
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
