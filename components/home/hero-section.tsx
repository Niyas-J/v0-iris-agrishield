import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Shield, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">AI-Powered Smart Agriculture</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            AI Smart Farm Guardian
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl leading-relaxed text-pretty max-w-2xl mx-auto">
            Real-time monitoring and intelligent decision-making using IoT sensors and cloud integration for smarter farming operations.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="/dashboard">
                View Live Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
            <Activity className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Real-time Monitoring</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Smart Alerts</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
            <Cpu className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">IoT Integration</span>
          </div>
        </div>
      </div>
    </section>
  )
}
