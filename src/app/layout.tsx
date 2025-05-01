import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Online JSON Formatter & Validator | bij.json.app',
    description:
        'Free online tool to format, minify, and validate your JSON data instantly. Built with Next.js and Tailwind CSS. Open-source and easy to use.',
    keywords: [
        'JSON Formatter',
        'Online JSON Formatter',
        'JSON Validator',
        'Minify JSON',
        'Beautify JSON',
        'Open Source JSON tool',
        'Free JSON viewer',
        'bij.json.app',
    ],
    authors: [{ name: 'Bijan Biria', url: 'https://bijanbiria.com' }],
    creator: 'Bijan Biria',
    metadataBase: new URL('https://json.bij.app'),
    openGraph: {
        title: 'Online JSON Formatter | bij.json.app',
        description:
            'Format, minify, and validate JSON instantly. Free, fast and open-source.',
        url: 'https://json.bij.app',
        siteName: 'bij.json.app',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Online JSON Formatter | bij.json.app',
        description: 'Format, minify, and validate your JSON for free.',
        creator: '@bijanbiria',
    },
    icons: {
        icon:  [
            { url: '/android-icon-36x36.png', sizes: '36x36', type: 'image/png' },
            { url: '/android-icon-48x48.png', sizes: '48x48', type: 'image/png' },
        ],
        shortcut: '/android-icon-96x96.png',
        apple: '/android-icon-144x144.png',
    },
    manifest: '/manifest.json',
    other: {
        'msapplication-config': '/browserconfig.xml',
        'theme-color': '#ffffff',
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
