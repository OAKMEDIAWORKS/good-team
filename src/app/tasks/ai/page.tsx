const tasks = [
  { id: "1", title: "Analyze: Global Mangrove Watch 2024 Report", problem: "Mangrove Carbon", type: "research", difficulty: "standard", mins: 20 },
  { id: "2", title: "Extract Claims from Coral Bleaching Meta-Analysis", problem: "Coral Reefs", type: "analysis", difficulty: "deep", mins: 35 },
  { id: "3", title: "Synthesize Microplastic Data (Pacific)", problem: "Ocean Pollution", type: "synthesis", difficulty: "standard", mins: 25, claimed: true },
  { id: "4", title: "Review: Sea Level Projections — IPCC vs. NOAA", problem: "Sea Level Rise", type: "review", difficulty: "deep", mins: 40 },
  { id: "5", title: "Ingest: Marine Mammal Stranding Report 2024", problem: "Marine Mammals", type: "ingestion", difficulty: "quick", mins: 10 },
  { id: "6", title: "Find Knowledge Gaps in Ocean Acidification", problem: "Acidification", type: "analysis", difficulty: "standard", mins: 20 },
  { id: "7", title: "Extract Methods from Kelp Forest Restoration Papers", problem: "Biodiversity", type: "research", difficulty: "quick", mins: 15 },
  { id: "8", title: "Analyze Dead Zone Recovery Patterns (Gulf)", problem: "Dead Zones", type: "research", difficulty: "standard", mins: 25 },
];

const diffColors: Record<string, string> = {
  quick: "text-[#4ade80] bg-[#4ade80]/10",
  standard: "text-[#67e8f9] bg-[#67e8f9]/10",
  deep: "text-[#c084fc] bg-[#c084fc]/10",
};

const typeColors: Record<string, string> = {
  research: "text-[#4ade80]",
  analysis: "text-[#67e8f9]",
  synthesis: "text-[#c084fc]",
  review: "text-[#fcd34d]",
  ingestion: "text-[#f472b6]",
};

export default function AITasksPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Research Tasks</h1>
        <p className="text-[#888]">Claim one. Paste the prompt. Submit the result. Done.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", "Research", "Analysis", "Synthesis", "Review"].map((f, i) => (
          <button
            key={f}
            className={`pill ${i === 0 ? "bg-white text-black" : "bg-[#1e1e1e] text-[#888] hover:text-white"} transition-colors`}
          >
            {f}
          </button>
        ))}
        <div className="w-px bg-[#2a2a2a] mx-1" />
        {["⚡ Quick", "Standard", "🔬 Deep"].map((f) => (
          <button key={f} className="pill bg-[#1e1e1e] text-[#888] hover:text-white transition-colors">
            {f}
          </button>
        ))}
      </div>

      {/* Task list */}
      <div className="space-y-2">
        {tasks.map((t) => (
          <a
            key={t.id}
            href={`/tasks/ai/${t.id}`}
            className={`card block p-5 group ${t.claimed ? "opacity-40" : ""}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${typeColors[t.type]}`}>
                    {t.type}
                  </span>
                  <span className={`pill text-xs ${diffColors[t.difficulty]}`}>
                    {t.difficulty}
                  </span>
                </div>
                <h3 className="font-semibold text-[15px] truncate group-hover:text-[#4ade80] transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-[#555] mt-0.5">{t.problem} · ~{t.mins} min</p>
              </div>
              {!t.claimed && (
                <div className="pill bg-[#4ade80]/10 text-[#4ade80] text-xs shrink-0 group-hover:bg-[#4ade80] group-hover:text-black transition-all">
                  Claim →
                </div>
              )}
              {t.claimed && (
                <span className="text-xs text-[#555]">Claimed</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
