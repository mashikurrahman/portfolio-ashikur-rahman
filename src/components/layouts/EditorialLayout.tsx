import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  Globe,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X as XIcon,
  Star,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ArrowUp,
  LayoutGrid,
  Sliders,
  Maximize2
} from 'lucide-react';
import { CASE_STUDIES, PROFILE_DATA } from '../../data/portfolioData';
import { useThemeLayout } from '../../context/ThemeLayoutContext';

/* ─── Ambient Background Glow Spheres ─── */
const AmbientBackgroundGlow: React.FC = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden overflow-x-hidden">
    <div className="absolute -top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#E8461E]/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
    <div className="absolute top-[40%] -right-[10%] w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
    <div className="absolute top-[75%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#E8461E]/4 blur-[130px]" />
  </div>
);

/* ─── Interactive 3D Tilt Component ─── */
interface TiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

const TiltCard: React.FC<TiltProps> = ({ children, className = '', maxTilt = 8 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

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

/* ─── Infinite-scroll marquee strip with edge masks ─── */
const MarqueeStrip: React.FC = () => {
  const items = [
    'Full-Stack Development', 'AI & LLM Integrations', 'Technical Content Writing',
    'Medical Documentation', 'React 19 & Next.js 16', 'Flutter Mobile Apps',
    'pgvector RAG Systems', 'HIPAA & Compliance Standards', 'Customer Service Leadership'
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
  highlights?: string[];
  image?: string;
  isOpen: boolean;
  onToggle: () => void;
  onAction: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  number,
  name,
  tags,
  description,
  highlights,
  image,
  isOpen,
  onToggle,
  onAction
}) => (
  <div className={`service-item${isOpen ? ' expanded' : ''}`}>
    <button className="service-item-header" onClick={onToggle} aria-expanded={isOpen}>
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

      {highlights && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-white/90">
              <CheckCircle2 size={13} className="text-white/80 flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}

      {image && (
        <div className="rounded-xl overflow-hidden mt-3 max-h-[220px] bg-black/20 border border-white/20">
          <img className="service-body-image" src={image} alt={name} />
        </div>
      )}

      <div className="pt-3">
        <button
          onClick={onAction}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-black/30 hover:bg-black/40 px-4 py-2 rounded-full transition-colors font-mono"
        >
          <span>Discuss {name}</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  </div>
);

/* ─── Main Layout ─── */
export const EditorialLayout: React.FC = () => {
  const { setSelectedCaseStudyId, setIsCVOpen, setIsContactOpen } = useThemeLayout();
  const [openService, setOpenService] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'spotlight'>('grid');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const services = [
    {
      name: 'Full-Stack & Mobile Engineering',
      tags: ['React 19', 'Next.js 16', 'TypeScript', 'Flutter / Dart', 'Node.js', 'PostgreSQL'],
      description: 'Building end-to-end web and mobile applications using modern frameworks with scalable APIs, real-time databases, and polished user interfaces.',
      highlights: ['Production SSR & Edge Deployments', 'Cross-Platform iOS & Android Apps', 'State Management & Performance Optimization'],
      image: CASE_STUDIES[3]?.image,
    },
    {
      name: 'AI & LLM Product Building',
      tags: ['Google Gemini', 'Groq (Llama 3.1)', 'pgvector RAG', 'Cloudflare Workers AI'],
      description: 'Architecting privacy-first AI tools, retrieval-augmented generation systems, and intelligent assistants with multi-provider failover and smart automation.',
      highlights: ['Multi-Provider AI Failover Architecture', 'Custom pgvector Semantic Search', 'In-Browser Web Worker Processing'],
      image: CASE_STUDIES[2]?.image,
    },
    {
      name: 'Technical Content Writing',
      tags: ['Developer Docs', 'Product Case Studies', 'SEO Content', 'User Manuals'],
      description: 'Translating complex software concepts into clear, user-friendly documentation. SEO-driven content strategies driving organic traffic growth and conversions.',
      highlights: ['Developer API & Architecture Documentation', 'High-Converting Product Case Studies', 'Structured JSON-LD SEO Optimization'],
    },
    {
      name: 'Medical Documentation',
      tags: ['SOAP Notes', 'H&P Documentation', 'E/M Coding', 'HIPAA Compliance'],
      description: 'Live patient encounter documentation for US physicians with 95–100% accuracy. Expert in medical terminology, clinical workflows, and strict compliance standards.',
      highlights: ['Live Encounter Documentation for 10+ US MDs', '95–100% Clinical Chart Accuracy', 'HIPAA & Quality Assurance Standards'],
    },
    {
      name: 'Leadership & Quality Operations',
      tags: ['Team Management', 'Staff Training', 'QA Review', 'Workflow Optimization'],
      description: 'Leading customer service teams, mentoring staff, managing peer review quality assurance, and implementing operational excellence across organizations.',
      highlights: ['Customer Service Team Leadership', 'Staff Mentorship & Training Programs', 'Issue Escalation Protocols & SLA Adherence'],
    },
  ];

  // Category filter list
  const categories = ['All', 'AI & LLM', 'Mobile / Flutter', 'Web Apps', 'SEO & Marketing'];

  const filteredProjects = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === selectedCategory);

  const currentSpotlight = filteredProjects[activeSlideIndex % filteredProjects.length] || filteredProjects[0];

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Background Ambient Glow */}
      <AmbientBackgroundGlow />

      {/* ─── HERO ─── */}
      <section className="hero-section relative z-10" id="top">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-eyebrow"
        >
          — <span>Hello There!</span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-name"
        >
          I'm <span className="accent">Ashikur Rahman</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          Product Builder, Technical Lead & AI Engineer based in Bangladesh
        </motion.p>

        <div className="hero-body">
          {/* Left: Quote + Reviews */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-left"
          >
            <TiltCard maxTilt={5}>
              <div className="hero-quote">
                <div className="hero-quote-icon">“</div>
                <p>Ashikur's engineering and documentation expertise transformed our clinical platform — highly recommended!</p>
                <div className="flex items-center gap-1 text-amber-500 mt-2 text-xs">
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <Star size={13} fill="currentColor" />
                  <span className="text-[11px] font-bold text-gray-700 ml-1">5.0 Star Rating</span>
                </div>
              </div>
            </TiltCard>

            <div className="hero-reviews">
              <div className="avatar-stack">
                <span className="av av-1">AR</span>
                <span className="av av-2">MD</span>
                <span className="av av-3">CS</span>
                <span className="av av-4">AI</span>
              </div>
              <div className="hero-reviews-text">
                <strong>150+ Reviews <span className="review-rating">(4.9 of 5)</span></strong>
                <small>From Valued Clients, US MDs & Tech Leaders</small>
              </div>
            </div>
          </motion.div>

          {/* Center: Portrait with backdrop & centered CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-center"
          >
            <div className="portrait-wrap">
              <TiltCard maxTilt={6}>
                <div className="portrait-img-box">
                  <img src={PROFILE_DATA.avatar} alt={PROFILE_DATA.name} />
                </div>
              </TiltCard>
              <HireBadge />

              {/* Floating Centered CTA Buttons Overlapping Bottom */}
              <div className="hero-cta-capsule">
                <button
                  className="btn-capsule-portfolio"
                  onClick={() => {
                    const projectsEl = document.getElementById('projects');
                    if (projectsEl) projectsEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Portfolio</span>
                  <span className="capsule-icon"><ArrowRight size={13} /></span>
                </button>
                <button className="btn-capsule-hire" onClick={() => setIsContactOpen(true)}>
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Floating colored tags + social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-right"
          >
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
                <a href="https://github.com/mashikurrahman" target="_blank" rel="noreferrer" title="GitHub" className="social-btn">
                  <Globe size={14} />
                </a>
                <button onClick={() => setIsContactOpen(true)} title="Location / Contact" className="social-btn">
                  <MapPin size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <MarqueeStrip />

      {/* ─── SERVICES ─── */}
      <section className="services-section relative z-10" id="services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <div>
            <p className="services-eyebrow">— My Specialization</p>
            <h2 className="services-title">
              <em>Services</em> I <span className="accent">Provide</span>
              <Sparkles size={22} style={{ display: 'inline', marginLeft: 8, color: 'var(--accent)' }} />
            </h2>
          </div>
          <p className="services-desc">
            Bridging complex technical architecture, clinical accuracy, and seamless customer experiences across 6+ years of multidisciplinary work.
          </p>
        </motion.div>

        <div className="service-list">
          {services.map((svc, idx) => (
            <ServiceItem
              key={idx}
              number={String(idx + 1).padStart(2, '0')}
              name={svc.name}
              tags={svc.tags}
              description={svc.description}
              highlights={svc.highlights}
              image={svc.image}
              isOpen={openService === idx}
              onToggle={() => setOpenService(openService === idx ? -1 : idx)}
              onAction={() => setIsContactOpen(true)}
            />
          ))}
        </div>

        <div className="services-cta">
          <button className="btn-primary" onClick={() => setIsCVOpen(true)}>
            View Full CV & Credentials
            <span className="btn-icon"><ArrowRight size={14} /></span>
          </button>
        </div>
      </section>

      {/* ─── PROJECTS (With Grid / Spotlight Slider Toggle) ─── */}
      <section className="projects-section relative z-10" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <p className="services-eyebrow">— Selected Work</p>
          <h2 className="projects-title">
            Shipped <span className="accent">Projects</span>
          </h2>
          <p className="projects-subtitle">Explore 9 shipped platforms spanning Healthcare AI, E-Commerce, Multi-Tenant Platforms, RAG Support Coaches & Executive Engineering.</p>

          {/* Interactive Controls Bar: Filter Pills + View Switcher */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveSlideIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-mono transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#E8461E] text-white shadow-sm shadow-[#E8461E]/30'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-gray-200 shadow-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid size={13} />
                <span>Grid</span>
              </button>
              <button
                onClick={() => setViewMode('spotlight')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                  viewMode === 'spotlight'
                    ? 'bg-[#E8461E] text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                title="Interactive Spotlight Slider View"
              >
                <Sliders size={13} />
                <span>Spotlight Slider</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* VIEW 1: SPOTLIGHT SLIDER DECK */}
        {viewMode === 'spotlight' && currentSpotlight && (
          <div className="mt-8">
            <div className="relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-9 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E8461E]/10 text-[#E8461E]">
                      #{currentSpotlight.number} of {filteredProjects.length}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-gray-100 text-gray-700">
                      {currentSpotlight.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 leading-tight">
                    {currentSpotlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {currentSpotlight.subtitle}
                  </p>

                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                      <span>Primary Metric</span>
                      <strong className="text-[#E8461E] font-bold text-sm">
                        {currentSpotlight.metrics[0]?.value || '100%'}
                      </strong>
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-2">
                      {currentSpotlight.problem}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {currentSpotlight.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-gray-100 text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3">
                    <button
                      onClick={() => setSelectedCaseStudyId(currentSpotlight.id)}
                      className="px-5 py-2.5 rounded-full bg-[#E8461E] text-white font-bold text-xs shadow-md shadow-[#E8461E]/20 hover:bg-[#d13a14] transition-all flex items-center gap-2"
                    >
                      <span>Explore Case Study</span>
                      <Maximize2 size={13} />
                    </button>
                    {currentSpotlight.liveUrl && (
                      <a
                        href={currentSpotlight.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:border-gray-900 transition-colors flex items-center gap-1.5"
                      >
                        <span>Live App</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Image Banner Column */}
                <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => setSelectedCaseStudyId(currentSpotlight.id)}>
                  <TiltCard maxTilt={5}>
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-md max-h-[380px]">
                      <img
                        src={currentSpotlight.image}
                        alt={currentSpotlight.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                        <span className="px-4 py-2 rounded-full bg-white text-gray-900 font-bold text-xs shadow-lg flex items-center gap-1.5">
                          <span>View Full Details</span>
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </div>

              {/* Slider Bottom Navigation & Progress Track */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 grid place-items-center transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="w-9 h-9 rounded-full bg-[#E8461E] hover:bg-[#d13a14] text-white grid place-items-center shadow-sm transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <span className="text-xs font-mono text-gray-400 ml-2">
                    Slide {activeSlideIndex + 1} of {filteredProjects.length}
                  </span>
                </div>

                {/* Thumbnail Dots */}
                <div className="flex items-center gap-1.5">
                  {filteredProjects.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlideIndex === idx ? 'w-6 bg-[#E8461E]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: RESPONSIVE GRID MODE */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="project-grid"
          >
            {filteredProjects.map((project) => (
              <TiltCard key={project.id} maxTilt={6}>
                <button
                  className="project-card group w-full"
                  onClick={() => setSelectedCaseStudyId(project.id)}
                >
                  <div className="project-card-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <span className="project-card-arrow"><ArrowUpRight size={16} /></span>
                    {project.metrics[0] && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/90 backdrop-blur-sm text-gray-900 shadow-xs">
                        {project.metrics[0].value}
                      </span>
                    )}
                  </div>
                  <div className="project-card-body">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <div className="project-card-number">#{project.number}</div>
                      <span className="text-[10px] font-mono text-gray-400">{project.year}</span>
                    </div>
                    <h3 className="project-card-title group-hover:text-[#E8461E] transition-colors">
                      {project.title}
                    </h3>
                    <div className="project-card-category">{project.category}</div>
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {project.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-gray-100 text-gray-600">
                          {t}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-gray-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </TiltCard>
            ))}
          </motion.div>
        )}
      </section>

      {/* ─── ABOUT & CAREER TIMELINE ─── */}
      <section className="about-section relative z-10" id="about">
        <div className="about-inner">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-left"
          >
            <p className="eyebrow">— A Little About Me</p>
            <h2>Building with<br /><span className="accent">Intention.</span></h2>
            <div className="pt-4 hidden lg:block">
              <button
                onClick={() => setIsCVOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E8461E] hover:underline font-mono"
              >
                <span>Read Complete Career Story</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-body-text">{PROFILE_DATA.bio}</p>

            {/* Experience Highlights Mini Timeline */}
            <div className="space-y-3 mb-8">
              <TiltCard maxTilt={3}>
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Team Leader of Customer Service</h4>
                    <p className="text-xs font-mono text-[#E8461E]">Capelli Sports • 2025 – Present</p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto">
                    Active Leadership
                  </span>
                </div>
              </TiltCard>

              <TiltCard maxTilt={3}>
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Sr. Technical Content Writer</h4>
                    <p className="text-xs font-mono text-[#E8461E]">BJIT • 2021 – 2025</p>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 font-semibold self-start sm:self-auto">
                    4 Years Excellence
                  </span>
                </div>
              </TiltCard>

              <TiltCard maxTilt={3}>
                <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Sr. Medical Documentation Specialist</h4>
                    <p className="text-xs font-mono text-[#E8461E]">Augmedix BD • 2019 – 2021</p>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 font-semibold self-start sm:self-auto">
                    95–100% Clinical Accuracy
                  </span>
                </div>
              </TiltCard>
            </div>

            {/* Stats Grid */}
            <div className="about-stats">
              {PROFILE_DATA.stats.map((stat, i) => (
                <TiltCard key={i} maxTilt={5}>
                  <div className="about-stat">
                    <div className="about-stat-value">{stat.value}</div>
                    <div className="about-stat-label">{stat.label}</div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER CTA ─── */}
      <section className="footer-cta relative z-10" id="contact">
        <p className="services-eyebrow">— Let's Create</p>
        <h2>Something <span className="accent">Great</span></h2>
        <p>Have an ambitious project, an open engineering role, or a technical inquiry? Let's build something that makes an impact.</p>

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

      <div className="footer-bar flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto relative z-10">
        <span>© {new Date().getFullYear()} Mohammad Ashikur Rahman — Built with React 19, TypeScript & Tailwind CSS 4</span>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#E8461E] font-mono transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </div>
  );
};
