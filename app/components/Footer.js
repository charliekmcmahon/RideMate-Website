import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-x-4">
            <img className="h-8 w-auto dark:hidden" src="/icon-light.png" alt="RideMate Logo Light" />
            <img className="h-8 w-auto hidden dark:block" src="/icon-dark.png" alt="RideMate Logo Dark" />
            <span className="text-sm text-gray-600 dark:text-gray-400">© 2025 Sunset Labs. All rights reserved.</span>
          </div>
          <div className="flex gap-x-6">
            <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</Link>
            <Link href="/support" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
