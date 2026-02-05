import { PricingSection } from "@/components/pricing-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      <PricingSection />
    </main>
  )
}
