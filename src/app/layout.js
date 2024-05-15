import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Marathon Blog",
  description: "Marathon blog for top 23 maratobs in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="link-container">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
