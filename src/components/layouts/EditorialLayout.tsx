import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, FileText, Mail, MapPin, Globe, Sparkles, ChevronRight, X as XIcon } from 'lucide-react';
import { CASE_STUDIES, PROFILE_DATA } from '../../data/portfolioData';
import { useThemeLayout } from '../../context/ThemeLayoutContext';

/* ─── Rotating "HIRE ME" badge ─── */
const HireBadge: React.FC = () => {
  const text = 'HIRE ME • HIRE ME • ';
  return (
    <div className="hire-badge">
      <div className="hire-badge-inner">
        <div className="hire-badge-text">
          {text.split('').map((ch, i) => (
            <span key={i} style={{ transform: `rotate(${i * (360 / text.length)}deg)` }}>
              {ch}
            </span>
          ))}
        </div>
        <span className="hire-badge-arrow"><ArrowUpRight size={14} /></span>
      </div>
    </div>
  );
};

/* ─── Infinite-scroll marquee strip ─── */
const MarqueeStrip: React.FC = () => {
  const items = [
    'Full-Stack Development', 'AI & LLM Integrations', 'Technical Writing',
    'Medical Documentation', 'React & Next.js', 'Flutter Mobile',
    'Product Strategy', 'HIPAA Compliance', 'RAG Systems',
  ];
  const doubled = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item} <span className="sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Service accordion item ─── */
interface ServiceItemProps {
  number: string;
  name: string;
  tags: string[];
  description: string;
  image?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, name, tags, description, image, isOpen, onToggle }) => (
  <div className={`service-item${isOpen ? ' expanded' : ''}`}>
    <button className="service-item-header" onClick={onToggle}>
      <div className="service-item-left">
        <span className="service-number">{number}.</span>
        <span className="service-name">{name}</span>
      </div>
      <span className="service-expand-icon">
        {isOpen ? <XIcon size={18} /> : <ChevronRight size={18} />}
      </span>
    </button>
    <div className="service-item-body">
      <div className="service-tags">
        {tags.map((t, i) => <span className="service-tag" key={i}>{t}</span>)}
      </div>
      <p className="service-body-text">{description}</p>
      {image && <img className="service-body-image" src={image} alt={name} />}
    </div>
  </div>
);

/* ─── Main Layout ─── */
export const EditorialLayout: React.FC = () => {
  const { setSelectedCaseStudyId, setIsCVOpen, setIsContactOpen } = useThemeLayout();
  const [openService, setOpenService] = useState(1);

  const services = [
    {
      name: 'Full-Stack & Mobile Engineering',
      tags: ['React 19', 'Next.js 16', 'TypeScript', 'Flutter / Dart', 'Node.js'],
      description: 'Building end-to-end web and mobile applications using modern frameworks with scalable APIs, real-time databases, and polished user interfaces.',
      image: CASE_STUDIES[3]?.image,
    },
    {
      name: 'AI & LLM Product Building',
      tags: ['Google Gemini', 'Groq (Llama 3.1)', 'pgvector RAG', 'Cloudflare Workers AI'],
      description: 'Architecting privacy-first AI tools, retrieval-augmented generation systems, and intelligent assistants with multi-provider failover and smart automation.',
      image: CASE_STUDIES[2]?.image,
    },
    {
      name: 'Technical Content Writing',
      tags: ['Developer Docs', 'Product Case Studies', 'SEO Content', 'User Manuals'],
      description: 'Translating complex software concepts into clear, user-friendly documentation. SEO-optimized content strategies driving organic growth and conversions.',
    },
    {
      name: 'Medical Documentation',
      tags: ['SOAP Notes', 'H&P Documentation', 'E/M Coding', 'HIPAA Compliance'],
      description: 'Live patient encounter documentation for US physicians with 95–100% accuracy. Expert in medical terminology, clinical workflows, and strict compliance standards.',
    },
    {
      name: 'Leadership & Quality Operations',
      tags: ['Team Management', 'Staff Training', 'QA Review', 'Workflow Optimization'],
      description: 'Leading customer service teams, mentoring staff, managing peer review quality assurance, and implementing operational excellence across organizations.',
    },
  ];

  const floatingTags = ['React & Next.js', 'AI Engineering', 'Flutter Mobile', 'Technical Writing', 'Medical Docs'];
  const featured = CASE_STUDIES.slice(0, 6);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* ─── HERO ─── */}
      <section className="hero-section" id="top">
        <p className="hero-eyebrow">— <span>Hello There!</span></p>
        <h1 className="hero-name">
          I'm <span className="accent">Ashikur Rahman</span>
        </h1>
        <p className="hero-subtitle">Product Builder & AI Engineer based in Bangladesh</p>

        <div className="hero-body">
          {/* Left: Quote + Reviews */}
          <div className="hero-left">
            <div className="hero-quote">
              <div className="hero-quote-icon">“</div>
              <p>Ashikur's engineering and documentation expertise transformed our clinical platform — highly recommended!</p>
            </div>

            <div className="hero-reviews">
              <div className="avatar-stack">
                <span className="av av-1">AR</span>
                <span className="av av-2">MD</span>
                <span className="av av-3">CS</span>
                <span className="av av-4">AI</span>
              </div>
              <div className="hero-reviews-text">
                <strong>150+ Reviews <span className="review-rating">(4.9 of 5)</span></strong>
                <small>Reviews from Valued Clients & US MDs</small>
              </div>
            </div>
          </div>

          {/* Center: Portrait with backdrop & centered CTA */}
          <div className="hero-center">
            <div className="portrait-wrap">
              <div className="portrait-img-box">
                <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} />
              </div>
              <HireBadge />
              
              {/* Floating Centered CTA Buttons Overlapping Bottom */}
              <div className="hero-cta-capsule">
                <button className="btn-capsule-portfolio" onClick={() => setSelectedCaseStudyId(CASE_STUDIES[0]?.id ?? null)}>
                  <span>Portfolio</span>
                  <span className="capsule-icon"><ArrowRight size={13} /></span>
                </button>
                <button className="btn-capsule-hire" onClick={() => setIsContactOpen(true)}>
                  Hire Me
                </button>
              </div>
            </div>
          </div>

          {/* Right: Floating colored tags + social */}
          <div className="hero-right">
            <div className="hero-tags-cloud">
              <div className="hero-tag-row">
                <span className="tag-pill tag-dark">Full-Stack</span>
                <span className="tag-pill tag-accent">AI & LLMs</span>
              </div>
              <div className="hero-tag-row">
                <span className="tag-pill tag-dark">
                  <span className="tag-icon">✦</span> React 19 & Next.js
                </span>
              </div>
              <div className="hero-tag-row">
                <span className="tag-pill tag-accent">Medical Docs</span>
                <span className="tag-pill tag-dark">Flutter</span>
              </div>
              <div className="hero-tag-row">
                <span className="tag-pill tag-light">
                  <span className="tag-dot" /> CS Leadership
                </span>
              </div>
            </div>

            <div className="hero-social-block">
              <span className="social-label">Follow Us On</span>
              <div className="social-links">
                <a href={`mailto:${PROFILE_DATA.email}`} title="Email" className="social-btn">
                  <Mail size={14} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub" className="social-btn">
                  <Globe size={14} />
                </a>
                <a href="#contact" title="Location" className="social-btn">
                  <MapPin size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <MarqueeStrip />

      {/* ─── SERVICES ─── */}
      <section className="services-section" id="services">
        <div className="services-header">
          <div>
            <p className="services-eyebrow">— My Specialization</p>
            <h2 className="services-title">
              <em>Services</em> I <span className="accent">Provide</span>
              <Sparkles size={20} style={{ display: 'inline', marginLeft: 8, color: 'var(--accent)' }} />
            </h2>
          </div>
          <p className="services-desc">
            Bridging complex technical architecture, clinical accuracy, and seamless customer experiences across 6+ years.
          </p>
        </div>

        <div className="service-list">
          {services.map((svc, idx) => (
            <ServiceItem
              key={idx}
              number={String(idx + 1).padStart(2, '0')}
              name={svc.name}
              tags={svc.tags}
              description={svc.description}
              image={svc.image}
              isOpen={openService === idx}
              onToggle={() => setOpenService(openService === idx ? -1 : idx)}
            />
          ))}
        </div>

        <div className="services-cta">
          <button className="btn-primary" onClick={() => setIsCVOpen(true)}>
            View Full CV
            <span className="btn-icon"><ArrowRight size={14} /></span>
          </button>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="projects-section" id="projects">
        <div className="projects-header">
          <p className="services-eyebrow">— Selected Work</p>
          <h2 className="projects-title">
            Shipped <span className="accent">Projects</span>
          </h2>
          <p className="projects-subtitle">A curated selection of case studies spanning AI, healthcare, e-commerce, and enterprise tooling.</p>
        </div>

        <div className="project-grid">
          {featured.map((project) => (
            <button className="project-card" key={project.id} onClick={() => setSelectedCaseStudyId(project.id)}>
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
                <span className="project-card-arrow"><ArrowUpRight size={16} /></span>
              </div>
              <div className="project-card-body">
                <div className="project-card-number">#{project.number}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-category">{project.category}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-left">
            <p className="eyebrow">— A Little About Me</p>
            <h2>Building with<br /><span className="accent">Intention.</span></h2>
          </div>
          <div>
            <p className="about-body-text">{PROFILE_DATA.bio}</p>
            <div className="about-stats">
              {PROFILE_DATA.stats.map((stat, i) => (
                <div className="about-stat" key={i}>
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="footer-cta" id="contact">
        <p className="services-eyebrow">— Let's Create</p>
        <h2>Something <span className="accent">Great</span></h2>
        <p>Have a project in mind? Let's build something that makes an impact.</p>

        <div className="footer-cta-actions">
          <button className="btn-primary" onClick={() => setIsContactOpen(true)}>
            <Mail size={16} /> Get in Touch
          </button>
          <button className="btn-outline" onClick={() => setIsCVOpen(true)}>
            <FileText size={16} /> View My CV
          </button>
        </div>

        <div className="footer-info">
          <span className="footer-info-item"><Mail size={16} /> {PROFILE_DATA.email}</span>
          <span className="footer-info-item"><MapPin size={16} /> {PROFILE_DATA.location}</span>
          <span className="footer-info-item"><Globe size={16} /> Remote Worldwide</span>
        </div>
      </section>

      <div className="footer-bar">
        © {new Date().getFullYear()} Mohammad Ashikur Rahman — Built with React 19, TypeScript & Tailwind CSS 4
      </div>
    </div>
  );
};
