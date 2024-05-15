import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="link-container">
            <nav>
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/comments">Comments</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
