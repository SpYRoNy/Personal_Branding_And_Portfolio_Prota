import "./Projects.css";

// Add your own project screenshots here.
import powerPointImage1 from "../assets/powerpoint-1.png";
import powerPointImage2 from "../assets/powerpoint-2.png";
import qrMenuImage from "../assets/qr-menu-1.svg";
import shubhNrityaImage from "../assets/shubh-nritya-homepage.jpg";
import shubhNrityaLogo from "../assets/shubh-nritya-studio.jpg";
import recyclopetImage from "../assets/recyclopet-illustrations.jpg";

const projects = [
  {
    tag: "PROJECT 01 · FREELANCE",
    title: "Power Point — Business Website",
    subtitle: "UPS, INVERTER, BATTERY & SOLAR SOLUTIONS COMPANY",
    tools: ["React.js", "Vite", "JavaScript", "HTML5", "CSS3", "React Router"],
    images: [powerPointImage1, powerPointImage2],
    // Add your deployed Vercel URL here.
    link: "https://powerpointv.com",
    description:
      "A fully responsive business website built for a UPS, inverter, battery, and solar solutions company, with reusable React components and React Router for seamless navigation.",
    highlights: [
      "Built dedicated service pages for Online UPS, Power Inverters, Tubular Batteries, and Solar Solutions.",
      "Optimized performance through responsive layouts, image optimization, and efficient component structure.",
      "Implemented SEO best practices — meta tags, sitemap, robots.txt, and structured content.",
      "Added a WhatsApp contact button, Google Maps integration, contact forms, and smooth scrolling navigation.",
      "Deployed on Vercel with version control managed via Git and GitHub.",
    ],
    dots: ["#e63946", "#f4a261", "#e9c46a", "#4a90d9", "#2a9d8f", "#264653"],
  },
  {
    tag: "PROJECT 02 · PERSONAL",
    title: "QR Code Restaurant Menu App",
    subtitle: "CUSTOMER ORDERING FLOW & ADMIN DASHBOARD",
    // Edit these to match the exact stack you used.
    tools: ["React.js", "CSS3", "JavaScript", "localStorage", "Vite", "Node.js","REST API"],
    images: [qrMenuImage],
    // Add a live URL if you deploy this one, otherwise leave as null and the button won't show .
    link: "https://classy-squirrel-6b8387.netlify.app/admin",
    description:
      "A QR-based restaurant menu application with a customer-facing ordering flow and a companion admin dashboard for managing menus, categories, and customer orders.",
    highlights: [
      "Customers scan a QR code to browse the digital menu, customize their order, and place it directly from their table.",
      "Admin dashboard enables staff to securely log in, manage menu items, categories, pricing, and incoming orders through an intuitive interface.",
      "Built with React.js and Vite for the frontend, and Node.js to develop REST APIs for secure admin authentication and backend functionality. Local Storage is used for lightweight client-side data persistence where appropriate.",
      // Edit / expand this list with any details specific to your build.
    ],
    dots: ["#e63946", "#f4a261", "#e9c46a", "#4a90d9", "#2a9d8f", "#264653"],
  },
  {
    tag: "PROJECT 03 · WEBSITE",
    title: "Shubh Nritya — Dance Studio Website",
    subtitle: "DANCE CLASSES, WORKSHOPS & WEDDING CHOREOGRAPHY",
    tools: ["React.js", "TypeScript", "Vite", "CSS3", "HTML5 Video", "localStorage"],
    images: [shubhNrityaImage, shubhNrityaLogo],
    imageAlts: ["Shubh Nritya homepage featuring dance classes in Hisar", "Shubh Nritya Studio illuminated gold logo"],
    link: "https://shubhnritya.com/",
    description:
      "A cinematic, responsive website for Shubh Nritya Studio, bringing dance classes, instructors, workshops, and wedding choreography together in an immersive studio experience.",
    highlights: [
      "Built a video-led homepage with responsive navigation, studio branding, and dedicated founder, instructor, and dance batch sections.",
      "Created a scroll-controlled 3D Movement Archive featuring dance thumbnails linked to Instagram Reels.",
      "Developed workshop listings and categorized Sangeet, Carnival, and Lip-Dub wedding galleries, with browser-based admin tools for managing content.",
      "Integrated WhatsApp enquiries and Google Maps directions to help visitors explore classes and connect with the studio.",
      "Supported reduced-motion preferences with paused hero video and a static, usable reel gallery.",
    ],
    dots: ["#d4a853", "#f59e0b", "#e63946", "#27272a", "#a16207", "#171717"],
  },
  {
    tag: "PROJECT 04 · MOBILE APPLICATION",
    title: "Recyclopet — Scrapwala Mobile App",
    subtitle: "SCRAP MATERIAL PRICES & RECYCLING MARKET INSIGHTS",
    tools: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Authentication", "Android"],
    images: [recyclopetImage],
    imageAlts: ["Recycling and scrap price illustrations used in the Recyclopet mobile app"],
    link: null,
    description:
      "A Flutter mobile application for exploring scrap material prices and recycling market information, helping users browse materials, compare regional prices, and understand price changes.",
    highlights: [
      "Built material browsing with category filters and search, including dedicated scrap and plastic granule category screens.",
      "Integrated Cloud Firestore for scrap price data, with repository and state layers separating data access from the interface.",
      "Implemented phone-number sign-in with Firebase Authentication, OTP verification, and user profile onboarding.",
      "Created material detail screens with price changes, historical price charts, and regional price information.",
      "Designed animated onboarding, recycling illustrations, and loading, empty, and error states for the mobile experience.",
    ],
    dots: ["#387a57", "#84a98c", "#b8d8d8", "#e9c46a", "#264653", "#f4f1de"],
  },
];

export default function Projects() {
  return (
    <section className="pj-page">
      <header className="pj-header">
        <h1 className="pj-heading">
          Featured <span className="pj-heading-alt">Projects</span>
        </h1>
        <div className="pj-pill">
          <span>Full-Stack •</span>
          <span>React / Vite •</span>
          <span>Flutter / Mobile •</span>
          <span>Freelance •</span>
        </div>
        <div className="pj-badge">
          <div className="pj-badge-screen">{String(projects.length).padStart(2, "0")}</div>
        </div>
      </header>

      {projects.map((project) => (
        <article className="pj-card" key={project.title}>
          <div
            className={`pj-image-grid ${
              project.images.length === 1 ? "pj-image-grid-single" : "pj-image-grid-double"
            }`}
          >
            {project.images.map((img, idx) => (
              <div className="pj-image-wrap" key={idx}>
                <img src={img} alt={project.imageAlts?.[idx] ?? `${project.title} screenshot ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="pj-content">
            <span className="pj-tag">{project.tag}</span>
            <h2 className="pj-title">{project.title}</h2>
            <h3 className="pj-subtitle">{project.subtitle}</h3>

            <p className="pj-desc">{project.description}</p>

            <div className="pj-tools-row">
              {project.tools.map((tool) => (
                <span className="pj-tool-pill" key={tool}>
                  {tool}
                </span>
              ))}
            </div>

            <ul className="pj-highlights">
              {project.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>

            <div className="pj-footer-row">
              <div className="pj-dots">
                {project.dots.map((c, idx) => (
                  <span className="pj-dot" key={idx} style={{ backgroundColor: c }} />
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-visit-link"
                >
                  Visit website
                  <span className="pj-visit-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
