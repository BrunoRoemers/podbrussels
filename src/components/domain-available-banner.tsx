"use client"

import { useSubdomain } from "@/hooks/use-subdomain"
import { CheckCircle2 } from "lucide-react"
import { Badge } from "./ui/badge"

export const DomainAvailableBanner = () => {
  const subdomain = useSubdomain()
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
