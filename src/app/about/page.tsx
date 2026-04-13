export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">About GOOD TEAM</h1>
        <p className="text-lg text-[#888] max-w-2xl mx-auto">
          Who we are, how we're structured, and how to join the founding team.
        </p>
      </div>

      {/* Who */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Who's behind this</h2>
        <div className="card p-8">
          <h3 className="text-lg font-bold mb-2">Tim Oakley</h3>
          <p className="text-sm text-[#888] leading-relaxed mb-4">
            Founder. OAK Media -- Great Barrington, Massachusetts.
          </p>
          <p className="text-sm text-[#888] leading-relaxed">
            GOOD TEAM is being built openly from day one. There is no venture capital, no corporate sponsor,
            and no hidden agenda. The plan is public. The code is public. The finances will be public.
            The goal is to build something that outlasts any individual -- including the founder.
          </p>
        </div>
      </section>

      {/* Structure */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">How we're structured</h2>
        <div className="space-y-3">
          <div className="card p-6">
            <h3 className="font-bold mb-2">Legal Entity</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Delaware 501(c)(3) nonprofit (filing). Operating under Open Collective Foundation fiscal
              sponsorship from day one for immediate tax-deductible donation capability and full financial transparency.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold mb-2">Code License</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              AGPL-3.0. All derivatives must remain open source. Anyone can audit, fork, and run their own
              instance. The platform cannot be made proprietary by anyone, ever.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold mb-2">Knowledge License</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              CC BY 4.0 on all research outputs, datasets, implementation guides, and field observations.
              This is locked in the articles of incorporation and cannot be changed without a 3/4 member vote
              and 90-day public notice. Knowledge belongs to everyone.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold mb-2">Governance</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              Founder-led until 100+ active contributors, then transitions to elected Contributor Council
              (5-7 members, annual elections). All governance decisions happen in public via GitHub. Rules
              are in the repo. Quadratic voting for major decisions.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold mb-2">Finances</h3>
            <p className="text-sm text-[#888] leading-relaxed">
              All money flows through OpenCollective -- every donation, every payment, every expense is
              publicly visible in real-time. Multi-sig treasury for amounts above $5,000. No single donor
              may contribute more than 25% of annual funding. Annual independent CPA audit published in full.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Rules */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Funding rules</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { rule: "No single donor > 25%", detail: "No entity can control GOOD TEAM through funding concentration" },
            { rule: "No conflict industries", detail: "No fossil fuel, tobacco, weapons, surveillance, or gambling money" },
            { rule: "No IP strings", detail: "No grants that require exclusive licensing or restrict CC BY 4.0 outputs" },
            { rule: "All terms published", detail: "Every grant agreement and donor relationship is publicly documented" },
            { rule: "Multi-sig for > $5k", detail: "3-of-5 keyholders from different geographic regions must approve" },
            { rule: "Annual public audit", detail: "Independent CPA audit published within 120 days of fiscal year end" },
          ].map((r) => (
            <div key={r.rule} className="card p-5">
              <h4 className="font-bold text-sm mb-1 text-[#4ade80]">{r.rule}</h4>
              <p className="text-xs text-[#888]">{r.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Advisory board</h2>
        <p className="text-sm text-[#888] leading-relaxed mb-4">
          We are recruiting 5-8 founding advisors before public platform launch. Target backgrounds:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Climate scientist from a recognized university",
            "Distributed systems researcher (BOINC/Folding@home background)",
            "Open science practitioner (OSF, Zenodo, OpenAlex community)",
            "Nonprofit governance specialist",
            "Global South researcher or practitioner",
            "Field implementation expert (NGO operations)",
          ].map((a) => (
            <div key={a} className="flex items-start gap-3 py-3 px-4 rounded-xl bg-[#141414] border border-[#1e1e1e]">
              <span className="text-[#c084fc] shrink-0 mt-0.5">+</span>
              <span className="text-sm text-[#888]">{a}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#555] mt-4">If this describes you or someone you know, please reach out.</p>
      </section>

      {/* Get Involved */}
      <section id="get-involved" className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Get involved</h2>
        <p className="text-[#888] leading-relaxed mb-8">
          GOOD TEAM is looking for founding members -- the first people who help shape what this becomes.
          No minimum commitment. No prerequisites. Just a willingness to contribute to something real.
        </p>

        <div className="space-y-3">
          {[
            { role: "Researchers & Scientists", what: "Help validate prompts, design research protocols, review knowledge graph outputs, co-author publications. Environment, climate, water, food systems, or public health expertise especially valued.", action: "Reach out with your background and interests" },
            { role: "Developers", what: "Next.js, TypeScript, PostgreSQL, Supabase. The codebase is on GitHub. Good first issues always available. Backend, frontend, data pipeline, and mobile all needed.", action: "Fork the repo and start contributing" },
            { role: "Designers", what: "Design system, onboarding flow, knowledge graph visualization, mobile app UX, and contribution dashboards. Figma preferred.", action: "Reach out with your portfolio" },
            { role: "Field Workers & Citizen Scientists", what: "When field tasks launch, we need people willing to photograph coastlines, test water, collect data, and report observations from their local area.", action: "Join the community to be notified when field tasks go live" },
            { role: "Writers & Translators", what: "Research summaries, task descriptions, community communications, and multilingual support. Clear writing that makes complex science accessible.", action: "Reach out with writing samples or language skills" },
            { role: "Anyone Who Cares", what: "The simplest contributions take 5 minutes. No skills required. Claim a task and paste a prompt. That's it. You just contributed to solving a real problem.", action: "Join the community and say hello" },
          ].map((r) => (
            <div key={r.role} className="card p-6">
              <h3 className="font-bold mb-2 text-[#4ade80]">{r.role}</h3>
              <p className="text-sm text-[#888] leading-relaxed mb-2">{r.what}</p>
              <p className="text-sm text-[#555] italic">{r.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Connect</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <a href="https://github.com/OAKMEDIAWORKS/good-team" target="_blank" rel="noopener noreferrer" className="card p-6 hover:border-[#4ade80]/40 transition-colors">
            <h3 className="font-bold mb-1">GitHub</h3>
            <p className="text-sm text-[#888]">Code, issues, discussions</p>
            <p className="text-sm text-[#4ade80] mt-2">github.com/OAKMEDIAWORKS/good-team</p>
          </a>
          <div className="card p-6">
            <h3 className="font-bold mb-1">Discord</h3>
            <p className="text-sm text-[#888]">Community chat and coordination</p>
            <p className="text-sm text-[#555] mt-2">Coming soon</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold mb-1">OpenCollective</h3>
            <p className="text-sm text-[#888]">Transparent finances and donations</p>
            <p className="text-sm text-[#555] mt-2">Coming soon</p>
          </div>
          <div className="card p-6">
            <h3 className="font-bold mb-1">Contact</h3>
            <p className="text-sm text-[#888]">Tim Oakley / OAK Media</p>
            <p className="text-sm text-[#555] mt-2">Great Barrington, MA</p>
          </div>
        </div>
      </section>
    </div>
  );
}
