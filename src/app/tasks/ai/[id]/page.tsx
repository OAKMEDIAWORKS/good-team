export default function TaskDetailPage() {
  const prompt = `Read the Global Mangrove Watch 2024 annual report (https://www.globalmangrovewatch.org/reports/2024).

Extract and summarize:

1. The main finding about global mangrove coverage trends
2. 3-5 specific claims with data (percentages, hectares, rates of change)
3. Research methods used (satellite imagery type, resolution, analysis tools)
4. Any datasets referenced (with version numbers if available)
5. Knowledge gaps identified by the authors

Be specific. Include numbers. Cite the exact section of the report where each claim appears.`;

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      {/* Back */}
      <a href="/tasks/ai" className="text-sm text-[#555] hover:text-white transition-colors mb-6 inline-block">
        ← Back to tasks
      </a>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-[#4ade80]">Research</span>
          <span className="pill text-xs text-[#67e8f9] bg-[#67e8f9]/10">Standard</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Analyze: Global Mangrove Watch 2024 Report
        </h1>
        <p className="text-[#888]">
          Extract key findings on carbon sequestration, coverage trends, and restoration.
        </p>
        <div className="flex items-center gap-3 mt-3 text-sm text-[#555]">
          <span>~20 min</span>
          <span>·</span>
          <a href="/problems/mangrove" className="text-[#4ade80] hover:underline">Mangrove Carbon</a>
          <span>·</span>
          <span>24h deadline</span>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { n: "1", label: "Copy prompt", sub: "Click below" },
          { n: "2", label: "Paste into Claude, ChatGPT, etc.", sub: "Any tool works" },
          { n: "3", label: "Submit result", sub: "Fill in the form" },
        ].map((s) => (
          <div key={s.n} className="card p-4 text-center">
            <div className="w-7 h-7 rounded-full bg-[#4ade80] text-black font-bold text-sm flex items-center justify-center mx-auto mb-2">
              {s.n}
            </div>
            <div className="text-sm font-semibold">{s.label}</div>
            <div className="text-xs text-[#555]">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Prompt */}
      <div className="card overflow-hidden mb-8">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#2a2a2a]">
          <span className="text-sm font-semibold text-[#888]">Prompt</span>
          <button className="pill bg-[#4ade80] text-black text-sm font-semibold hover:bg-[#86efac] transition-colors">
            Copy
          </button>
        </div>
        <pre className="p-5 text-sm text-[#ccc] leading-relaxed whitespace-pre-wrap font-mono">
          {prompt}
        </pre>
      </div>

      {/* Claim */}
      <div className="text-center mb-10">
        <button className="btn-primary text-lg px-10 py-4">
          Claim this task
        </button>
        <p className="text-xs text-[#555] mt-2">No penalty if you can't finish</p>
      </div>

      {/* Submission Form */}
      <div className="card p-6">
        <h2 className="text-xl font-bold mb-6">Submit your result</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#888] mb-2">Main finding *</label>
            <textarea rows={3} placeholder="The single most important finding..." className="input resize-none" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#888] mb-2">Supporting claims</label>
            <input placeholder="Specific claim with data..." className="input mb-2" />
            <input placeholder="Another claim..." className="input mb-2" />
            <button className="text-sm text-[#4ade80] font-semibold hover:underline">+ Add claim</button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#888] mb-2">Methods</label>
            <input placeholder="e.g., Remote sensing via Landsat-8 at 30m resolution" className="input" />
            <button className="text-sm text-[#4ade80] font-semibold hover:underline mt-2">+ Add method</button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#888] mb-2">Citations</label>
            <div className="flex gap-2">
              <input placeholder="Source title" className="input flex-1" />
              <input placeholder="URL" className="input flex-1" />
            </div>
            <button className="text-sm text-[#4ade80] font-semibold hover:underline mt-2">+ Add citation</button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#888] mb-2">Full response *</label>
            <textarea rows={5} placeholder="Paste the complete output here..." className="input resize-none font-mono" />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#888] mb-2">Confidence</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                      n === 4
                        ? "bg-[#4ade80] text-black"
                        : "bg-[#1e1e1e] text-[#888] border border-[#2a2a2a] hover:border-[#4ade80]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-[#888] mb-2">Tool used</label>
              <select className="input bg-[#141414]">
                <option>Claude</option>
                <option>ChatGPT</option>
                <option>Gemini</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <label className="flex items-start gap-3 p-4 rounded-xl bg-[#1e1e1e] cursor-pointer">
            <input type="checkbox" className="mt-1 accent-[#4ade80]" />
            <span className="text-sm text-[#888]">
              I agree this contribution is licensed under <strong className="text-white">CC-BY-SA 4.0</strong> and
              becomes part of the public knowledge graph.
            </span>
          </label>

          <button className="btn-primary w-full py-4">
            Submit contribution
          </button>
        </div>
      </div>
    </div>
  );
}
