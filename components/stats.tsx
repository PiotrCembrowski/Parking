const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "2,500+", label: "Projects Completed" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "24hr", label: "Quote Response Time" },
]

export function Stats() {
  return (
    <section className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {stat.number}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
