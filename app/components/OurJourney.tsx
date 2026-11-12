"use client";

import { useEffect, useRef } from "react";

const ARTBOARD_HTML = `
  <header class="header-block">
    <h1 class="main-title">OUR JOURNEY</h1>
    <p class="sub-title">Building Trust in Packaging Since 1995</p>
  </header>

  <svg class="top-timeline-svg" viewBox="0 0 1024 700" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="goldSphereGrad" cx="35%" cy="30%" r="68%">
        <stop offset="0%" stop-color="#f7e2b4" />
        <stop offset="45%" stop-color="#d49e56" />
        <stop offset="85%" stop-color="#966328" />
        <stop offset="100%" stop-color="#764b1b" />
      </radialGradient>
      <radialGradient id="sphereShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(30,24,18,0.34)" />
        <stop offset="100%" stop-color="rgba(30,24,18,0)" />
      </radialGradient>
    </defs>
    <line x1="176" y1="121" x2="852" y2="121" stroke="#c8bfb6" stroke-width="1.2" />
    <line x1="176" y1="96" x2="176" y2="139" stroke="#b68a54" stroke-width="1.5" />
    <ellipse cx="204" cy="125.5" rx="5.5" ry="2.2" fill="url(#sphereShadow)" />
    <circle cx="204" cy="121" r="4.3" fill="url(#goldSphereGrad)" />
    <line x1="462" y1="96" x2="462" y2="139" stroke="#263c66" stroke-width="1.5" />
    <ellipse cx="487" cy="125.5" rx="5.5" ry="2.2" fill="url(#sphereShadow)" />
    <circle cx="487" cy="121" r="4.3" fill="url(#goldSphereGrad)" />
    <line x1="723" y1="96" x2="723" y2="139" stroke="#b68a54" stroke-width="1.5" />
    <ellipse cx="750" cy="125.5" rx="5.5" ry="2.2" fill="url(#sphereShadow)" />
    <circle cx="750" cy="121" r="4.3" fill="url(#goldSphereGrad)" />
  </svg>

  <div class="pin-year-label pin-year-1995">1995</div>
  <div class="pin-year-label pin-year-1997">1997</div>
  <div class="pin-year-label pin-year-2025">2025</div>

  <svg class="road-layer-svg" id="roadSvg" viewBox="0 0 1024 700" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="roadEdgeFadeGrad" x1="0" y1="0" x2="1024" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="87%" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="98.5%" stop-color="#ffffff" stop-opacity="0" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </linearGradient>
      <mask id="roadFadeMask">
        <rect x="0" y="0" width="1024" height="700" fill="url(#roadEdgeFadeGrad)" />
      </mask>
      <linearGradient id="asphaltSurfaceGrad" x1="0" y1="120" x2="960" y2="520" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#767d89" />
        <stop offset="45%" stop-color="#7e8591" />
        <stop offset="100%" stop-color="#878e9a" />
      </linearGradient>
      <filter id="roadGroundBlur" x="-5%" y="-5%" width="110%" height="115%">
        <feGaussianBlur stdDeviation="4.5" />
      </filter>
    </defs>
    <g id="roadGeometryGroup" mask="url(#roadFadeMask)"></g>
  </svg>

  <article class="milestone-card card-1995">
    <div class="card-ribbon ribbon-1995">1995 – THE FOUNDATION</div>
    <div class="card1-top">
      <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;margin-top:1px;">
        <line x1="22" y1="2" x2="22" y2="9" stroke="#b66d2d" stroke-width="1.6" stroke-linecap="round" />
        <path d="M22 2.5L29 4.5L22 6.8V2.5Z" fill="#b66d2d" />
        <path d="M5 18L22 8.5L39 18H5Z" fill="#b66d2d" />
        <rect x="4" y="18.8" width="36" height="2.2" rx="0.6" fill="#b66d2d" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 22H37V36.5H7V22ZM11.5 27.5C11.5 25.8 12.7 24.6 14.3 24.6C15.9 24.6 17.1 25.8 17.1 27.5V35.2H11.5V27.5ZM19.2 27.5C19.2 25.8 20.4 24.6 22 24.6C23.6 24.6 24.8 25.8 24.8 27.5V35.2H19.2V27.5ZM26.9 27.5C26.9 25.8 28.1 24.6 29.7 24.6C31.3 24.6 32.5 25.8 32.5 27.5V35.2H26.9V27.5Z" fill="#b66d2d" />
        <rect x="4.5" y="37.2" width="35" height="2.3" rx="0.6" fill="#b66d2d" />
      </svg>
      <div class="card1-top-text">
        Abhinandan Petro Pack Pvt. Ltd.<br />
        was founded by<br />
        <strong>Mr. Kamal Sipani &amp;</strong><br />
        <strong>Mrs. Vimala Sipani</strong>
      </div>
    </div>
    <p class="card1-bottom-text">with a vision to deliver reliable, high-quality packaging solutions.</p>
  </article>

  <article class="milestone-card card-1997">
    <div class="card-ribbon ribbon-1997">1997 – STRATEGIC MERGER</div>
    <div class="card2-top">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;margin-top:2px;">
        <g transform="translate(19,19) rotate(-45)">
          <rect x="-2" y="-8.5" width="16.5" height="17" rx="8.5" stroke="#1f345d" stroke-width="3.6" />
          <rect x="-14.5" y="-8.5" width="16.5" height="17" rx="8.5" stroke="#f8f7f6" stroke-width="5.6" />
          <rect x="-14.5" y="-8.5" width="16.5" height="17" rx="8.5" stroke="#1f345d" stroke-width="3.6" />
          <path d="M2 -8.5H6C10.6944 -8.5 14.5 -4.69442 14.5 0" stroke="#1f345d" stroke-width="3.6" stroke-linecap="round" />
        </g>
      </svg>
      <div class="card2-top-text">
        Abhinandan Petro Pack Pvt. Ltd.<br />
        merged with <strong>Shanti Polypack,</strong><br />
        strengthening leadership, scale,<br />
        and operational capability.
      </div>
    </div>
    <div class="card2-divider"></div>
    <div class="board-section">
      <h3 class="board-title">Board of Directors</h3>
      <ul class="board-list">
        <li><strong>Mr. Kamal Sipani</strong> – Chairman &amp; Director</li>
        <li><strong>Mr. Yeshwant Bothra</strong> – Managing Director</li>
        <li><strong>Mrs. Kavita Bothra</strong> – Director</li>
        <li><strong>Mrs. Vimala Sipani</strong> – Director</li>
      </ul>
    </div>
  </article>

  <article class="milestone-card card-2025">
    <div class="card-ribbon ribbon-2025"><span class="yr">2025</span><span class="lbl">– GROWTH &amp; EXPANSION</span></div>
    <p class="card3-intro">Rapid capacity growth from 600 MT<br />to a projected <strong>7,000 MT</strong> by 2025.</p>
    <div class="card3-split">
      <ul class="growth-list">
        <li>1997<span class="dot-sep">·</span> <strong>600 MT</strong></li>
        <li>2002<span class="dot-sep">·</span> <strong>1,800 MT</strong></li>
        <li>2009<span class="dot-sep">·</span> <strong>3,600 MT</strong></li>
        <li>2017 &nbsp;<strong>4,800 MT</strong></li>
        <li class="highlight-2025">2025 &nbsp;<strong>7,000 MT</strong></li>
      </ul>
      <svg width="180" height="106" viewBox="0 0 180 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="barBlue1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2c486b" /><stop offset="100%" stop-color="#1e3552" /></linearGradient>
          <linearGradient id="barBlue2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#35567e" /><stop offset="100%" stop-color="#243f61" /></linearGradient>
          <linearGradient id="barBlue3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3f6591" /><stop offset="100%" stop-color="#29486e" /></linearGradient>
          <linearGradient id="barBlue4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a73a1" /><stop offset="100%" stop-color="#2e517a" /></linearGradient>
          <linearGradient id="barBlue5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#537eab" /><stop offset="100%" stop-color="#345984" /></linearGradient>
          <linearGradient id="barGold1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c39856" /><stop offset="100%" stop-color="#9e7436" /></linearGradient>
          <linearGradient id="barGold2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d29f4d" /><stop offset="100%" stop-color="#ad7c31" /></linearGradient>
          <linearGradient id="barGold3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#df9f3d" /><stop offset="100%" stop-color="#ba7e26" /></linearGradient>
          <linearGradient id="barGold4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e89e31" /><stop offset="100%" stop-color="#c57f1d" /></linearGradient>
          <linearGradient id="growthArrowGrad" x1="8" y1="84" x2="174" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#b88442" /><stop offset="55%" stop-color="#d49336" /><stop offset="100%" stop-color="#de8f22" /></linearGradient>
        </defs>
        <rect x="6" y="88" width="12.5" height="14" rx="1.2" fill="url(#barBlue1)" />
        <rect x="24.5" y="83" width="12.5" height="19" rx="1.2" fill="url(#barBlue2)" />
        <rect x="43" y="77" width="12.5" height="25" rx="1.2" fill="url(#barBlue3)" />
        <rect x="61.5" y="70" width="12.5" height="32" rx="1.2" fill="url(#barBlue4)" />
        <rect x="80" y="62" width="12.5" height="40" rx="1.2" fill="url(#barBlue5)" />
        <rect x="98.5" y="53" width="12.5" height="49" rx="1.2" fill="url(#barGold1)" />
        <rect x="117" y="43" width="12.5" height="59" rx="1.2" fill="url(#barGold2)" />
        <rect x="135.5" y="32" width="12.5" height="70" rx="1.2" fill="url(#barGold3)" />
        <rect x="154" y="21" width="12.5" height="81" rx="1.2" fill="url(#barGold4)" />
        <path d="M 8 81.5 C 58 76.5, 114 55, 155 15.5 L 148.5 11.5 L 173 4.5 L 168.5 27.5 L 162 22 C 118 61, 60 79.5, 8 83 Z" fill="url(#growthArrowGrad)" />
      </svg>
    </div>
  </article>

  <svg class="road-markers-svg" viewBox="0 0 1024 700" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flag1995Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#c97932" /><stop offset="50%" stop-color="#df8e42" /><stop offset="100%" stop-color="#b86823" /></linearGradient>
      <linearGradient id="flag1997Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#223c70" /><stop offset="50%" stop-color="#33579c" /><stop offset="100%" stop-color="#1b315c" /></linearGradient>
      <linearGradient id="flag2025Grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#cf913a" /><stop offset="50%" stop-color="#e8b158" /><stop offset="100%" stop-color="#c2822c" /></linearGradient>
    </defs>
    <line x1="193" y1="391" x2="193" y2="425" stroke="#9e5e24" stroke-width="2.1" stroke-linecap="round" />
    <path d="M194 391.5 C201 389.5, 211 393.5, 220 391.2 V406 C211 408.3, 201 404.3, 194 406.3 Z" fill="url(#flag1995Grad)" />
    <line x1="454" y1="418" x2="454" y2="442" stroke="#1e335c" stroke-width="2.2" stroke-linecap="round" />
    <path d="M455 418 C463 415.8, 474 420.2, 484 417.8 V434.5 C474 436.9, 463 432.5, 455 434.7 Z" fill="url(#flag1997Grad)" />
    <line x1="786" y1="406" x2="786" y2="440" stroke="#9d6b34" stroke-width="2.2" stroke-linecap="round" />
    <path d="M787 406 C795 403.8, 807 408.2, 818 405.8 V423 C807 425.4, 795 421, 787 423.2 Z" fill="url(#flag2025Grad)" />
  </svg>

  <div class="year-pill pill-1995">1995</div>
  <div class="year-pill pill-1997">1997</div>
  <div class="year-pill pill-2025">2025</div>

  <section class="leaders-section" aria-label="Trusted by Industry Leaders">
    <div class="leaders-header">
      <span class="leaders-rule"></span>
      <h2 class="leaders-title">TRUSTED BY INDUSTRY LEADERS</h2>
      <span class="leaders-rule"></span>
    </div>
    <div class="logos-row">
      <img class="tl-logo" src="/images/clients/dalmia-trans.png" alt="Dalmia Cement" />
      <img class="tl-logo" src="/images/clients/ramco-trans.png" alt="Ramco Cements" />
      <img class="tl-logo" src="/images/clients/acc.png" alt="ACC Cement" />
      <img class="tl-logo" src="/images/clients/ultratech.png" alt="UltraTech Cement" />
      <img class="tl-logo" src="/images/clients/cci.png" alt="CCI Cement" />
    </div>
    <p class="leaders-subtitle">Serving leading sugar refineries across India</p>
  </section>

  <section class="stats-row" aria-label="Key Company Milestones">
    <div class="stat-card">
      <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
        <defs>
          <linearGradient id="trophyGold" x1="8" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#f7d888" /><stop offset="42%" stop-color="#d89d36" /><stop offset="85%" stop-color="#a86f1c" /><stop offset="100%" stop-color="#875511" /></linearGradient>
          <linearGradient id="trophyHighlight" x1="12" y1="5" x2="22" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#fff3cc" stop-opacity="0.75" /><stop offset="100%" stop-color="#fff3cc" stop-opacity="0" /></linearGradient>
          <linearGradient id="trophyBase" x1="11" y1="36" x2="31" y2="41" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#9c6922" /><stop offset="100%" stop-color="#684110" /></linearGradient>
        </defs>
        <ellipse cx="21" cy="41.5" rx="13" ry="2" fill="rgba(30,24,16,0.22)" />
        <path d="M11 8.5H6.5C5.2 8.5 4.5 9.6 4.8 11.2C5.4 14.5 8.1 17.6 12.2 18.4" stroke="#b97f24" stroke-width="2.2" stroke-linecap="round" />
        <path d="M31 8.5H35.5C36.8 8.5 37.5 9.6 37.2 11.2C36.6 14.5 33.9 17.6 29.8 18.4" stroke="#b97f24" stroke-width="2.2" stroke-linecap="round" />
        <path d="M10.5 5.5H31.5V12.5C31.5 19.2 26.8 23.8 21 23.8C15.2 23.8 10.5 19.2 10.5 12.5V5.5Z" fill="url(#trophyGold)" />
        <path d="M12.5 7H17.5V12.5C17.5 17 18.8 20.5 20.5 22.3C15.8 21.8 12.5 17.8 12.5 12.5V7Z" fill="url(#trophyHighlight)" />
        <rect x="9.5" y="4.5" width="23" height="2" rx="1" fill="#f3cf7a" />
        <path d="M19 23.5H23L22.5 27.5H24V29.5H22.5L23.5 34.5H18.5L19.5 29.5H18V27.5H19.5L19 23.5Z" fill="url(#trophyGold)" />
        <path d="M14.5 34.5H27.5L29 36.8H13L14.5 34.5Z" fill="#d9a13c" />
        <rect x="11.5" y="36.8" width="19" height="4.2" rx="0.8" fill="url(#trophyBase)" />
      </svg>
      <div class="stat-text">
        <div class="stat-primary"><span class="gold-num">30+</span> <span class="years-word">Years</span></div>
        <div class="stat-secondary">of Excellence</div>
      </div>
    </div>
    <div class="stat-card">
      <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
        <polygon points="21,39 39,30 25,24 6,32" fill="rgba(20,40,48,0.2)" />
        <polygon points="26,6 40,11.5 27,17.5 13,12" fill="#5daab4" />
        <polygon points="27,17.5 40,11.5 40,25.5 27,32" fill="#46929c" />
        <polygon points="13,12 27,17.5 27,32 13,26" fill="#235e69" />
        <polygon points="19,12.5 33.5,18 20.5,24.5 6,18.8" fill="#56a4ae" />
        <polygon points="6,18.8 20.5,24.5 20.5,38.5 6,32.5" fill="#1e5763" />
        <polygon points="20.5,24.5 33.5,18 33.5,32 20.5,38.5" fill="#4996a0" />
        <polygon points="12.5,15.5 27,21.2 29,20.2 14.5,14.5" fill="#eef4f5" />
        <polygon points="27,21.2 29,20.2 29,34.2 27,35.2" fill="#dce7e9" />
        <polygon points="8.5,23.5 13.5,25.5 13.5,30 8.5,28" fill="#e6eff0" />
      </svg>
      <div class="stat-text">
        <div class="stat-primary">7,000 MT</div>
        <div class="stat-secondary">Annual Capacity</div>
      </div>
    </div>
    <div class="stat-card">
      <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
        <ellipse cx="24" cy="39.5" rx="20" ry="1.8" fill="rgba(22,34,56,0.22)" />
        <path d="M13.5 11C13.5 8.5 16.5 7.5 17 5.2" stroke="#6c7e9c" stroke-width="1.4" stroke-linecap="round" />
        <path d="M21 8.5C21 6 24 5 24.5 2.8" stroke="#6c7e9c" stroke-width="1.4" stroke-linecap="round" />
        <path d="M11.5 22L12.3 12.5H14.8L15.6 22H11.5Z" fill="#1d3154" />
        <path d="M19 20L19.8 10H22.4L23.2 20H19Z" fill="#1d3154" />
        <rect x="6" y="21" width="11" height="17.5" fill="#182a48" />
        <path d="M17 24L23.5 18.5V24L30 18.5V24L36.5 18.5V24H42V38.5H17V24Z" fill="#253f6b" />
        <path d="M17 25.5L26 21.5V38.5H17V25.5Z" fill="#1a2d4e" />
        <rect x="8.2" y="24" width="2.2" height="2.4" fill="#d9e4f2" />
        <rect x="12" y="24" width="2.2" height="2.4" fill="#d9e4f2" />
        <rect x="8.2" y="28.5" width="2.2" height="2.4" fill="#d9e4f2" />
        <rect x="12" y="28.5" width="2.2" height="2.4" fill="#d9e4f2" />
        <rect x="19.5" y="27.5" width="2.1" height="2.3" fill="#d9e4f2" />
        <rect x="22.8" y="27.5" width="2.1" height="2.3" fill="#d9e4f2" />
        <rect x="19.5" y="31.5" width="2.1" height="2.3" fill="#d9e4f2" />
        <rect x="22.8" y="31.5" width="2.1" height="2.3" fill="#d9e4f2" />
        <rect x="29" y="27.5" width="2.3" height="2.4" fill="#c5d6eb" />
        <rect x="33" y="27.5" width="2.3" height="2.4" fill="#c5d6eb" />
        <rect x="37" y="27.5" width="2.3" height="2.4" fill="#c5d6eb" />
        <rect x="29" y="31.8" width="2.3" height="2.4" fill="#c5d6eb" />
        <rect x="33" y="31.8" width="2.3" height="2.4" fill="#c5d6eb" />
        <rect x="37" y="31.8" width="2.3" height="2.4" fill="#c5d6eb" />
      </svg>
      <div class="stat-text">
        <div class="stat-primary">100+</div>
        <div class="stat-secondary">Industrial Clients</div>
      </div>
    </div>
  </section>

  <svg class="paper-grain" viewBox="0 0 1024 700" preserveAspectRatio="none">
    <filter id="paperNoiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.78" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="1024" height="700" filter="url(#paperNoiseFilter)" opacity="0.32" />
  </svg>
`;

export default function OurJourney() {
  const shellRef = useRef<HTMLDivElement>(null);
  const artboardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    const artboard = artboardRef.current;
    if (!shell || !artboard) return;

    const BASE_W = 1024;
    const BASE_H = 700;
    const updateScale = () => {
      const scale = shell.clientWidth / BASE_W;
      artboard.style.transform = `scale(${scale})`;
      shell.style.height = `${Math.round(BASE_H * scale)}px`;
      artboard.style.opacity = "1";
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (shell.parentElement) ro.observe(shell.parentElement);
    window.addEventListener("resize", updateScale);

    // ---- winding 3D-perspective road generator ----
    const roadGroup = artboard.querySelector<SVGGElement>("#roadGeometryGroup");
    if (roadGroup) {
      roadGroup.innerHTML = "";
      type WP = { x: number; y: number; w: number; curb: number };
      const waypoints: WP[] = [
        { x: -30, y: 176, w: 17.5, curb: 3.5 }, { x: 55, y: 142, w: 18.0, curb: 3.8 },
        { x: 132, y: 134, w: 18.8, curb: 4.0 }, { x: 228, y: 152, w: 20.5, curb: 4.4 },
        { x: 344, y: 230, w: 22.8, curb: 5.0 }, { x: 368, y: 306, w: 24.5, curb: 5.4 },
        { x: 265, y: 343, w: 25.5, curb: 5.8 }, { x: 185, y: 353, w: 26.2, curb: 6.0 },
        { x: 92, y: 367, w: 27.2, curb: 6.4 }, { x: 64, y: 392, w: 28.4, curb: 6.8 },
        { x: 108, y: 416, w: 29.4, curb: 7.2 }, { x: 225, y: 429, w: 30.2, curb: 7.5 },
        { x: 466, y: 434, w: 31.2, curb: 7.8 }, { x: 745, y: 436, w: 33.2, curb: 8.2 },
        { x: 885, y: 451, w: 36.2, curb: 8.8 }, { x: 1045, y: 502, w: 41.5, curb: 9.5 },
      ];
      const cr = (p0: number, p1: number, p2: number, p3: number, t: number) => {
        const t2 = t * t, t3 = t2 * t;
        return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
      };
      type S = { x: number; y: number; w: number; curb: number; dist: number };
      const samples: S[] = [];
      const steps = 36;
      for (let i = 0; i < waypoints.length - 1; i++) {
        const p0 = waypoints[Math.max(0, i - 1)], p1 = waypoints[i], p2 = waypoints[i + 1], p3 = waypoints[Math.min(waypoints.length - 1, i + 2)];
        const maxStep = i === waypoints.length - 2 ? steps : steps - 1;
        for (let s = 0; s <= maxStep; s++) {
          const t = s / steps;
          samples.push({ x: cr(p0.x, p1.x, p2.x, p3.x, t), y: cr(p0.y, p1.y, p2.y, p3.y, t), w: cr(p0.w, p1.w, p2.w, p3.w, t), curb: cr(p0.curb, p1.curb, p2.curb, p3.curb, t), dist: 0 });
        }
      }
      type P = { x: number; y: number };
      const leftEdge: P[] = [], rightEdge: P[] = [], curbBottom: P[] = [], leftStripe: P[] = [], rightStripe: P[] = [];
      let cum = 0;
      for (let i = 0; i < samples.length; i++) {
        const prev = samples[Math.max(0, i - 1)], next = samples[Math.min(samples.length - 1, i + 1)], curr = samples[i];
        if (i > 0) cum += Math.hypot(curr.x - prev.x, curr.y - prev.y);
        curr.dist = cum;
        const dx = next.x - prev.x, dy = next.y - prev.y, len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        const sm = Math.max(2.6, curr.w * 0.13);
        leftEdge.push({ x: curr.x - nx * curr.w, y: curr.y - ny * curr.w });
        rightEdge.push({ x: curr.x + nx * curr.w, y: curr.y + ny * curr.w });
        curbBottom.push({ x: curr.x + nx * curr.w, y: curr.y + ny * curr.w + curr.curb });
        leftStripe.push({ x: curr.x - nx * (curr.w - sm), y: curr.y - ny * (curr.w - sm) });
        rightStripe.push({ x: curr.x + nx * (curr.w - sm), y: curr.y + ny * (curr.w - sm) });
      }
      const toPath = (pts: P[], close = false) => {
        if (!pts.length) return "";
        let d = `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)}`;
        for (let i = 1; i < pts.length; i++) d += ` L ${pts[i].x.toFixed(2)} ${pts[i].y.toFixed(2)}`;
        return close ? d + " Z" : d;
      };
      const el = (tag: string, attrs: Record<string, string>) => {
        const e = document.createElementNS("http://www.w3.org/2000/svg", tag);
        for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
        return e;
      };
      const shadowPts = [...leftEdge.map((p) => ({ x: p.x, y: p.y + 5 })), ...curbBottom.slice().reverse().map((p) => ({ x: p.x + 2, y: p.y + 6 }))];
      roadGroup.appendChild(el("path", { d: toPath(shadowPts, true), fill: "rgba(26, 32, 42, 0.25)", filter: "url(#roadGroundBlur)" }));
      roadGroup.appendChild(el("path", { d: toPath([...rightEdge, ...curbBottom.slice().reverse()], true), fill: "#565d69" }));
      roadGroup.appendChild(el("path", { d: toPath(curbBottom, false), stroke: "#434954", "stroke-width": "1.2", fill: "none" }));
      roadGroup.appendChild(el("path", { d: toPath([...leftEdge, ...rightEdge.slice().reverse()], true), fill: "url(#asphaltSurfaceGrad)" }));
      roadGroup.appendChild(el("path", { d: toPath(leftStripe, false), stroke: "#f3f2f0", "stroke-width": "2.3", "stroke-linecap": "round", "stroke-linejoin": "round", fill: "none", opacity: "0.94" }));
      roadGroup.appendChild(el("path", { d: toPath(rightStripe, false), stroke: "#f3f2f0", "stroke-width": "2.6", "stroke-linecap": "round", "stroke-linejoin": "round", fill: "none", opacity: "0.96" }));
      let cursor = 14, idx = 0;
      const total = samples[samples.length - 1].dist;
      while (cursor < total - 20) {
        while (idx < samples.length - 1 && samples[idx].dist < cursor) idx++;
        const pt = samples[idx];
        const pr = (pt.w - 17) / (41.5 - 17);
        const dashLen = 11 + pr * 10, gapLen = 9 + pr * 7.5, dashW = 1.9 + pr * 1.4;
        const dashPts: P[] = [];
        let scan = idx;
        while (scan < samples.length && samples[scan].dist <= cursor + dashLen) { dashPts.push(samples[scan]); scan++; }
        if (dashPts.length >= 2) {
          roadGroup.appendChild(el("path", { d: toPath(dashPts, false), stroke: "#f4f3f1", "stroke-width": dashW.toFixed(2), "stroke-linecap": "butt", fill: "none", opacity: "0.95" }));
        }
        cursor += dashLen + gapLen;
      }
    }

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&display=swap"
      />
      <section className="oj-section">
        <div className="responsive-shell" ref={shellRef}>
          <main
            className="artboard"
            ref={artboardRef}
            role="img"
            aria-label="Our Journey — Building Trust in Packaging Since 1995 corporate timeline infographic"
            dangerouslySetInnerHTML={{ __html: ARTBOARD_HTML }}
          />
        </div>
      </section>
    </>
  );
}
