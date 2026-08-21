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
      <a href="#arsenal">Arsenal</a>
      <a href="#engineering">Engineering</a>
      <a href="#team">Team</a>
      <a href="#heritage">Heritage</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#contact">Contact</a>
    </nav>
    <span class="nav-status"><i aria-hidden="true"></i>JB-01 · REV D · BUILD ACTIVE</span>
  </div>
</header>

<main id="main">

<section class="hero" id="home">
  <div class="container" style="max-width:72rem">
    <div class="hero-6xl">
      <div class="hero-copy">
        <p class="kicker hero-anim hero-anim-1">Combat Robotics · Chișinău · Moldova</p>
        <h1 class="hero-h1 hero-anim hero-anim-2">JBT</h1>
        <p class="hero-tagline hero-anim hero-anim-3">Built to fight.<br><em>Engineered to win.</em></p>
        <p class="hero-lede hero-anim hero-anim-4">Three builders from RoboRangers. We design, machine, wire and program combat robots from scratch — CAD to arena.</p>
        <div class="hero-actions hero-anim hero-anim-5">
          <a class="btn btn-solid" href="#arsenal">Enter the arsenal</a>
          <a class="btn btn-ghost" href="#sponsors">Back the team</a>
        </div>
        <div class="hero-meta hero-anim hero-anim-6">
          <span>EST <b>2026</b></span>
          <span>DIVISION <b>ROBORANGERS</b></span>
          <span>STATUS <b>CLEARANCE PENDING — JB-01</b></span>
        </div>
      </div>
      <div class="hero-media frame hero-anim hero-anim-3">
        <img src="jbt-3x.png" alt="Ion, Bogdan and Anatolii — JBT" loading="eager">
        <span class="hud hud-tl">JBT-3X · FRAME 01</span>
        <span class="hud hud-tr">47.01°N 28.86°E</span>
        <span class="hud hud-bl">ION · BOGDAN · ANATOLII</span>
        <span class="hud hud-br">● REC</span>
      </div>
    </div>
  </div>
  <div class="stats" style="margin-top:88px">
    <div class="stats-inner">
      <div class="stat"><b>03</b><span>Builders · one bot</span></div>
      <div class="stat"><b>150<i>G</i>–1.4<i>KG</i></b><span>Class range</span></div>
      <div class="stat"><b>07</b><span>Step build cycle</span></div>
      <div class="stat"><b>05<i>×</i></b><span>First Global golds — heritage</span></div>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">01</span>
      <div>
        <p class="kicker">Manifesto</p>
        <h2>Not a student project. An engineering team.</h2>
      </div>
    </div>
    <p class="manifesto rv rv-2">Every gram budgeted. Every part modeled. Every hit <em>instrumented</em>. Then broken, redesigned, and built again.</p>
    <div class="cols rv rv-3">
      <p>JBT = <strong>Johnny, Bogdi, Tony</strong>. Three RoboRangers who spent years shipping competition robots now build combat robots under their own name. The discipline is the same — mechatronics, deadlines, weight limits — the consequence level is higher.</p>
      <p>Combat robotics is engineering under fire: a 90-second fight audits every decision you made for six months. That is the standard we build to.</p>
    </div>
    <div class="disciplines rv rv-4" style="margin-top:36px">
      <span class="chip">Mechanical / CAD</span>
      <span class="chip">Electronics</span>
      <span class="chip">Firmware</span>
      <span class="chip">CNC &amp; 3D Printing</span>
      <span class="chip">Materials</span>
      <span class="chip">Strategy</span>
    </div>
  </div>
</section>

<section id="arsenal">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">02</span>
      <div>
        <p class="kicker">Arsenal</p>
        <h2>Reference platforms we study while JB-01 is on the bench.</h2>
      </div>
    </div>
    <p class="lede rv rv-2">Full 3D models, drag to rotate, explode to inspect. Source archives downloadable — we learn in public.</p>
    <div class="v3d-grid">
      <article class="card v3d-card rv" style="padding:0;overflow:hidden">
        <div class="v3d-head">
          <h3>P-01 · Yeetus V3</h3>
          <span class="tag">Reference · Overhead saw</span>
        </div>
        <div class="v3d" data-src="/yeetus.glb" data-size="YEETUS · 676KB" data-preview="yeetus.png"></div>
        <div class="v3d-body">
          <div>
            <p class="bio">Beetleweight overhead saw. Carbon arm, high reach. Reference for weapon geometry and energy transfer.</p>
            <div class="v3d-ctl">
              <a class="v3d-btn" href="beetleweight-combat-robot-yeetus-v3-1.snapshot.2.zip" download>Download .ZIP</a>
              <button class="v3d-btn v3d-explode" type="button">Explode</button>
              <button class="v3d-btn v3d-reset" type="button">Reset</button>
            </div>
          </div>
          <dl class="specs">
            <div class="spec"><dt>Class</dt><dd>Beetleweight</dd></div>
            <div class="spec"><dt>Weapon</dt><dd>Overhead saw</dd></div>
            <div class="spec"><dt>Drive</dt><dd>2WD</dd></div>
            <div class="spec"><dt>Format</dt><dd>GLB + STP</dd></div>
          </dl>
        </div>
      </article>
      <article class="card v3d-card rv" style="padding:0;overflow:hidden">
        <div class="v3d-head">
          <h3>P-02 · Kintsurugi V1</h3>
          <span class="tag">Reference · 4WD vert</span>
        </div>
        <div class="v3d" data-src="/kintsurugi.glb" data-size="KINTSURUGI · 935KB"></div>
        <div class="v3d-body">
          <div>
            <p class="bio">Compact 4WD vertical spinner. Reference for durability and packaging density.</p>
            <div class="v3d-ctl">
              <a class="v3d-btn" href="kintsurugi-v1-beetleweight-combat-robot-1.snapshot.1.zip" download>Download .ZIP</a>
              <button class="v3d-btn v3d-explode" type="button">Explode</button>
              <button class="v3d-btn v3d-reset" type="button">Reset</button>
            </div>
          </div>
          <dl class="specs">
            <div class="spec"><dt>Class</dt><dd>Beetleweight</dd></div>
            <div class="spec"><dt>Weapon</dt><dd>Vert spinner</dd></div>
            <div class="spec"><dt>Drive</dt><dd>4WD</dd></div>
            <div class="spec"><dt>Format</dt><dd>GLB + STP</dd></div>
          </dl>
        </div>
      </article>
      <article class="card v3d-card rv" style="padding:0;overflow:hidden">
        <div class="v3d-head">
          <h3>P-03 · Jigsaw V1</h3>
          <span class="tag">Reference · Undercutter</span>
        </div>
        <div class="v3d" data-src="/jigsaw.glb" data-size="JIGSAW · 325KB"></div>
        <div class="v3d-body">
          <div>
            <p class="bio">Plastic antweight, 150g. 3D-printed undercutter — closest living relative of JB-01.</p>
            <div class="v3d-ctl">
              <a class="v3d-btn" href="plastic-antweight-combat-robot-jigsaw-1.snapshot.2.zip" download>Download .ZIP</a>
              <button class="v3d-btn v3d-explode" type="button">Explode</button>
              <button class="v3d-btn v3d-reset" type="button">Reset</button>
            </div>
          </div>
          <dl class="specs">
            <div class="spec"><dt>Class</dt><dd>Plastic ant</dd></div>
            <div class="spec"><dt>Mass</dt><dd>150 g</dd></div>
            <div class="spec"><dt>Weapon</dt><dd>Undercutter</dd></div>
            <div class="spec"><dt>Format</dt><dd>GLB + STP</dd></div>
          </dl>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="engineering">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">03</span>
      <div>
        <p class="kicker">Engineering</p>
        <h2>Design → print → test → repeat.</h2>
      </div>
    </div>
    <p class="lede rv rv-2">A fight is 90 seconds. The method that wins it is this loop, run until the robot stops breaking.</p>
    <ol class="steps rv rv-3">
      <li><span class="step-n">01</span><h3>Design</h3><p>Weight budget + weapon concept.</p></li>
      <li><span class="step-n">02</span><h3>CAD</h3><p>Model, simulate, test-fit.</p></li>
      <li><span class="step-n">03</span><h3>Print</h3><p>PETG-CF chassis.</p></li>
      <li><span class="step-n">04</span><h3>Assemble</h3><p>Drive, weapon, electronics.</p></li>
      <li><span class="step-n">05</span><h3>Test</h3><p>Drive + weapon + hits.</p></li>
      <li><span class="step-n">06</span><h3>Iterate</h3><p>Break, fix, reprint.</p></li>
      <li><span class="step-n">07</span><h3>Fight</h3><p>Arena. Full send.</p></li>
    </ol>
  </div>
</section>

<section id="team">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">04</span>
      <div>
        <p class="kicker">Crew</p>
        <h2>Three builders. One bot.</h2>
      </div>
    </div>
    <div class="grid-3">
      <article class="card rv">
        <div class="portrait">
          <img src="Ion_pavelescu.jpg" alt="Ion Pavelescu" loading="lazy">
          <span class="ph-tag">FILE · JP-01</span>
        </div>
        <h3>Ion Pavelescu</h3>
        <p class="role">Engineer · Mentor</p>
        <p class="skills">Robotics / Programming / AI</p>
        <p class="bio">FIRST Global gold. Mentored 20+ teams, ran events for 800+ participants. FLL, FTC, FIRST Global, IOAI.</p>
      </article>
      <article class="card rv rv-2">
        <div class="portrait">
          <img src="Bogdan_Moraru.JPG" alt="Bogdan Moraru" loading="lazy" style="transform:scale(1.6)">
          <span class="ph-tag">FILE · BM-02</span>
        </div>
        <h3>Bogdan Moraru <span style="color:var(--muted);font-weight:400">· Bogdi</span></h3>
        <p class="role">Software · Builder</p>
        <p class="skills">Programming / Robotics / Design</p>
        <p class="bio">Builds RoboRangers, Thaloss, JoBoTo. Code, CAD and electronics turned into working robots.</p>
      </article>
      <article class="card rv rv-3">
        <div class="portrait">
          <img src="Anatolii_Suharschi.JPG" alt="Anatolii Suharschi" loading="lazy">
          <span class="ph-tag">FILE · AS-03</span>
        </div>
        <h3>Anatolii Suharschi</h3>
        <p class="role">Engineer · Maker</p>
        <p class="skills">CAD / Mechanical / AI</p>
        <p class="bio">Builds RoboRangers, Thaloss, JoBoTo. CAD, mechanics, programming.</p>
      </article>
    </div>
  </div>
</section>

<section id="heritage">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">05</span>
      <div>
        <p class="kicker">Heritage · RoboRangers · Since 2017</p>
        <h2>Started in FIRST. Now combat.</h2>
      </div>
    </div>
    <p class="lede rv rv-2" style="margin-top:20px">From RoboRangers, 4th generation team at Tekwill Academy Kids — the most decorated robotics program in Moldova.</p>
    <ol class="log rv rv-3">
      <li class="log-row"><span class="log-n">2017</span><span class="log-t">Moldova enters FIRST Global</span><span class="log-d">ENTRY</span></li>
      <li class="log-row"><span class="log-n">2019 · DUBAI</span><span class="log-t">3 medals</span><span class="log-d">MEDAL ×3</span></li>
      <li class="log-row"><span class="log-n">2023 · SINGAPORE</span><span class="log-t">Gold Innovation + Silver Energy · 190 teams</span><span class="log-d">GOLD</span></li>
      <li class="log-row"><span class="log-n">2024 · ATHENS</span><span class="log-t">2 Golds — World Champion Alliance · 193 teams</span><span class="log-d">GOLD ×2</span></li>
      <li class="log-row"><span class="log-n">2025 · PANAMA</span><span class="log-t">Gold — 5th in a row · 191 teams</span><span class="log-d">GOLD</span></li>
      <li class="log-row"><span class="log-n">2026 · ISTANBUL</span><span class="log-t">Inspire Award 2nd — first for Moldova (FTC)</span><span class="log-d">AWARD</span></li>
      <li class="log-row"><span class="log-n">2026 · HONG KONG</span><span class="log-t">FLL 3rd + Robot Performance Finalist</span><span class="log-d">AWARD</span></li>
    </ol>
    <figure class="frame heritage-fig rv rv-2" style="margin-top:44px;padding:0;overflow:hidden">
      <img src="roborangers_team.JPG" alt="RoboRangers team" loading="lazy">
      <figcaption><span>ROBORANGERS — TEKWILL ACADEMY KIDS</span><span>1,000 KIDS/YR · 4 GENERATIONS</span></figcaption>
    </figure>
    <div class="hero-link rv">
      <img src="rr-logo.png" alt="RoboRangers" loading="lazy">
      <span>→</span>
      <img src="JBT-Logo.svg" alt="JBT" loading="lazy" style="height:96px;width:auto;filter:brightness(0) invert(1);opacity:1">
    </div>
  </div>
</section>

<section id="gear">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">06</span>
      <div>
        <p class="kicker">Gear · JB-01</p>
        <h2>Our brand on your back. Our bot on the bench.</h2>
      </div>
    </div>
    <p class="lede rv rv-2">Drop 01 funds parts and arena time while we build JB-01. Every tee is a machined part prepaid.</p>
    <div class="bot-layout">
      <div class="viewer frame rv">
        <span class="hud hud-tl">DROP 01</span>
        <img src="T-shirts.PNG" alt="JBT t-shirts — Drop 01" loading="lazy">
      </div>
      <dl class="specs rv rv-2" style="margin-top:0">
        <div class="spec"><dt>Drop</dt><dd>01 · Pre-order</dd></div>
        <div class="spec"><dt>Fit</dt><dd>Unisex · 240gsm</dd></div>
        <div class="spec"><dt>Colors</dt><dd>Black / White</dd></div>
        <div class="spec"><dt>Sizes</dt><dd>S — XXL</dd></div>
        <div class="spec"><dt>Print</dt><dd>Front &amp; sleeve</dd></div>
      </dl>
    </div>
  </div>
</section>

<section id="sponsors">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">07</span>
      <div>
        <p class="kicker">Sponsors</p>
        <h2>Put your name on the bot. Your logo on the merch.</h2>
      </div>
    </div>
    <p class="lede rv rv-2">Your brand on the robot, pit banner, shirts and site — visible at every fight and in every build log.</p>
    <div class="grid-3">
      <article class="card rv">
        <p class="role">Supporter</p>
        <span class="price">€50+</span>
        <h3 style="margin-top:0">Wall of Fame</h3>
        <ul class="tier-list">
          <li>Name on jbt.md</li>
          <li>Social shout-out</li>
        </ul>
      </article>
      <article class="card rv rv-2">
        <p class="role">Bronze</p>
        <span class="price">€150+</span>
        <h3 style="margin-top:0">Pit Banner</h3>
        <ul class="tier-list">
          <li>Logo on pit banner (1.5m)</li>
          <li>Logo on site</li>
        </ul>
      </article>
      <article class="card rv rv-3 tier-top">
        <p class="role">Silver</p>
        <span class="price">€400+</span>
        <h3 style="margin-top:0">On The Bot</h3>
        <ul class="tier-list">
          <li>Logo on JB-01 armor</li>
          <li>Pit + site placement</li>
        </ul>
      </article>
    </div>
    <div class="grid-3" style="margin-top:1px">
      <article class="card rv tier-top">
        <p class="role">Gold</p>
        <span class="price">€800+</span>
        <h3 style="margin-top:0">On The Merch</h3>
        <ul class="tier-list">
          <li>Sleeve print, Drop 02</li>
          <li>Bot + pit + site</li>
          <li>5 shirts included</li>
        </ul>
      </article>
      <article class="card rv rv-2 tier-title">
        <p class="role" style="color:#FFD700">Title Partner</p>
        <span class="price">€2000+</span>
        <h3 style="margin-top:0">JBT × Your Brand</h3>
        <ul class="tier-list">
          <li>Co-title + top plate</li>
          <li>Largest logos everywhere</li>
        </ul>
      </article>
      <article class="card rv rv-3" style="display:flex;flex-direction:column;justify-content:center">
        <h3 style="margin-top:0">Custom?</h3>
        <p class="bio" style="margin:10px 0">Filament, CNC, transport — we tailor it.</p>
        <a class="mailto" href="mailto:team@jbt.md?subject=Custom%20Sponsorship%20—%20JBT" style="margin-top:12px">Tailor a deal →</a>
      </article>
    </div>
    <div class="rv" style="margin-top:40px;padding:20px;border:1px solid var(--line);background:var(--panel);display:flex;gap:20px;align-items:center;flex-wrap:wrap">
      <img src="T-shirts.PNG" alt="JBT T-shirt" style="height:64px;width:auto;border:1px solid var(--line)">
      <div>
        <p style="font:600 .9rem var(--disp);margin-bottom:4px">Drop 02 — your logo could be on it.</p>
        <p style="font:400 .76rem var(--mono);color:var(--muted)">Join before Rev D.</p>
      </div>
    </div>
    <div class="rv" style="margin-top:36px;display:flex;gap:14px;flex-wrap:wrap">
      <a class="btn btn-solid btn-big" href="mailto:team@jbt.md?subject=Sponsorship%20—%20JBT">Put logo on bot</a>
      <a class="btn btn-ghost btn-big" href="mailto:team@jbt.md?subject=Put%20my%20logo%20on%20your%20merch%20—%20JBT">Put logo on merch</a>
    </div>
  </div>
</section>

<section id="media">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">08</span>
      <div>
        <p class="kicker">Media</p>
        <h2>Build on record.</h2>
      </div>
    </div>
    <div class="media-grid rv rv-2">
      <figure class="ph"><img src="roborangers_team.JPG" alt="Istanbul" loading="lazy"><figcaption>Istanbul 2026</figcaption></figure>
      <figure class="ph"><img src="yeetus.png" alt="CAD" loading="lazy"><figcaption>CAD · Yeetus V3</figcaption></figure>
      <figure class="ph"><img src="T-shirts.PNG" alt="Merch" loading="lazy"><figcaption>Merch · Drop 01</figcaption></figure>
      <figure class="ph"><img src="Ion_Pavelescu_new.JPG" alt="Ion" loading="lazy"><figcaption>Pit</figcaption></figure>
      <figure class="ph"><img src="Bogdan_Moraru.JPG" alt="Bogdan" loading="lazy" style="object-position:50% 20%"><figcaption>Build</figcaption></figure>
      <figure class="ph"><img src="Anatolii_Suharschi.JPG" alt="Anatolii" loading="lazy"><figcaption>Workshop</figcaption></figure>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">09</span>
      <div>
        <p class="kicker">Contact</p>
        <h2>Talk to the pit crew.</h2>
      </div>
    </div>
    <p class="lede rv rv-2">Sponsors, press, collaborators — we reply within 24 hours.</p>
    <a class="contact-mail rv rv-3" href="mailto:team@jbt.md">TEAM@JBT.MD</a>
    <div class="socials rv rv-4">
      <a href="#" rel="noopener">Instagram</a>
      <a href="#" rel="noopener">TikTok</a>
      <a href="#" rel="noopener">YouTube</a>
      <a href="#" rel="noopener">GitHub</a>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="hazard" aria-hidden="true"></div>
  <div class="container foot-inner">
    <div class="foot-grid">
      <img src="JBT-Logo.svg" alt="JBT" style="height:38px;width:auto">
      <span style="color:var(--line2)">×</span>
      <img src="rr-logo.png" alt="RoboRangers" style="height:24px;width:auto;filter:grayscale(1) brightness(0) invert(1)">
    </div>
    <div class="foot-cols">
      <div>
        <p class="foot-brand">JBT</p>
        <p class="foot-line">Combat Robotics · Moldova</p>
        <p class="foot-line">Ion Pavelescu · Bogdan Moraru · Anatolii Suharschi</p>
      </div>
      <p class="foot-coords">
        47.0105°N 28.8638°E<br>CHIȘINĂU · MD
      </p>
    </div>
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
      <script suppressHydrationWarning type="module" src="/viewer.js?v=9"></script>
    </>
  );
}
