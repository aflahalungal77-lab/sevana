
"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  PhoneCall,
  CarFront,
  Droplet,
  HeartPulse,
  Wrench,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Building2,
  Ambulance,
  Sparkles,
  Languages,
} from "lucide-react";

import Link from "next/link";
import { ServiceCard } from "@/components/service-card";

type Language = "ml" | "en";

const translations = {
  en: {
    about: "Aamugam",
    community: "Made for you",
    heroTag: "HERE FOR OUR COMMUNITY",
    heroTitle: "Local help.",
    heroSubtitle: "When you need it.",
    heroDescription: "Trusted local services around Meenarkuzhi, all in one place.",
    sectionEyebrow: "YOUR COMMUNITY SERVICES",
    sectionTitle: "How can we help?",
    sectionDescription: "Everything you need, just a tap away.",
    all: "All",
    hotlines: "Hotlines",
    transport: "Taxi & Travel",
    findDonor: "Find a Donor",
    needBlood: "Need Blood?",
    workers: "Local Workers",
    emergencyTitle: "Need urgent help?",
    emergencyDescription: "Find emergency contacts quickly.",
    charity: "MEENARKUZHI SHIHAB THANGAL CHARITY",
    charityTitle: "All services in one place.",
    charityDescription: "Find useful local services and contacts in your community.",
    explore: "Explore all services",
    exploreDescription: "Discover available services",
    aboutSevana: "About Sevana",
    aboutDescription: "Learn about our platform",
    footer: "Please verify service information before relying on it.",
  },
  ml: {
    about: "ആമുഖം",
    community: "നിങ്ങൾക്കായി",
    heroTag: "നമ്മുടെ നാടിനൊപ്പം",
    heroTitle: "പ്രാദേശിക സഹായം.",
    heroSubtitle: "ആവശ്യമുള്ളപ്പോൾ, എളുപ്പത്തിൽ.",
    heroDescription: "മീനാർകുഴിയിലെയും സമീപ പ്രദേശങ്ങളിലെയും സേവനങ്ങൾ ഒരിടത്ത്.",
    sectionEyebrow: "നമ്മുടെ നാട്ടിലെ സേവനങ്ങൾ",
    sectionTitle: "എന്താണ് ആവശ്യം?",
    sectionDescription: "നിങ്ങൾക്ക് വേണ്ട സേവനങ്ങൾ ഒരു ടാപ്പിൽ.",
    all: "എല്ലാം",
    hotlines: "അടിയന്തര നമ്പറുകൾ",
    transport: "ടാക്സി & യാത്ര",
    findDonor: "രക്തദാതാക്കളെ കണ്ടെത്താം",
    needBlood: "രക്തം ആവശ്യമുണ്ടോ?",
    workers: "പ്രാദേശിക തൊഴിലാളികൾ",
    emergencyTitle: "അടിയന്തര സഹായം വേണോ?",
    emergencyDescription: "അടിയന്തര കോൺടാക്ടുകൾ വേഗത്തിൽ കണ്ടെത്താം.",
    charity: "മീനാർകുഴി ശിഹാബ് തങ്ങൾ ചാരിറ്റി",
    charityTitle: "എല്ലാ സേവനങ്ങളും ഒരിടത്ത്.",
    charityDescription: "നമ്മുടെ നാട്ടിലെ സേവനങ്ങളും കോൺടാക്ടുകളും കണ്ടെത്താം.",
    explore: "എല്ലാ സേവനങ്ങളും കാണുക",
    exploreDescription: "ലഭ്യമായ സേവനങ്ങൾ കണ്ടെത്താം",
    aboutSevana: "സേവനയെക്കുറിച്ച്",
    aboutDescription: "നമ്മുടെ പ്ലാറ്റ്‌ഫോമിനെ അറിയാം",
    footer: "സേവനം ഉപയോഗിക്കുന്നതിന് മുമ്പ് വിവരങ്ങൾ ഉറപ്പുവരുത്തുക.",
  },
} as const;

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [languageLoaded, setLanguageLoaded] = useState(false);

  const location =
    process.env.NEXT_PUBLIC_APP_LOCATION || "Meenarkuzhi, Malappuram";

  useEffect(() => {
    const savedLanguage = localStorage.getItem("sevana-language");

    if (savedLanguage === "ml" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    setLanguageLoaded(true);
  }, []);

  function toggleLanguage() {
    const nextLanguage: Language = language === "en" ? "ml" : "en";

    setLanguage(nextLanguage);
    localStorage.setItem("sevana-language", nextLanguage);
  }

  const t = translations[language];

  return (
    <main className="page home-page sevana-home" lang={language}>

      {/* Header */}
      <header className="topbar home-topbar">
        <Link href="/" className="brand" aria-label="Sevana home">
          <img
            src="/images/logo.png"
            alt="Sevana logo"
            width={24}
            height={24}
          />

          <span>
            sevana<span className="brand-dot">.</span>
          </span>
        </Link>

        <div className="home-header-actions">
          <button
            type="button"
            className="sevana-language-toggle"
            onClick={toggleLanguage}
            aria-label={
              language === "en"
                ? "Switch to Malayalam"
                : "Switch to English"
            }
            aria-pressed={language === "ml"}
            disabled={!languageLoaded}
          >
            <Languages size={16} />
            <span>{language === "en" ? "മലയാളം" : "English"}</span>
          </button>

          <Link href="/profile" className="home-about-button">
            <Building2 size={17} />
            <span>{t.about}</span>
          </Link>
        </div>
      </header>

      {/* Location */}
      <div className="sevana-location-row">
        <div className="location-pill home-location">
          <MapPin size={15} />
          <span>{location}</span>
          <span className="location-dot" />
        </div>

        <span className="sevana-community-tag">
          <Sparkles size={13} />
          {t.community}
        </span>
      </div>

      {/* Hero */}
      <section className="welcome-block home-hero sevana-compact-hero">
        <div className="sevana-hero-copy">
          <span className="sevana-hero-tag">
            <HeartPulse size={13} />
            {t.heroTag}
          </span>

          <h2>
            {t.heroTitle}
            <br />
            <span>{t.heroSubtitle}</span>
          </h2>

          <p>{t.heroDescription}</p>
        </div>

        <div className="sevana-hero-symbol" aria-hidden="true">
          <ShieldCheck size={34} strokeWidth={1.7} />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-section home-services-section sevana-main-actions">
        <div className="home-section-heading sevana-actions-heading">
          <div>
            <p className="eyebrow">{t.sectionEyebrow}</p>
            <h1>{t.sectionTitle}</h1>
            <p className="home-section-description">
              {t.sectionDescription}
            </p>
          </div>

          <Link href="/services" className="home-view-all">
            {t.all} <ChevronRight size={17} />
          </Link>
        </div>

        <div className="quick-grid home-quick-grid sevana-service-grid">
          <div className="home-action home-action-hotline">
            <ServiceCard
              href="/hotlines"
              title={t.hotlines}
              Icon={PhoneCall}
              tone="rose"
            />
          </div>

          <div className="home-action home-action-transport">
            <ServiceCard
              href="/transport"
              title={t.transport}
              Icon={CarFront}
              tone="amber"
            />
          </div>

          <div className="home-action home-action-donor">
            <ServiceCard
              href="/donors"
              title={t.findDonor}
              Icon={Droplet}
              tone="rose"
            />
          </div>

          <div className="home-action home-action-blood">
            <ServiceCard
              href="/blood-request"
              title={t.needBlood}
              Icon={HeartPulse}
              tone="rose"
            />
          </div>

          <div className="home-action home-action-workers">
            <ServiceCard
              href="/workers"
              title={t.workers}
              Icon={Wrench}
              tone="blue"
            />
          </div>
        </div>
      </section>

      {/* Emergency Help */}
      <Link href="/hotlines" className="home-emergency-banner">
        <span className="home-emergency-icon">
          <Ambulance size={24} />
        </span>

        <span className="home-emergency-content">
          <strong>{t.emergencyTitle}</strong>
          <small>{t.emergencyDescription}</small>
        </span>

        <span className="home-emergency-arrow">
          <ArrowRight size={19} />
        </span>
      </Link>

      {/* Community Information */}
      <section className="trust-strip home-trust-strip">
        <span className="home-trust-icon">
          <ShieldCheck size={22} />
        </span>

        <div className="home-trust-content">
          <p className="home-trust-label">{t.charity}</p>
          <h3>{t.charityTitle}</h3>
          <p>{t.charityDescription}</p>
        </div>
      </section>

      {/* Additional Navigation */}
      <section className="small-links home-small-links">
        <Link href="/services">
          <span className="home-link-icon">
            <Building2 size={19} />
          </span>

          <span className="home-link-text">
            <strong>{t.explore}</strong>
            <small>{t.exploreDescription}</small>
          </span>

          <ArrowRight size={18} className="home-link-arrow" />
        </Link>

        <Link href="/profile">
          <span className="home-link-icon">
            <Building2 size={19} />
          </span>

          <span className="home-link-text">
            <strong>{t.aboutSevana}</strong>
            <small>{t.aboutDescription}</small>
          </span>

          <ArrowRight size={18} className="home-link-arrow" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer-note home-footer-note">
        <ShieldCheck size={14} />
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
