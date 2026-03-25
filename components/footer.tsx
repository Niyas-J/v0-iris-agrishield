import Link from "next/link"
import { Leaf, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">IRIS AgroOS</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI + IoT powered agricultural operating system that connects real-time hardware sensor data with smart farming services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
              <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Team</Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Solutions</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Smart Transport</Link>
              <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Labor Connect</Link>
              <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Equipment Sharing</Link>
              <Link href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Government Schemes</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@irisagroos.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 1234 567 890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              2024 IRIS AgroOS. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Secure backend handles API keys and sensor data
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
