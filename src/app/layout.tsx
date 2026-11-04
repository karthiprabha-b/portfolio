import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Karthikeyan Prabakaran | Full-Stack Developer & AI Automation Engineer',
  description: 'Building digital experiences. Engineering what\'s next. Full-stack web applications, SaaS platforms, AI automation systems, and creative digital media.',
  keywords: [
    'Karthikeyan Prabakaran',
    'Full-Stack Developer',
    'AI Automation Engineer',
    'Vibe Coding',
    'Next.js Developer',
    'TypeScript',
    'CampusCV',
    'Spark AI',
    'Tamil Nadu',
    'Software Engineer'
  ],
  authors: [{ name: 'Karthikeyan Prabakaran' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050814',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050814] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
