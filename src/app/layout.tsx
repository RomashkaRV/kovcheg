import { ReactNode } from "react";

import { Raleway } from "next/font/google";

import "/src/style/index.scss";

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
    <head>
      <title>Create Next App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <meta name="description" content="Generated by create next app"/>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <body>
    {children}
    <script src="//cdn.jsdelivr.net/npm/eruda"></script>
    <script>eruda.init();</script>
    </body>
    </html>
  );
}
