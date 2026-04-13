export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        The world's problems are
        <br />
        <span className="text-[#4ade80]">solvable.</span>
      </h1>

      <p className="text-lg text-[#888] leading-relaxed mb-12">
        The knowledge to solve climate change exists — scattered across thousands of papers
        no one person can read. The solutions exist — but no one is coordinating the work.
        GOOD TEAM connects AI research with human action in one open platform.
      </p>

      {/* How */}
      <div className="space-y-3 mb-16">
        {[
          { title: "Research gets processed", desc: "Volunteers analyze papers using tools like Claude and ChatGPT. Findings become structured knowledge nodes — claims, methods, datasets, questions.", color: "border-[#4ade80]/30", dot: "bg-[#4ade80]" },
          { title: "People do the work", desc: "Photograph coastlines. Test water quality. Plant trees. Collect data. Real-world tasks that need human hands.", color: "border-[#67e8f9]/30", dot: "bg-[#67e8f9]" },
          { title: "Knowledge compounds", desc: "Every contribution connects to others. Contradictions surface. Gaps become tasks. The graph gets smarter with every loop.", color: "border-[#c084fc]/30", dot: "bg-[#c084fc]" },
        ].map((s, i) => (
          <div key={i} className={`card p-5 border-l-2 ${s.color} flex items-start gap-4`}>
            <div className={`w-3 h-3 rounded-full ${s.dot} mt-1.5 shrink-0`} />
            <div>
              <h3 className="font-bold mb-0.5">{s.title}</h3>
              <p className="text-sm text-[#888]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Principles */}
      <h2 className="text-2xl font-bold mb-6">Non-negotiable</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-16">
        {[
          { title: "Open source", desc: "AGPL-3.0. Fork it. Audit it. Run your own.", color: "text-[#4ade80]" },
          { title: "No corporate capture", desc: "No fossil fuel, tobacco, weapons, or surveillance money.", color: "text-[#ff6b6b]" },
          { title: "Community governed", desc: "Elected council. Rules in the repo. No single owner.", color: "text-[#c084fc]" },
          { title: "Knowledge is free", desc: "CC-BY-SA 4.0. Every finding belongs to everyone.", color: "text-[#67e8f9]" },
          { title: "Truth over speed", desc: "Dual validation. Adversarial review. Confidence decay.", color: "text-[#fcd34d]" },
          { title: "Full transparency", desc: "Environmental costs published. Every dollar tracked.", color: "text-[#f472b6]" },
        ].map((p) => (
          <div key={p.title} className="card p-5">
            <h3 className={`font-bold mb-1 ${p.color}`}>{p.title}</h3>
            <p className="text-sm text-[#888]">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Funding rules */}
      <h2 className="text-2xl font-bold mb-4">Money rules</h2>
      <div className="card p-6 mb-16">
        <div className="space-y-3 text-sm">
          {[
            "No single donor > 10% of annual funding",
            "No $1B+ company without unanimous council approval",
            "No money from industries causing the problems we solve",
            "All donors public. All spending transparent",
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
              <span className="text-[#ccc]">{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-[#555] mb-4">Come help.</p>
        <a href="/tasks/ai" className="btn-primary">Do your first task</a>
      </div>
    </div>
  );
}
