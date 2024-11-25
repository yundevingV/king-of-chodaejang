// app/layout.tsx
import React from "react";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="ko">
      <body className="flex flex-col h-screen max-w-xs mx-auto bg-custom-gradient">
        <main className="flex flex-col gap-y-10 p-5 text-2xl font-extrabold bg-opacity-30 bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
