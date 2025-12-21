/* eslint-disable react/no-unescaped-entities */
import { CurrentDomainName } from "@/components/current-domain-name"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Heart,
  Mail,
  Sparkles,
  Users,
} from "lucide-react"
import { CopyEmailButton } from "../components/copy-email-button"

export default function LandingPage() {
  const subdomain = "TODO"
  const emailAddress = "admin@pod.brussels"

  const getSubdomainDisplay = () => {
    if (!subdomain) return null
    return (
      <div className="flex flex-col items-center gap-3 justify-center mb-12 p-6 rounded-2xl bg-primary/5 border-2 border-primary/20">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">
            This name is available!
          </span>
        </div>
        <Badge
          variant="outline"
          className="text-xl px-6 py-3 font-mono border-primary/30 bg-background"
        >
          {subdomain}.pod.brussels
        </Badge>
        <p className="text-sm text-muted-foreground text-center">
          Claim this memorable address for your community
        </p>
      </div>
    )
  }

  const emailSubject = subdomain
    ? `Claim ${subdomain}.pod.brussels`
    : "Claim a pod.brussels address"

  const emailBody = subdomain
    ? `I'd like to claim ${subdomain}.pod.brussels\n\nProject name:\nPurpose:\nDescription:`
    : `I'd like to claim a pod.brussels address\n\nDesired name:\nProject name:\nPurpose:\nDescription:`

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Heart className="size-12 text-primary" fill="currentColor" />
              <div className="absolute inset-0 animate-pulse">
                <Heart
                  className="size-12 text-primary/20"
                  fill="currentColor"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              pod.brussels
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-foreground max-w-3xl mx-auto leading-tight">
            Your community's memorable web address
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a beautiful, easy-to-remember name like{" "}
            <span className="font-mono font-semibold text-primary">
              <CurrentDomainName />
            </span>{" "}
            for your group, project, or initiative—completely free.
          </p>
        </div>

        {/* Availability notice */}
        {getSubdomainDisplay()}

        {/* Value Proposition */}
        <div className="mb-16">
          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Give your community a home online
              </CardTitle>
              <CardDescription className="text-lg md:text-xl max-w-2xl mx-auto">
                Every group deserves a memorable web address. Whether you're a
                neighborhood committee, a volunteer initiative, a community
                garden, or any collective project—we'll help you get a beautiful
                name that people will remember.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Globe className="size-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Memorable Names</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Get a web address like{" "}
                    <span className="font-mono text-primary">
                      <CurrentDomainName />
                    </span>{" "}
                    that's easy to share and remember
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Sparkles className="size-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Completely Free</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No cost, no hidden fees, no strings attached—just support
                    for your community project
                  </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="size-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">For Communities</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built specifically for groups, collectives, and grassroots
                    initiatives in Brussels
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How it works */}
        <Card className="mb-16 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">How it works</CardTitle>
            <CardDescription className="text-base md:text-lg">
              Simple, straightforward, and human-centered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Choose your name
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Think of a memorable name for your community (e.g.,
                    <span className="font-mono text-primary">
                      {" "}
                      myneighborhood
                    </span>
                    ,<span className="font-mono text-primary"> ourgarden</span>,
                    <span className="font-mono text-primary">
                      {" "}
                      thecollective
                    </span>
                    ). You'll get{" "}
                    <span className="font-mono font-semibold">
                      yourname.pod.brussels
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Send us an email
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tell us the name you'd like and share a bit about your
                    project's purpose. We're real people who care about
                    supporting community initiatives.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-lg mb-2">
                    We'll set it up
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once approved, we'll configure your web address and you'll
                    be ready to share your community's online home with the
                    world.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-16 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Frequently Asked Questions
            </CardTitle>
            <CardDescription className="text-base md:text-lg">
              Everything you need to know about pod.brussels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion className="w-full">
              <AccordionItem value="what-is-pod">
                <AccordionTrigger className="text-left font-semibold">
                  What is a "pod"?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  A pod is a small group of people, like peas in a pod! We chose
                  this name because it represents the idea of communities—small
                  groups of people coming together around shared goals, values,
                  or interests. Just like peas grow together in a pod, your
                  community grows together around your project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="what-do-i-get">
                <AccordionTrigger className="text-left font-semibold">
                  What exactly do I get?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  You get a memorable web address (like{" "}
                  <span className="font-mono text-primary">
                    mycommunity.pod.brussels
                  </span>
                  ) that you can use for your community's website. This makes it
                  easy for people to find and remember your group online. You'll
                  need to host your website somewhere else (there are many free
                  options), but we'll make sure your beautiful address points to
                  it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="who-can-apply">
                <AccordionTrigger className="text-left font-semibold">
                  Who can apply?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Anyone organizing a community project, initiative, or group in
                  Brussels! This includes neighborhood committees, volunteer
                  groups, community gardens, cultural collectives, mutual aid
                  networks, and any other grassroots initiatives. If you're
                  bringing people together for a positive purpose, we'd love to
                  help.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="is-it-really-free">
                <AccordionTrigger className="text-left font-semibold">
                  Is it really free?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, completely free! There are no costs, no hidden fees, and
                  no strings attached. We're doing this because we believe in
                  supporting community initiatives in Brussels. The only thing
                  we ask is that you use it for a genuine community project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-long">
                <AccordionTrigger className="text-left font-semibold">
                  How long does it take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We're a small team, but we try to respond to all requests
                  within a few days. Once approved, we'll set up your address as
                  quickly as possible—usually within a week. We'll keep you
                  updated throughout the process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="what-if-name-taken">
                <AccordionTrigger className="text-left font-semibold">
                  What if the name I want is already taken?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We'll work with you to find an alternative that works!
                  Sometimes a small variation (like adding your neighborhood
                  name or a descriptive word) can make your address even more
                  memorable. We're here to help you find the perfect name for
                  your community.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mb-16">
          <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-2 border-primary/20 shadow-xl">
            <CardContent className="pt-12 pb-12">
              <div className="space-y-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to get your community online?
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                  Claim your memorable web address and give your community a
                  home on the web
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href={mailtoLink}
                  className={cn(
                    buttonVariants({ size: "lg", variant: "default" }),
                    "text-lg px-10 py-7 h-auto inline-flex items-center gap-2 no-underline shadow-lg hover:shadow-xl transition-shadow group"
                  )}
                  aria-label={`Send email to ${emailAddress}`}
                >
                  <Mail className="size-5" />
                  Get started
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-muted-foreground">
                  Or copy our email: <CopyEmailButton email={emailAddress} />
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground">
                  We'll get back to you soon. Looking forward to supporting your
                  community project!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-8 border-t text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="size-5 text-primary" fill="currentColor" />
            <p className="text-sm font-semibold text-foreground">
              pod.brussels
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            A community initiative supporting grassroots projects in Brussels
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? Reach out to{" "}
            <a
              href={`mailto:${emailAddress}`}
              className="text-primary hover:underline font-medium"
            >
              {emailAddress}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
