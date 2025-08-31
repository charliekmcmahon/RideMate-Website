"use client";
import GradientGrid from '../components/GradientGrid';

export default function SupportPage() {
  return (
    <div className="relative isolate pt-24 pb-16">
      <GradientGrid />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Support</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Get help with RideMate and make the most of your ride tracking experience.</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Need Quick Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <svg className="mx-auto h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4zM4 11h16v2H4zM4 18h16v2H4z"/></svg>
              <h3 className="font-semibold text-gray-900 dark:text-white">Email Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Get personalised help</p>
              <a href="mailto:charlie@sunsetlabs.com.au" className="text-blue-600 dark:text-blue-400 hover:underline">charlie@sunsetlabs.com.au</a>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <svg className="mx-auto h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="font-semibold text-gray-900 dark:text-white">Response Time</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">We typically respond within</p>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">2-3 business days</span>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How do I start tracking a ride?', a: 'Open RideMate and tap the large "Start Ride" button. Ensure location services are enabled. The app records your route, speed, and metrics automatically.' },
              { q: 'Is my ride data private and secure?', a: 'Yes. All ride data is stored locally or in your iCloud if enabled. Nothing is sent to our servers. Your rides belong to you.' },
              { q: 'Why does the app drain my battery?', a: 'Continuous GPS use consumes power. We optimize usage, but for long rides consider a charger. Adjust GPS accuracy to balance precision and battery.' },
              { q: 'What motorcycle types does RideMate support?', a: 'Any two-wheeled motorised vehicle: sport, cruiser, ADV, touring, scooter. Set your bike type in settings for tailored stats.' },
            ].map((item, i) => (
              <details key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">{item.a}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Still Need Help?</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Send us a message and we'll get back to you as soon as possible.</p>
          <div className="max-w-lg mx-auto">
            <form action="mailto:charlie@sunsetlabs.com.au" method="post" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <select name="subject" id="subject" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>General Question</option>
                  <option>Technical Issue</option>
                  <option>Feature Request</option>
                  <option>Privacy Concern</option>
                  <option>Bug Report</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="device" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Device Information (Optional)</label>
                <input type="text" name="device" id="device" placeholder="e.g., iPhone 15 Pro, iOS 17.1" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea name="message" id="message" rows="5" placeholder="Describe your issue or question in detail..." className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">Send Message</button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">This will open your default email client. Or email us directly at <a href="mailto:charlie@sunsetlabs.com.au" className="text-blue-600 dark:text-blue-400 hover:underline">charlie@sunsetlabs.com.au</a></p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Don't have RideMate yet?</h3>
          <a href="https://apps.apple.com/au/app/ridemate-ride-tracking/id6744748216?itscg=30200&itsct=apps_box_link&mttnsubad=6744748216" target="_blank" className="inline-block">
            <img className="h-14 w-auto dark:hidden" src="/AppStoreBadge-Dark.svg" alt="Download on the App Store" />
            <img className="h-14 w-auto hidden dark:block" src="/AppStoreBadge-Light.svg" alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </div>
  );
}
