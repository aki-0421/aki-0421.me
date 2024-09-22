import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import type { ReactElement, ReactNode } from 'react';

export const metadata: Metadata = {
  title: `Aki's portfolio`,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): ReactElement {
  return (
    <html lang="ja">
      <body>
        <NextTopLoader
          color="hsl(360 100% 85%)"
          initialPosition={0.3}
          crawlSpeed={500}
          speed={500}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
        />
        {children}
      </body>
    </html>
  );
}
