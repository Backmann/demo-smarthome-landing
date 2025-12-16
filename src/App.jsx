// src/App.jsx
import './index.css';

function App() {
  return (
    <div className="demo">
      <header className="demo-nav">
        <div className="demo-nav-inner">
          <div className="demo-brand">
            <div className="demo-mark" aria-hidden="true" />
            <span className="demo-brand-text">SmartHome</span>
          </div>

          <nav className="demo-links" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="demo-cta demo-cta--small" href="#pricing">
            Get started
          </a>
        </div>
      </header>

      <main className="demo-main">
        <section className="demo-hero" id="top">
          <div className="demo-hero-grid">
            <div className="demo-hero-copy">
              <p className="demo-badge">Premium smart-home service</p>
              <h1 className="demo-h1">
                Control your home with
                <span className="demo-accent"> clarity</span> and
                <span className="demo-accent"> speed</span>.
              </h1>
              <p className="demo-lead">
                A modern one-page landing built to convert: clear value proposition, feature
                highlights, social proof and a strong call-to-action.
              </p>

              <div className="demo-hero-actions">
                <a className="demo-cta" href="#pricing">
                  Request a demo
                </a>
                <a className="demo-cta demo-cta--ghost" href="#features">
                  See features
                </a>
              </div>

              <div className="demo-proof">
                <div className="demo-proof-item">
                  <div className="demo-proof-num">99.9%</div>
                  <div className="demo-proof-label">uptime</div>
                </div>
                <div className="demo-proof-item">
                  <div className="demo-proof-num">&lt; 1s</div>
                  <div className="demo-proof-label">response</div>
                </div>
                <div className="demo-proof-item">
                  <div className="demo-proof-num">30+</div>
                  <div className="demo-proof-label">integrations</div>
                </div>
              </div>
            </div>

            <div className="demo-hero-card" aria-label="Preview">
              <div className="demo-hero-card-top">
                <span className="demo-dot" />
                <span className="demo-dot" />
                <span className="demo-dot" />
              </div>

              <div className="demo-hero-widget">
                <div className="demo-hero-widget-row">
                  <div>
                    <div className="demo-hero-widget-title">Home overview</div>
                    <div className="demo-hero-widget-sub">Living room · Kitchen · Office</div>
                  </div>
                  <div className="demo-pill">Online</div>
                </div>

                <div className="demo-stats">
                  <div className="demo-stat">
                    <div className="demo-stat-label">Energy</div>
                    <div className="demo-stat-value">2.1 kWh</div>
                  </div>
                  <div className="demo-stat">
                    <div className="demo-stat-label">Security</div>
                    <div className="demo-stat-value">Armed</div>
                  </div>
                  <div className="demo-stat">
                    <div className="demo-stat-label">Climate</div>
                    <div className="demo-stat-value">21°</div>
                  </div>
                </div>

                <div className="demo-mini-cards">
                  <div className="demo-mini">
                    <div className="demo-mini-k">Automation</div>
                    <div className="demo-mini-v">6 rules</div>
                  </div>
                  <div className="demo-mini">
                    <div className="demo-mini-k">Scenes</div>
                    <div className="demo-mini-v">Night mode</div>
                  </div>
                  <div className="demo-mini">
                    <div className="demo-mini-k">Alerts</div>
                    <div className="demo-mini-v">2 new</div>
                  </div>
                </div>
              </div>

              <div className="demo-hero-glow" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="demo-section" id="features">
          <div className="demo-section-head">
            <h2 className="demo-h2">Features that sell</h2>
            <p className="demo-sub">
              Simple structure, premium glossy style, and content blocks designed for conversion.
            </p>
          </div>

          <div className="demo-grid">
            <article className="demo-card">
              <h3 className="demo-h3">Clear value proposition</h3>
              <p className="demo-p">
                Visitors understand what the service does in seconds — no noise, just benefits.
              </p>
            </article>

            <article className="demo-card">
              <h3 className="demo-h3">Responsive by design</h3>
              <p className="demo-p">
                Layout stays clean across desktop, tablet and mobile, with readable typography.
              </p>
            </article>

            <article className="demo-card">
              <h3 className="demo-h3">CTA-first sections</h3>
              <p className="demo-p">
                Buttons and anchors guide users through the page to the pricing and contact action.
              </p>
            </article>

            <article className="demo-card">
              <h3 className="demo-h3">Performance foundation</h3>
              <p className="demo-p">
                Lightweight UI patterns and clean markup suitable for SEO basics and fast load time.
              </p>
            </article>
          </div>
        </section>

        <section className="demo-section" id="how">
          <div className="demo-section-head">
            <h2 className="demo-h2">How it works</h2>
            <p className="demo-sub">
              A short, scannable flow — typical for high-converting landings.
            </p>
          </div>

          <div className="demo-steps">
            <div className="demo-step">
              <div className="demo-step-num">01</div>
              <div>
                <div className="demo-step-title">Connect devices</div>
                <div className="demo-step-text">
                  Link your lights, climate and security in one dashboard.
                </div>
              </div>
            </div>

            <div className="demo-step">
              <div className="demo-step-num">02</div>
              <div>
                <div className="demo-step-title">Create automations</div>
                <div className="demo-step-text">
                  Build simple rules for routines and energy savings.
                </div>
              </div>
            </div>

            <div className="demo-step">
              <div className="demo-step-num">03</div>
              <div>
                <div className="demo-step-title">Monitor & optimise</div>
                <div className="demo-step-text">Get insights, alerts and reports anytime.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="demo-section" id="pricing">
          <div className="demo-section-head">
            <h2 className="demo-h2">Pricing</h2>
            <p className="demo-sub">A clean pricing block with a “most popular” highlight.</p>
          </div>

          <div className="demo-pricing">
            <article className="demo-price">
              <h3 className="demo-h3">Starter</h3>
              <p className="demo-p">For small apartments and basic automations.</p>
              <div className="demo-price-num">€9</div>
              <div className="demo-price-note">per month</div>
              <ul className="demo-list">
                <li>Up to 10 devices</li>
                <li>Basic scenes</li>
                <li>Email support</li>
              </ul>
              <a className="demo-cta demo-cta--ghost" href="#faq">
                Learn more
              </a>
            </article>

            <article className="demo-price demo-price--featured">
              <div className="demo-best">BEST!</div>
              <h3 className="demo-h3">Business</h3>
              <p className="demo-p">For homes with multiple rooms and higher reliability needs.</p>
              <div className="demo-price-num">€19</div>
              <div className="demo-price-note">per month</div>
              <ul className="demo-list">
                <li>Up to 50 devices</li>
                <li>Advanced automations</li>
                <li>Priority support</li>
              </ul>
              <a className="demo-cta" href="#top">
                Request a demo
              </a>
            </article>

            <article className="demo-price">
              <h3 className="demo-h3">Enterprise</h3>
              <p className="demo-p">For buildings, teams and custom integrations.</p>
              <div className="demo-price-num">Custom</div>
              <div className="demo-price-note">let’s talk</div>
              <ul className="demo-list">
                <li>Unlimited devices</li>
                <li>Custom API</li>
                <li>SLA options</li>
              </ul>
              <a className="demo-cta demo-cta--ghost" href="#faq">
                Contact sales
              </a>
            </article>
          </div>
        </section>

        <section className="demo-section" id="faq">
          <div className="demo-section-head">
            <h2 className="demo-h2">FAQ</h2>
            <p className="demo-sub">Short answers — keep it crisp.</p>
          </div>

          <div className="demo-faq">
            <details className="demo-faq-item">
              <summary>Is this a real product?</summary>
              <p>
                This is a demo landing for portfolio purposes — showing structure, UI quality and
                conversion-friendly layout.
              </p>
            </details>

            <details className="demo-faq-item">
              <summary>Can this be expanded into a full app?</summary>
              <p>
                Yes. The layout and sections are a clean foundation for connecting a real backend,
                analytics and marketing flows.
              </p>
            </details>

            <details className="demo-faq-item">
              <summary>Is it responsive?</summary>
              <p>Yes — the layout is designed to remain readable and consistent on all screens.</p>
            </details>
          </div>
        </section>

        <footer className="demo-footer">
          <div className="demo-footer-inner">
            <span>Demo project for portfolio · Lionel Backmann</span>
            <a href="#top">Back to top</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
