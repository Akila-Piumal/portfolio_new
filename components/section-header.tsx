interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "center" | "left" | "right"
}

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`space-y-2 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}`}>
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
        <div className={`mt-2 h-1 w-20 bg-[#e05d4f] rounded-full ${align === "center" ? "mx-auto" : ""}`}></div>
      </div>
      {subtitle && <p className="text-muted-foreground md:text-xl">{subtitle}</p>}
    </div>
  )
}
