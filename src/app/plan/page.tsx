export default function PlanPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          The Complete Plan
        </h1>
        <p className="text-lg text-[#888] max-w-2xl mx-auto mb-8">
          Everything about GOOD TEAM -- the problem, the solution, the technology,
          the governance, and the step-by-step roadmap. Nothing hidden.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/plan/GOOD_TEAM_COMPLETE_MASTER_PLAN_v3.pdf" className="btn-primary" target="_blank">
            Download PDF
          </a>
          <a href="https://github.com/goodteam-org" className="btn-ghost" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="card p-8 mb-12">
        <h2 className="text-xl font-bold mb-6 text-[#4ade80]">Table of Contents</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { num: "00", title: "Executive Summary", desc: "Mission, elevator pitch, 10 commandments" },
            { num: "01", title: "The Problem", desc: "Five crisis domains, three structural failures, the implementation gap" },
            { num: "02", title: "Existing Landscape", desc: "14 organizations analyzed, lessons from failed projects" },
            { num: "03", title: "What GOOD TEAM Is", desc: "Definition, principles, contributor archetypes" },
            { num: "04", title: "The Proposals System", desc: "Hypothesis marketplace, evidence-weighted ranking, Challenge Rounds" },
            { num: "05", title: "Technical Architecture", desc: "The $0 stack, database schema, scale path" },
            { num: "06", title: "Trust & Credibility", desc: "Legal structure, anti-capture charter, trust mechanisms" },
            { num: "07", title: "Open Knowledge Mandate", desc: "4-layer knowledge stack, research liberation, permanence" },
            { num: "08", title: "Implementation Engine", desc: "Research-to-action pipeline, paid contributors, threat model" },
            { num: "09", title: "Acceleration Roadmap", desc: "Four phases from $0 to global infrastructure" },
            { num: "10", title: "Step-by-Step Build Guide", desc: "Every command, every account, every decision" },
            { num: "11", title: "Design & UX", desc: "Design system, inspiration, mobile strategy" },
            { num: "12", title: "Sharing the Idea", desc: "Website, content strategy, media kit" },
            { num: "13", title: "Call to Action", desc: "Onboarding, contributor guide, barrier solutions" },
          ].map((s) => (
            <div key={s.num} className="flex gap-3 py-3 px-4 rounded-xl bg-[#0a0a0a] border border-[#1e1e1e]">
              <span className="text-[#4ade80] font-bold text-sm shrink-0 mt-0.5">{s.num}</span>
              <div>
                <h3 className="font-semibold text-sm">{s.title}</h3>
                <p className="text-xs text-[#555]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Highlights */}
      <h2 className="text-3xl font-bold mb-8">Key highlights</h2>

      {/* The $0 Bootstrap */}
      <div className="card p-8 mb-6">
        <h3 className="text-xl font-bold mb-4 text-[#fcd34d]">The $0 Bootstrap Path</h3>
        <p className="text-[#888] mb-4 leading-relaxed">
          The entire MVP can be built and deployed for under $100 using free-tier infrastructure:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { service: "Frontend hosting", tool: "Vercel", cost: "Free" },
            { service: "Database + Auth", tool: "Supabase", cost: "Free" },
            { service: "File storage", tool: "Supabase Storage", cost: "Free (1GB)" },
            { service: "DNS + CDN", tool: "Cloudflare", cost: "Free" },
            { service: "Error tracking", tool: "Sentry", cost: "Free" },
            { service: "Domain name", tool: "Cloudflare Registrar", cost: "~$12/year" },
          ].map((s) => (
            <div key={s.service} className="flex items-center justify-between py-2 px-3 rounded-lg bg-[#0a0a0a]">
              <div>
                <span className="text-sm font-semibold">{s.service}</span>
                <span className="text-xs text-[#555] ml-2">{s.tool}</span>
              </div>
              <span className="text-sm text-[#4ade80] font-bold">{s.cost}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Four Phases */}
      <div className="card p-8 mb-6">
        <h3 className="text-xl font-bold mb-4 text-[#67e8f9]">Four Phases</h3>
        <div className="space-y-4">
          {[
            { phase: "Phase 0: Foundation", time: "Weeks 1-4", cost: "$0-100", what: "Legal entity, tested prompts, landing page, 50 signups, GitHub org, deployed infrastructure" },
            { phase: "Phase 1: Research MVP", time: "Weeks 5-16", cost: "$0-25/mo", what: "Working platform with AI task flow, knowledge nodes, dashboard, auth, public profiles" },
            { phase: "Phase 2: Field + Growth", time: "Months 5-10", cost: "$50-200/mo", what: "Human field tasks, photo verification, maps, proposals system, donations, partnerships" },
            { phase: "Phase 3+: Implementation", time: "Year 2+", cost: "$5k+/mo", what: "Paid contributors, implementation engine, BOINC, knowledge graph API, elected governance" },
          ].map((p) => (
            <div key={p.phase} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-3 border-b border-[#1e1e1e] last:border-0">
              <div className="sm:w-48 shrink-0">
                <span className="font-bold text-sm">{p.phase}</span>
                <div className="flex gap-3 mt-1">
                  <span className="text-xs text-[#555]">{p.time}</span>
                  <span className="text-xs text-[#4ade80]">{p.cost}</span>
                </div>
              </div>
              <p className="text-sm text-[#888]">{p.what}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proposals System */}
      <div className="card p-8 mb-6">
        <h3 className="text-xl font-bold mb-4 text-[#c084fc]">The Proposals System</h3>
        <p className="text-[#888] leading-relaxed mb-4">
          Anyone can propose a hypothesis about how to solve a problem. The community researches it using
          AI-generated tasks. Evidence accumulates. Proposals are ranked by research backing score -- not
          by popularity, not by the proposer's credentials. The best ideas rise to the top based on science.
        </p>
        <p className="text-[#888] leading-relaxed">
          Top-ranked proposals become implementation candidates, connecting directly to the Implementation
          Engine where paid teams deploy real-world solutions. Your idea can become a deployed biosand filter
          installation, a reforestation brigade, or an air quality monitoring network.
        </p>
      </div>

      {/* Media Section */}
      <h2 className="text-3xl font-bold mb-8 mt-16">Media</h2>
      <p className="text-[#888] mb-8">Explainer videos, podcasts, and presentations will be added here as they are produced.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        <div className="card p-6 border-dashed border-[#2a2a2a]">
          <h3 className="font-bold mb-2">Explainer Video</h3>
          <p className="text-sm text-[#555]">Coming soon -- 3-minute overview of GOOD TEAM</p>
        </div>
        <div className="card p-6 border-dashed border-[#2a2a2a]">
          <h3 className="font-bold mb-2">Pitch Deck</h3>
          <p className="text-sm text-[#555]">Coming soon -- 10-slide presentation</p>
        </div>
        <div className="card p-6 border-dashed border-[#2a2a2a]">
          <h3 className="font-bold mb-2">Podcast Episode</h3>
          <p className="text-sm text-[#555]">Coming soon -- Deep dive into the vision</p>
        </div>
        <div className="card p-6 border-dashed border-[#2a2a2a]">
          <h3 className="font-bold mb-2">Technical Deep Dive</h3>
          <p className="text-sm text-[#555]">Coming soon -- Architecture and implementation details</p>
        </div>
      </div>

      {/* CTA */}
      <div className="card p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-5" />
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to help build this?</h2>
          <p className="text-[#888] mb-8 max-w-lg mx-auto">
            We're looking for founding members -- researchers, developers, designers, field workers,
            and anyone who believes the world's problems are solvable.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/about" className="btn-primary">
              Get involved
            </a>
            <a href="/mission" className="btn-ghost">
              Read our mission
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
