import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleCopyEmails = () => {
    navigator.clipboard.writeText("work@sarthakbanerjee.com, sarthakbanerjee@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experiences = [
    {
      company: "🛡️ IBM India Pvt. Ltd.",
      role: "Tech Consultant – AI & Cybersecurity",
      duration: "Sep 2022 – Apr 2026",
      points: [
        "🏆 Recognised as the Best Graduate Hire across 400+ joiners in IBM Cybersecurity Services — an acknowledgment of both technical impact and the ability to operate at a client-facing consulting level from day one.",
        "👥 Grew into the Shift Lead role for a 15-member SOC team, taking ownership of daily operations, analyst mentoring, workload coordination, and maintaining 100% SLA compliance across 1,000+ security incidents.",
        "🤖 Leveraged AI to redesign QRadar detection rules, cutting false positives by 15–35% on average and up to 80% in specific scenarios — freeing analysts to focus on real threats rather than noise.",
        "🔍 Identified and escalated a potential data center compromise before it could cause damage — protecting infrastructure that supports over 18.5 million passengers annually.",
        "🐍 Built Python-based automation for ticketing, IOC enrichment, and alert routing — reducing manual analyst effort by 20% and allowing the team to scale incident handling without adding headcount.",
        "📡 Established and led a Threat Intelligence function, synthesising intelligence from 15+ sources into over 300 advisories that helped clients stay ahead of emerging threats.",
        "📊 Translated complex security data into 50+ executive-facing risk dashboards — making technical threat landscapes legible and actionable for senior business stakeholders.",
        "🔄 Managed a high-stakes migration of security operations from Kyndryl to Wipro with zero service disruption. Onboarded 200+ enterprise assets, improving overall threat visibility by 30–40%.",
        "🎣 Designed and ran phishing simulation campaigns, then used the results to build targeted awareness programmes — cutting susceptibility rates by 80%.",
        "🎯 Facilitated tabletop cyber crisis exercises for 7 enterprise clients including Etihad, Qatar Airways, Amul, and J&K Bank.",
      ],
    },
    {
      company: "🧠 Intel Corporation",
      role: "Summer Intern",
      duration: "May 2021 – Jul 2021",
      points: [
        "🌍 Contributed to building Intel's AI Student Community for CBSE schools — developing learning modules for a global platform that reached 20,000+ students across 20+ countries. Proposed enhancements that increased active participation by 25%.",
        "🎤 Delivered live sessions on data privacy and ethical hacking to audiences of 500–1,000 students per session, creating reusable educational content integrated into the community curriculum.",
      ],
    },
    {
      company: "🌐 Cisco Networking Academy",
      role: "Intern",
      duration: "May 2021 – Jun 2021",
      points: [
        "🗺️ Designed a network architecture for a 1,500+ student environment, optimising the blueprint to reduce hardware requirements by 10%.",
        "⚔️ Simulated over 20 real-world cyberattack scenarios using Cisco Packet Tracer, improving overall security and threat preparedness by 30%.",
      ],
    },
  ];

  const engagements = [
    { title: "🇦🇪 Etihad Engineering", description: "Embedded within Etihad Engineering's security operations to lead proactive threat hunting and uplift SOC capability. Rebuilt and fine-tuned QRadar detection rules from the ground up, achieving a 60–80% improvement in detection accuracy." },
    { title: "🇦🇪 Etihad Airways", description: "Served as a key security resource for one of the Middle East's largest carriers, managing the full spectrum of SOC operations — from real-time threat hunting and phishing investigation to incident response coordination and executive reporting." },
    { title: "🇶🇦 Qatar Airways", description: "Facilitated structured tabletop cyber crisis simulations for Qatar Airways, putting their incident response plans under pressure in a controlled environment and helping leadership identify gaps in their playbooks." },
    { title: "🇮🇳 Amul, Mass360 & J&K Bank", description: "Delivered cybersecurity risk advisory and tabletop exercise engagements across three distinct sectors — FMCG, enterprise mobility, and banking — translating technical security principles into business-level recommendations." },
  ];

  const projects = [
    { title: "🎣 ColdPhish", subtitle: "Phishing Detection Extension", description: "Browser extension using ML to detect phishing sites with 90% confidence — 88% SVM and 91% Random Forest precision." },
    { title: "🗳️ Swift Vote", subtitle: "Blockchain Voting Platform", description: "Ethereum-based voting platform with immutable vote recording, role-based access controls, and full auditability." },
    { title: "💊 MedCart", subtitle: "E-Commerce for Medicine", description: "Healthcare marketplace with a 4-member team — inventory, prescription validation, and Razorpay integration across 5+ user journeys." },
    { title: "🤖 FaceMap", subtitle: "Facial Feature Detection", description: "Computer vision app using Haar Cascade classifiers for real-time facial feature detection across image and video streams." },
    { title: "⚡ AutoTicket", subtitle: "Azure Sentinel + Serena", description: "Automated incident ticketing workflow integrating Azure Sentinel and Serena, reducing manual effort and response time by 15%." },
    { title: "🔬 NanoCell", subtitle: "Solar Cell Research", description: "Contributed to a Nanosphere Lithography research initiative with a 12-member team. Led digital publishing and research dissemination." },
  ];

  const achievements = [
    { label: "🏆 Best Graduate Hire", detail: "Among 400+ graduate hires · IBM Cybersecurity Services · Recognised for outstanding performance and client-facing impact from day one" },
    { label: "🥇 IBM Champion Learner Gold", detail: "Top 1% · 4 consecutive years" },
    { label: "🎓 University Scholarship", detail: "NIIT University merit award" },
    { label: "📊 Top 3 in Finance Minor", detail: "220+ students · NIIT University" },
    { label: "📜 35+ Certifications", detail: "IBM · AWS · Microsoft · Google Cloud · Palo Alto · CompTIA" },
    { label: "💼 EY Offer – Cyber Automation CoE", detail: "AI Consulting · Ernst & Young" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const navItems = ["about", "experience", "engagements", "achievements", "education", "projects", "contact"];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-wide">Sarthak Banerjee</h1>
          <nav className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className={`transition capitalize ${activeSection === item ? "text-cyan-300" : "text-white/70 hover:text-cyan-300"}`}>{item}</a>
            ))}
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl absolute left-0 right-0">
            <div className="flex flex-col px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setMobileMenuOpen(false)} className={`capitalize text-lg transition ${activeSection === item ? "text-cyan-300" : "text-white/70"}`}>{item}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-6">

        {/* ── HERO BENTO ── */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[200px]">
            <span className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-4 py-1.5 text-xs text-cyan-200 w-fit">
              NMIMS Mumbai MBA '28 · Ex-IBM Security Consultant
            </span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">Sarthak Banerjee</h1>
              <p className="text-white/50 mt-2">Tech Consultant → MBA Candidate · AI & Cybersecurity</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-cyan-400/10 border border-cyan-400/20 rounded-3xl p-6 flex flex-col justify-between min-h-[200px]">
            <p className="text-cyan-300 text-xs uppercase tracking-widest">IBM Champion Learner</p>
            <div>
              <p className="text-5xl font-bold text-cyan-300">Gold</p>
              <p className="text-white/60 text-sm mt-1">Top 1% globally</p>
              <p className="text-white/40 text-xs mt-1">2022–2025 · 4 consecutive years</p>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-5 flex flex-col justify-between">
            <p className="text-white/40 text-xs uppercase tracking-widest">Incidents</p>
            <p className="text-3xl font-bold">1K+</p>
            <p className="text-white/40 text-xs">managed at IBM</p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-5 flex flex-col justify-between">
            <p className="text-white/40 text-xs uppercase tracking-widest">Advisories</p>
            <p className="text-3xl font-bold">300+</p>
            <p className="text-white/40 text-xs">threat intelligence</p>
          </div>
          <div className="col-span-12 md:col-span-5 bg-white/[0.03] border border-white/10 rounded-3xl p-6">
            <p className="text-white/65 text-sm leading-relaxed">41 months at IBM leading SOC operations, building AI-driven detection systems, and advising enterprise clients across aviation, banking, and FMCG. Recognised as Best Graduate Hire across 400+ joiners. Now pursuing my MBA at NMIMS Mumbai, focused on management consulting and strategy.</p>
          </div>
          <div className="col-span-12 md:col-span-3 bg-white/[0.03] border border-white/10 rounded-3xl p-5 flex flex-col justify-between">
            <p className="text-white/40 text-xs uppercase tracking-widest">Certifications</p>
            <p className="text-3xl font-bold">35+</p>
            <p className="text-white/40 text-xs">IBM · AWS · Microsoft · Google Cloud</p>
          </div>
        </div>

        {/* ── ABOUT BENTO ── */}
        <motion.section id="about" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">About</p>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-5">Technology, consulting, and strategic problem solving.</h2>
              <div className="text-white/65 leading-relaxed space-y-4 text-sm">
                <p>Over 41 months at IBM, I worked at the intersection of cybersecurity, AI, and enterprise consulting — leading a 15-member SOC team, building AI-assisted detection systems, and delivering risk intelligence to C-suite stakeholders at clients like Etihad, Qatar Airways, and Amul.</p>
                <p>I'm now pursuing my MBA at NMIMS Mumbai, where I'm focused on consulting, strategy, technology transformation, and operational problem-solving at enterprise scale.</p>
                <p>Outside of work, I founded the Astronomy Club at NIIT University, growing it to 150+ members and hosting a guest session by former ISRO leader Dr. K. Kasturirangan. I also hold 35+ professional certifications and have won recognition in creative photography, videography, and table tennis.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col gap-3">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Beyond Work</p>
              {["🔭 Founded Astronomy Club · 150+ members", "📸 1st · Creative Photography & Videography", "🏓 3× Table Tennis Champion", "🇫🇷 French A2 · 🇩🇪 German A1"].map((item) => (
                <div key={item} className="border border-white/10 rounded-2xl px-4 py-3 text-sm text-white/60">{item}</div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── EXPERIENCE BENTO ── */}
        <motion.section id="experience" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Experience</p>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.company} className="border border-white/10 bg-white/[0.03] rounded-3xl p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-white/50 text-sm mt-1">{exp.role}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 text-xs">{exp.duration}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.points.map((point) => (
                    <div key={point} className="border border-white/10 rounded-2xl p-4 bg-black/20 text-white/65 text-sm leading-relaxed">{point}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── ENGAGEMENTS BENTO ── */}
        <motion.section id="engagements" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Engagements</p>
          <div className="grid grid-cols-12 gap-4">
            {engagements.map((eng, i) => (
              <div key={eng.title} className={`${i === 0 ? "col-span-12 md:col-span-7" : i === 1 ? "col-span-12 md:col-span-5" : i === 2 ? "col-span-12 md:col-span-5" : "col-span-12 md:col-span-7"} bg-white/[0.03] border border-white/10 rounded-3xl p-7`}>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">{eng.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{eng.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── ACHIEVEMENTS BENTO ── */}
        <motion.section id="achievements" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Achievements</p>
          <div className="grid grid-cols-12 gap-4">
            {achievements.map((item, i) => (
              <div key={item.label} className={`${i === 0 ? "col-span-12 md:col-span-5" : i === 1 ? "col-span-12 md:col-span-4" : i === 2 ? "col-span-12 md:col-span-3" : i === 3 ? "col-span-12 md:col-span-3" : i === 4 ? "col-span-12 md:col-span-5" : "col-span-12 md:col-span-4"} bg-white/[0.03] border border-white/10 rounded-3xl p-6`}>
                <h3 className="text-base font-semibold text-cyan-300 mb-2">{item.label}</h3>
                <p className="text-white/55 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── EDUCATION BENTO ── */}
        <motion.section id="education" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Education</p>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3 bg-cyan-400/10 border border-cyan-400/20 rounded-3xl p-7 flex flex-col">
              <p className="text-cyan-300 text-xs uppercase tracking-widest mb-3">Current</p>
              <div>
                <h3 className="text-xl font-semibold">🎓 NMIMS Mumbai</h3>
                <p className="text-white/60 text-sm mt-2">MBA (Core) · 2026 – 2028</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 bg-white/[0.03] border border-white/10 rounded-3xl p-7 flex flex-col">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Undergraduate</p>
              <div>
                <h3 className="text-xl font-semibold">🎓 NIIT University</h3>
                <p className="text-white/60 text-sm mt-2">B.Tech CSE · Minor in Finance · 7.94 CGPA · 2022</p>
                <p className="text-white/40 text-xs mt-2">Top 3 in Finance Minor (220+ students) · Merit Scholarship</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white/[0.03] border border-white/10 rounded-3xl p-7 flex flex-col">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">School</p>
              <div>
                <h3 className="text-xl font-semibold">🏫 The Mother's International School</h3>
                <p className="text-white/60 text-sm mt-2">CBSE · Class XII (76.2%) · Class X (8.4 CGPA)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── PROJECTS BENTO ── */}
        <motion.section id="projects" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Projects</p>
          <div className="grid grid-cols-12 gap-4">
            {projects.map((project, i) => (
              <div key={project.title} className={`${i === 0 ? "col-span-12 md:col-span-7" : i === 1 ? "col-span-12 md:col-span-5" : i === 2 || i === 3 ? "col-span-12 md:col-span-6" : i === 4 ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5"} bg-white/[0.03] border border-white/10 rounded-3xl p-7`}>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{project.subtitle}</p>
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── CONTACT BENTO ── */}
        <motion.section id="contact" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 bg-white/[0.03] border border-white/10 rounded-3xl p-10">
              <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Contact</p>
              <h2 className="text-4xl font-bold">Let's connect.</h2>
              <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-lg">
                Open to conversations around consulting, strategy, AI, cybersecurity, and technology-driven problem solving — whether you're a recruiter, a peer, or someone building something interesting.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:sarthakbanerjee@outlook.com" className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-medium hover:scale-105 transition text-sm">
                  📩 Email Me
                </a>
                <a href="https://linkedin.com/in/sarthakbanerjee" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm">
                  💼 LinkedIn
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 bg-cyan-400/10 border border-cyan-400/20 rounded-3xl p-8 flex flex-col justify-between">
              <p className="text-cyan-300 text-xs uppercase tracking-widest">Get in touch</p>
              <div className="space-y-3">
                <p className="text-sm text-white/70">work@sarthakbanerjee.com</p>
                <p className="text-sm text-white/70">sarthakbanerjee@outlook.com</p>
                <p className="text-sm text-white/70">linkedin.com/in/sarthakbanerjee</p>
              </div>
              <p className="text-white/30 text-xs">Mumbai, India</p>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}