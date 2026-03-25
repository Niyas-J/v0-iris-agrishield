"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Wind, Flame, Ruler } from "lucide-react"

interface SensorData {
  temperature: number
  humidity: number
  gasLevel: number
  flameDetected: boolean
  distance: number
}

function getRandomSensorData(): SensorData {
  return {
    temperature: Math.round((20 + Math.random() * 20) * 10) / 10,
    humidity: Math.round((40 + Math.random() * 40) * 10) / 10,
    gasLevel: Math.round(Math.random() * 500),
    flameDetected: Math.random() > 0.9,
    distance: Math.round((10 + Math.random() * 90) * 10) / 10,
  }
}

function getStatus(type: string, value: number | boolean): { label: string; variant: "default" | "secondary" | "destructive" } {
  if (type === "flame") {
    return value ? { label: "Danger", variant: "destructive" } : { label: "Safe", variant: "default" }
  }
  if (type === "temperature") {
    if (value as number > 35) return { label: "Warning", variant: "secondary" }
    if (value as number > 40) return { label: "Danger", variant: "destructive" }
    return { label: "Safe", variant: "default" }
  }
  if (type === "humidity") {
    if ((value as number) < 30 || (value as number) > 80) return { label: "Warning", variant: "secondary" }
    return { label: "Safe", variant: "default" }
  }
  if (type === "gas") {
    if (value as number > 300) return { label: "Danger", variant: "destructive" }
    if (value as number > 200) return { label: "Warning", variant: "secondary" }
    return { label: "Safe", variant: "default" }
  }
  if (type === "distance") {
    if (value as number < 20) return { label: "Warning", variant: "secondary" }
    return { label: "Safe", variant: "default" }
  }
  return { label: "Safe", variant: "default" }
}

const sensors = [
  { key: "temperature", icon: Thermometer, label: "Temperature", unit: "°C", type: "temperature" },
  { key: "humidity", icon: Droplets, label: "Humidity", unit: "%", type: "humidity" },
  { key: "gasLevel", icon: Wind, label: "Gas Level", unit: "ppm", type: "gas" },
  { key: "flameDetected", icon: Flame, label: "Flame Detection", unit: "", type: "flame" },
  { key: "distance", icon: Ruler, label: "Distance", unit: "cm", type: "distance" },
]

export function SensorMonitoring() {
  const [data, setData] = useState<SensorData>(getRandomSensorData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(getRandomSensorData())
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Live Sensor Monitoring</h2>
          <p className="text-muted-foreground">
            Real-time dashboard preview with dynamic sensor readings
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sensors.map((sensor) => {
            const value = data[sensor.key as keyof SensorData]
            const status = getStatus(sensor.type, value)
            const displayValue = sensor.type === "flame" 
              ? (value ? "Detected" : "Not Detected")
              : `${value}${sensor.unit}`

            return (
              <Card key={sensor.key} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <sensor.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge 
                      variant={status.variant}
                      className={status.variant === "default" ? "bg-success text-success-foreground" : status.variant === "secondary" ? "bg-warning text-warning-foreground" : ""}
                    >
                      {status.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-1">{sensor.label}</p>
                  <p className="text-2xl font-bold text-foreground">{displayValue}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Values update every 3 seconds (simulated data)
        </p>
      </div>
    </section>
  )
}
