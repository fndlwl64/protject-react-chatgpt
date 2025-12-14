import type { ReactNode } from "react";
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-zinc-900 text-zinc-100 h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}