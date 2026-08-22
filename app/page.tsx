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
      <a href="#engineering">Build</a>
      <a href="#team">Team</a>
      <a href="#heritage">Heritage</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#contact">Contact</a>
    </nav>
    <span class="nav-status">JB-01 · REV D</span>
  </div>
</header>

<main id="main">

<section class="hero" id="home">
  <div class="container" style="max-width:72rem">
    <div class="hero-6xl">
      <div class="hero-copy">
        <p class="kicker hero-anim hero-anim-1">Combat Robotics · Chișinău</p>
        <h1 class="hero-h1 hero-anim hero-anim-2">JBT</h1>
        <p class="hero-tagline hero-anim hero-anim-3">Small bots.<br><em>Real fights.</em></p>
        <p class="hero-lede hero-anim hero-anim-4">Three RoboRangers building combat robots — CAD to arena.</p>
        <div class="hero-actions hero-anim hero-anim-5">
          <a class="btn btn-solid" href="#arsenal">See builds</a>
          <a class="btn btn-ghost" href="#sponsors">Sponsor</a>
        </div>
      </div>
      <div class="hero-media frame hero-anim hero-anim-3">
        <img src="jbt-3x.png" alt="Ion, Bogdan and Anatolii — JBT" loading="eager">
        <span class="hud hud-tl">JBT-3X</span>
      </div>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">01</span>
      <div>
        <p class="kicker">About</p>
        <h2>JBT — Johnny, Bogdi, Tony.</h2>
      </div>
    </div>
    <div class="cols rv rv-3">
      <p>Three RoboRangers. Years competing in FLL, FTC, and FIRST Global. Now building combat robots under our own name.</p>
      <p>Weight limits, deadlines, 90-second fights. Same discipline, higher consequence.</p>
    </div>
    <div class="disciplines rv rv-4" style="margin-top:28px">
      <span class="chip">CAD / Mechanical</span>
      <span class="chip">Electronics</span>
      <span class="chip">Firmware</span>
      <span class="chip">CNC & 3D Print</span>
    </div>
  </div>
</section>

<section id="arsenal">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">02</span>
      <div>
        <p class="kicker">Arsenal</p>
        <h2>Reference builds — JB-01 on the bench.</h2>
      </div>
    </div>
    <p class="lede rv rv-2">Drag to rotate. Sources downloadable.</p>
    <div class="v3d-grid">
      <article class="card v3d-card rv" style="padding:0;overflow:hidden">
        <div class="v3d-head">
          <h3>Yeetus V3</h3>
          <span class="tag">Beetleweight · Overhead saw</span>
        </div>
        <div class="v3d" data-src="/yeetus.glb" data-size="676KB" data-preview="yeetus.png"></div>
        <div class="v3d-body">
          <div>
            <p class="bio">Carbon arm, high reach. Study for weapon geometry.</p>
            <div class="v3d-ctl">
              <a class="v3d-btn" href="beetleweight-combat-robot-yeetus-v3-1.snapshot.2.zip" download>ZIP</a>
              <button class="v3d-btn v3d-explode" type="button">Explode</button>
              <button class="v3d-btn v3d-reset" type="button">Reset</button>
            </div>
          </div>
          <dl class="specs">
            <div class="spec"><dt>Class</dt><dd>Beetleweight</dd></div>
            <div class="spec"><dt>Weapon</dt><dd>Overhead saw</dd></div>
            <div class="spec"><dt>Drive</dt><dd>2WD</dd></div>
          </dl>
        </div>
      </article>
      <article class="card v3d-card rv" style="padding:0;overflow:hidden">
        <div class="v3d-head">
          <h3>Kintsurugi V1</h3>
          <span class="tag">Beetleweight · Vert spinner</span>
        </div>
        <div class="v3d" data-src="/kintsurugi.glb" data-size="935KB"></div>
        <div class="v3d-body">
          <div>
            <p class="bio">Compact 4WD vert. Study for durability and packaging.</p>
            <div class="v3d-ctl">
              <a class="v3d-btn" href="kintsurugi-v1-beetleweight-combat-robot-1.snapshot.1.zip" download>ZIP</a>
              <button class="v3d-btn v3d-explode" type="button">Explode</button>
              <button class="v3d-btn v3d-reset" type="button">Reset</button>
            </div>
          </div>
          <dl class="specs">
            <div class="spec"><dt>Class</dt><dd>Beetleweight</dd></div>
            <div class="spec"><dt>Weapon</dt><dd>Vert</dd></div>
            <div class="spec"><dt>Drive</dt><dd>4WD</dd></div>
          </dl>
        </div>
      </article>
      <article class="card v3d-card rv" style="padding:0;overflow:hidden">
        <div class="v3d-head">
          <h3>Jigsaw V1</h3>
          <span class="tag">150g · Undercutter</span>
        </div>
        <div class="v3d" data-src="/jigsaw.glb" data-size="325KB"></div>
        <div class="v3d-body">
          <div>
            <p class="bio">3D-printed plastic antweight. Closest to JB-01.</p>
            <div class="v3d-ctl">
              <a class="v3d-btn" href="plastic-antweight-combat-robot-jigsaw-1.snapshot.2.zip" download>ZIP</a>
              <button class="v3d-btn v3d-explode" type="button">Explode</button>
              <button class="v3d-btn v3d-reset" type="button">Reset</button>
            </div>
          </div>
          <dl class="specs">
            <div class="spec"><dt>Class</dt><dd>Plastic ant</dd></div>
            <div class="spec"><dt>Mass</dt><dd>150g</dd></div>
            <div class="spec"><dt>Weapon</dt><dd>Undercutter</dd></div>
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
        <p class="kicker">Build</p>
        <h2>Design → print → test → repeat.</h2>
      </div>
    </div>
    <ol class="steps rv rv-3">
      <li><span class="step-n">01</span><h3>Design</h3><p>Weight budget, weapon.</p></li>
      <li><span class="step-n">02</span><h3>CAD</h3><p>Model, test-fit.</p></li>
      <li><span class="step-n">03</span><h3>Print</h3><p>PETG-CF chassis.</p></li>
      <li><span class="step-n">04</span><h3>Assemble</h3><p>Drive, weapon, electronics.</p></li>
      <li><span class="step-n">05</span><h3>Test</h3><p>Drive and hits.</p></li>
      <li><span class="step-n">06</span><h3>Iterate</h3><p>Break, fix, reprint.</p></li>
      <li><span class="step-n">07</span><h3>Fight</h3><p>Arena.</p></li>
    </ol>
  </div>
</section>

<section id="team">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">04</span>
      <div>
        <p class="kicker">Team</p>
        <h2>Three builders.</h2>
      </div>
    </div>
    <div class="grid-3">
      <article class="card rv">
        <div class="portrait">
          <img src="Ion_pavelescu.jpg" alt="Ion Pavelescu" loading="lazy">
        </div>
        <h3>Ion Pavelescu</h3>
        <p class="role">Engineer · Mentor</p>
        <p class="bio">FIRST Global gold. Mentored 20+ teams. Ran events for 800+ participants.</p>
      </article>
      <article class="card rv rv-2">
        <div class="portrait">
          <img src="Bogdan_Moraru.JPG" alt="Bogdan Moraru" loading="lazy" style="transform:scale(1.6)">
        </div>
        <h3>Bogdan Moraru</h3>
        <p class="role">Software · Builder</p>
        <p class="bio">RoboRangers / Thaloss / JoBoTo. Programming, CAD, electronics.</p>
      </article>
      <article class="card rv rv-3">
        <div class="portrait">
          <img src="Anatolii_Suharschi.JPG" alt="Anatolii Suharschi" loading="lazy">
        </div>
        <h3>Anatolii Suharschi</h3>
        <p class="role">Engineer · Maker</p>
        <p class="bio">RoboRangers / Thaloss / JoBoTo. CAD, mechanics, programming.</p>
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
        <h2>From FIRST to combat.</h2>
      </div>
    </div>
    <ol class="log rv rv-3">
      <li class="log-row"><span class="log-n">2023 · Singapore</span><span class="log-t">Gold Innovation + Silver Energy · 190 teams</span><span class="log-d">GOLD</span></li>
      <li class="log-row"><span class="log-n">2024 · Athens</span><span class="log-t">2 Golds — World Champion Alliance · 193 teams</span><span class="log-d">GOLD ×2</span></li>
      <li class="log-row"><span class="log-n">2025 · Panama</span><span class="log-t">Gold — 5th consecutive · 191 teams</span><span class="log-d">GOLD</span></li>
      <li class="log-row"><span class="log-n">2026 · Istanbul</span><span class="log-t">Inspire Award 2nd (FTC) — first for Moldova</span><span class="log-d">AWARD</span></li>
      <li class="log-row"><span class="log-n">2026 · Hong Kong</span><span class="log-t">FLL 3rd + Robot Performance Finalist</span><span class="log-d">AWARD</span></li>
    </ol>
    <figure class="frame heritage-fig rv rv-2" style="margin-top:44px;padding:0;overflow:hidden">
      <img src="roborangers_team.JPG" alt="RoboRangers team" loading="lazy">
      <figcaption><span>ROBORANGERS — TEKWILL ACADEMY KIDS</span></figcaption>
    </figure>
  </div>
</section>

<section id="sponsors">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">06</span>
      <div>
        <p class="kicker">Sponsors</p>
        <h2>Put your logo on the bot.</h2>
      </div>
    </div>
    <div class="tiers rv rv-3">
      <div class="tier-row">
        <span class="tier-name">Supporter</span>
        <span class="tier-price">€50+</span>
        <span class="tier-perks">Name on site · social post</span>
        <span class="tier-flag"></span>
      </div>
      <div class="tier-row">
        <span class="tier-name">Bronze</span>
        <span class="tier-price">€150+</span>
        <span class="tier-perks">Logo on pit banner (1.5m) · logo on site</span>
        <span class="tier-flag"></span>
      </div>
      <div class="tier-row">
        <span class="tier-name">Silver</span>
        <span class="tier-price">€400+</span>
        <span class="tier-perks">Logo on JB-01 armor · pit + site</span>
        <span class="tier-flag"></span>
      </div>
      <div class="tier-row">
        <span class="tier-name">Gold</span>
        <span class="tier-price">€800+</span>
        <span class="tier-perks">Sleeve print, Drop 02 · bot + pit + site</span>
        <span class="tier-flag"></span>
      </div>
      <div class="tier-row hot">
        <span class="tier-name">Title</span>
        <span class="tier-price">€2000+</span>
        <span class="tier-perks">JBT × your brand — co-title + top plate, largest logos</span>
        <span class="tier-flag">Top tier</span>
      </div>
    </div>
    <div class="tier-custom rv rv-2">
      <span>Custom? Filament, CNC, transport — we tailor it.</span>
      <a class="mailto" href="mailto:team@jbt.md?subject=Custom%20Sponsorship%20—%20JBT">Tailor a deal →</a>
    </div>
    <div class="rv" style="margin-top:36px;display:flex;gap:14px;flex-wrap:wrap">
      <a class="btn btn-solid btn-big" href="mailto:team@jbt.md?subject=Sponsorship%20—%20JBT">Put logo on bot</a>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="sec-head rv">
      <span class="sec-idx">07</span>
      <div>
        <p class="kicker">Contact</p>
        <h2>Talk to us.</h2>
      </div>
    </div>
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
        47.01°N 28.86°E<br>CHIȘINĂU
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
      <script suppressHydrationWarning type="module" src="/viewer.js?v=10"></script>
    </>
  );
}
