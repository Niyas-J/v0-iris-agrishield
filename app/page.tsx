import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SystemOverview } from "@/components/home/system-overview"
import { SensorMonitoring } from "@/components/home/sensor-monitoring"
import { SmartAlerts } from "@/components/home/smart-alerts"
import { AIInsights } from "@/components/home/ai-insights"
import { HardwareIntegration } from "@/components/home/hardware-integration"
import { TechArchitecture } from "@/components/home/tech-architecture"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SystemOverview />
        <SensorMonitoring />
        <SmartAlerts />
        <AIInsights />
        <HardwareIntegration />
        <TechArchitecture />
      </main>
      <Footer />
    </div>
  )
}
