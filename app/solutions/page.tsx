import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Users, Wrench, FileText, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    icon: Truck,
    title: "Smart Transport System",
    description: "Connect farmers with reliable transport providers for seamless logistics. Real-time tracking, fair pricing, and instant booking.",
    features: ["Real-time vehicle tracking", "Instant booking system", "Fair pricing algorithm", "Route optimization"],
    color: "primary",
    mapPlaceholder: true,
  },
  {
    icon: Users,
    title: "Labor Connect",
    description: "Hire skilled agricultural workers instantly from your local area. Verified profiles, ratings, and secure payments.",
    features: ["Verified worker profiles", "Skill-based matching", "Secure payments", "Rating system"],
    color: "secondary",
    mapPlaceholder: false,
  },
  {
    icon: Wrench,
    title: "Equipment Sharing",
    description: "Rent tractors, harvesters, and farming tools from nearby owners. Reduce costs and maximize utilization.",
    features: ["Equipment catalog", "Availability calendar", "Insurance coverage", "Maintenance tracking"],
    color: "primary",
    mapPlaceholder: false,
  },
  {
    icon: FileText,
    title: "Government Scheme Assistant",
    description: "Check your eligibility for government subsidies and benefits. Simplified application process with document assistance.",
    features: ["Eligibility checker", "Document assistance", "Application tracking", "Scheme notifications"],
    color: "secondary",
    mapPlaceholder: false,
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Integrated Farming Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Beyond sensor monitoring, IRIS AgroOS connects you with essential agricultural services to streamline your farming operations.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {solutions.map((solution) => (
                <Card key={solution.title} className="border-border/50 bg-card shadow-sm hover:shadow-lg transition-all overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${solution.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                        <solution.icon className={`h-7 w-7 ${solution.color === "primary" ? "text-primary" : "text-secondary"}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{solution.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    
                    {/* Map Placeholder for Transport */}
                    {solution.mapPlaceholder && (
                      <div className="relative h-40 rounded-lg bg-muted/50 border border-border/50 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground">Interactive Map</p>
                            <p className="text-xs text-muted-foreground">Powered by Google Maps API</p>
                          </div>
                        </div>
                        {/* Map grid pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="h-full w-full" style={{ 
                            backgroundImage: "linear-gradient(oklch(0.55 0.18 145) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.18 145) 1px, transparent 1px)",
                            backgroundSize: "20px 20px"
                          }} />
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`h-4 w-4 ${solution.color === "primary" ? "text-primary" : "text-secondary"}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button className="w-full gap-2" variant={solution.color === "primary" ? "default" : "secondary"}>
                      Explore {solution.title.split(" ")[0]}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="py-12 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Farm?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Join thousands of farmers already using IRIS AgroOS to optimize their operations and increase yields.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="gap-2">
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
