const tasks = [
  { id: "h1", title: "Photograph Erosion Markers", location: "Cape Cod, MA", dist: "2.3 mi", mins: 30, cat: "📸 Photo", catColor: "text-[#fcd34d]", priority: true },
  { id: "h2", title: "Water Quality Test", location: "Great Barrington, MA", dist: "0.8 mi", mins: 20, cat: "📊 Data", catColor: "text-[#67e8f9]" },
  { id: "h3", title: "Beach Litter Survey", location: "Provincetown, MA", dist: "45 mi", mins: 45, cat: "🌿 Action", catColor: "text-[#4ade80]", claimed: true },
  { id: "h4", title: "Tide Pool Species Count", location: "Rockport, MA", dist: "120 mi", mins: 60, cat: "📊 Data", catColor: "text-[#67e8f9]" },
  { id: "h5", title: "Storm Damage Assessment", location: "Chatham, MA", dist: "68 mi", mins: 40, cat: "📸 Photo", catColor: "text-[#fcd34d]", priority: true },
  { id: "h6", title: "Translate: Mangrove Summary → Spanish", location: "Remote", dist: null, mins: 30, cat: "📚 Education", catColor: "text-[#c084fc]" },
];

export default function HumanTasksPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Field Tasks</h1>
        <p className="text-[#888]">Go outside. Photograph. Measure. Plant. Teach. Real work, real impact.</p>
      </div>

      {/* Location */}
      <div className="card p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg">📍</span>
          <div>
            <p className="text-sm font-semibold">Great Barrington, MA</p>
            <p className="text-xs text-[#555]">5 tasks within 50 mi</p>
          </div>
        </div>
        <button className="pill bg-[#1e1e1e] text-[#888] text-xs border border-[#2a2a2a] hover:border-[#555] transition-colors">
          Change radius
        </button>
      </div>

      {/* View toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {["All", "📸 Photo", "📊 Data", "🌿 Action", "📚 Education"].map((f, i) => (
            <button key={f} className={`pill text-xs ${i === 0 ? "bg-white text-black" : "bg-[#1e1e1e] text-[#888] hover:text-white"} transition-colors`}>
              {f}
            </button>
          ))}
        </div>
        <div className="flex gap-1 bg-[#141414] rounded-full p-0.5 border border-[#2a2a2a]">
          <button className="pill text-xs bg-[#1e1e1e] text-white">List</button>
          <button className="pill text-xs text-[#555]">Map</button>
        </div>
      </div>

      {/* Tasks */}
      <div className="space-y-2">
        {tasks.map((t) => (
          <a
            key={t.id}
            href={`/tasks/human/${t.id}`}
            className={`card block p-5 group ${t.claimed ? "opacity-40" : ""}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-xs font-semibold ${t.catColor}`}>{t.cat}</span>
                  {t.priority && <span className="pill text-xs bg-[#ff6b6b]/10 text-[#ff6b6b]">Urgent</span>}
                </div>
                <h3 className="font-semibold text-[15px] group-hover:text-[#67e8f9] transition-colors">
                  {t.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-[#555]">
                  <span>📍 {t.location}</span>
                  {t.dist && <span>· {t.dist}</span>}
                  <span>· ~{t.mins} min</span>
                </div>
              </div>
              {!t.claimed && (
                <div className="pill bg-[#67e8f9]/10 text-[#67e8f9] text-xs shrink-0 group-hover:bg-[#67e8f9] group-hover:text-black transition-all">
                  Claim →
                </div>
              )}
              {t.claimed && <span className="text-xs text-[#555]">Claimed</span>}
            </div>
          </a>
        ))}
      </div>

      {/* Map placeholder */}
      <div className="card p-10 text-center mt-8 border-dashed">
        <div className="text-3xl mb-2">🗺</div>
        <p className="text-sm text-[#555]">Interactive map view coming soon</p>
      </div>
    </div>
  );
}
