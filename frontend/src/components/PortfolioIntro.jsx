import "./PortfolioIntro.css";
import ashuPhoto from "../assets/ashu.png"; // adjust the path/extension to match where your file actually lives

/**
 * PortfolioIntro
 * ----------------------------------------------------------------------
 * A developer-intro section styled as a security "access badge" —
 * a nod to the IAM (Identity & Access Management) work in the bio.
 *
 * TODO before shipping:
 *  - Swap the placeholder values in `contact` below for your real links.
 * ----------------------------------------------------------------------
 */

const contact = [
  { label: "EMAIL", value: "aashutoshmanchanda@gmail.com", href: "mailto:aashutoshmanchanda@gmail.com", icon: "mail" },

  { label: "GITHUB", value: "github.com/SpYRoNy", href: "https://github.com/SpYRoNy", icon: "github" },
  { label: "LINKEDIN", value: "linkedin.com/in/ashutosh-manchanda", href: "https://www.linkedin.com/in/ashutosh-manchanda-6a8861205/", icon: "linkedin" },
  { label: "PHONE", value: "7357340506", href: "tel:7357340506", icon: "phone" },
];

// const stack = ["REACT", "JAVA", "SPRING BOOT", "NODE.JS", "MYSQL", "IAM","IBM VERIFY ACCESS", "MFA", "SSO", "OAUTH 2.0", "OPENID CONNECT", "LDAP", "Microsoft Azure", "Auth0"];

function Icon({ name }) {
  switch (name) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 6.5 8 6 8-6" />
        </svg>
      );
   case "phone":
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M7.5 4.5C7.5 3.95 7.95 3.5 8.5 3.5H10.7C11.18 3.5 11.59 3.84 11.68 4.31L12.12 6.7C12.2 7.13 12.04 7.56 11.69 7.84L10.2 9.03C11.08 10.81 12.55 12.27 14.33 13.16L15.52 11.67C15.8 11.32 16.23 11.16 16.66 11.24L19.05 11.68C19.52 11.77 19.86 12.18 19.86 12.66V14.86C19.86 15.41 19.41 15.86 18.86 15.86C10.87 15.86 4.5 9.49 4.5 1.5C4.5 0.95 4.95 0.5 5.5 0.5H7.5Z"
        transform="translate(0 4)"
      />
    </svg>
  );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 3 5.5 3.3 5.5 3.3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.7c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.5 10.5v6M7.5 7.8v.01M12 16.5v-3.3c0-1.5.9-2.4 2.2-2.4 1.3 0 2 .9 2 2.4v3.3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PortfolioIntro() {
  return (
    <section  className="btc-root">
      <div className="btc-frame">
        {/* ---------------- Left column: copy ---------------- */}
        <div className="btc-content">
          {/* <p className="btc-eyebrow">{stack.join(" · ")}</p> */}
          <h1 className="btc-heading">Behind the Code</h1>

          <p className="btc-paragraph">
            Hi, I'm <strong>Ashutosh Manchanda</strong>, a Full Stack Developer passionate
            about building secure, scalable, and user-friendly web applications. I specialize
            in React.js, Java, Spring Boot, Node.js, and MySQL, with hands-on experience
            developing modern applications from responsive frontend interfaces to robust
            backend APIs. I enjoy turning ideas into digital products that are fast,
            reliable, and easy to use.
          </p>

          <p className="btc-paragraph">
            Alongside web development, I have practical experience in Identity and Access
            Management (IAM), working with technologies such as IBM Verify Access, MFA, SSO,
            OAuth&nbsp;2.0, OpenID Connect, LDAP, and authentication workflows. I believe
            great software is more than just clean code — it's about solving real-world
            problems, creating seamless user experiences, and building secure applications
            that clients and users can trust.
          </p>

          <div id="portfolio-intro" className="btc-connect">
            <h2 className="btc-connect-heading">Let's Connect</h2>
            <ul className="btc-connect-list">
              {contact.map((c) => (
                <li className="btc-connect-item" key={c.label}>
                  <span className="btc-connect-icon">
                    <Icon name={c.icon} />
                  </span>
                  <span className="btc-connect-text">
                    <span className="btc-connect-label">{c.label}</span>
                    {c.href ? (
                      <a className="btc-connect-value" href={c.href} target="_blank" rel="noreferrer">
                        {c.value}
                      </a>
                    ) : (
                      <span className="btc-connect-value">{c.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------- Right column: access badge ---------------- */}
        <div className="btc-badge-stage" aria-hidden="true">
          <div className="btc-hex" />

          <div className="btc-lanyard-group">
            <div className="btc-clip" />
            <div className="btc-strap">
              <span className="btc-strap-text">
                FULL&#8209;STACK&nbsp;&middot;&nbsp;SECURE&nbsp;ACCESS&nbsp;&middot;&nbsp;FULL&#8209;STACK&nbsp;&middot;&nbsp;SECURE&nbsp;ACCESS&nbsp;&middot;&nbsp;
              </span>
            </div>

            <div className="btc-card">
              <div className="btc-card-header">
                <span className="btc-chip" />
                <span className="btc-card-header-label">ACCESS BADGE</span>
                <span className="btc-card-id">ID&nbsp;0x2FA</span>
              </div>

              <div
                className="btc-photo-placeholder"
                style={{ backgroundImage: `url(${ashuPhoto})` }}
              />

              <div className="btc-card-body">
                <p className="btc-card-name">Ashutosh Manchanda</p>
                <p className="btc-card-role">Full Stack Developer</p>
                <div className="btc-scan-line" />
              </div>

              <div className="btc-card-footer">
                <div className="btc-granted">
                  <span className="btc-granted-dot" />
                  ACCESS GRANTED
                </div>
                <div className="btc-qr" aria-hidden="true">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className={i % 3 === 0 || i % 7 === 0 ? "on" : ""} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
