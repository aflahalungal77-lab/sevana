
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
} from "lucide-react";

import Link from "next/link";
import { ServiceCard } from "@/components/service-card";

export default function HomePage() {
  const location =
    process.env.NEXT_PUBLIC_APP_LOCATION || "Meenarkuzhi, Malappuram";

  return (
    <main className="page home-page sevana-home">

      {/* Header */}
      <header className="topbar home-topbar">
        <Link href="/" className="brand" aria-label="Sevana home">
         
            <img src="/images/logo.png" alt="Sevana logo" width={24} height={24} />
      

          <span>
            sevana<span className="brand-dot">.</span>
          </span>
        </Link>

        <Link href="/profile" className="home-about-button">
          <Building2 size={17} />
          <span>Aamugam</span>
        </Link>
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
          Made for you
        </span>
      </div>

      {/* Compact Hero */}
      <section className="welcome-block home-hero sevana-compact-hero">

        <div className="sevana-hero-copy">
          <span className="sevana-hero-tag">
            <HeartPulse size={13} />
            HERE FOR OUR COMMUNITY
          </span>

          <h2>
            Local help.
            <br />
            <span>When you need it.</span>
          </h2>

          <p>
            Trusted local services around Meenarkuzhi, all in one place.
          </p>
        </div>

        <div className="sevana-hero-symbol" aria-hidden="true">
          <ShieldCheck size={34} strokeWidth={1.7} />
        </div>

      </section>


      {/* Quick Actions — Main Focus */}
      <section className="quick-section home-services-section sevana-main-actions">

        <div className="home-section-heading sevana-actions-heading">
          <div>
            <p className="eyebrow">YOUR COMMUNITY SERVICES</p>
            <h1>How can we help?</h1>
            <p className="home-section-description">
              Everything you need, just a tap away.
            </p>
          </div>

          <Link href="/services" className="home-view-all">
            All <ChevronRight size={17} />
          </Link>
        </div>

        <div className="quick-grid home-quick-grid sevana-service-grid">

          <div className="home-action home-action-hotline">
            <ServiceCard
              href="/hotlines"
              title="Hotlines"
              Icon={PhoneCall}
              tone="rose"
            />
          </div>

          <div className="home-action home-action-transport">
            <ServiceCard
              href="/transport"
              title="Taxi & Travel"
              Icon={CarFront}
              tone="amber"
            />
          </div>

          <div className="home-action home-action-donor">
            <ServiceCard
              href="/donors"
              title="Find a Donor"
              Icon={Droplet}
              tone="rose"
            />
          </div>

          <div className="home-action home-action-blood">
            <ServiceCard
              href="/blood-request"
              title="Need Blood?"
              Icon={HeartPulse}
              tone="rose"
            />
          </div>

          <div className="home-action home-action-workers">
            <ServiceCard
              href="/workers"
              title="Local Workers"
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
          <strong>Need urgent help?</strong>
          <small>Find emergency contacts quickly.</small>
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
          <p className="home-trust-label">MEENARKUZHI SHIHAB THANGAL CHARITY</p>
          <h3>Sevanangal ellam oridathil.</h3>
          <p>
            Find useful local services and contacts in your community.
          </p>
        </div>

      </section>

      {/* Additional Navigation */}
      <section className="small-links home-small-links">

        <Link href="/services">
          <span className="home-link-icon">
            <Building2 size={19} />
          </span>

          <span className="home-link-text">
            <strong>Explore all services</strong>
            <small>Discover available services</small>
          </span>

          <ArrowRight size={18} className="home-link-arrow" />
        </Link>

        <Link href="/profile">
          <span className="home-link-icon">
            <Building2 size={19} />
          </span>

          <span className="home-link-text">
            <strong>About Sevana</strong>
            <small>Learn about our platform</small>
          </span>

          <ArrowRight size={18} className="home-link-arrow" />
        </Link>

      </section>

      {/* Footer */}
      <footer className="footer-note home-footer-note">
        <ShieldCheck size={14} />
        <span>
          Please verify service information before relying on it.
        </span>
      </footer>

    </main>
  );
}
