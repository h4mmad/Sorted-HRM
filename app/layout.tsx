"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { Inter } from "next/font/google";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Sorted HRM",
  description: "The best human resource management system",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames([
          inter.className,
          "dark:bg-black",
          "overflow-hidden",
          "h-screen",
        ])}
      >
        <div>
          <QueryClientProvider client={queryClient}>
            <SessionProvider>{children}</SessionProvider>
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
