export default function PlanPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          The Complete Plan
        </h1>
        <p className="text-lg text-[#888] max-w-2xl mx-auto mb-2">
          Version 3.0 -- April 2026
        </p>
        <p className="text-sm text-[#555]">CC BY 4.0 -- Share freely with attribution</p>
      </div>

      {/* ========================================= */}
      {/* SECTION 01: THE PROBLEM */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#ff6b6b]">01</span>
          <h2 className="text-3xl font-bold">The Problem</h2>
        </div>
        <p className="text-[#888] leading-relaxed mb-8">
          The world does not lack knowledge about its problems. It lacks organized implementation of the
          solutions we already know work. Climate scientists have known for decades that reforestation
          sequesters carbon -- yet reforestation at scale remains disorganized and underfunded. Water
          engineers know how to build biosand filters for under $50 -- yet 2 billion people still lack
          safe drinking water. The problem is not ignorance. The problem is the absence of a coordinated,
          funded, globally distributed implementation workforce that reports to a mission instead of a shareholder.
        </p>

        <div className="card p-6 mb-8 border-l-4 border-l-[#c084fc]">
          <h4 className="font-bold mb-2 text-[#c084fc]">The Starting Five -- And Everything That Follows</h4>
          <p className="text-sm text-[#888] leading-relaxed mb-3">
            GOOD TEAM launches with five crisis domains. This is not the ceiling -- it is the floor.
            Every problem facing humanity that has researchable solutions and implementable interventions
            is within scope: medicine, housing, education, energy, poverty, mental health, infrastructure,
            disaster response, elder care, disability access, antibiotic resistance, maternal mortality,
            childhood malnutrition, refugee resettlement, microplastic contamination, and beyond.
          </p>
          <p className="text-sm text-[#888] leading-relaxed">
            The architecture is domain-agnostic by design. The starting five were chosen because they have
            the clearest path from research to implementation. Domain expansion requires a 2/3 board vote
            AND demonstrated implementation in an existing domain. The ambition is to build coordination
            infrastructure that can eventually address every solvable problem on Earth -- and to prove it
            works on the hardest ones first.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4 text-[#4ade80]">The Starting Five</h3>
        <div className="space-y-3 mb-8">
          {[
            { domain: "Climate Change", detail: "Reforestation, renewable energy deployment, building insulation, soil carbon restoration, ocean-based carbon removal. The science is settled. The deployment is not organized.", target: "Coordinate volunteer tree-planting brigades linked to scientifically validated species/location pairings. Partner with One Tree Planted, Eden Reforestation. Deploy air quality monitoring networks." },
            { domain: "Air & Water Quality", detail: "Biosand filters ($30-50, removes 99.8% of bacteria), atmospheric water generators, constructed wetlands, open-source air quality sensors. The barrier is not technology -- it is organized deployment.", target: "Fund and coordinate local installation teams for biosand filters. Deploy a global open-source air quality monitoring network. Partner with WaterAid." },
            { domain: "Food Security & Hunger", detail: "Drought-resistant crop varieties (CGIAR, freely available), precision fermentation, food waste reduction, community seed banks. Agricultural extension services increase yields 20-40% but are chronically underfunded.", target: "Build a multilingual agricultural knowledge assistant accessible via SMS. Fund local agricultural extension workers as paid implementers." },
            { domain: "Biodiversity & Ecosystem Collapse", detail: "Invasive species removal, habitat corridor creation, coral restoration (low-tech fragmentation), rewilding programs. All proven. All require organized volunteer labor and scientific coordination.", target: "Coordinate invasive species removal brigades with GPS-tagged reporting. Fund coral fragmentation nurseries with Reef Check and SECORE International." },
            { domain: "Pandemic Preparedness", detail: "Community-level early warning systems, supply chain resilience, open-source ventilator designs (from COVID), community health worker training at scale.", target: "Deploy community sentinel surveillance networks. Publish and maintain open-source medical device designs. Fund community health worker training." },
          ].map((d) => (
            <div key={d.domain} className="card p-6">
              <h4 className="font-bold mb-2">{d.domain}</h4>
              <p className="text-sm text-[#888] leading-relaxed mb-3">{d.detail}</p>
              <p className="text-sm text-[#4ade80]/80 leading-relaxed"><span className="font-semibold text-[#4ade80]">GOOD TEAM targets:</span> {d.target}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">Three Structural Failures</h3>
        <div className="space-y-3 mb-8">
          <div className="card p-6">
            <h4 className="font-bold mb-2">Corporate Capture</h4>
            <p className="text-sm text-[#888] leading-relaxed mb-2">Private ownership of research produces private solutions. Patents prevent deployment. Licensing fees exclude the communities that need solutions most.</p>
            <p className="text-sm text-[#4ade80]">GOOD TEAM solution: CC BY 4.0 on all outputs. Anti-capture charter. No patents on GOOD TEAM-derived research.</p>
          </div>
          <div className="card p-6">
            <h4 className="font-bold mb-2">Institutional Fragmentation</h4>
            <p className="text-sm text-[#888] leading-relaxed mb-2">Every organization works in its own silo. A reforestation group doesn't know about the water quality research that would tell them which watershed to prioritize.</p>
            <p className="text-sm text-[#4ade80]">GOOD TEAM solution: Unified knowledge graph with cross-domain queries. Proposals that synthesize across domains.</p>
          </div>
          <div className="card p-6">
            <h4 className="font-bold mb-2">Volunteer and Resource Misallocation</h4>
            <p className="text-sm text-[#888] leading-relaxed mb-2">Well-meaning volunteers plant trees in the wrong place. Donations fund duplicate studies. Researchers publish findings that no one implements.</p>
            <p className="text-sm text-[#4ade80]">GOOD TEAM solution: AI dispatch layer matching every resource to the highest-impact task. Implementation Engine converting research into deployment briefs.</p>
          </div>
        </div>

        <div className="card p-6 border-l-4 border-l-[#fcd34d]">
          <h4 className="font-bold mb-2 text-[#fcd34d]">The Implementation Gap</h4>
          <p className="text-sm text-[#888] leading-relaxed">
            The average time from scientific discovery to real-world practice is <span className="text-white font-semibold">17 years</span>.
            GOOD TEAM's Implementation Engine is designed to compress that gap to months -- by creating a direct pipeline from
            knowledge graph output to organized deployment teams with defined tasks, verified resources, and paid coordination.
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 02: EXISTING LANDSCAPE */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#c084fc]">02</span>
          <h2 className="text-3xl font-bold">Why Nothing Else Does This</h2>
        </div>
        <p className="text-[#888] leading-relaxed mb-8">
          We analyzed 14 organizations across distributed computing, AI-for-good, open research infrastructure,
          and existing implementation networks. Every one of them stops short. None connects research to implementation
          through a single, open, coordinated system.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left py-3 pr-4 text-[#888] font-semibold">Organization</th>
                <th className="text-center py-3 px-2 text-[#888] font-semibold">Compute</th>
                <th className="text-center py-3 px-2 text-[#888] font-semibold">Research</th>
                <th className="text-center py-3 px-2 text-[#888] font-semibold">AI Agents</th>
                <th className="text-center py-3 px-2 text-[#888] font-semibold">Knowledge Graph</th>
                <th className="text-center py-3 px-2 text-[#888] font-semibold">Implementation</th>
                <th className="text-center py-3 px-2 text-[#888] font-semibold">Open License</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Folding@home", vals: [true, false, false, false, false, true] },
                { name: "BOINC", vals: [true, false, false, false, false, true] },
                { name: "Climate Change AI", vals: [false, true, false, false, false, true] },
                { name: "Omdena", vals: [false, true, true, false, false, true] },
                { name: "OpenAlex", vals: [false, false, false, true, false, true] },
                { name: "Zenodo", vals: [false, false, false, true, false, true] },
                { name: "One Tree Planted", vals: [false, false, false, false, true, false] },
                { name: "WaterAid", vals: [false, false, false, false, true, false] },
                { name: "GOOD TEAM", vals: [true, true, true, true, true, true] },
              ].map((r) => (
                <tr key={r.name} className={`border-b border-[#1e1e1e] ${r.name === "GOOD TEAM" ? "bg-[#4ade80]/5" : ""}`}>
                  <td className={`py-3 pr-4 font-semibold text-sm ${r.name === "GOOD TEAM" ? "text-[#4ade80]" : ""}`}>{r.name}</td>
                  {r.vals.map((v, i) => (
                    <td key={i} className="text-center py-3 px-2">
                      {v ? <span className="text-[#4ade80]">Yes</span> : <span className="text-[#555]">--</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4 text-[#c084fc]">Integration Strategy: Connect, Don't Duplicate</h3>
        <p className="text-sm text-[#888] leading-relaxed mb-4">
          GOOD TEAM does not build field operations from scratch. The world already has thousands of organizations
          with ground presence, trusted community relationships, and implementation experience. GOOD TEAM is the
          intelligence and coordination layer that makes those organizations more effective.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { org: "One Tree Planted / Eden Reforestation", role: "Send geo-targeted planting briefs from knowledge graph" },
            { org: "WaterAid / charity: water", role: "Research to deployment briefs; co-fund local installation teams" },
            { org: "Heifer International", role: "SMS knowledge assistant + paid extension worker stipends" },
            { org: "CGIAR Research Centers", role: "Data-sharing MOU; GOOD TEAM agents query CGIAR datasets" },
            { org: "Reef Check / SECORE International", role: "Fund coral nurseries; coordinate volunteer fragmentation teams" },
            { org: "PurpleAir / AirGradient", role: "Co-deploy monitoring nodes; data feeds into knowledge graph" },
          ].map((p) => (
            <div key={p.org} className="py-3 px-4 rounded-xl bg-[#141414] border border-[#1e1e1e]">
              <span className="text-sm font-semibold">{p.org}</span>
              <p className="text-xs text-[#555] mt-1">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 03: WHAT GOOD TEAM IS */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#ff6b6b]">03</span>
          <h2 className="text-3xl font-bold">What GOOD TEAM Is</h2>
        </div>

        <div className="card p-8 mb-8 border-l-4 border-l-[#4ade80]">
          <p className="text-lg text-[#e0e0e0] leading-relaxed">
            GOOD TEAM is an open-source, nonprofit, decentralized collective where any individual, university,
            or small NGO can contribute compute, research, fieldwork, code, ideas, or funding -- and where
            an AI dispatch layer matches every contribution to the highest-impact task available -- with all
            research outputs permanently recorded in a CC-licensed knowledge graph, and all validated solutions
            actively deployed through a paid, organized, globally distributed implementation workforce.
          </p>
        </div>

        <p className="text-[#888] mb-6 leading-relaxed">
          <span className="text-white font-semibold">The analogy:</span> Folding@home (volunteer compute) +
          GitHub (open contribution + permanent record) + Rideshare (algorithmic task matching) -- deployed to
          solve civilizational problems, with a Wikipedia-style knowledge graph as the permanent record and
          a globally distributed contractor network as the implementation arm.
        </p>

        <h3 className="text-xl font-bold mb-4">Contributor Archetypes</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left py-3 pr-4 text-[#888] font-semibold">Who</th>
                <th className="text-left py-3 px-2 text-[#888] font-semibold">Contributes</th>
                <th className="text-left py-3 px-2 text-[#888] font-semibold">Paid?</th>
              </tr>
            </thead>
            <tbody>
              {[
                { who: "AI Task Volunteer", contributes: "Paste prompts, submit structured research findings", paid: "No" },
                { who: "GPU/CPU Donor", contributes: "Idle compute via BOINC client", paid: "No" },
                { who: "Researcher", contributes: "Protocol design, peer review, co-authorship", paid: "Stipend" },
                { who: "Fieldworker", contributes: "Water samples, photos, sensor readings, GPS data", paid: "Micro-stipend" },
                { who: "Idea Proposer", contributes: "Evidence-backed hypotheses via Proposals system", paid: "No" },
                { who: "Implementer", contributes: "Install filters, plant trees, deploy sensors, train workers", paid: "Contractor" },
                { who: "Developer", contributes: "Code, features, bug fixes, infrastructure", paid: "Bounties" },
                { who: "Donor", contributes: "Money via OpenCollective", paid: "No" },
                { who: "Institution/NGO", contributes: "Data, reach, ground networks", paid: "Partnership" },
              ].map((r) => (
                <tr key={r.who} className="border-b border-[#1e1e1e]">
                  <td className="py-3 pr-4 font-semibold text-sm">{r.who}</td>
                  <td className="py-3 px-2 text-sm text-[#888]">{r.contributes}</td>
                  <td className="py-3 px-2 text-sm text-[#555]">{r.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 04: THE PROPOSALS SYSTEM */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#c084fc]">04</span>
          <h2 className="text-3xl font-bold">The Proposals System</h2>
        </div>
        <p className="text-[#888] leading-relaxed mb-8">
          The best ideas for solving the world's problems are not concentrated in universities or corporate
          R&D labs. They are distributed across billions of people -- farmers who understand their soil,
          engineers who see infrastructure failures daily, scientists whose grant proposals were rejected
          because they weren't "safe" enough. The current system funds the most prestigious ideas, not the best ones.
          GOOD TEAM inverts this.
        </p>

        <h3 className="text-xl font-bold mb-4 text-[#c084fc]">How It Works</h3>
        <div className="space-y-3 mb-8">
          {[
            { step: "1. Submit a Structured Hypothesis", detail: "Link to a problem, state your hypothesis, provide evidence, explain the mechanism, state what would prove you wrong, describe what research is needed, and sketch an implementation plan. The template requires thought, not credentials." },
            { step: "2. Automated + Human Screening", detail: "Does it link to a real problem? Is the hypothesis falsifiable? Does it cite evidence? Is the proposer a contributing member (5+ tasks completed)? Cross-referenced against Retraction Watch for cited papers." },
            { step: "3. Community Research Phase", detail: "The system automatically generates AI research tasks to test the hypothesis. Community members complete them. Supporting and contradicting evidence accumulates as knowledge nodes linked to the proposal." },
            { step: "4. Evidence-Weighted Ranking", detail: "Not upvotes. Not likes. Endorsements backed by evidence citations carry the most weight. Domain expertise endorsements rank higher than general support. Structured critiques with citations reduce the score." },
            { step: "5. Challenge Rounds", detail: "Periodically, GOOD TEAM posts focused challenges: 'How should we address CO2 removal at community scale?' Proposals accepted for 30 days. All ranked by research backing. Top 3 become implementation candidates." },
            { step: "6. Pipeline to Implementation", detail: "Top proposals become Implementation Candidates. The Implementation Brief Generator creates a deployment plan. The IRB reviews. Field teams deploy. Outcomes are GPS-verified and feed back into the knowledge graph." },
          ].map((s) => (
            <div key={s.step} className="card p-6">
              <h4 className="font-bold mb-2">{s.step}</h4>
              <p className="text-sm text-[#888] leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 border-l-4 border-l-[#c084fc]">
          <h4 className="font-bold mb-2">Moderation Without Censorship</h4>
          <p className="text-sm text-[#888] leading-relaxed">
            Bad proposals are never deleted. They accumulate contradicting evidence and sink in ranking.
            The response to "GOOD TEAM censored my idea" is always: "Your idea is still visible. The
            community found 14 papers that contradict it and zero that support it. The evidence speaks for itself."
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 05: HOW IT WORKS TECHNICALLY */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#fcd34d]">05</span>
          <h2 className="text-3xl font-bold">How It Works</h2>
        </div>

        <h3 className="text-xl font-bold mb-4">Five Ways to Contribute</h3>
        <div className="space-y-3 mb-8">
          {[
            { title: "Paste a Prompt", desc: "Claim a research task. Copy the prompt. Run it in your AI -- Claude, ChatGPT, Gemini, any of them. Submit the structured findings. The platform extracts claims, methods, citations, and creates knowledge nodes. Your AI subscription just contributed to climate research.", color: "text-[#4ade80]" },
            { title: "Fund Compute", desc: "Donate to the compute fund via OpenCollective. Your $5 runs approximately 50 automated research tasks. Every dollar is tracked publicly. No single donor controls more than 25% of annual funding.", color: "text-[#fcd34d]" },
            { title: "Go Outside", desc: "Physical-world tasks that AI cannot do. Photograph a coastline for erosion monitoring. Test water quality with a consumer kit. Plant trees at GPS-tagged locations. Count species. Collect soil samples. All evidence is GPS-tagged, timestamped, and verified.", color: "text-[#67e8f9]" },
            { title: "Propose an Idea", desc: "Submit a structured hypothesis about how to solve a problem. The community researches it. Evidence determines rank, not prestige or connections. The best ideas become implementation candidates.", color: "text-[#c084fc]" },
            { title: "Build With Us", desc: "The code is AGPL-3.0. Fork it, contribute features, fix bugs, build tools. All repos at github.com/OAKMEDIAWORKS/good-team. Issues labeled 'good first issue' always available.", color: "text-[#f472b6]" },
          ].map((w) => (
            <div key={w.title} className="card p-6">
              <h4 className={`font-bold mb-2 ${w.color}`}>{w.title}</h4>
              <p className="text-sm text-[#888] leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">The Loop</h3>
        <div className="card p-8 mb-8">
          <div className="space-y-4">
            {[
              { step: "AI processes research", detail: "Volunteers and agents analyze papers, extract claims, verify citations. Findings enter the knowledge graph with confidence scores.", dot: "bg-[#4ade80]" },
              { step: "Gaps emerge", detail: "The knowledge graph reveals what's missing. 'We have strong evidence for mangrove restoration but no erosion data for the Pacific Northwest.'", dot: "bg-[#c084fc]" },
              { step: "People propose and act", detail: "Someone proposes a hypothesis. Others photograph the coastline. Water quality gets tested. Proposals get researched by the community.", dot: "bg-[#67e8f9]" },
              { step: "Results compound", detail: "AI processes field data. New findings emerge. Confidence scores update. Cross-domain connections surface that no single researcher could find.", dot: "bg-[#fcd34d]" },
              { step: "Solutions get deployed", detail: "When evidence reaches sufficient confidence, the Implementation Engine dispatches paid teams. Outcomes are GPS-verified. Results feed back into the graph.", dot: "bg-[#f472b6]" },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full ${s.dot} mt-1.5 shrink-0`} />
                <div>
                  <h4 className="font-bold text-[15px] mb-0.5">{s.step}</h4>
                  <p className="text-sm text-[#888]">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4">The Ride-Share Model</h3>
        <p className="text-sm text-[#888] leading-relaxed mb-4">
          The system works like Uber/Lyft -- tasks always get done even when individual volunteers can't
          complete them. You sign up, declare your capacity, and get a specific task within 60 seconds. If
          you can't complete it, it auto-expires and gets offered to the next match. Zero penalty. After 3+
          bounces, the task gets reviewed and adjusted. No task is left behind.
        </p>
      </section>

      {/* ========================================= */}
      {/* SECTION 06: THE IMPLEMENTATION ENGINE */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#4ade80]">06</span>
          <h2 className="text-3xl font-bold">The Implementation Engine</h2>
        </div>
        <p className="text-[#888] leading-relaxed mb-4">
          Every other section of this plan is infrastructure for this one. The research is meaningless if it
          sits in a knowledge graph forever. The compute is meaningless if it never informs a deployed solution.
          The Implementation Engine is the mechanism that converts verified knowledge into real-world outcomes --
          clean water, planted forests, fed communities, healthier ecosystems.
        </p>

        <h3 className="text-xl font-bold mb-4 text-[#4ade80]">The Research-to-Action Pipeline</h3>
        <div className="space-y-3 mb-8">
          {[
            { stage: "Stage 1: Solution Identification", detail: "The Gap Identifier agent queries the knowledge graph for research areas where proven interventions exist but aren't deployed at scale." },
            { stage: "Stage 2: Implementation Brief", detail: "Agent converts candidate solution into a structured deployment spec: evidence base, target geography, resource requirements, success metrics, partner organizations, timeline, risk assessment. All briefs CC BY 4.0." },
            { stage: "Stage 3: Review Board Approval", detail: "The Implementation Review Board evaluates: evidence quality, feasibility, safety, community consent, resource availability. Composition: 2 domain scientists, 1 field expert, 1 ethics representative, 1 board member." },
            { stage: "Stage 4: Team Assembly", detail: "Approved briefs posted as Implementation Projects. Vetted contractors and volunteers matched by the dispatch system. Project Lead assigned (paid role)." },
            { stage: "Stage 5: Milestone Escrow", detail: "Budget loaded into escrow. Milestones defined upfront. Each requires: GPS-tagged photo evidence, community sign-off, independent field verifier. Payment released only upon verification." },
            { stage: "Stage 6: Outcome Verification", detail: "Independent field verifier confirms outcomes. Verified results written to knowledge graph with full provenance. Feeds back into Stage 1 for future targeting." },
          ].map((s) => (
            <div key={s.stage} className="flex gap-4 items-start py-3 border-b border-[#1e1e1e] last:border-0">
              <div>
                <h4 className="font-semibold text-sm mb-1">{s.stage}</h4>
                <p className="text-sm text-[#888]">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">Paid Contributor Tiers</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left py-3 pr-4 text-[#888] font-semibold">Tier</th>
                <th className="text-left py-3 px-2 text-[#888] font-semibold">Role</th>
                <th className="text-left py-3 px-2 text-[#888] font-semibold">Compensation</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tier: "T0", role: "Volunteers, compute donors", comp: "No pay" },
                { tier: "T1", role: "Micro-stipend research volunteers, fieldworkers", comp: "$5-50/task" },
                { tier: "T2", role: "Developers, designers, bug fixes", comp: "$50-500/deliverable" },
                { tier: "T3", role: "Field contractors, project coordinators", comp: "$500-5,000/milestone" },
                { tier: "T4", role: "Project leads, implementation managers", comp: "$5,000-15,000/project" },
              ].map((t) => (
                <tr key={t.tier} className="border-b border-[#1e1e1e]">
                  <td className="py-3 pr-4 font-bold text-sm text-[#4ade80]">{t.tier}</td>
                  <td className="py-3 px-2 text-sm">{t.role}</td>
                  <td className="py-3 px-2 text-sm text-[#888]">{t.comp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#555]">All payments flow through OpenCollective for public transparency. KYC required above $600/year. Multi-sig authorization for payments above $5,000.</p>
      </section>

      {/* ========================================= */}
      {/* SECTION 07: TRUST & PROTECTION */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#67e8f9]">07</span>
          <h2 className="text-3xl font-bold">Trust & Protection</h2>
        </div>

        <h3 className="text-xl font-bold mb-4 text-[#67e8f9]">Legal Structure</h3>
        <p className="text-sm text-[#888] leading-relaxed mb-6">
          Delaware 501(c)(3) incorporation with public benefit purpose clause. Articles of Incorporation include:
          explicit research AND implementation mandate, anti-capture provisions, CC BY 4.0 on all outputs (irrevocable),
          dissolution clause directing assets to another public benefit organization. Operating under fiscal sponsorship
          (Open Collective Foundation) until 501(c)(3) determination.
        </p>

        <h3 className="text-xl font-bold mb-4 text-[#67e8f9]">Anti-Capture Charter</h3>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            "No majority-corporate board control",
            "No exclusive data licensing",
            "No privatization of volunteer-produced research",
            "No revenue model that incentivizes withholding findings",
            "CC BY 4.0 on all outputs -- irrevocable",
            "No single donor > 25% of annual funding",
            "All grant terms published publicly",
            "Requires 3/4 member vote + 90-day notice to amend",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 py-3 px-4 rounded-xl bg-[#141414] border border-[#1e1e1e]">
              <span className="text-[#4ade80] shrink-0 mt-0.5">+</span>
              <span className="text-sm text-[#888]">{item}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">Bad Actor Threat Model</h3>
        <p className="text-sm text-[#888] leading-relaxed mb-4">
          All protections are implemented as technical constraints, not policies. Code is harder to circumvent than rules.
        </p>
        <div className="space-y-3">
          {[
            { threat: "Sybil Attacks (fake identities)", defense: "Decentralized identifiers (W3C DID). Progressive trust with stake -- must invest real time before earning influence. Reputation decay prevents trust banking. Rate limiting on all influence actions. Quadratic voting for governance." },
            { threat: "Mission Sabotage", defense: "Anti-capture charter -- legally enforceable. Time-locked governance with public comment periods. Veto mechanism for Implementation Review Board. OSF pre-registration as sabotage resistance. Annual third-party epistemic audit." },
            { threat: "Financial Corruption", defense: "Multi-sig treasury (3-of-5 keyholders, different regions). Milestone escrow -- never pay in advance. KYC for paid contributors above $600/year. Public payment ledger via OpenCollective. Annual independent CPA audit." },
            { threat: "External Attacks", defense: "Delaware legal entity. EFF as legal partner. Redundant infrastructure (IPFS + Arweave + Zenodo). Methodological framing (facts, not advocacy). Contributor anonymity options for repressive contexts." },
          ].map((t) => (
            <div key={t.threat} className="card p-6">
              <h4 className="font-bold mb-2 text-[#ff6b6b]">{t.threat}</h4>
              <p className="text-sm text-[#888] leading-relaxed">{t.defense}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 08: OPEN KNOWLEDGE */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#4ade80]">08</span>
          <h2 className="text-3xl font-bold">Open Knowledge Mandate</h2>
        </div>
        <p className="text-[#888] leading-relaxed mb-6">
          Every piece of knowledge produced by volunteer effort is permanently public, cryptographically verifiable,
          and machine-readable. This is not a policy choice -- it is the architecture.
        </p>

        <h3 className="text-xl font-bold mb-4">4-Layer Knowledge Stack</h3>
        <div className="space-y-3 mb-8">
          {[
            { layer: "Layer 1: Input Data Provenance", detail: "Every source gets a content identifier, cross-referenced against OpenAlex, Zenodo, and Wikidata. Unpaywall check flags paywalled sources. No analysis proceeds on unprovenanced data." },
            { layer: "Layer 2: Analysis Audit Trail", detail: "Every analytical step records: who did it, what tool was used, what went in, what came out, when. Any result can be traced back through every transformation to raw source data." },
            { layer: "Layer 3: Knowledge Graph", detail: "Validated outputs become typed knowledge nodes (claims, methods, findings, datasets, questions, conflicts) with confidence scores, source links, and cross-domain connections." },
            { layer: "Layer 4: Permanent Archive", detail: "Triple redundancy: IPFS + Filecoin (cryptographic persistence), Arweave (200+ year endowment model), Zenodo (DOI minting, academic citability). Data cannot be deleted -- only flagged as superseded." },
          ].map((l) => (
            <div key={l.layer} className="card p-6">
              <h4 className="font-bold mb-2">{l.layer}</h4>
              <p className="text-sm text-[#888] leading-relaxed">{l.detail}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 border-l-4 border-l-[#fcd34d]">
          <h4 className="font-bold mb-2 text-[#fcd34d]">LLMs vs. The Knowledge Graph</h4>
          <p className="text-sm text-[#888] leading-relaxed">
            LLMs encode patterns from training data. They cannot provide specific, citable, verifiable references.
            GOOD TEAM uses LLMs as interfaces and processors -- never as sources of truth. Agents use LLMs to
            query databases, extract structured information, and summarize findings -- but the ground truth always
            lives in the knowledge graph, where every claim has a source, every source has a hash, and every hash is permanent.
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 09: ROADMAP */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#c084fc]">09</span>
          <h2 className="text-3xl font-bold">Roadmap</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              phase: "Phase 0: Foundation",
              time: "Weeks 1-4",
              cost: "$0-100",
              color: "border-[#fcd34d]",
              items: [
                "Test 5 AI research prompts against 5 papers across 3 models",
                "Open Collective Foundation fiscal sponsorship",
                "GitHub organization + public repo",
                "Supabase database + Vercel deployment",
                "Discord community",
                "50 email signups from founding members",
                "3-5 advisory board candidates identified",
              ],
              signal: "Public GitHub repo. Mission statement. Tested prompts."
            },
            {
              phase: "Phase 1: Research MVP",
              time: "Weeks 5-16",
              cost: "$0-25/mo",
              color: "border-[#4ade80]",
              items: [
                "Auth flow (signup, login, OAuth)",
                "20 real tasks with tested prompt templates",
                "Complete claim-submit-validate loop",
                "Knowledge nodes from validated contributions",
                "Dashboard with real user stats",
                "Public profile pages for contributors",
                "50+ active contributors",
                "First Zenodo DOI minted",
                "Partnership outreach to OpenAlex, CCAI",
              ],
              signal: "Working platform. Real contributions. First citable output."
            },
            {
              phase: "Phase 2: Field + Proposals + Growth",
              time: "Months 5-10",
              cost: "$50-200/mo",
              color: "border-[#67e8f9]",
              items: [
                "Human/field task system with photo verification",
                "Map view of nearby tasks",
                "Proposals system (simplified version)",
                "First Challenge Round",
                "Stripe donation integration",
                "Public knowledge pages (SEO-optimized)",
                "Weekly email digest",
                "500+ active contributors",
                "First institutional partnership MOU",
                "First co-authored peer-reviewed paper",
              ],
              signal: "Field data. Proposals working. Partnership. Independent audit."
            },
            {
              phase: "Phase 3: Scale + Implementation",
              time: "Year 2",
              cost: "$5k+/mo",
              color: "border-[#c084fc]",
              items: [
                "Full Proposals system with automated research generation",
                "Implementation Engine (first real deployment)",
                "BOINC compute integration",
                "Public API for knowledge graph",
                "10,000+ active contributors",
                "20+ Zenodo DOIs",
                "3+ GPS-verified field implementations",
                "Elected Contributor Council",
                "Independent financial audit published",
              ],
              signal: "GPS-verified implementation. Elected governance. Peer-reviewed papers."
            },
            {
              phase: "Phase 4: Infrastructure",
              time: "Year 3+",
              cost: "$50k+/mo",
              color: "border-[#f472b6]",
              items: [
                "Knowledge graph indexed by OpenAlex as primary source",
                "Multilingual interface (Spanish, French, Hindi, Arabic, Mandarin, Swahili)",
                "Full operational sustainability without founder dependency",
                "50+ institutional partners",
                "Implementation Engine open-sourced for other NGOs",
                "Endowment campaign: 3-year operating reserve",
                "Longitudinal impact study: what did GOOD TEAM actually change?",
              ],
              signal: "Government recognition. Proven measurable impact. Self-sustaining."
            },
          ].map((p) => (
            <div key={p.phase} className={`card p-8 border-l-4 ${p.color}`}>
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <h3 className="text-xl font-bold">{p.phase}</h3>
                <span className="text-sm text-[#555]">{p.time}</span>
                <span className="text-sm text-[#4ade80] font-semibold">{p.cost}</span>
              </div>
              <ul className="space-y-1.5 mt-4 mb-4">
                {p.items.map((item) => (
                  <li key={item} className="text-sm text-[#888] flex items-start gap-2">
                    <span className="text-[#555] shrink-0">--</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#4ade80]">Trust signal: {p.signal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION 10: THE 10 COMMANDMENTS */}
      {/* ========================================= */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold text-[#fcd34d]">10</span>
          <h2 className="text-3xl font-bold">The 10 Commandments</h2>
        </div>

        <div className="space-y-3">
          {[
            { num: "1", text: "Implementation is the mission. Locked in the charter. Research that never gets implemented violates the founding mandate." },
            { num: "2", text: "Two domains at launch. Climate change and water quality. Domain expansion requires 2/3 board vote AND demonstrated implementation." },
            { num: "3", text: "CC BY 4.0 on all outputs. Locked in the articles of incorporation. Cannot be changed without 3/4 member vote + 90-day public notice." },
            { num: "4", text: "Evidence over opinion. Proposals, ideas, and plans are ranked by research backing, not popularity or prestige." },
            { num: "5", text: "OSF pre-registration for hypothesis-driven research. Hard technical gate. The reproducibility guarantee." },
            { num: "6", text: "Implementation only follows vetted research. No solution deployed without sufficient evidence. Speed never overrides quality." },
            { num: "7", text: "Paid contributors are contractors, not employees. OpenCollective handles payments. Legal simplicity enables global participation." },
            { num: "8", text: "Multi-sig treasury. No single person controls funds above $5,000. 3-of-5 keyholders from different geographic regions." },
            { num: "9", text: "First implementation pilot before public launch. At least one real deployment must be active before claiming 'we implement.'" },
            { num: "10", text: "Bad actor protection is architecture, not policy. Every protection is a technical constraint. Code is harder to circumvent than rules." },
          ].map((c) => (
            <div key={c.num} className="flex gap-4 items-start py-3 px-4 rounded-xl bg-[#141414] border border-[#1e1e1e]">
              <span className="text-[#fcd34d] font-bold text-lg shrink-0 w-6 text-right">{c.num}</span>
              <p className="text-sm text-[#888] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* MEDIA */}
      {/* ========================================= */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Media</h2>
        <p className="text-[#888] mb-6">Explainer videos, podcasts, and presentations will be added as they are produced.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card p-6 border-dashed">
            <h3 className="font-bold mb-2">Explainer Video</h3>
            <p className="text-sm text-[#555]">Coming soon</p>
          </div>
          <div className="card p-6 border-dashed">
            <h3 className="font-bold mb-2">Pitch Deck</h3>
            <p className="text-sm text-[#555]">Coming soon</p>
          </div>
          <div className="card p-6 border-dashed">
            <h3 className="font-bold mb-2">Podcast Deep Dive</h3>
            <p className="text-sm text-[#555]">Coming soon</p>
          </div>
          <div className="card p-6 border-dashed">
            <h3 className="font-bold mb-2">Full Plan PDF</h3>
            <p className="text-sm text-[#555]">Coming soon</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <div className="card p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-5" />
        <div className="relative">
          <blockquote className="text-lg md:text-xl font-bold leading-relaxed mb-6 max-w-2xl mx-auto">
            "The tools to fix the world already exist. The knowledge exists. The willing people exist.
            What has been missing is a single incorruptible radically open coordination layer that connects
            them all -- and then actually does the work."
          </blockquote>
          <p className="text-[#888]">Not a study. Not a report. Not a conference.</p>
          <p className="text-[#4ade80] font-bold mt-1">A workforce with a permanent memory and an unbreakable mission.</p>
          <div className="mt-8">
            <a href="/about#get-involved" className="btn-primary">Get involved</a>
          </div>
        </div>
      </div>
    </div>
  );
}
