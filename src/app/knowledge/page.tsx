const nodes = [
  { type: "finding", icon: "📊", content: "Global mangrove coverage decreased 3.4% between 2000-2020, with SE Asia accounting for 62% of losses.", confidence: 92, problem: "Mangrove Carbon", by: "Sarah M.", color: "border-[#4ade80]/30" },
  { type: "claim", icon: "📌", content: "Mangrove forests sequester carbon at rates 3-5x higher than terrestrial forests, storing 1,023 Mg C/ha.", confidence: 88, problem: "Mangrove Carbon", by: "James K.", color: "border-[#67e8f9]/30" },
  { type: "observation", icon: "👁", content: "Erosion markers at Site 12 (Cape Cod) show 8cm recession since March. GPS: 41.6688, -70.0986.", confidence: 78, problem: "Coastal Erosion", by: "Tim O.", color: "border-[#fcd34d]/30" },
  { type: "conflict", icon: "⚡", content: "Wang 2023 reports 3.1x sequestration rate vs. Donato 2024 at 5.2x. Methodology differences may explain gap.", confidence: 65, problem: "Mangrove Carbon", by: "System", color: "border-[#ff6b6b]/30" },
  { type: "measurement", icon: "📏", content: "Water pH 7.2, dissolved oxygen 8.1 mg/L, turbidity 12 NTU at Hudson River (GPS 42.24, -73.35).", confidence: 85, problem: "Water Quality", by: "Aisha R.", color: "border-[#67e8f9]/30" },
  { type: "question", icon: "❓", content: "What is the carbon sequestration rate of restored vs. natural old-growth mangroves in the first 10 years?", confidence: 50, problem: "Mangrove Carbon", by: "Chen W.", color: "border-[#c084fc]/30" },
  { type: "method", icon: "🔬", content: "Remote sensing via Landsat-8 at 30m resolution + ground-truth validation from 147 field sites.", confidence: 95, problem: "Mangrove Carbon", by: "Pooled", color: "border-[#c084fc]/30" },
  { type: "dataset", icon: "📁", content: "Global Mangrove Watch v3.0, 2024. Covers 1996-2024 at 25m resolution. Open access via UNEP-WCMC.", confidence: 97, problem: "Mangrove Carbon", by: "Pooled", color: "border-[#f472b6]/30" },
  { type: "finding", icon: "📊", content: "Microplastic concentration in North Pacific Gyre: 334,271 particles/km². Polyethylene = 47% of samples.", confidence: 84, problem: "Microplastics", by: "Maria L.", color: "border-[#4ade80]/30" },
];

function ConfBadge({ n }: { n: number }) {
  const color = n >= 90 ? "text-[#4ade80]" : n >= 70 ? "text-[#67e8f9]" : n >= 50 ? "text-[#fcd34d]" : "text-[#ff6b6b]";
  return <span className={`text-xs font-bold ${color}`}>{n}%</span>;
}

export default function KnowledgePage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Knowledge</h1>
        <p className="text-[#888]">Everything we've learned — verified, connected, open to everyone</p>
      </div>

      {/* Search */}
      <input
        placeholder="Search knowledge..."
        className="input mb-6 text-base"
      />

      {/* Quick stats */}
      <div className="flex gap-6 mb-8 text-sm">
        <span><strong className="text-[#4ade80]">1,203</strong> <span className="text-[#555]">nodes</span></span>
        <span><strong className="text-[#67e8f9]">847</strong> <span className="text-[#555]">validated</span></span>
        <span><strong className="text-[#ff6b6b]">12</strong> <span className="text-[#555]">conflicts</span></span>
        <span><strong className="text-[#c084fc]">67</strong> <span className="text-[#555]">open questions</span></span>
      </div>

      {/* Type filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "📊 Findings", "📌 Claims", "🔬 Methods", "👁 Observations", "📏 Measurements", "⚡ Conflicts", "❓ Questions", "📁 Datasets"].map((f, i) => (
          <button key={f} className={`pill ${i === 0 ? "bg-white text-black" : "bg-[#1e1e1e] text-[#888] hover:text-white"} transition-colors text-xs`}>
            {f}
          </button>
        ))}
      </div>

      {/* Nodes */}
      <div className="space-y-2">
        {nodes.map((n, i) => (
          <div key={i} className={`card p-5 border-l-2 ${n.color}`}>
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{n.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#555]">{n.type}</span>
                  <span className="text-xs text-[#333]">·</span>
                  <span className="text-xs text-[#555]">{n.problem}</span>
                </div>
                <p className="text-sm text-[#ccc] leading-relaxed mb-2">{n.content}</p>
                <div className="flex items-center gap-3 text-xs text-[#444]">
                  <span>{n.by}</span>
                  <span>Confidence: <ConfBadge n={n.confidence} /></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
