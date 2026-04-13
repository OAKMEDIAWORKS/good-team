const problems = [
  { slug: "mangrove-carbon", title: "Mangrove Carbon Sequestration", desc: "How much carbon do mangroves store? How fast can we restore them?", tasks: 17, nodes: 48, progress: 68, color: "#4ade80" },
  { slug: "microplastics", title: "Microplastic Ocean Mapping", desc: "Where are microplastics concentrated? What removal tech works?", tasks: 11, nodes: 31, progress: 42, color: "#ff6b6b" },
  { slug: "coral-recovery", title: "Coral Reef Recovery", desc: "Which coral species recover from bleaching? What helps?", tasks: 23, nodes: 62, progress: 31, color: "#67e8f9" },
  { slug: "sea-level", title: "Sea Level Rise Projections", desc: "How do IPCC and NOAA models compare? What are coastal communities planning?", tasks: 6, nodes: 22, progress: 55, color: "#c084fc" },
  { slug: "fish-stocks", title: "Fish Stock Recovery", desc: "Are fishing restrictions working? What species are bouncing back?", tasks: 9, nodes: 18, progress: 25, color: "#fcd34d" },
  { slug: "dead-zones", title: "Coastal Dead Zones", desc: "What causes dead zones? Which remediation strategies show results?", tasks: 13, nodes: 29, progress: 38, color: "#f472b6" },
];

export default function ProblemsPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Problems</h1>
        <p className="text-[#888]">The big questions we're answering, one contribution at a time</p>
      </div>

      <div className="space-y-3">
        {problems.map((p) => (
          <a key={p.slug} href={`/problems/${p.slug}`} className="card block p-6 group">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold group-hover:text-[#4ade80] transition-colors mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-[#888]">{p.desc}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-bold" style={{ color: p.color }}>{p.progress}%</div>
                <div className="text-xs text-[#555]">progress</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden mb-3">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${p.progress}%`, background: p.color }}
              />
            </div>

            <div className="flex items-center gap-4 text-xs text-[#555]">
              <span>{p.tasks} tasks</span>
              <span>{p.nodes} knowledge nodes</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
