import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PEAK Geothermal Energy Inc.',
  description: 'Developing the planet\'s best renewable energy resources. Calgary-based geothermal energy developer with projects in Nevada, Chile, and Canada.',
  keywords: 'geothermal energy, renewable energy, Calgary, Alberta, Nevada, Chile, sustainable energy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
