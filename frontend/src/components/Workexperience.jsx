import "./Workexperience.css";

// Add your own NuSummit photos here — swap these three imports for your files.
import heroImage from "../assets/nusummit.png";
import bannerImage from "../assets/nusummit-banner.png";
import breakdownImage from "../assets/nusummit-team.png";

const tools = ["IVIA / ISAM", "WebSEAL", "SAML", "OAuth 2.0 / OIDC", "JIRA", "Active Directory"];

const dots = ["#e63946", "#f4a261", "#e9c46a", "#4a90d9", "#2a9d8f", "#264653"];

const projects = [
  {
    label: "A",
    tag: "PROJECT 01",
    title: "Vietnam Electricity (EVN)",
    highlights: [
      "SSO via IVIA/ISAM with TOTP, FIDO Passkey & MFA",
      "WebSEAL, junctions, custom login pages & session management",
    ],
  },
  {
    label: "B",
    tag: "PROJECT 02",
    title: "SeABank",
    highlights: [
      "SSO for multi-service banking access — TOTP, OTP, reCAPTCHA, MFA",
      "RBAC policies, IVIG configuration & secure validation",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="projects" className="we-page">
      <header className="we-header">
        <h1 className="we-heading">
          Work <span className="we-heading-alt">Experience</span>
        </h1>
        <div className="we-pill">
          <span>IAM &amp; Security •</span>
          <span>SSO / MFA •</span>
          <span>Authentication •</span>
        </div>
        <div className="we-badge">
          <div className="we-badge-screen">01</div>
        </div>
      </header>

      {/* ---------- Hero card ---------- */}
      <div className="we-hero-card">
        <div className="we-hero-top">
          <div className="we-hero-image-wrap">
            <img src={heroImage} alt="NuSummit Cybersecurity" className="we-hero-image" />
          </div>

          <div className="we-hero-content">
            <h2 className="we-hero-title">&ldquo;NuSummit Cybersecurity&rdquo;</h2>
            <h3 className="we-hero-subtitle">IAM TRAINEE — IDENTITY &amp; ACCESS MANAGEMENT</h3>

            <div className="we-meta">
              <p>
                Company: <strong>NuSummit Cybersecurity, Mumbai</strong>
              </p>
              <p>
                Role: <strong>IAM Trainee</strong> · July 2025 — Present
              </p>
            </div>

            <p className="we-hero-desc">
              Built secure SSO, MFA, and authentication flows using IVIA/ISAM for enterprise
              clients in finance and utilities — configuring WebSEAL, custom login pages, and
              access policies from end to end.
            </p>

            <div className="we-dots">
              {dots.map((c, idx) => (
                <span className="we-dot" key={idx} style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
        </div>

        <div className="we-hero-banner">
          <img src={bannerImage} alt="NuSummit team / workspace" />
        </div>
      </div>

      {/* ---------- Project breakdown ---------- */}
      <div className="we-breakdown">
        <h2 className="we-breakdown-heading">Project Breakdown</h2>
        <p className="we-breakdown-intro">
          Two client engagements, same core challenge: secure, seamless sign-in at scale.
          Delivered end-to-end IAM configuration from authentication to access policy.
        </p>

        <div className="we-breakdown-grid">
          <div className="we-concept-list">
            {projects.map((p) => (
              <div className="we-concept-card" key={p.label}>
                <div className="we-concept-top">
                  <span className="we-concept-badge">{p.label}</span>
                  <div>
                    <span className="we-concept-tag">{p.tag}</span>
                    <h4 className="we-concept-title">{p.title}</h4>
                  </div>
                </div>
                <ul className="we-concept-highlights">
                  {p.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="we-breakdown-image-wrap">
            <img src={breakdownImage} alt="NuSummit workspace" />
          </div>
        </div>

        <div className="we-tools-banner">
          <span className="we-tools-banner-label">Tools &amp; Tech</span>
          <div className="we-tools-row">
            {tools.map((tool) => (
              <span className="we-tool-pill" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
