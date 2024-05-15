import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/comments">Comments</Link>
          </nav>
        </header>
        {children}
        <footer>
          <p>I am the footer</p>
        </footer>
      </body>
    </html>
  );
}
