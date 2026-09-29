import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Publications from "../components/publications";
import Interests from "../components/interests";
import Contact from "../components/contact";
import Footer from "../components/footer";

const SITE_URL = "https://www.hillori.in/";
const SITE_TITLE = "Hillori — Senior AI Full-Stack Engineer";
const SITE_DESCRIPTION =
  "I build products that change how millions of people learn, work and live — across AI, payments, mobile and growth.";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hillori",
  url: SITE_URL,
  image: `${SITE_URL}og-image.png`,
  jobTitle: "Senior AI Full-Stack Engineer",
  worksFor: { "@type": "Organization", name: "Supernova AI", url: "https://www.getsupernova.ai" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology, Roorkee" },
  sameAs: [
    "https://linkedin.com/in/hillori-desai-awasthi",
    "https://github.com/HilloriDesai",
    "https://www.youtube.com/@philosafars",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#f6f0e4" }}>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="author" content="Hillori" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.ico" />

        {/* Link previews (LinkedIn, WhatsApp, Slack, X, email) */}
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Hillori" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hillori — Senior AI Full-Stack Engineer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}og-image.png`} />

        {/* Tells search engines who this page is about */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
