import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Sarkari Result</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Home
            </Link>
            <Link
              href="/results"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Results
            </Link>
            <Link
              href="/admit-cards"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Admit Cards
            </Link>
            <Link
              href="/answer-keys"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Answer Keys
            </Link>
            <Link
              href="/latest-jobs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Latest Jobs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
