"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"

interface Props {
  email: string
}

export const CopyEmailButton = ({ email }: Props) => {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setOpen(true)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        render={
          <button
            onClick={handleCopy}
            className="font-mono text-primary hover:underline focus:outline-none focus:underline font-semibold"
            type="button"
          />
        }
      >
        {email}
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied!" : "Copy"}</TooltipContent>
    </Tooltip>
  )
}
