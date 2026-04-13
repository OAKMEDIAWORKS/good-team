import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOOD TEAM -- Research becomes action",
  description: "GOOD TEAM coordinates AI and people to solve humanity's biggest problems. Not just study them. Fix them. Open source. Open knowledge. Incorruptible.",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#4ade80] flex items-center justify-center">
            <span className="text-black font-bold text-xs">G</span>
          </div>
          <span className="font-bold text-[15px] tracking-tight">GOOD TEAM</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Mission", href: "/mission" },
            { label: "The Plan", href: "/plan" },
            { label: "About", href: "/about" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3.5 py-1.5 rounded-lg text-sm text-[#888] hover:text-white hover:bg-[#1e1e1e] transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="https://github.com/OAKMEDIAWORKS/good-team" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-lg text-sm text-[#888] hover:text-white hover:bg-[#1e1e1e] transition-all hidden sm:block">
            GitHub
          </a>
          <a href="/about#get-involved" className="btn-primary !py-2 !px-5 !text-sm">
            Get Involved
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] mt-24 py-12 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-sm text-[#555]">
          <span>AGPL-3.0</span>
          <span>CC BY 4.0</span>
          <a href="/mission" className="hover:text-white transition-colors">Mission</a>
          <a href="/plan" className="hover:text-white transition-colors">Plan</a>
          <a href="https://github.com/OAKMEDIAWORKS/good-team" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <p className="text-sm text-[#555]">Timothy Oakley / Oak Media Works -- Great Barrington, MA</p>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-14 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
