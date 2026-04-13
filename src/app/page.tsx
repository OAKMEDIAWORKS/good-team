export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4ade80]/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#c084fc]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-[#67e8f9]/8 rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-20 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            Research becomes
            <br />
            <span style={{ background: "linear-gradient(135deg, #4ade80, #67e8f9, #c084fc, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>action.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed">
            GOOD TEAM coordinates AI and people to solve humanity's biggest problems.
            Not just study them. <span className="text-white font-semibold">Fix them.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <a href="/plan" className="btn-primary text-base px-8 py-3.5">
              Read the plan
            </a>
            <a href="/mission" className="btn-ghost">
              Our mission
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The problem isn't knowledge.</h2>
        <p className="text-[#888] text-center text-lg mb-12 max-w-2xl mx-auto">It's that nobody is organizing the deployment of solutions we already have.</p>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              stat: "17 years",
              label: "Average time from scientific discovery to real-world practice",
              color: "text-[#ff6b6b]",
            },
            {
              stat: "2 billion",
              label: "People without safe drinking water -- biosand filters cost $30",
              color: "text-[#67e8f9]",
            },
            {
              stat: "Millions",
              label: "Of research papers published. Solutions proven. Nobody coordinating deployment.",
              color: "text-[#fcd34d]",
            },
          ].map((s) => (
            <div key={s.stat} className="card p-6 text-center">
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${s.color}`}>{s.stat}</div>
              <p className="text-sm text-[#888] leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What GOOD TEAM Does */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Three things. One system.</h2>
        <p className="text-[#888] text-center mb-12">Research, implementation, and an institution that can't be corrupted.</p>

        <div className="space-y-4">
          <div className="card p-8 border-l-4 border-l-[#4ade80]">
            <h3 className="text-xl font-bold text-[#4ade80] mb-2">A Research Engine</h3>
            <p className="text-[#888] leading-relaxed">
              Thousands of people use AI to process scientific literature into a permanent, cross-referenced knowledge graph.
              Every finding is citable. Every source is verified. Every claim has a confidence score.
              Anyone can propose a hypothesis and the community tests it against real evidence.
            </p>
          </div>
          <div className="card p-8 border-l-4 border-l-[#67e8f9]">
            <h3 className="text-xl font-bold text-[#67e8f9] mb-2">An Implementation Workforce</h3>
            <p className="text-[#888] leading-relaxed">
              When research reaches sufficient confidence, paid, vetted field teams deploy solutions
              in the real world. Install biosand filters. Plant native species in scientifically targeted locations.
              Deploy air quality sensors. Train community health workers. All outcomes GPS-verified and independently confirmed.
            </p>
          </div>
          <div className="card p-8 border-l-4 border-l-[#c084fc]">
            <h3 className="text-xl font-bold text-[#c084fc] mb-2">An Incorruptible Institution</h3>
            <p className="text-[#888] leading-relaxed">
              Anti-capture charter locked in the articles of incorporation. No corporate board control.
              No patents on outputs. CC BY 4.0 on all knowledge. Multi-signature treasury.
              Community-elected governance. It cannot be bought, corrupted, or shut down.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">How it works</h2>
        <p className="text-[#888] text-center mb-12">Five ways to contribute. One loop that drives everything forward.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            {
              title: "Paste a prompt",
              description: "Copy a research prompt, run it in your AI (Claude, ChatGPT, Gemini -- any of them), submit the structured findings",
              color: "border-[#4ade80]/30 hover:border-[#4ade80]/60",
              accent: "text-[#4ade80]",
            },
            {
              title: "Fund compute",
              description: "Donate to the compute fund. Your $5 runs ~50 research tasks automatically. Every dollar tracked publicly.",
              color: "border-[#fcd34d]/30 hover:border-[#fcd34d]/60",
              accent: "text-[#fcd34d]",
            },
            {
              title: "Go outside",
              description: "Photograph a coastline. Test water quality. Plant a tree. Collect data. GPS-tagged, timestamped, verified.",
              color: "border-[#67e8f9]/30 hover:border-[#67e8f9]/60",
              accent: "text-[#67e8f9]",
            },
            {
              title: "Propose an idea",
              description: "Have a hypothesis about how to solve a problem? Submit it. The community researches it. Evidence determines rank, not prestige.",
              color: "border-[#c084fc]/30 hover:border-[#c084fc]/60",
              accent: "text-[#c084fc]",
            },
            {
              title: "Build with us",
              description: "The code is AGPL-3.0. Fork it, contribute features, fix bugs, build tools. Open source means open contribution.",
              color: "border-[#f472b6]/30 hover:border-[#f472b6]/60",
              accent: "text-[#f472b6]",
            },
          ].map((t) => (
            <div key={t.title} className={`card p-6 ${t.color} transition-all`}>
              <h3 className={`text-lg font-bold mb-2 ${t.accent}`}>{t.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Loop */}
      <section className="max-w-3xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">The loop</h2>
        <p className="text-[#888] text-center mb-12">AI identifies what needs to happen. Humans do it. AI processes the results. New tasks emerge. Repeat.</p>

        <div className="space-y-4">
          {[
            { step: "Research gets processed", detail: "Volunteers and AI agents analyze papers, extract claims, identify methods, verify citations. Findings enter the knowledge graph.", color: "border-[#4ade80]/40", dot: "bg-[#4ade80]" },
            { step: "Gaps emerge", detail: "\"We have strong evidence for mangrove restoration but no erosion data for the Pacific Northwest.\" The system creates specific tasks.", color: "border-[#c084fc]/40", dot: "bg-[#c084fc]" },
            { step: "People propose and act", detail: "Someone proposes a hypothesis. Others photograph the coastline. Water quality gets tested. Data flows in from the real world.", color: "border-[#67e8f9]/40", dot: "bg-[#67e8f9]" },
            { step: "Results compound", detail: "AI processes field data. \"Erosion increased 8cm since March based on 24 volunteer photographs.\" New findings, higher confidence.", color: "border-[#fcd34d]/40", dot: "bg-[#fcd34d]" },
            { step: "Solutions get deployed", detail: "When evidence is strong enough, the Implementation Engine dispatches paid teams to deploy solutions. Outcomes verified. Knowledge updated.", color: "border-[#f472b6]/40", dot: "bg-[#f472b6]" },
          ].map((s, i) => (
            <div key={i} className={`card p-5 border-l-2 ${s.color} flex items-start gap-4`}>
              <div className={`w-3 h-3 rounded-full ${s.dot} mt-1.5 shrink-0`} />
              <div>
                <h3 className="font-bold text-[15px] mb-0.5">{s.step}</h3>
                <p className="text-sm text-[#888]">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Proposals System */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          The best idea wins. <span className="text-[#c084fc]">Not the best funded.</span>
        </h2>
        <p className="text-[#888] text-center mb-12 max-w-2xl mx-auto">
          Anyone can propose a hypothesis about how to solve a problem. The community researches it.
          Evidence determines rank -- not prestige, not connections, not grant committees.
        </p>

        <div className="card p-8 mb-6">
          <h3 className="text-lg font-bold mb-4 text-[#c084fc]">How Proposals Work</h3>
          <div className="space-y-4">
            {[
              { num: "01", text: "Submit a structured hypothesis with evidence, mechanism, and what would prove you wrong" },
              { num: "02", text: "The system automatically generates AI research tasks to test your idea" },
              { num: "03", text: "Community members complete the research -- supporting or contradicting evidence accumulates" },
              { num: "04", text: "Proposals are ranked by research backing score, not popularity. Evidence-weighted endorsements." },
              { num: "05", text: "Top proposals become implementation candidates. Your idea becomes a deployed solution." },
            ].map((s) => (
              <div key={s.num} className="flex gap-4 items-start">
                <span className="text-[#c084fc] font-bold text-sm shrink-0 mt-0.5">{s.num}</span>
                <p className="text-sm text-[#888] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-[#555] text-center">
          A farmer in Bangladesh with strong evidence outranks a professor with unsupported hypotheses. By design.
        </p>
      </section>

      {/* What makes this different */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why nothing else does this</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left py-3 pr-4 text-[#888] font-semibold">Organization</th>
                <th className="text-center py-3 px-3 text-[#888] font-semibold">Research</th>
                <th className="text-center py-3 px-3 text-[#888] font-semibold">AI</th>
                <th className="text-center py-3 px-3 text-[#888] font-semibold">Knowledge</th>
                <th className="text-center py-3 px-3 text-[#888] font-semibold">Implementation</th>
                <th className="text-center py-3 px-3 text-[#888] font-semibold">Open</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Folding@home", research: false, ai: false, knowledge: false, impl: false, open: true },
                { name: "Climate Change AI", research: true, ai: false, knowledge: false, impl: false, open: true },
                { name: "OpenAlex", research: false, ai: false, knowledge: true, impl: false, open: true },
                { name: "One Tree Planted", research: false, ai: false, knowledge: false, impl: true, open: false },
                { name: "Wikipedia", research: false, ai: false, knowledge: true, impl: false, open: true },
                { name: "GOOD TEAM", research: true, ai: true, knowledge: true, impl: true, open: true },
              ].map((r) => (
                <tr key={r.name} className={`border-b border-[#1e1e1e] ${r.name === "GOOD TEAM" ? "bg-[#4ade80]/5" : ""}`}>
                  <td className={`py-3 pr-4 font-semibold ${r.name === "GOOD TEAM" ? "text-[#4ade80]" : ""}`}>{r.name}</td>
                  {[r.research, r.ai, r.knowledge, r.impl, r.open].map((v, i) => (
                    <td key={i} className="text-center py-3 px-3">
                      {v ? <span className="text-[#4ade80]">Yes</span> : <span className="text-[#555]">--</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Built to be <span className="text-[#4ade80]">incorruptible</span>
        </h2>
        <p className="text-[#888] text-center mb-12 max-w-xl mx-auto">
          Every protection is architecture, not policy. Code is harder to circumvent than rules.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Anti-capture charter", desc: "Locked in articles of incorporation. No corporate board control. No exclusive data licensing. Requires 3/4 vote + 90-day notice to change." },
            { title: "CC BY 4.0 on all outputs", desc: "Every finding, dataset, and implementation guide belongs to everyone. Corporations can use it but can never lock it up." },
            { title: "Multi-sig treasury", desc: "No single person controls funds above $5,000. Keyholders from different geographic regions. All payments public." },
            { title: "Open-source code", desc: "AGPL-3.0. Anyone can audit the code, fork it, and run their own instance. Can't be shut down by any single entity." },
            { title: "Community governance", desc: "Elected contributor council. Quadratic voting. Time-locked proposals with public comment periods. Rules in the repo." },
            { title: "Evidence over opinion", desc: "Proposals ranked by research backing, not popularity. The knowledge graph is the source of truth, not any individual." },
          ].map((t) => (
            <div key={t.title} className="card p-6">
              <h3 className="font-bold mb-2">{t.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who benefits */}
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Everyone has a role</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { who: "Students", what: "Verified contribution records for college applications. \"47 environmental tasks, 3 published datasets.\" More compelling than generic volunteer hours." },
            { who: "Researchers", what: "Distributed data collection networks. Propose hypotheses. Get weekly coastal photos from 50 volunteers. Access field data you could never collect alone." },
            { who: "Retirees", what: "Meaningful, flexible, local. Photograph the river every Tuesday. Your data gets cited in regional reports. Purpose without pressure." },
            { who: "Developers", what: "AGPL codebase. Next.js + PostgreSQL + Supabase. Fork it, contribute, build tools. Good first issues always available." },
            { who: "Donors", what: "Your $5 funds 50 research tasks. Every dollar tracked on OpenCollective. No single donor controls more than 25% of funding." },
            { who: "Anyone", what: "The simplest tasks take 5 minutes. No skills required. No commitment. Just pick a task and contribute to something real." },
          ].map((t) => (
            <div key={t.who} className="card p-6">
              <h3 className="font-bold text-[#4ade80] mb-2">{t.who}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{t.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="card p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-animate opacity-5" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The tools exist. The knowledge exists.
              <br />
              <span className="text-[#4ade80]">The coordination layer was missing.</span>
            </h2>
            <p className="text-[#888] text-lg mb-8 max-w-xl mx-auto">
              Read the complete plan. Watch the explainer. Join the founding team.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/plan" className="btn-primary text-base px-8 py-3.5">
                Read the full plan
              </a>
              <a href="/mission" className="btn-ghost">
                Our mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
