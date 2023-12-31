import { store } from "@/redux/store";
import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waiter Helper",
  description: "Waiter Helper, just the best help for waiters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
