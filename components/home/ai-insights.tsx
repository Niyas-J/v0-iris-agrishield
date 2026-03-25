import { Card, CardContent } from "@/components/ui/card"
import { Brain, CloudRain, Droplets, Truck } from "lucide-react"

const insights = [
  {
    icon: CloudRain,
    title: "Weather Advisory",
    recommendation: "Weather conditions suggest delaying harvest by 2-3 days for optimal crop quality.",
    confidence: 87,
  },
  {
    icon: Droplets,
    title: "Irrigation Timing",
    recommendation: "Optimal time for irrigation is between 6-8 AM. Soil moisture levels are at 45%.",
    confidence: 92,
  },
  {
    icon: Truck,
    title: "Transport Demand",
    recommendation: "Transport demand is high in your area. Consider booking vehicles in advance.",
    confidence: 78,
  },
]

export function AIInsights() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
            <Brain className="h-7 w-7 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">AI-Powered Insights</h2>
          <p className="text-muted-foreground">
            Machine learning algorithms analyze your farm data to provide actionable recommendations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <Card key={insight.title} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <insight.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{insight.title}</h3>
                    <p className="text-xs text-muted-foreground">{insight.confidence}% confidence</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.recommendation}</p>
                <div className="mt-4">
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-secondary transition-all duration-1000"
                      style={{ width: `${insight.confidence}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
