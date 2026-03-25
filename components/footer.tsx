import Link from "next/link"
import { Leaf, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 shadow-sm">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-900">IRIS AgroOS</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              AI + IoT powered agricultural operating system that connects real-time hardware sensor data with smart farming services in a refined 3D environment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[15px] font-medium text-slate-900">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
              <Link href="/solutions" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Solutions</Link>
              <Link href="/dashboard" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Dashboard</Link>
              <Link href="/faq" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">FAQ</Link>
              <Link href="/team" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Team</Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-[15px] font-medium text-slate-900">Solutions</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/solutions" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Smart Transport</Link>
              <Link href="/solutions" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Labor Connect</Link>
              <Link href="/solutions" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Equipment Sharing</Link>
              <Link href="/solutions" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Government Schemes</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-[15px] font-medium text-slate-900">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-500 hover:text-slate-900 transition-colors">
                <Mail className="h-4 w-4" />
                <span>contact@irisagroos.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 hover:text-slate-900 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+91 1234 567 890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 hover:text-slate-900 transition-colors">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-slate-400 font-light">
              2024 IRIS AgroOS. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 font-light">
              Privacy & Security Guaranteed.
            </p>
          </div>
        </div>
      </div>
    </footer>
