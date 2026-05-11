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
      role: "Security Consultant",
      duration: "Sep 2022 – April 2026",
      points: [
        "Operated within a client-facing SOC, performing real-time monitoring, offense analysis, and incident investigation using IBM QRadar.",
        "Developed and fine-tuned correlation rules in QRadar, improving detection accuracy and reducing false positives by 15–35%.",
        "Automated threat detection and investigation workflows using Python and threat intelligence feeds, improving response efficiency.",
        "Appointed Threat Intelligence Lead, producing actionable advisories and integrating intelligence into SOC operations for proactive threat mitigation.",
        "Led SOC performance reporting, translating security events into business-level risk insights and remediation recommendations.",
        "Represented the client in tabletop cyber attack simulations validating incident response workflows.",
        "Received the Best Graduate Hire award for contributions within IBM Cybersecurity Services.",
      ],
    },
    {
      company: "IBM India Pvt. Ltd.",
      role: "Security Analyst Intern",
      duration: "Jan 2022 – Jul 2022",
      points: [
        "Monitored and analyzed security events using Microsoft Sentinel to identify threats.",
        "Configured and managed alert rules supporting timely detection and response.",
        "Assisted in evaluating compliance with ISO/IEC 27001 security standards.",
        "Developed an automated ticket creation workflow integrating Sentinel with Serena.",
        "Gained hands-on SOC experience across network security, threat management, and endpoint protection.",
      ],
    },
    {
      company: "Intel Corporation",
      role: "Summer Intern",
      duration: "May 2021 – Jul 2021",
      points: [
        "Contributed to Intel’s AI Student Community focused on AI and cybersecurity learning initiatives.",
        "Developed learning materials and conducted interactive sessions for students.",
        "Delivered sessions on data privacy and ethical hacking concepts.",
        "Supported platform updates and collaborative educational initiatives.",
      ],
    },
    {
      company: "Cisco Networking Academy",
      role: "Intern",
      duration: "May 2021 – Jun 2021",
      points: [
        "Built and tested network models using Cisco Packet Tracer.",
        "Explored cybersecurity, encryption, and network defense concepts.",
        "Analyzed cyber threats and defensive security mechanisms.",
        "Strengthened understanding of network configuration and security fundamentals.",
      ],
    },
  ];

  const engagements = [
    {
      title: "Etihad Engineering",
      description:
        "Led threat hunting initiatives, enhanced SOC visibility, and improved QRadar detection accuracy by 60–80%.",
    },
    {
      title: "Etihad Airways",
      description:
        "Managed threat hunting, phishing investigations, incident response coordination, and SOC reporting for enterprise aviation operations.",
    },
    {
      title: "Threat Intelligence Operations",
      description:
        "Built actionable advisories and integrated threat intelligence into operational SOC workflows for proactive mitigation.",
    },
    {
      title: "Detection Engineering & Automation",
      description:
        "Developed custom QRadar rules and Python-based automation workflows to improve detection fidelity and investigation speed.",
    },
  ];

  const projects = [
    {
      title: "Blockchain Based Voting Web App",
      description:
        "Developed 'Swift Vote', a blockchain-based voting platform designed to support transparent and secure democratic voting processes.",
    },
    {
      title: "E-Commerce Web App for Medicine Shopping",
      description:
        "Designed and developed a medicine marketplace platform enabling customers to interact with doctors and purchase medicines online.",
    },
    {
      title: "Facial Features Detection",
      description:
        "Built a computer vision solution capable of detecting faces and facial features in images and real-time video streams.",
    },
    {
      title: "Car Speed Detector",
      description:
        "Developed an Arduino-based speed detection system capable of detecting overspeeding vehicles and capturing images automatically.",
    },
    {
      title: "Automated Tickets: Azure-Serena Solution",
      description:
        "Engineered an automated ticket creation system in Azure Sentinel integrating Serena workflows, reducing response time by 15% and improving SLA adherence.",
    },
    {
      title: "Guarding the Web: ColdPhish",
      description:
        "Developed a phishing detection extension using Python, HTML, and JavaScript with machine learning models achieving 88% SVM and 91% Random Forest precision.",
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
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%)] pointer-events-none" />

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
              "education",
              "projects",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`transition capitalize ${activeSection === item
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
                "education",
                "engagements",
                "projects",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`capitalize text-lg transition ${activeSection === item
                    ? "text-cyan-300"
                    : "text-white/70"
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
        <section className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 rounded-full px-4 py-2 text-sm text-cyan-200 mb-6">
                Incoming MBA Candidate at NMIMS
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Cybersecurity Consulting.
                <br />
                Threat Intelligence.
                <br />
                Strategic Problem Solving.
              </h1>

              <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-2xl">
                I’m Sarthak Banerjee — an incoming MBA candidate at NMIMS and former Security Consultant at IBM. My experience spans cybersecurity consulting, SOC operations, threat intelligence, and translating complex technical challenges into business-level insights.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-8">
                Core Focus Areas
              </h3>

              <div className="space-y-4">
                {[
                  "Threat Detection & Intelligence",
                  "SOC Operations",
                  "Cybersecurity Consulting",
                  "Business Risk Communication",
                  "Automation & Detection Engineering",
                  "Technology + Strategy",
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

        <motion.section
          id="about"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
                My background spans cybersecurity consulting, threat intelligence, stakeholder communication, and analytical problem-solving.
              </p>

              <p>
                As I transition into MBA at NMIMS, I’m increasingly interested in consulting, strategy, technology transformation, and operational problem solving.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
                      <h3 className="text-2xl font-semibold">
                        {exp.company}
                      </h3>

                      <p className="text-white/50 mt-2">
                        {exp.role}
                      </p>
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

        <motion.section
          id="engagements"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Engagements
            </p>

            <h2 className="text-4xl font-bold mb-10 md:mb-14">
              Professional Engagements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {engagements.map((project) => (
                <div
                  key={project.title}
                  className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
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

        <motion.section
          id="education"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
                <h3 className="text-2xl font-semibold">NMIMS</h3>
                <p className="text-white/60 mt-2">
                  MBA • 2026 – 2028
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8">
                <h3 className="text-2xl font-semibold">
                  NIIT University
                </h3>

                <p className="text-white/60 mt-2">
                  B.Tech in Computer Science Engineering • Minor in Finance
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.03] rounded-[28px] p-8">
                <h3 className="text-2xl font-semibold">
                  The Mother’s International School
                </h3>

                <p className="text-white/60 mt-2">
                  Science Stream
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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

        <motion.section
          id="contact"
          className="border-t border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
            <p className="text-cyan-300 text-sm uppercase tracking-[0.3em] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Let’s connect.
            </h2>

            <p className="mt-8 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
              I’m interested in consulting, strategy, cybersecurity, and technology-driven problem solving opportunities.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:work@sarthakbanerjee.com"
                className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-medium hover:scale-105 transition"
              >
                Email Me
              </a>

              <a
                href="https://github.com/sarthak-banerjee"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
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