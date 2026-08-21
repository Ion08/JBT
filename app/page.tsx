"use client";
const html = `<a class="skip" href="#main">Skip to content</a>

<header class="site-nav">
  <div class="container nav-inner">
    <a class="brand" href="#home" aria-label="JBT home" style="gap:14px">
      <img src="JBT-Logo.svg" alt="JBT" width="84" height="56">
      <span style="width:1px;height:28px;background:var(--line2);display:block" aria-hidden="true"></span>
      <img src="rr-logo.png" alt="RoboRangers" width="43" height="30" style="height:21px;width:auto;filter:grayscale(1) brightness(0) invert(1)">
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu">MENU</button>
    <nav class="nav-links" id="nav-menu" aria-label="Main">
      <a href="#about">About</a>
      <a href="#roborangers">RoboRangers</a>
      <a href="#team">Team</a>
      <a href="#bot">JB-01</a>
      <a href="#examples">Examples</a>
      <a href="#engineering">Engineering</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#media">Media</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<main id="main">

<section class="hero" id="home">
  <div class="container" style="max-width:72rem">
    <div class="hero-6xl">
      <div class="hero-copy">
        <p class="kicker hero-anim hero-anim-1">Moldova · Combat Robotics</p>
        <h1 class="hero-anim hero-anim-2" style="font:700 clamp(3.2rem,7vw,5.2rem)/.9 var(--disp);letter-spacing:-.04em;margin:0 0 12px">JBT</h1>
        <p class="hero-tagline hero-anim hero-anim-3" style="font:600 clamp(1.4rem,2.8vw,1.9rem)/1 var(--disp);margin-bottom:16px">Built to fight.<br>Designed to win.</p>
        <p class="hero-lede hero-anim hero-anim-4" style="color:var(--muted);max-width:42ch;margin-bottom:22px">Three builders from RoboRangers. Now combat robotics.</p>
        <div class="hero-actions hero-anim hero-anim-5">
          <a class="btn" href="#bot">See JB-01</a>
          <a class="btn btn-ghost" href="#sponsors">Sponsor</a>
        </div>
        <div class="hero-powered hero-anim hero-anim-6" style="display:flex;align-items:center;gap:10px;margin-top:28px;font:400 .62rem var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--muted)">
          <img src="rr-logo.png" alt="RoboRangers" style="height:18px;width:auto;filter:brightness(0) invert(1)">
          <span>Powered by RoboRangers</span>
        </div>
      </div>
      <div class="hero-media hero-anim hero-anim-3">
        <img src="jbt-3x.png" alt="Ion, Bogdan and Anatolii — JBT" loading="eager" style="width:100%;height:auto;display:block;border:1px solid var(--line)">
      </div>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <p class="kicker">About</p>
    <h2>JBT — combat robotics from Moldova.</h2>
    <div class="cols">
      <p>JBT = Johnny, Bogdi, Tony. Three RoboRangers building combat robots.</p>
    </div>
  </div>
</section>

<section id="roborangers">
  <div class="container">
    <p class="kicker">RoboRangers → JBT · Since 2017</p>
    <h2>Started in FIRST. Now combat.</h2>
    <p style="margin-top:20px;color:var(--muted);max-width:62ch">From RoboRangers, 4th generation team at Tekwill Academy Kids.</p>
    <figure class="viewer" style="margin-top:32px;padding:0;overflow:hidden">
      <img src="roborangers_team.JPG" alt="RoboRangers team" loading="lazy" style="width:100%;height:auto;display:block">
      <figcaption style="padding:12px 16px;font:400 .65rem var(--mono);letter-spacing:.12em;color:var(--faint);border-top:1px solid var(--line)">ROBORANGERS — Tekwill Academy Kids</figcaption>
    </figure>
    <div style="margin-top:32px;display:flex;gap:28px;flex-wrap:wrap;font:400 .78rem var(--mono);color:var(--muted)">
      <span><strong class="hl" style="color:var(--text)">1,000</strong> kids/year</span>
      <span><strong class="hl" style="color:var(--text)">4</strong> generations</span>
      <span><strong class="hl" style="color:var(--text)">5</strong> golds at FIRST Global</span>
    </div>
    <ol class="timeline" style="margin-top:32px">
      <li><span class="tl-date">2017</span><h3>Moldova enters FIRST Global</h3></li>
      <li><span class="tl-date">2019 · Dubai</span><h3>3 medals</h3></li>
      <li><span class="tl-date">2023 · Singapore · 190 teams</span><h3>Gold Innovation + Silver Energy</h3></li>
      <li><span class="tl-date">2024 · Athens · 193 teams</span><h3>2 Golds — World Champion Alliance</h3></li>
      <li><span class="tl-date">2025 · Panama · 191 teams</span><h3>Gold — 5th in a row</h3></li>
      <li><span class="tl-date">2026 · Istanbul</span><h3>Inspire Award 2nd — first for Moldova (FTC)</h3></li>
      <li><span class="tl-date">2026 · Hong Kong</span><h3>FLL 3rd + Robot Performance Finalist</h3></li>
    </ol>
    <div style="display:flex;align-items:center;gap:32px;margin-top:48px;flex-wrap:wrap">
      <img src="rr-logo.png" alt="RoboRangers" loading="lazy" style="height:64px;width:auto;filter:grayscale(1) brightness(0) invert(1)">
      <span style="font:500 1.6rem var(--mono);color:var(--accent)">→</span>
      <img src="JBT-Logo.svg" alt="JBT" loading="lazy" style="height:96px;width:auto;filter:brightness(0) invert(1)">
    </div>
  </div>
</section>

<section id="team">
  <div class="container">
    <p class="kicker">Team</p>
    <h2>Three builders. One bot.</h2>
    <div class="grid-3">
      <article class="card">
        <div class="portrait">
          <img src="Ion_pavelescu.jpg" alt="Ion Pavelescu" loading="lazy">
        </div>
        <h3>Ion Pavelescu</h3>
        <p class="role">Engineer · Mentor</p>
        <p class="skills">Robotics · Programming · AI</p>
        <p class="bio">FIRST Global gold. Mentored 20+ teams. Ran events for 800+ participants. FLL, FTC, FIRST Global, IOAI.</p>
      </article>
      <article class="card">
        <div class="portrait">
          <img src="Bogdan_Moraru.JPG" alt="Bogdan Moraru" loading="lazy" style="transform:scale(1.6)">
        </div>
        <h3>Bogdan Moraru <span style="color:var(--muted);font-weight:400">· Bogdi</span></h3>
        <p class="role">Software · Builder</p>
        <p class="skills">Programming · Robotics · Design</p>
        <p class="bio">Builds RoboRangers, Thaloss, JoBoTo. Code, CAD, electronics to working robots.</p>
      </article>
      <article class="card">
        <div class="portrait">
          <img src="Anatolii_Suharschi.JPG" alt="Anatolii Suharschi" loading="lazy">
        </div>
        <h3>Anatolii Suharschi</h3>
        <p class="role">Engineer · Maker</p>
        <p class="skills">CAD · Mechanical · AI</p>
        <p class="bio">Builds RoboRangers, Thaloss, JoBoTo. CAD, mechanics, programming.</p>
      </article>
    </div>
  </div>
</section>

<section id="bot">
  <div class="container">
    <p class="kicker">JB-01</p>
    <h2>Our brand. Our shirts.</h2>
    <p class="lede">JB-01 on the merch while we build the bot. Every tee funds parts and arena time.</p>
    <div class="bot-layout">
      <div class="viewer">
        <span class="hud hud-tl">DROP 01</span>
        <span class="hud hud-br">#8A2BE2</span>
        <img src="T-shirts.PNG" alt="JBT t-shirts — Drop 01" loading="lazy" style="width:100%;height:auto;display:block">
      </div>
      <dl class="specs">
        <div class="spec"><dt>Drop</dt><dd>01 · Pre-order</dd></div>
        <div class="spec"><dt>Fit</dt><dd>Unisex · 240gsm</dd></div>
        <div class="spec"><dt>Colors</dt><dd>Black / White</dd></div>
        <div class="spec"><dt>Sizes</dt><dd>S — XXL</dd></div>
        <div class="spec"><dt>Print</dt><dd>Front & sleeve</dd></div>
      </dl>
    </div>
  </div>
</section>

<section id="examples">
  <div class="container">
    <p class="kicker">Reference</p>
    <h2>Three bots we study.</h2>
    <p class="lede">Draco GLB, < 2 MB total. Drag to rotate.</p>
    <div class="v3d-grid">
      <article class="card v3d-card" style="padding:0;overflow:hidden">
        <div class="v3d" data-src="/yeetus.glb" data-size="YEETUS 676KB" data-preview="yeetus.png"></div>
        <div style="padding:18px">
          <h3 style="font:600 1.05rem var(--disp);margin-bottom:6px">Yeetus V3</h3>
          <p class="role" style="margin-bottom:10px">Beetleweight · Overhead saw</p>
          <p class="bio" style="margin-bottom:12px">Carbon arm, high reach. Reference for weapon geometry.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap"><a class="v3d-btn v3d-btn-solid" href="beetleweight-combat-robot-yeetus-v3-1.snapshot.2.zip" download>ZIP</a></div>
        </div>
      </article>
      <article class="card v3d-card" style="padding:0;overflow:hidden">
        <div class="v3d" data-src="/kintsurugi.glb" data-size="KINTSURUGI 935KB"></div>
        <div style="padding:18px">
          <h3 style="font:600 1.05rem var(--disp);margin-bottom:6px">Kintsurugi V1</h3>
          <p class="role" style="margin-bottom:10px">Beetleweight · 4WD vert</p>
          <p class="bio" style="margin-bottom:12px">Compact 4WD vert. Reference for durability and packaging.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap"><a class="v3d-btn v3d-btn-solid" href="kintsurugi-v1-beetleweight-combat-robot-1.snapshot.1.zip" download>ZIP</a></div>
        </div>
      </article>
      <article class="card v3d-card" style="padding:0;overflow:hidden">
        <div class="v3d" data-src="/jigsaw.glb" data-size="JIGSAW 325KB"></div>
        <div style="padding:18px">
          <h3 style="font:600 1.05rem var(--disp);margin-bottom:6px">Jigsaw V1</h3>
          <p class="role" style="margin-bottom:10px">Plastic Antweight · 150g</p>
          <p class="bio" style="margin-bottom:12px">Closest to JB-01. 3D-printed, undercutter.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap"><a class="v3d-btn v3d-btn-solid" href="plastic-antweight-combat-robot-jigsaw-1.snapshot.2.zip" download>ZIP</a></div>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="engineering">
  <div class="container">
    <p class="kicker">Engineering</p>
    <h2>Design → print → test → repeat.</h2>
    <ol class="steps">
      <li><span class="step-n">01</span><h3>Design</h3><p>Weight budget + weapon.</p></li>
      <li><span class="step-n">02</span><h3>CAD</h3><p>Model and test-fit.</p></li>
      <li><span class="step-n">03</span><h3>Print</h3><p>PETG-CF chassis.</p></li>
      <li><span class="step-n">04</span><h3>Assemble</h3><p>Drive, weapon, electronics.</p></li>
      <li><span class="step-n">05</span><h3>Test</h3><p>Drive + weapon + hits.</p></li>
      <li><span class="step-n">06</span><h3>Iterate</h3><p>Break, fix, reprint.</p></li>
      <li><span class="step-n">07</span><h3>Fight</h3><p>Arena.</p></li>
    </ol>
  </div>
</section>

<section id="sponsors">
  <div class="container">
    <p class="kicker">Sponsors</p>
    <h2>Put your name on the bot. Logo on the merch.</h2>
    <div class="cols">
      <p>Your brand on the bot, pit banner, shirts, and site.</p>
    </div>
    <div class="grid-3" style="margin-top:40px">
      <article class="card" style="border-top:2px solid var(--line2)">
        <p class="role">Supporter · €50+</p>
        <h3>Wall of Fame</h3>
        <p class="bio" style="margin:12px 0">Name on jbt.md + shout-out.</p>
        <ul style="list-style:none;margin:14px 0 0;padding:0;font:400 .78rem var(--mono);color:var(--muted);line-height:1.9">
          <li>→ Name on site</li>
          <li>→ Social post</li>
        </ul>
      </article>
      <article class="card" style="border-top:2px solid var(--muted)">
        <p class="role">Bronze · €150+</p>
        <h3>Pit Banner</h3>
        <p class="bio" style="margin:12px 0">Logo in pit + site.</p>
        <ul style="list-style:none;margin:14px 0 0;padding:0;font:400 .78rem var(--mono);color:var(--muted);line-height:1.9">
          <li>→ Pit banner (1.5m)</li>
          <li>→ Logo on site</li>
        </ul>
      </article>
      <article class="card" style="border-top:2px solid var(--accent)">
        <p class="role">Silver · €400+</p>
        <h3>On The Bot</h3>
        <p class="bio" style="margin:12px 0">Logo on JB-01 armor.</p>
        <ul style="list-style:none;margin:14px 0 0;padding:0;font:400 .78rem var(--mono);color:var(--muted);line-height:1.9">
          <li>→ Logo on robot</li>
          <li>→ Pit + site</li>
        </ul>
      </article>
    </div>
    <div class="grid-3" style="margin-top:1px">
      <article class="card" style="border-top:2px solid var(--accent)">
        <p class="role" style="color:var(--accent)">Gold · €800+</p>
        <h3>On The Merch</h3>
        <p class="bio" style="margin:12px 0">Logo on Drop 02 shirts + bot.</p>
        <ul style="list-style:none;margin:14px 0 0;padding:0;font:400 .78rem var(--mono);color:var(--muted);line-height:1.9">
          <li>→ Sleeve print</li>
          <li>→ Bot + pit + site</li>
          <li>→ 5 shirts</li>
        </ul>
      </article>
      <article class="card" style="border-top:2px solid #FFD700">
        <p class="role" style="color:#FFD700">Title · €2000+</p>
        <h3>Name Partner</h3>
        <p class="bio" style="margin:12px 0">JBT × Your Brand.</p>
        <ul style="list-style:none;margin:14px 0 0;padding:0;font:400 .78rem var(--mono);color:var(--muted);line-height:1.9">
          <li>→ Co-title + top plate</li>
          <li>→ Largest logos</li>
        </ul>
      </article>
      <article class="card" style="background:var(--panel);display:flex;flex-direction:column;justify-content:center">
        <h3 style="font:600 1.1rem var(--disp)">Custom?</h3>
        <p class="bio" style="margin:10px 0">Filament, CNC, transport — we tailor it.</p>
        <a href="mailto:team@jbt.md?subject=Custom%20Sponsorship%20—%20JBT" style="margin-top:14px;font:500 .7rem var(--mono);letter-spacing:.16em;color:var(--accent);text-decoration:none">TAILOR A DEAL →</a>
      </article>
    </div>
    <div style="margin-top:36px;padding:18px;border:1px solid var(--line);background:var(--panel);display:flex;gap:18px;align-items:center;flex-wrap:wrap">
      <img src="T-shirts.PNG" alt="JBT T-shirt" style="height:64px;width:auto;border:1px solid var(--line)">
      <div>
        <p style="font:600 .9rem var(--disp);margin-bottom:4px">Drop 02 — your logo could be on it.</p>
        <p style="font:400 .78rem var(--mono);color:var(--muted)">Join before Rev D.</p>
      </div>
    </div>
    <div style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap">
      <a class="btn btn-big" href="mailto:team@jbt.md?subject=Sponsorship%20—%20JBT">Put logo on bot</a>
      <a class="btn btn-ghost btn-big" href="mailto:team@jbt.md?subject=Put%20my%20logo%20on%20your%20merch%20—%20JBT">Put logo on merch</a>
    </div>
  </div>
</section>

<section id="media">
  <div class="container">
    <p class="kicker">Media</p>
    <h2>Build on record.</h2>
    <div class="media-grid">
      <figure class="ph"><img src="roborangers_team.JPG" alt="Istanbul" style="width:100%;height:100%;object-fit:cover"><figcaption>Istanbul 2026</figcaption></figure>
      <figure class="ph"><img src="yeetus.png" alt="CAD" style="width:100%;height:100%;object-fit:cover"><figcaption>CAD</figcaption></figure>
      <figure class="ph"><img src="T-shirts.PNG" alt="Merch" style="width:100%;height:100%;object-fit:cover"><figcaption>Merch 01</figcaption></figure>
      <figure class="ph"><img src="Ion_Pavelescu_new.JPG" alt="Ion" style="width:100%;height:100%;object-fit:cover"><figcaption>Pit</figcaption></figure>
      <figure class="ph"><img src="Bogdan_Moraru.JPG" alt="Bogdan" style="width:100%;height:100%;object-fit:cover;transform:scale(1.6)"><figcaption>Build</figcaption></figure>
      <figure class="ph"><img src="Anatolii_Suharschi.JPG" alt="Anatolii" style="width:100%;height:100%;object-fit:cover"><figcaption>Workshop</figcaption></figure>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <p class="kicker">Contact</p>
    <h2>Talk to us.</h2>
    <p class="lede">Sponsors, press, collaborators — reply in 24h.</p>
    <a class="contact-mail" href="mailto:team@jbt.md">TEAM@JBT.MD</a>
    <div class="socials">
      <a href="#" rel="noopener">Instagram</a>
      <a href="#" rel="noopener">TikTok</a>
      <a href="#" rel="noopener">YouTube</a>
      <a href="#" rel="noopener">GitHub</a>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="container">
    <div style="display:flex;align-items:center;gap:18px;margin-bottom:20px;flex-wrap:wrap">
      <img src="JBT-Logo.svg" alt="JBT" style="height:38px;width:auto;filter:brightness(0) invert(1)">
      <span style="color:var(--line2)">×</span>
      <img src="rr-logo.png" alt="RoboRangers" style="height:24px;width:auto;filter:grayscale(1) brightness(0) invert(1)">
    </div>
    <p class="foot-brand">JBT</p>
    <p class="foot-line">Combat Robotics · Moldova</p>
    <p class="foot-line">Ion Pavelescu · Bogdan Moraru · Anatolii Suharschi</p>
    <p class="foot-built">Built in Moldova.</p>
  </div>
</footer>

`;
export default function Page() {
  return (
    <>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
      <script type="importmap" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"}}` }} />
      <script suppressHydrationWarning src="/main.js"></script>
      <script suppressHydrationWarning type="module" src="/viewer.js?v=8"></script>
    </>
  );
}
