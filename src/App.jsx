import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const experiences = [
    {
      company: "IBM India Pvt. Ltd.",
      role: "Tech Consultant – AI & Cybersecurity",
      duration: "Sep 2022 – Apr 2026",
      points: [
        "Recognised as the Best Graduate Hire across 400+ joiners in IBM Cybersecurity Services — an acknowledgment of both technical impact and the ability to operate at a client-facing consulting level from day one.",
        "Grew into the Shift Lead role for a 15-member SOC team, taking ownership of daily operations, analyst mentoring, workload coordination, and maintaining 100% SLA compliance across 1,000+ security incidents.",
        "Leveraged AI to redesign QRadar detection rules, cutting false positives by 15–35% on average and up to 80% in specific scenarios — freeing analysts to focus on real threats rather than noise.",
        "Identified and escalated a potential data center compromise before it could cause damage — protecting infrastructure that supports over 18.5 million passengers annually. A high-stakes catch that required both technical precision and clear communication under pressure.",
        "Built Python-based automation for ticketing, IOC enrichment, and alert routing — reducing manual analyst effort by 20% and allowing the team to scale incident handling without adding headcount.",
        "Established and led a Threat Intelligence function, synthesising intelligence from 15+ sources into over 300 advisories that helped clients stay ahead of emerging threats rather than reacting to them.",
        "Translated complex security data into 50+ executive-facing risk dashboards — making technical threat landscapes legible and actionable for senior business stakeholders.",
        "Managed a high-stakes migration of security operations from Kyndryl to Wipro with zero service disruption. Onboarded 200+ enterprise assets into the new environment, improving overall threat visibility by 30–40%.",
        "Designed and ran phishing simulation campaigns across enterprise environments, then used the results to build targeted awareness programmes — cutting susceptibility rates by 80%.",
        "Facilitated tabletop cyber crisis exercises for 7 enterprise clients including Etihad, Qatar Airways, Amul, and J&K Bank — helping leadership teams stress-test their response playbooks against realistic attack scenarios.",
      ],
    },
    {
      company: "Intel Corporation",
      role: "Summer Intern",
      duration: "May 2021 – Jul 2021",
      points: [
        "Contributed to building Intel's AI Student Community for CBSE schools — developing coding-based learning modules, assessments, and weekly assignments for a global platform that reached 20,000+ students across 20+ countries. Also evaluated learner engagement and proposed enhancements — including interactive assessments, visual-first modules, and expanded topics like blockchain and data privacy — that increased active participation by 25%.",
        "Delivered live sessions on data privacy and ethical hacking to audiences of 500–1,000 students per session, creating reusable educational content that was integrated into the community curriculum — building an early ability to break down complex technical concepts for non-expert audiences.",
      ],
    },
    {
      company: "Cisco Networking Academy",
      role: "Intern",
      duration: "May 2021 – Jun 2021",
      points: [
        "Designed a network architecture for a 1,500+ student environment, optimising the blueprint to reduce hardware requirements by 10% — balancing performance needs with cost efficiency.",
        "Simulated over 20 real-world cyberattack scenarios using Cisco Packet Tracer, identifying vulnerabilities and strengthening defensive configurations — improving overall security and threat preparedness by 30%.",
      ],
    },
  ];

  const engagements = [
    {
      title: "Etihad Engineering",
      description:
        "Embedded within Etihad Engineering's security operations to lead proactive threat hunting and uplift SOC capability. Rebuilt and fine-tuned QRadar detection rules from the ground up, achieving a 60–80% improvement in detection accuracy — significantly reducing uninvestigated alerts and strengthening the client's overall security posture.",
    },
    {
      title: "Etihad Airways",
      description:
        "Served as a key security resource for one of the Middle East's largest carriers, managing the full spectrum of SOC operations — from real-time threat hunting and phishing investigation to incident response coordination and executive reporting. Helped the client maintain operational resilience in a high-visibility, high-stakes aviation environment.",
    },
    {
      title: "Qatar Airways",
      description:
        "Facilitated structured tabletop cyber crisis simulations for Qatar Airways, putting their incident response plans under pressure in a controlled environment. The exercises helped leadership identify gaps in their playbooks and build team confidence in coordinating across departments during a live cyber event.",
    },
    {
      title: "Amul, Mass360 & J&K Bank",
      description:
        "Delivered cybersecurity risk advisory and tabletop exercise engagements across three distinct sectors — FMCG, enterprise mobility, and banking. Each engagement required translating the same technical security principles into the specific business language and risk appetite of a very different kind of organisation.",
    },
  ];

  const projects = [
    {
      title: "ColdPhish – Phishing Detection Extension",
      description:
        "Built a browser extension using Python, HTML, and JavaScript with ML models to detect phishing sites with 90% confidence — 88% SVM precision and 91% Random Forest precision.",
    },
    {
      title: "Swift Vote – Blockchain Voting Platform",
      description:
        "Developed a blockchain-based voting platform supporting transparent and secure democratic elections, with role-based access controls for voters, candidates, and election officials, plus auditable vote tracking.",
    },
    {
      title: "E-Commerce Web App for Medicine",
      description:
        "Built a two-sided healthcare marketplace with Razorpay payment integration, designing 5+ end-to-end user journeys across ordering, inventory management, and payment workflows.",
    },
    {
      title: "Facial Feature Detection System",
      description:
        "Developed an application using Haar Cascade classifiers for real-time facial feature detection with 85% accuracy, demonstrating practical ML and computer vision applications.",
    },
    {
      title: "Automated Ticketing: Azure Sentinel + Serena",
      description:
        "Engineered an automated ticket creation system integrating Azure Sentinel with Serena workflows, reducing incident response time by 15% and improving SLA adherence.",
    },
    {
      title: "Nanosphere Lithography – Solar Cell Research",
      description:
        "Contributed to a research initiative exploring how Nanosphere Lithography could improve solar cell efficiency, collaborating within a 12-member interdisciplinary team. Led the digital publishing and research dissemination workstream — handling documentation, communication, and presentation of outcomes to academic audiences.",
    },
  ];

  const achievements = [
    {
      label: "Best Graduate Hire",
      detail: "Among 400+ hires at IBM Cybersecurity",
    },
    {
      label: "IBM Champion Learner Gold",
      detail: "4 consecutive years — top 1% of IBM learners",
    },
    {
      label: "EY Offer – Cyber Automation CoE",
      detail: "AI Consulting, Consultant role — Ernst & Young",
    },
    {
      label: "Top 3 in Finance Minor",
      detail: "Out of 220+ students at NIIT University",
    },
    {
      label: "35+ Professional Certifications",
      detail: "IBM, AWS, Microsoft, Google Cloud & more",
    },
    {
      label: "University Scholarship",
      detail: "NIIT University merit scholarship recipient",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.20),transparent_100%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-wide">
            Sarthak Banerjee
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            {[
              "about",
              "experience",
              "engagements",
              "achievements",
              "education",
              "projects",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`transition capitalize ${
                  activeSection === item
                    ? "text-cyan-300"
                    : "text-white/70 hover:text-cyan-300"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl absolute left-0 right-0">
            <div className="flex flex-col px-6 py-6 space-y-5">
              {[
                "about",
                "experience",
                "engagements",
                "achievements",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`capitalize text-lg transition ${
                    activeSection === item ? "text-cyan-300" : "text-white/70"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-4 py-2 text-sm text-cyan-200 mb-6">
                NMIMS Mumbai MBA '28 · Ex-IBM Security Consultant · IBM Champion Learner Gold 2022–2025
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                AI & Cybersecurity Consulting.
                <br />
              </h1>

              <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl">
                I'm Sarthak Banerjee — MBA candidate at NMIMS Mumbai and former IBM Tech Consultant (AI & Cybersecurity). Over 41 months at IBM, I led SOC operations, built AI-driven detection systems, and advised enterprise clients across aviation, banking, and FMCG. I bridge technical execution with strategic decision-making.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-8">Core Focus Areas</h3>

              <div className="space-y-4">
                {[
                  "Management Consulting & Strategy",
                  "Technology & Digital Transformation",
                  "Business Analytics & Problem Solving",
                  "Stakeholder Management & Communication",
                  "Risk & Operations Management",
                  "AI & Emerging Technologies",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 rounded-2xl px-5 py-4 bg-black/20"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <motion.section
          id="about"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              About
            </p>

            <h2 className="text-4xl font-bold mb-10 md:mb-14">
              Technology, consulting, and strategic problem solving.
            </h2>

            <div className="text-white/70 text-lg leading-relaxed space-y-6 max-w-4xl">
              <p>
                Over 41 months at IBM, I worked at the intersection of cybersecurity, AI, and enterprise consulting — leading a 15-member SOC team, building AI-assisted detection systems, and delivering risk intelligence to C-suite stakeholders at clients like Etihad, Qatar Airways, and Amul.
              </p>

              <p>
                I'm now pursuing my MBA at NMIMS Mumbai, where I'm focused on consulting, strategy, technology transformation, and operational problem-solving at enterprise scale.
              </p>

              <p>
                Outside work, I founded my university's Astronomy Club (150+ members), placed 1st in both Photography and Videography competitions, achieved A2 French and A1 German, and played competitive Table Tennis — including three consecutive inter-house championships.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Experience
            </p>

            <h2 className="text-4xl font-bold mb-10 md:mb-14">
              Professional Experience
            </h2>

            <div className="grid gap-8">
              {experiences.map((exp) => (
                <div
                  key={exp.role}
                  className="border border-white/10 bg-black/30 rounded-[28px] p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl font-semibold">{exp.company}</h3>
                      <p className="text-white/50 mt-2">{exp.role}</p>
                    </div>

                    <div className="px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 text-sm">
                      {exp.duration}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 text-white/70">
                    {exp.points.map((point) => (
                      <div
                        key={point}
                        className="border border-white/10 rounded-2xl p-5 bg-white/[0.03]"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Engagements */}
        <motion.section
          id="engagements"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Engagements
            </p>

            <h2 className="text-4xl font-bold mb-10 md:mb-14">
              Client Engagements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {engagements.map((eng) => (
                <div
                  key={eng.title}
                  className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                    {eng.title}
                  </h3>

                  <p className="text-white/65 leading-relaxed">
                    {eng.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          id="achievements"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Achievements
            </p>

            <h2 className="text-4xl font-bold mb-10 md:mb-14">
              Awards & Recognition
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8"
                >
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Education
            </p>

            <h2 className="text-4xl font-bold mb-10 md:mb-14">
              Academic Journey
            </h2>

            <div className="space-y-8">
              <div className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8">
                <h3 className="text-2xl font-semibold">NMIMS Mumbai</h3>
                <p className="text-white/60 mt-2">MBA (Core) · 2026 – 2028</p>
              </div>

              <div className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8">
                <h3 className="text-2xl font-semibold">NIIT University</h3>
                <p className="text-white/60 mt-2">
                  B.Tech in Computer Science Engineering · Minor in Finance · 7.94 CGPA · 2022
                </p>
                <p className="text-white/40 mt-1 text-sm">
                  Ranked Top 3 in Finance Minor out of 1,500+ students · University Scholarship recipient
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8">
                <h3 className="text-2xl font-semibold">
                  The Mother's International School, Delhi
                </h3>
                <p className="text-white/60 mt-2">
                  CBSE Science Stream · Class XII (76.2%) · Class X (8.4 CGPA)
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Projects
            </p>

            <h2 className="text-4xl font-bold mb-10 md:mb-14">
              Academic & Technical Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8"
                >
                  <h3 className="text-2xl font-semibold mb-5 text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="text-white/65 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Let's connect.
            </h2>

            <p className="mt-8 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
              I'm open to conversations around consulting, strategy, AI, cybersecurity, and technology-driven problem solving. Whether you're a recruiter, a peer, or someone building something interesting — reach out.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:work@sarthakbanerjee.com"
                className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-medium hover:scale-105 transition"
              >
                Email Me
              </a>

              <a
                href="https://linkedin.com/in/sarthakbanerjee"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
