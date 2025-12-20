import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Mail, Sparkles, Users } from "lucide-react"
import { useState } from "react"

function getSubdomainFromHostname(): string {
  if (typeof window === "undefined") return ""
  
  const hostname = window.location.hostname
  const parts = hostname.split(".")
  
  // If we're on a subdomain (e.g., neighborhood.pod.brussels)
  // parts would be: ["neighborhood", "pod", "brussels"]
  if (parts.length >= 3 && parts[1] === "pod" && parts[2] === "brussels") {
    return parts[0]
  }
  
  return ""
}

export function LandingPage() {
  const [subdomain] = useState<string>(() => getSubdomainFromHostname())

  const getSubdomainDisplay = () => {
    if (!subdomain) return null
    return (
      <div className="flex items-center gap-2 justify-center mb-6">
        <Badge variant="outline" className="text-lg px-4 py-2 font-mono">
          {subdomain}.pod.brussels
        </Badge>
        <span className="text-muted-foreground">is available!</span>
      </div>
    )
  }

  const emailSubject = subdomain 
    ? `Claim ${subdomain}.pod.brussels`
    : "Claim a pod.brussels subdomain"
  
  const emailBody = subdomain
    ? `Hi! I'd like to claim ${subdomain}.pod.brussels for my project.\n\nProject/Organization name:\n\nPurpose:\n\nBrief description:`
    : `Hi! I'd like to claim a pod.brussels subdomain for my project.\n\nDesired subdomain name:\n\nProject/Organization name:\n\nPurpose:\n\nBrief description:`

  const mailtoLink = `mailto:admin@pod.brussels?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="size-8 text-primary" fill="currentColor" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              pod.brussels
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Free subdomains for community projects in Brussels
          </p>
        </div>

        {/* Subdomain availability notice */}
        {getSubdomainDisplay()}

        {/* Main content card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Build your community's online home
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              We believe in the power of grassroots initiatives, neighborhood committees, 
              volunteer groups, and collective action. That's why we're offering free 
              subdomains on <span className="font-mono font-semibold">pod.brussels</span> to 
              anyone organizing for positive change in our city.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              Whether you're coordinating a neighborhood committee, organizing a volunteer 
              initiative, running a community garden, or building any kind of collective 
              project—if you need an online presence, we've got you covered.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-muted/50">
                <Users className="size-6 text-primary mb-2" />
                <h3 className="font-semibold">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  Built for collectives, committees, and grassroots initiatives
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-muted/50">
                <Sparkles className="size-6 text-primary mb-2" />
                <h3 className="font-semibold">Completely Free</h3>
                <p className="text-sm text-muted-foreground">
                  No cost, no strings attached—just support for your project
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-muted/50">
                <Heart className="size-6 text-primary mb-2" />
                <h3 className="font-semibold">Human Touch</h3>
                <p className="text-sm text-muted-foreground">
                  Real people, real conversations, real community connections
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How it works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How it works</CardTitle>
            <CardDescription>
              Simple, straightforward, and human-centered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 list-decimal list-inside marker:text-primary marker:font-semibold">
              <li className="pl-2">
                <span className="font-semibold">Choose your subdomain</span>
                <span className="text-muted-foreground">
                  {" "}Think of a name that represents your project (e.g., 
                  <span className="font-mono"> neighborhood</span>, 
                  <span className="font-mono"> garden</span>, 
                  <span className="font-mono"> collective</span>)
                </span>
              </li>
              <li className="pl-2">
                <span className="font-semibold">Send us an email</span>
                <span className="text-muted-foreground">
                  {" "}Tell us the subdomain you'd like and a bit about your project's purpose
                </span>
              </li>
              <li className="pl-2">
                <span className="font-semibold">We'll set it up</span>
                <span className="text-muted-foreground">
                  {" "}Once approved, we'll configure your subdomain and you'll be ready to go
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to claim your subdomain?
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's start a conversation about your project
            </p>
          </div>
          
          <a href={mailtoLink}>
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              <Mail className="size-5 mr-2" />
              Send us an email
            </Button>
          </a>
          
          <p className="text-sm text-muted-foreground pt-4">
            We'll get back to you soon. Looking forward to supporting your community project! 🌱
          </p>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground space-y-2">
          <p>
            <span className="font-semibold">pod.brussels</span> is a community initiative 
            supporting grassroots projects in Brussels.
          </p>
          <p>
            Questions? Reach out to{" "}
            <a 
              href="mailto:admin@pod.brussels" 
              className="text-primary hover:underline"
            >
              admin@pod.brussels
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

