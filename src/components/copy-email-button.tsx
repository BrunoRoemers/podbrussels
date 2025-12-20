"use client"

interface Props {
  email: string
}

export const CopyEmailButton = ({ email }: Props) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(email)
        // You could add a toast notification here if desired
      }}
      className="font-mono text-primary hover:underline focus:outline-none focus:underline font-semibold"
      type="button"
    >
      {email}
    </button>
  )
}
