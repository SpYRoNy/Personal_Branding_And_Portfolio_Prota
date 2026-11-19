import "./Career.css";

// Certification badge images — place these in src/assets/certs/
import certPrivilegedIdentity from "../assets/certs/badge5.png";
import certVerifyPractitioner from "../assets/certs/badge4.png";
import certIdentityProtectionSalesIntermediate from "../assets/certs/badge3.png";
import certIdentityProtectionSalesFoundation from "../assets/certs/badge2.png";
import certIdentityGovernance from "../assets/certs/badge1.png";

const education = [
  {
    year: "2024",
    degree: "PG-DAC",
    org: "CDAC Bengaluru",
  },
  {
    year: "2019 - 2023",
    degree: "Bachelor of Technology (CSE)",
    org: "Chandigarh Group of Colleges",
  },
];

const experience = [
  {
    year:"2025 - Present",
    role: "IAM Engineer – Identity & Access Management",
    org: "NuSummit Cybersecurity",
    desc: "Building secure Identity & Access Management solutions using IBM Verify Access, implementing authentication, authorization, SSO, MFA, OAuth, and enterprise security integrations.",
  },
];

const techStack = [
  "React.js",
  "Java",
  "Spring Boot",
  "JavaScript",
  "MySQL",
  "IBM Verify Access",
  "Git",
  "Docker",
  "Linux",
  "OAuth",
  "LDAP",
  "REST APIs",
  "Microsoft Azure",
  
];

const coreSkills = [
  "Identity & Access Management",
  "Authentication & Authorization",
  "IBM Verify Access",
  "Single Sign-On (SSO)",
  "Multi-Factor Authentication",
  "OAuth 2.0 & OpenID Connect",
  "React.js",
  "Spring Boot",
  "REST APIs",
  "SQL Databases",
  "Linux",
  "Git",
];

// IBM Verify certification badges (Credly-style)
// ⚠️ Replace each `credlyUrl` below with your actual Credly badge link
// (e.g. https://www.credly.com/badges/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
const certifications = [
  {
    title: "Verify Privileged Identity",
    subtitle: "Automation · Practitioner Advanced",
    image: certPrivilegedIdentity,
    credlyUrl: "https://www.credly.com/badges/476b9c3b-75ae-429d-995a-c3d45e25ddb8",
  },
  {
    title: "Verify",
    subtitle: "Automation · Practitioner Advanced",
    image: certVerifyPractitioner,
    credlyUrl: "https://www.credly.com/badges/b40fffe3-c767-4e77-8f8a-74e8fa1b4377",
  },
  {
    title: "Verify Identity Protection",
    subtitle: "IBM Security · Technical Sales Intermediate",
    image: certIdentityProtectionSalesIntermediate,
    credlyUrl: "https://www.credly.com/badges/7f286ca0-b1c5-4c6d-aa13-b7eca64133bb",
  },
  {
    title: "Verify Identity Protection",
    subtitle: "IBM Security · Sales Foundation",
    image: certIdentityProtectionSalesFoundation,
    credlyUrl: "https://www.credly.com/badges/c87ff4ed-0604-4478-bee8-8007b1d5d125",
  },
  {
    title: "Verify Identity Governance",
    subtitle: "Automation · Practitioner Advanced",
    image: certIdentityGovernance,
    credlyUrl: "https://www.credly.com/badges/212259c3-d05f-4800-a09d-e848ba579dfa",
  },
];

function GradCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

export default function Career() {
  return (
    <section className="career-page">
      <div className="career-card">
        <span className="hex-accent" aria-hidden="true" />

        <span className="badge-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Career Log
        </span>

        <h1 className="career-title">Career Path</h1>
        <p className="career-subtitle">
          Education, experience, and the stack I build secure applications with.
        </p>

        <div className="career-grid">
          {/* Education */}
          <div className="career-col">
            <div className="col-head">
              <span className="icon-box"><GradCapIcon /></span>
              <h2>Education</h2>
            </div>
            <div className="timeline">
              {education.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <span className="timeline-dot" />
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-title">{item.degree}</p>
                  <p className="timeline-org">{item.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="career-col">
            <div className="col-head">
              <span className="icon-box"><BriefcaseIcon /></span>
              <h2>Experience</h2>
            </div>
            <div className="timeline">
              {experience.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <span className="timeline-dot" />
                  <span className="timeline-year">{item.year}</span>
                  <p className="timeline-title">{item.role}</p>
                  <p className="timeline-org">{item.org}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="career-section">
          <h2 className="section-heading">Technology Stack</h2>
          <div className="stack-grid">
            {techStack.map((tech) => (
              <span className="stack-chip" key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="career-section">
          <h2 className="section-heading">Core Skills</h2>
          <div className="skills-grid">
            {coreSkills.map((skill) => (
              <div className="skill-row" key={skill}>
                <span className="skill-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="career-section">
          <h2 className="section-heading">Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <a
                className="cert-card"
                key={cert.title + i}
                href={cert.credlyUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="cert-badge">
                  <img src={cert.image} alt={`${cert.title} — ${cert.subtitle}`} />
                </div>
                <div className="cert-info">
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-subtitle">{cert.subtitle}</p>
                  <span className="cert-verify">
                    Verify on Credly <ExternalLinkIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}