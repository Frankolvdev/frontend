"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { landingAssets } from "@/config/landing-assets";
import styles from "./luxe-landing.module.css";

function Icon({ children }: { children: React.ReactNode }) {
  return <span className={styles.icon}>{children}</span>;
}

export function LuxeLanding() {
  const [activeLook, setActiveLook] = useState(1);
  const [compare, setCompare] = useState(48);
  const selectedLook = useMemo(
    () => landingAssets.looks[activeLook],
    [activeLook],
  );

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.ambient} />
        <div className={styles.grid} />

        <div className={styles.heroCopy}>
          <div className={styles.kicker}>
            <span />
            AI VIRTUAL TRY-ON
          </div>

          <h1>
            See yourself
            <br />
            in any <strong>outfit.</strong>
          </h1>

          <p>
            Advanced AI that transforms fashion visualization into a fast,
            cinematic and deeply personal experience.
          </p>

          <div className={styles.heroActions}>
            <Link href="/register" className={styles.primaryAction}>
              Start trying now <span>↗</span>
            </Link>
            <a href="#experience" className={styles.secondaryAction}>
              <span className={styles.play}>▶</span>
              Watch the experience
            </a>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              {landingAssets.looks.map((look) => (
                <img key={look.id} src={look.image} alt="" />
              ))}
            </div>
            <div>
              <strong>Made for creators and brands</strong>
              <span>Fast, private and visually consistent.</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.orbit} />
          <img
            className={styles.heroImage}
            src={landingAssets.hero}
            alt="AI fashion model preview"
          />
          <div className={styles.heroShade} />

          <div className={styles.fitScore}>
            <span>AI FIT SCORE</span>
            <strong>98.6%</strong>
            <small>PERFECT MATCH</small>
          </div>

          <div className={styles.liveDot}>
            <i />
            LIVE ENGINE
          </div>
        </div>

        <div className={styles.tryOnWidget}>
          <div className={styles.widgetHeader}>
            <div>
              <span>LIVE TRY-ON</span>
              <strong>Preview Studio</strong>
            </div>
            <div className={styles.status}><i /> Real-time</div>
          </div>

          <div className={styles.compare}>
            <img src={landingAssets.looks[2].image} alt="Before outfit" />
            <div
              className={styles.compareAfter}
              style={{ width: `${compare}%` }}
            >
              <img src={selectedLook.image} alt="After outfit" />
            </div>
            <span className={styles.compareHandle} style={{ left: `${compare}%` }}>↔</span>
            <input
              type="range"
              min="8"
              max="92"
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
              aria-label="Compare before and after"
            />
            <div className={styles.compareLabels}>
              <span>BEFORE</span>
              <span>AFTER</span>
            </div>
          </div>

          <div className={styles.lookSelector}>
            {landingAssets.looks.map((look, index) => (
              <button
                type="button"
                key={look.id}
                onClick={() => setActiveLook(index)}
                className={index === activeLook ? styles.activeLook : ""}
                aria-label={`Select ${look.label} look`}
              >
                <img src={look.image} alt="" />
              </button>
            ))}
          </div>

          <div className={styles.fitControls}>
            {[
              ["Fit", "72%"],
              ["Length", "61%"],
              ["Silhouette", "83%"],
            ].map(([name, value]) => (
              <div key={name}>
                <span>{name}</span>
                <div><i style={{ width: value }} /></div>
              </div>
            ))}
          </div>

          <button type="button" className={styles.generateButton}>
            Generate look <span>✦</span>
          </button>
        </div>

        <div className={styles.heroMetrics}>
          <div><Icon>◎</Icon><strong>Ultra</strong><span>Visual quality</span></div>
          <div><Icon>⚡</Icon><strong>Fast</strong><span>Processing flow</span></div>
          <div><Icon>◇</Icon><strong>Private</strong><span>Secure assets</span></div>
          <div><Icon>∞</Icon><strong>Flexible</strong><span>Any campaign</span></div>
        </div>
      </section>

      <section className={styles.brandRail}>
        <span>FASHION</span><i>✦</i><span>CREATORS</span><i>✦</i>
        <span>ECOMMERCE</span><i>✦</i><span>AGENCIES</span><i>✦</i>
        <span>CAMPAIGNS</span><i>✦</i><span>FASHION</span><i>✦</i>
      </section>

      <section className={styles.experience} id="experience">
        <div className={styles.experienceIntro}>
          <span>NEXT-GENERATION FASHION EXPERIENCE</span>
          <h2>
            Powered by AI.
            <br />
            Designed for <em>you.</em>
          </h2>
          <p>
            A visual system that understands composition, clothing, pose and
            presentation while keeping the experience simple.
          </p>

          <div className={styles.miniMetrics}>
            <div><strong>01</strong><span>Upload</span></div>
            <div><strong>02</strong><span>Choose</span></div>
            <div><strong>03</strong><span>Generate</span></div>
            <div><strong>04</strong><span>Export</span></div>
          </div>
        </div>

        <div className={styles.lookDeck}>
          {landingAssets.looks.map((look, index) => (
            <article
              key={look.id}
              style={{ "--index": index } as React.CSSProperties}
            >
              <img src={look.image} alt={`${look.label} fashion look`} />
              <div>
                <span>0{index + 1}</span>
                <strong>{look.label}</strong>
              </div>
            </article>
          ))}
          <div className={styles.deckOrbit}>
            <span>AI</span>
          </div>
        </div>
      </section>

      <section className={styles.workflow}>
        <div className={styles.workflowBackdrop} />
        <div className={styles.workflowHeading}>
          <span>HOW IT WORKS</span>
          <h2>From photo to finished look.</h2>
        </div>

        <div className={styles.steps}>
          {[
            ["01", "Upload", "Add the person and garment images."],
            ["02", "Configure", "Choose mode, fit and visual preferences."],
            ["03", "Generate", "The platform processes the final result."],
            ["04", "Review", "Compare, save and download the image."],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div className={styles.stepNode}>✦</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.immersive}>
        <div className={styles.immersiveImage}>
          <img src={landingAssets.experience} alt="Immersive AI fashion interface" />
          <div className={styles.scanLine} />
        </div>

        <div className={styles.immersiveCopy}>
          <span>THE EXPERIENCE</span>
          <h2>Visual technology with a human pulse.</h2>
          <p>
            Rich motion, responsive controls and editorial imagery turn a
            technical process into a premium creative tool.
          </p>
          <ul>
            <li>Real-time visual comparison</li>
            <li>Simple image replacement system</li>
            <li>Responsive cinematic interface</li>
            <li>SFW fashion presentation</li>
          </ul>
          <Link href="/register">Enter the studio <span>↗</span></Link>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalGlow} />
        <span>YOUR NEXT LOOK STARTS HERE</span>
        <h2>Ready to see the magic?</h2>
        <p>Build your first AI-powered fashion experience.</p>
        <Link href="/register">Get started now <span>↗</span></Link>
      </section>
    </main>
  );
}
