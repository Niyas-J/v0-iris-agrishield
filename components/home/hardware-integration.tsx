import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Thermometer, Wind, Flame, Ruler } from "lucide-react"

const hardware = [
  {
    icon: Cpu,
    name: "ESP32",
    description: "Dual-core microcontroller with WiFi and Bluetooth capabilities for IoT applications",
    specs: "240MHz, 520KB SRAM",
  },
  {
    icon: Thermometer,
    name: "DHT Sensor",
    description: "Digital temperature and humidity sensor for environmental monitoring",
    specs: "DHT11/DHT22",
  },
  {
    icon: Wind,
    name: "MQ2 Gas Sensor",
    description: "Detects combustible gases, smoke, and air quality levels",
    specs: "300-10000ppm range",
  },
  {
    icon: Flame,
    name: "Flame Sensor",
    description: "Infrared-based fire detection module for safety monitoring",
    specs: "760-1100nm wavelength",
  },
  {
    icon: Ruler,
    name: "Ultrasonic Sensor",
    description: "HC-SR04 distance measurement for object detection and water levels",
    specs: "2cm-400cm range",
  },
]

export function HardwareIntegration() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Hardware Integration</h2>
          <p className="text-muted-foreground">
            Industrial-grade sensors and microcontrollers powering your smart farm
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {hardware.map((item) => (
            <Card key={item.name} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {item.specs}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
