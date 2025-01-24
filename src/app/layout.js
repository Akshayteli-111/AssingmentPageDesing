"use client";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Default Title</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}