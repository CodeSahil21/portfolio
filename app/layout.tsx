import { ThemeProvider } from '@/components/theme-provider';
import { META_THEME_COLORS, siteConfig } from '@/config/site';
import { LenisProvider } from '@/components/providers/lenis-provider';
import 'lenis/dist/lenis.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

import { fontSans, fontMono } from '@/lib/fonts';
import { Toaster } from '@/components/ui/sonner';

import { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { SideNav } from '@/components/side-nav';
import { SiteFooter } from '@/components/site-footer';
import { docsConfig } from '@/config/docs';

import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Sahil Singh',
      url: 'https://github.com/CodeSahil21',
    },
  ],
  creator: 'Sahil Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@CodeSahil21',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
            }}
          />
        </head>
        <body
          className={cn(
            'min-h-svh w-full bg-background font-sans antialiased',
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <LenisProvider>
              <div vaul-drawer-wrapper="" className="w-full">
                <div className="relative flex min-h-svh w-full flex-col bg-background">
                  <div
                    data-wrapper=""
                    className="flex w-full flex-1 flex-col border-grid"
                  >
                    <SiteHeader />
                    <main className="flex w-full flex-1 flex-col">
                      <div className="container-wrapper">
                        <div className="container flex flex-1 items-start md:gap-6 lg:gap-10">
                          <aside className="border-grid top-14 z-30 hidden h-[calc(100svh-3.5rem)] w-[220px] shrink-0 border-r md:sticky md:block lg:w-[240px]">
                            <div className="h-full py-6 pr-4 overflow-auto no-scrollbar lg:py-8">
                              <SideNav config={docsConfig} />
                            </div>
                          </aside>
                          <div className="flex min-w-0 flex-1 flex-col py-6 lg:py-8">
                            {children}
                          </div>
                        </div>
                      </div>
                    </main>
                    <SiteFooter />
                  </div>
                </div>
              </div>
            </LenisProvider>
          </ThemeProvider>
          <Toaster richColors position="top-center" />
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''}
          />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
