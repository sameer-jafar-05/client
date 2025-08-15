// Import global styles (keep it so your CSS works everywhere)
import '@/globals.css';

// Import type definition for page metadata
import type { Metadata } from 'next';

// Import a custom Google Font (Inter in this case)
import { Inter } from 'next/font/google';

// Configure Inter font with latin subset
const inter = Inter({ subsets: ['latin'] });

// ✅ Update your site title and description for SEO & branding
export const metadata: Metadata = {
  title: 'Shaik Sameer Anwar | Portfolio', // Changed from default to your portfolio title
  description: 'Personal portfolio of Shaik Sameer Anwar, a web developer skilled in React, Next.js, and more.', // Changed for SEO
};

// ✅ This is the root layout applied to all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add favicon, meta tags, Open Graph tags here later */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {/* ✅ Add a header or navbar here so it appears on all pages */}
        {/* <Navbar /> */}

        {children}

        {/* ✅ Add a footer so it's consistent across pages */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}