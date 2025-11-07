import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="ServerCraft" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">ServerCraft</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
              <a href="#waitlist" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium transition">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-400 text-sm font-medium">Currently in Beta</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Manage Your Minecraft<br />Server Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Pro</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Friendlier, smarter Minecraft server management with AI assistance. 
            Control your server, manage mods, automate tasks—all from a beautiful dashboard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#waitlist" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/25">
              Join Waitlist →
            </a>
            <a href="https://github.com/joshuadevelopsgames/servercraft" target="_blank" rel="noopener noreferrer" className="border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-white mb-2">2M+</div>
              <div className="text-slate-400 text-sm">Minecraft Servers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$9/mo</div>
              <div className="text-slate-400 text-sm">Simple Pricing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-slate-300 text-lg">Powerful features that make server management a breeze</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-Time Control</h3>
              <p className="text-slate-400">Start, stop, restart your server instantly. Monitor live status, player count, and performance metrics.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Live Console</h3>
              <p className="text-slate-400">Execute commands directly from your browser. Full console access with command history and syntax highlighting.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mod Management</h3>
              <p className="text-slate-400">Upload, delete, and manage mods with one click. See all installed mods, sizes, and update dates.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Scheduling</h3>
              <p className="text-slate-400">Automate restarts, backups, and maintenance. Timezone conversion included—set times in YOUR timezone.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition">
              <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Incident Detection</h3>
              <p className="text-slate-400">Automatically detect errors and warnings from logs. Get alerted to issues before players notice.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Copilot</h3>
              <p className="text-slate-400">Natural language commands powered by AI. Ask questions, get suggestions, optimize performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-300 text-lg">Start free, upgrade when you need more</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-slate-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1 server
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 schedules
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community support
                </li>
              </ul>
              <button className="w-full border border-slate-600 hover:border-slate-500 text-white py-3 rounded-lg font-semibold transition">
                Get Started
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-gradient-to-b from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/50 rounded-xl p-8 relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$9<span className="text-lg text-slate-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 servers
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited schedules
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Remove branding
                </li>
              </ul>
              <a href="#waitlist" className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-semibold transition text-center">
                Join Waitlist
              </a>
            </div>

            {/* Team Tier */}
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-slate-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  20 servers
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team collaboration
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  API access
                </li>
              </ul>
              <button className="w-full border border-slate-600 hover:border-slate-500 text-white py-3 rounded-lg font-semibold transition">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-500/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Waitlist</h2>
          <p className="text-slate-300 text-lg mb-8">
            Be the first to know when ServerCraft launches. Early members get 3 months free Pro! 🎉
          </p>
          
          {/* Simple Email Form */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <form action="https://formspree.io/f/xdkoaple" method="POST" className="max-w-md mx-auto">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <textarea
                  name="message"
                  placeholder="What servers do you run? (optional)"
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg shadow-emerald-500/25"
                >
                  Join Waitlist →
                </button>
              </div>
            </form>
          </div>

          <p className="text-slate-400 text-sm mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <details className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 group">
              <summary className="font-semibold text-white cursor-pointer flex justify-between items-center">
                What Minecraft versions are supported?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-slate-400 mt-4">
                ServerCraft works with Java Edition servers: Vanilla, Paper, Spigot, Fabric, Forge, and more. Any server accessible via SSH!
              </p>
            </details>

            <details className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 group">
              <summary className="font-semibold text-white cursor-pointer flex justify-between items-center">
                Do I need to change my hosting provider?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-slate-400 mt-4">
                Nope! ServerCraft connects to your existing server via SSH. Works with any host: Hetzner, AWS, DigitalOcean, OVH, or even your own hardware.
              </p>
            </details>

            <details className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 group">
              <summary className="font-semibold text-white cursor-pointer flex justify-between items-center">
                Is my server data secure?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes! SSH credentials are encrypted at rest. We never access your server without your explicit command. Open-source code available for audit.
              </p>
            </details>

            <details className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 group">
              <summary className="font-semibold text-white cursor-pointer flex justify-between items-center">
                Can I cancel anytime?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-slate-400 mt-4">
                Absolutely. No contracts, cancel anytime. Your data stays on your server—we're just the control panel.
              </p>
            </details>

            <details className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 group">
              <summary className="font-semibold text-white cursor-pointer flex justify-between items-center">
                What makes ServerCraft different from other panels?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-slate-400 mt-4">
                AI-powered features, timezone conversion, automatic script generation, beautiful modern UI, and it's cloud-based (no self-hosting required).
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="ServerCraft" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">ServerCraft</span>
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/joshuadevelopsgames/servercraft" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                Twitter
              </a>
              <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
                Discord
              </a>
            </div>
          </div>
          
          <div className="text-center text-slate-400 text-sm mt-8">
            © 2025 ServerCraft. Built with ❤️ for the Minecraft community.
          </div>
        </div>
      </footer>
    </div>
  )
}
