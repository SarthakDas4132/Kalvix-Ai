import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

// This component is web-only and used to configure the root HTML for every
// web page. Shared headers, meta tags, and scripts should be defined here.
export default function Html({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Reset styles for Expo Web elements */}
        <ScrollViewStyleReset />

        <style dangerouslySetInnerHTML={{ __html: `
          /* Prevent horizontal overflow scrolling globally on body */
          html, body {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
            background-color: #fefae7; /* matches var(--bg-cream) */
          }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
