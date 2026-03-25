"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Flame, Wind, Ruler, Thermometer, Bell } from "lucide-react"

interface Alert {
  id: string
  type: "danger" | "warning" | "info"
  icon: React.ElementType
  message: string
  timestamp: Date
}

const alertTemplates = [
  { type: "danger" as const, icon: Flame, message: "Fire detected - Buzzer Activated" },
  { type: "warning" as const, icon: Wind, message: "Gas leakage detected" },
  { type: "info" as const, icon: Ruler, message: "Object detected within range" },
  { type: "warning" as const, icon: Thermometer, message: "High temperature - Irrigation recommended" },
  { type: "info" as const, icon: AlertTriangle, message: "Moisture levels below optimal" },
  { type: "warning" as const, icon: AlertTriangle, message: "Unusual activity detected in sector A3" },
]

function generateAlerts(): Alert[] {
  const numAlerts = 3 + Math.floor(Math.random() * 2)
  const shuffled = [...alertTemplates].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, numAlerts).map((template, i) => ({
    ...template,
    id: `alert-${i}`,
    timestamp: new Date(Date.now() - Math.random() * 600000),
  }))
}

function getAlertStyles(type: string) {
  switch (type) {
    case "danger":
      return "border-destructive/50 bg-destructive/5"
    case "warning":
      return "border-warning/50 bg-warning/5"
    default:
      return "border-secondary/50 bg-secondary/5"
  }
}

function getIconStyles(type: string) {
  switch (type) {
    case "danger":
      return "text-destructive"
    case "warning":
      return "text-warning"
    default:
      return "text-secondary"
  }
}

export function SmartAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([])

  useEffect(() => {
    setAlerts(generateAlerts())
    const interval = setInterval(() => {
      setAlerts(generateAlerts())
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Smart Alerts Panel</h2>
          <p className="text-muted-foreground">
            Intelligent notifications based on sensor thresholds and AI analysis
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card shadow-sm">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Active Alerts</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border/50">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`flex items-start gap-4 p-4 ${getAlertStyles(alert.type)}`}>
                    <div className={`mt-0.5 ${getIconStyles(alert.type)}`}>
                      <alert.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{alert.message}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {alert.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Alerts refresh dynamically based on sensor conditions
        </p>
      </div>
    </section>
  )
}
