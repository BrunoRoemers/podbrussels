"use client"

import { emailAddress } from "@/constants"
import { useSubdomain } from "@/hooks/use-subdomain"
import { cn } from "@/lib/utils"
import { ArrowRight, Mail } from "lucide-react"
import { buttonVariants } from "./ui/button"

export const SendEmailButton = () => {
  const subdomain = useSubdomain()

  const emailSubject = subdomain
    ? `Claim ${subdomain}.pod.brussels`
    : "Claim a pod.brussels address"

  const emailBody = subdomain
    ? `I'd like to claim ${subdomain}.pod.brussels. [Tell us about your project]`
    : `I'd like to claim [name].pod.brussels. [Tell us about your project]`

  const mailtoLink = [
    `mailto:${emailAddress}`,
    `?subject=${encodeURIComponent(emailSubject)}`,
    `&body=${encodeURIComponent(emailBody)}`,
  ].join("")

  return (
    <a
      href={mailtoLink}
      className={cn(
        buttonVariants({ size: "lg", variant: "default" }),
        "text-lg px-10 py-7 h-auto inline-flex items-center gap-2 no-underline shadow-lg hover:shadow-xl transition-shadow group"
      )}
      aria-label={`Send email to ${emailAddress}`}
    >
      <Mail className="size-5" />
      Reach out
      <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
    </a>
  )
}
