import { Card, CardContent } from "@/components/ui/card"
import { Radio, Cpu, Cloud, Monitor, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Radio,
    title: "Sensors",
    description: "DHT, MQ2, Flame, Ultrasonic sensors collect field data",
  },
  {
    icon: Cpu,
    title: "ESP32",
    description: "Microcontroller processes and transmits sensor readings",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Firebase/Node.js backend stores and processes data",
  },
  {
    icon: Monitor,
    title: "Dashboard",
    description: "Web app displays real-time insights and alerts",
  },
]

export function SystemOverview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">System Architecture</h2>
          <p className="text-muted-foreground">
            End-to-end IoT pipeline from field sensors to intelligent dashboard
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="h-full border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 md:block">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
