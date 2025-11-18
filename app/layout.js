import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxScene from './components/ParallaxScene';

export const metadata = {
  title: 'RideMate - Motorcycle Ride Tracker',
  description: 'Like Strava, but for your motorbike. Privacy-first ride tracking for motorcycle enthusiasts who value simplicity and control.',
  keywords: 'motorcycle, ride tracker, GPS, privacy, iOS, app, Strava alternative, ride logging, motorcycle app',
  authors: [{ name: 'Charlie McMahon' }],
  creator: 'Charlie McMahon',
  publisher: 'Sunset Labs',
  metadataBase: new URL('https://ridemate.app'),
  alternates: {
    canonical: 'https://ridemate.app',
  },
  openGraph: {
    title: 'RideMate - Motorcycle Ride Tracker',
    description: 'Like Strava, but for your motorbike. Privacy-first ride tracking for motorcycle enthusiasts.',
    url: 'https://ridemate.app',
    siteName: 'RideMate',
    images: [
      {
        url: '/RideMate-iOS-Default-1024x1024@1x.png',
        width: 1024,
        height: 1024,
        alt: 'RideMate App Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RideMate - Motorcycle Ride Tracker',
    description: 'Like Strava, but for your motorbike. Privacy-first ride tracking for motorcycle enthusiasts.',
    images: ['/RideMate-iOS-Default-1024x1024@1x.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/RideMate-iOS-Default-1024x1024@1x.png' },
    ],
    apple: [
      { url: '/RideMate-iOS-Default-1024x1024@1x.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParallaxScene />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
