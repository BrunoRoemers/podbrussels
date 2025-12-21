"use client"

import { useSubdomain } from "@/hooks/use-subdomain"

export const CurrentDomainName = () => {
  const subdomain = useSubdomain()

  return `${subdomain ?? "mycommunity"}.pod.brussels`
}
