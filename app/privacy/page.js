"use client";

export default function PrivacyPage() {
  return (
    <div className="relative isolate pt-24 pb-16 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">RideMate Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal mb-4">Sunset Labs (Charlie McMahon) ("we", "us", or "our") operates the mobile application, RideMate ("the App"). RideMate is designed for motorbike ride tracking.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: June 25, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 dark:text-blue-100 mt-0 mb-4">Your Privacy is Paramount</h2>
            <p className="text-lg text-blue-800 dark:text-blue-200 mb-0">At Sunset Labs, we're deeply committed to protecting your privacy. We've built RideMate with your data security and privacy as our top priority.</p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">What Information RideMate Collects and Stores</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">RideMate is built on the principle of minimal data collection. <strong className="text-gray-900 dark:text-white">We do not collect, store, or have access to any personal information or ride data from your use of the App.</strong></p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">Your Data Storage Choices</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">RideMate offers you a simple choice regarding your ride data storage:</p>
            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-green-900 dark:text-green-100 mb-4">On-Device Storage (Default)</h3>
                <p className="text-lg text-green-800 dark:text-green-200 mb-0 leading-relaxed">If you choose not to enable iCloud backup, all your ride data—including routes, speeds, and other recorded metrics—remains exclusively on your device. No data leaves your device whatsoever. We can't access, view, or retrieve this data.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">iCloud Backup (Optional)</h3>
                <p className="text-lg text-blue-800 dark:text-blue-200 mb-0 leading-relaxed">If you opt to enable iCloud backup for RideMate, your ride data will be securely stored in your personal iCloud account, managed by Apple. This data is subject to Apple's privacy policy and security measures. Sunset Labs does not have access to your iCloud account or the data stored within it.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">No Data Collection, Selling, or Sharing</h2>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <li><strong className="text-gray-900 dark:text-white">No Data Collected by Sunset Labs:</strong> We don't collect, process, or store any of your ride data on our servers.</li>
              <li><strong className="text-gray-900 dark:text-white">No Data Sold:</strong> We never sell any user data. Since we don't collect it, there's nothing to sell.</li>
              <li><strong className="text-gray-900 dark:text-white">No Data Shared:</strong> We don't share any user data with third parties.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">Permissions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">For RideMate to function properly, it will require certain permissions on your device, such as:</p>
            <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300">
              <li><strong className="text-gray-900 dark:text-white">Location Services:</strong> To track your rides. This data is processed locally on your device or backed up to your iCloud account if enabled.</li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">Changes to This Privacy Policy</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">We may update our Privacy Policy from time to time. We'll notify you of any changes by posting the new Privacy Policy within the App or through other appropriate communication channels. You're advised to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">Contact Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <p className="text-lg mb-3 text-gray-700 dark:text-gray-300"><strong>Sunset Labs</strong></p>
              <p className="text-lg mb-3 text-gray-700 dark:text-gray-300"><strong>Email:</strong> <a href="mailto:charlie@sunsetlabs.com.au" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">charlie@sunsetlabs.com.au</a></p>
              <p className="text-lg mb-0 text-gray-700 dark:text-gray-300"><strong>Support:</strong> <a href="/support" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">Visit our Support page</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
