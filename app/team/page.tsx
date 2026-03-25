import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, Github, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "Frontend Developer",
    department: "Frontend",
    description: "Specializes in React and Next.js. Designed and built the responsive web dashboard with real-time data visualization.",
    initials: "AS",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Priya Patel",
    role: "Backend Developer",
    department: "Backend",
    description: "Expert in Node.js and Firebase. Built the secure API infrastructure and real-time data synchronization systems.",
    initials: "PP",
    color: "bg-secondary/10 text-secondary",
  },
  {
    name: "Rahul Kumar",
    role: "Hardware Engineer",
    department: "Hardware",
    description: "IoT specialist with expertise in ESP32 and sensor integration. Designed the hardware architecture and firmware.",
    initials: "RK",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Sneha Reddy",
    role: "AI/ML Engineer",
    department: "AI",
    description: "Machine learning expert. Developed the predictive models for weather analysis and crop recommendations.",
    initials: "SR",
    color: "bg-secondary/10 text-secondary",
  },
  {
    name: "Vikram Singh",
    role: "Full Stack Developer",
    department: "Full Stack",
    description: "Versatile developer handling both frontend and backend. Integrated third-party APIs and built the solutions module.",
    initials: "VS",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Ananya Gupta",
    role: "UI/UX Designer",
    department: "Design",
    description: "Creative designer focused on user experience. Crafted the modern SaaS interface and component design system.",
    initials: "AG",
    color: "bg-secondary/10 text-secondary",
  },
]

function getDepartmentColor(department: string) {
  switch (department) {
    case "Frontend":
      return "bg-primary/10 text-primary border-primary/20"
    case "Backend":
      return "bg-secondary/10 text-secondary border-secondary/20"
    case "Hardware":
      return "bg-warning/10 text-warning-foreground border-warning/20"
    case "AI":
      return "bg-accent/10 text-accent-foreground border-accent/20"
    case "Full Stack":
      return "bg-primary/10 text-primary border-primary/20"
    case "Design":
      return "bg-secondary/10 text-secondary border-secondary/20"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Meet Our Team
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                A passionate group of developers, engineers, and designers building the future of smart agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border-border/50 bg-card shadow-sm hover:shadow-md transition-all group">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar */}
                      <Avatar className="h-20 w-20 mb-4 ring-4 ring-muted">
                        <AvatarFallback className={`text-lg font-semibold ${member.color}`}>
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>

                      {/* Name & Role */}
                      <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{member.role}</p>

                      {/* Department Badge */}
                      <Badge variant="outline" className={`mb-4 ${getDepartmentColor(member.department)}`}>
                        {member.department}
                      </Badge>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {member.description}
                      </p>

                      {/* Social Links */}
                      <div className="flex items-center gap-3">
                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                          <Github className="h-4 w-4" />
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-secondary/10 hover:text-secondary transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="py-10 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">Join Our Team</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We are always looking for talented individuals passionate about agriculture and technology.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Badge variant="outline" className="bg-primary/5 border-primary/20">Frontend</Badge>
                  <Badge variant="outline" className="bg-secondary/5 border-secondary/20">Backend</Badge>
                  <Badge variant="outline" className="bg-warning/5 border-warning/20">IoT/Hardware</Badge>
                  <Badge variant="outline" className="bg-accent/5 border-accent/20">AI/ML</Badge>
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
