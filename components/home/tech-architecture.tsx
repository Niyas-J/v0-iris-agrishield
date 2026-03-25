import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Server, Database, Globe, Lock, ArrowRight } from "lucide-react"

const architectureLayers = [
  {
    icon: Wifi,
    title: "Data Collection",
    description: "ESP32 sends sensor data via WiFi to secure endpoints",
    color: "primary",
  },
  {
    icon: Server,
    title: "Backend Processing",
    description: "Firebase / Node.js backend processes and validates data",
    color: "secondary",
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description: "Real-time database stores historical and live values",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Web Application",
    description: "Frontend fetches and displays data with live updates",
    color: "secondary",
  },
]

export function TechArchitecture() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Architecture</h2>
          <p className="text-muted-foreground">
            Secure, scalable infrastructure designed for real-time agricultural monitoring
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {architectureLayers.map((layer, index) => (
            <div key={layer.title} className="relative">
              <Card className="h-full border-border/50 bg-card shadow-sm">
                <CardContent className="p-6">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${layer.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <layer.icon className={`h-6 w-6 ${layer.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <div className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Step {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                </CardContent>
              </Card>
              {index < architectureLayers.length - 1 && (
                <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Security Note */}
        <Card className="mt-10 border-primary/20 bg-primary/5">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Secure Backend Architecture</h4>
              <p className="text-sm text-muted-foreground">
                All API keys (OpenWeather, Google Maps) are handled securely on the backend. No sensitive data is exposed in the frontend.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
