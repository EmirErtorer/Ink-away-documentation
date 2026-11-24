import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import './global.css';


export const metadata: Metadata = {
  title: { default: 'Ink Away', template: '%s | Ink Away' },
  description: 'The guide to Ink Away, the drawing, notes and book annotation plugin for KOReader.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
