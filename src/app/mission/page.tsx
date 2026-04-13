export default function MissionPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Mission Statement
        </h1>
        <div className="w-16 h-1 bg-[#4ade80] mx-auto mb-8 rounded-full" />
      </div>

      {/* The Mission */}
      <div className="card p-8 md:p-12 mb-12 border-l-4 border-l-[#4ade80]">
        <p className="text-xl md:text-2xl leading-relaxed text-[#e0e0e0] font-medium">
          GOOD TEAM exists to take the world's best available knowledge about humanity's most serious problems
          and organize the implementation of proven solutions -- openly, transparently, and permanently.
        </p>
        <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
          <p className="text-[#888] leading-relaxed">
            We coordinate AI compute and human action into a single system where research
            is processed into a permanent knowledge graph, where anyone can propose evidence-backed
            ideas, where the best solutions -- as determined by science, not politics or money -- are
            deployed in the real world by paid, vetted teams, and where every dollar, every finding,
            and every outcome is public, citable, and belongs to everyone.
          </p>
        </div>
      </div>

      {/* Core Beliefs */}
      <h2 className="text-3xl font-bold mb-8">What we believe</h2>

      <div className="space-y-6 mb-16">
        {[
          {
            belief: "The solutions exist. The coordination doesn't.",
            explanation: "Climate scientists know reforestation works. Water engineers know biosand filters work. Agricultural researchers know which drought-resistant crops to plant where. The problem is not knowledge -- it's the absence of a coordinated, funded, globally distributed implementation workforce."
          },
          {
            belief: "Implementation is as important as research.",
            explanation: "A platform that only researches is a library. GOOD TEAM is a workforce. Research that never gets implemented violates our founding mandate. This is locked in our charter -- it cannot be changed without a 3/4 member vote and 90 days of public notice."
          },
          {
            belief: "The best ideas should win, not the best funded.",
            explanation: "Our Proposals system ranks ideas by scientific evidence, not by the prestige of the proposer or the size of their grant. A farmer with strong evidence outranks a professor with unsupported hypotheses. This is not anti-academic -- it is pro-evidence."
          },
          {
            belief: "Knowledge belongs to everyone.",
            explanation: "Every finding, dataset, implementation guide, and field observation produced through GOOD TEAM is licensed CC BY 4.0. Corporations can use our research -- that's the point. They can't lock it up. They can't prevent others from using it. The knowledge graph is permanent and open."
          },
          {
            belief: "Transparency is not optional.",
            explanation: "All finances are public on OpenCollective. All code is open-source (AGPL-3.0). All governance decisions happen in public. All research methodology is documented. If you can't audit it, you can't trust it."
          },
          {
            belief: "AI is a tool, not a savior.",
            explanation: "AI doesn't solve humanity's problems. AI gives us the data and links the people who can solve problems together with the data and their ideas. The humans do the work. The humans make the decisions. The AI processes, synthesizes, and coordinates."
          },
          {
            belief: "This must be unstoppable.",
            explanation: "Anti-capture charter. Multi-sig treasury. Open-source code. Knowledge on IPFS. Community governance. No single person, corporation, or government can buy, corrupt, or shut down GOOD TEAM. Even if the organization ceases to exist, the knowledge graph and the code survive."
          },
        ].map((b) => (
          <div key={b.belief} className="card p-6">
            <h3 className="text-lg font-bold mb-2">{b.belief}</h3>
            <p className="text-sm text-[#888] leading-relaxed">{b.explanation}</p>
          </div>
        ))}
      </div>

      {/* The Five Principles */}
      <h2 className="text-3xl font-bold mb-8">Five non-negotiable principles</h2>

      <div className="space-y-4 mb-16">
        {[
          { num: "1", title: "No Corporate Capture -- Ever", desc: "Charter-level prohibition. No majority-corporate board control. No exclusive data licensing. No privatization of volunteer-produced research. Requires 3/4 member vote + 90-day public notice to amend.", color: "text-[#ff6b6b]" },
          { num: "2", title: "No Forgetfulness -- Cryptographic Permanence", desc: "Every output gets content-addressed storage, provenance tracking, and a DOI. Nothing can be silently deleted. Nothing can be altered without a permanent record of the change.", color: "text-[#c084fc]" },
          { num: "3", title: "Rideshare Dispatch -- 60 Seconds to a Task", desc: "Onboarding asks: what can you offer, for how long? A specific task is returned in 60 seconds. No cover letter, no committee, no delay.", color: "text-[#67e8f9]" },
          { num: "4", title: "Evidence Over Opinion -- Always", desc: "No proposal advances, no implementation deploys, and no knowledge node enters the graph without evidence. The system structurally favors research-backed ideas over popular ones.", color: "text-[#fcd34d]" },
          { num: "5", title: "CC BY 4.0 on All Outputs -- No Exceptions", desc: "All research, datasets, implementation guides, and syntheses are CC BY 4.0. Corporations may use them but cannot remove the license. All key outputs deposited to Zenodo with timestamps.", color: "text-[#4ade80]" },
        ].map((p) => (
          <div key={p.num} className="card p-6 flex gap-4">
            <span className={`text-2xl font-bold ${p.color} shrink-0`}>{p.num}</span>
            <div>
              <h3 className="font-bold mb-1">{p.title}</h3>
              <p className="text-sm text-[#888] leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What We Are Not */}
      <h2 className="text-3xl font-bold mb-8">What GOOD TEAM is not</h2>

      <div className="grid sm:grid-cols-2 gap-3 mb-16">
        {[
          "A social network -- no feed, no follower counts, no engagement optimization",
          "A cryptocurrency project -- no token, no blockchain dependency",
          "A lobbying organization -- we produce knowledge and deployments, not advocacy",
          "A replacement for universities -- we integrate with and amplify them",
          "An AI company -- AI is a tool we use, not what we sell",
          "A charity that helps people feel good about donating -- every dollar traces to impact",
          "A news organization -- outputs are data and field reports, not journalism",
          "A forum -- discussions are structured, evidence-backed, and connected to action",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 py-3 px-4 rounded-xl bg-[#141414] border border-[#1e1e1e]">
            <span className="text-[#ff6b6b] shrink-0 mt-0.5">x</span>
            <span className="text-sm text-[#888]">{item}</span>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="card p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-5" />
        <div className="relative">
          <blockquote className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
            "The tools to fix the world already exist. The knowledge exists. The willing people exist.
            What has been missing is a single incorruptible radically open coordination layer that connects
            them all -- and then actually does the work."
          </blockquote>
          <p className="text-[#888]">Not a study. Not a report. Not a conference.</p>
          <p className="text-[#4ade80] font-bold mt-1">A workforce with a permanent memory and an unbreakable mission.</p>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-12 text-center text-sm text-[#555]">
        <p>Timothy Oakley / Oak Media Works -- Great Barrington, MA</p>
        <p className="mt-1">CC BY 4.0 -- Share freely with attribution</p>
      </div>
    </div>
  );
}
