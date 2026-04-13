export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      {/* Profile */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ade80] to-[#67e8f9] flex items-center justify-center">
          <span className="text-black text-xl font-bold">T</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Tim Oakley</h1>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="pill bg-[#fcd34d]/10 text-[#fcd34d] text-xs">Founding Contributor</span>
            <span className="pill bg-[#67e8f9]/10 text-[#67e8f9] text-xs">Ocean Guardian</span>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { value: "47", label: "Research tasks", color: "text-[#4ade80]" },
          { value: "12", label: "Field tasks", color: "text-[#67e8f9]" },
          { value: "89", label: "Knowledge nodes", color: "text-[#c084fc]" },
          { value: "$150", label: "Donated", color: "text-[#fcd34d]" },
        ].map((s) => (
          <div key={s.label} className="card p-5 text-center">
            <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-[#555] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Active */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">Active now</h2>
        <div className="space-y-2">
          {[
            { title: "Extract Claims from Coral Bleaching Meta-Analysis", type: "Research", time: "18h left", color: "border-[#4ade80]/30" },
            { title: "Photograph Erosion Markers — Cape Cod", type: "Field", time: "5 days left", color: "border-[#67e8f9]/30" },
          ].map((c, i) => (
            <div key={i} className={`card p-4 border-l-2 ${c.color} flex items-center justify-between`}>
              <div>
                <p className="font-semibold text-sm">{c.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`pill text-xs ${c.type === "Research" ? "bg-[#4ade80]/10 text-[#4ade80]" : "bg-[#67e8f9]/10 text-[#67e8f9]"}`}>
                    {c.type}
                  </span>
                  <span className="text-xs text-[#fcd34d]">{c.time}</span>
                </div>
              </div>
              <button className="pill bg-white/10 text-white text-xs hover:bg-white/20 transition-colors">Continue →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">Recent contributions</h2>
        <div className="space-y-1">
          {[
            { title: "Analyzed: Global Mangrove Watch 2024", status: "validated", type: "Research", nodes: 4 },
            { title: "Beach Litter Survey — Provincetown", status: "verified", type: "Field", nodes: 1 },
            { title: "Microplastic Concentration Synthesis", status: "pending", type: "Research", nodes: 3 },
            { title: "Sea Level Projections Review", status: "validated", type: "Research", nodes: 5 },
            { title: "Water Quality — Housatonic River", status: "verified", type: "Field", nodes: 1 },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#141414] transition-colors">
              <div className={`w-2 h-2 rounded-full ${c.status === "pending" ? "bg-[#fcd34d]" : "bg-[#4ade80]"}`} />
              <span className="flex-1 text-sm truncate">{c.title}</span>
              <span className={`text-xs ${c.type === "Research" ? "text-[#4ade80]" : "text-[#67e8f9]"}`}>{c.type}</span>
              <span className="text-xs text-[#444]">{c.nodes} nodes</span>
            </div>
          ))}
        </div>
      </div>

      {/* Impact breakdown */}
      <div>
        <h2 className="text-lg font-bold mb-3">Your impact</h2>
        <div className="card p-5">
          <div className="space-y-3">
            {[
              { domain: "Coastal Erosion", pct: 34, color: "#4ade80" },
              { domain: "Ocean Pollution", pct: 28, color: "#ff6b6b" },
              { domain: "Marine Biodiversity", pct: 22, color: "#67e8f9" },
              { domain: "Coral Reefs", pct: 16, color: "#fcd34d" },
            ].map((d) => (
              <div key={d.domain}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#888]">{d.domain}</span>
                  <span className="font-semibold" style={{ color: d.color }}>{d.pct}%</span>
                </div>
                <div className="h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: d.color }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
            <span className="text-sm text-[#555]">Reliability score</span>
            <span className="text-lg font-bold text-[#4ade80]">96%</span>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-3 gap-3 mt-8">
        <a href="/tasks/ai" className="card p-4 text-center group hover:border-[#4ade80]/40 transition-all">
          <div className="text-xl mb-1">📋</div>
          <div className="text-sm font-semibold group-hover:text-[#4ade80] transition-colors">Find Research Task</div>
        </a>
        <a href="/tasks/human" className="card p-4 text-center group hover:border-[#67e8f9]/40 transition-all">
          <div className="text-xl mb-1">🌍</div>
          <div className="text-sm font-semibold group-hover:text-[#67e8f9] transition-colors">Find Field Task</div>
        </a>
        <a href="/profile/tim" className="card p-4 text-center group hover:border-[#c084fc]/40 transition-all">
          <div className="text-xl mb-1">👤</div>
          <div className="text-sm font-semibold group-hover:text-[#c084fc] transition-colors">Public Profile</div>
        </a>
      </div>
    </div>
  );
}
