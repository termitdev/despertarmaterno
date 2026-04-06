/**
 * =====================================================================
 * SITE DE LANÇAMENTO DE LIVRO — React.js + Supabase
 * =====================================================================
 *
 * CONFIGURAÇÃO DO BANCO DE DADOS (Supabase SQL Editor)
 * ─────────────────────────────────────────────────────
 * Cole e execute o SQL abaixo no SQL Editor do seu projeto Supabase:
 *
 *   -- 1. Criar tabela de inscrições
 *   CREATE TABLE registrations (
 *     id         uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
 *     name       text        NOT NULL,
 *     phone      text        NOT NULL,
 *     email      text        NOT NULL,
 *     created_at timestamptz DEFAULT now()
 *   );
 *
 *   -- 2. Habilitar Row Level Security
 *   ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
 *
 *   -- 3. Permitir INSERT público (formulário da home)
 *   CREATE POLICY "allow_public_insert"
 *     ON registrations FOR INSERT
 *     TO anon
 *     WITH CHECK (true);
 *
 *   -- 4. Permitir SELECT total (página de colaboradores usa service role)
 *   CREATE POLICY "allow_service_select"
 *     ON registrations FOR SELECT
 *     USING (true);
 *
 * ─────────────────────────────────────────────────────
 * IMAGEM DA CAPA:
 *   Substitua BOOK_COVER_URL pela URL da imagem da capa do livro.
 *   Ex: "https://meusite.com/capa.jpg" ou import local.
 *
 * TÍTULO / AUTOR / DATA DO EVENTO:
 *   Ajuste as constantes BOOK_TITLE, BOOK_SUBTITLE, AUTHOR_NAME,
 *   EVENT_DATE, EVENT_LOCATION abaixo.
 * =====================================================================
 */

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Personalize aqui ──────────────────────────────────────────────
const BOOK_TITLE      = "Despertar Materno";
const BOOK_SUBTITLE   = "Guia para uma criação consciente de 0 a 6 anos";
const AUTHOR_NAME     = "Cristina Martinez & Vivian Cirineu";
const EVENT_DATE      = "05 de maio de 2025 • 18h às 21h";
const EVENT_LOCATION  = "Livraria da Vila Lorena — São Paulo, SP";
const BOOK_COVER_URL  = "https://i.ibb.co/HTdm50dZ/capa-cris-martinez.png"; // ← cole aqui a URL da capa do livro
// ──────────────────────────────────────────────────────────────────

// ─── Supabase ──────────────────────────────────────────────────────
const SUPABASE_URL  = "https://tbksdqcauadfknqbjqch.supabase.co";
const ANON_KEY      = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRia3NkcWNhdWFkZmtucWJqcWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTM4MTEsImV4cCI6MjA5MTA2OTgxMX0.hu6HKwjCAbSMs4vd1wO3uvG76303f54Q7-cHzJlTWus";
const SERVICE_KEY   = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRia3NkcWNhdWFkZmtucWJqcWNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTQ5MzgxMSwiZXhwIjoyMDkxMDY5ODExfQ.rNWJKYpI_Vcx5I2WcQ9dFe7eY2A-bMdlF2u6t2vJpP0";

// ─── Credenciais de acesso (Área do Colaborador) ───────────────────
// Para alterar: troque os valores abaixo.
const COLLAB_USER     = "@despertar";
const COLLAB_PASSWORD = "#Meulivro2026@";
// ──────────────────────────────────────────────────────────────────

async function dbInsert(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: ANON_KEY,
      Authorization: `Bearer ${ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(data),
  });
  return res.ok;
}

async function dbSelect() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/registrations?select=*&order=created_at.desc`,
    {
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
      },
    }
  );
  if (res.ok) return res.json();
  return [];
}

// ─── CSS global ───────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:  #ffffff;
    --cream:  #ffffff;
    --orange: #e65019;
    --teal:   #195f71;
    --teal-dark: #103d49;
    --text:   #1a1a1a;
    --muted:  #6b6b6b;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body:    'Outfit', sans-serif;
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--cream);
    color: var(--text);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Noise grain overlay ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.4;
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(-3deg); }
    50%       { transform: translateY(-18px) rotate(-1.5deg); }
  }
  @keyframes floatShadow {
    0%, 100% { transform: scaleX(1) translateY(0); opacity: 0.3; }
    50%       { transform: scaleX(0.85) translateY(10px); opacity: 0.15; }
  }
  @keyframes lineExpand {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(230,80,25,0.4); }
    50%       { box-shadow: 0 0 0 12px rgba(230,80,25,0); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: scale(0.6); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .animate-fade-up   { animation: fadeUp 0.9s var(--ease-out-expo) both; }
  .animate-fade-in   { animation: fadeIn 1s ease both; }
  .animate-slide-right { animation: slideInRight 0.9s var(--ease-out-expo) both; }
  .d-100 { animation-delay: 0.1s; }
  .d-200 { animation-delay: 0.2s; }
  .d-300 { animation-delay: 0.3s; }
  .d-400 { animation-delay: 0.4s; }
  .d-500 { animation-delay: 0.5s; }
  .d-600 { animation-delay: 0.6s; }
  .d-700 { animation-delay: 0.7s; }
  .d-800 { animation-delay: 0.8s; }

  /* ── Reveal on scroll ── */
  .reveal { opacity: 0; transform: translateY(50px); transition: opacity 0.9s var(--ease-out-expo), transform 0.9s var(--ease-out-expo); }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.9s var(--ease-out-expo), transform 0.9s var(--ease-out-expo); }
  .reveal-left.visible { opacity: 1; transform: translateX(0); }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 2px; }

  /* ── Nav ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 60px;
    transition: all 0.4s ease;
  }
  .nav.scrolled {
    background: rgba(255,249,244,0.92);
    backdrop-filter: blur(20px);
    padding: 14px 60px;
    border-bottom: 1px solid rgba(230,80,25,0.12);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: var(--teal);
    cursor: pointer;
    text-decoration: none;
  }
  .nav-links { display: flex; gap: 36px; align-items: center; }
  .nav-link {
    font-family: var(--font-body);
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text);
    cursor: pointer;
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 100%; height: 1px; background: var(--orange);
    transform: scaleX(0); transform-origin: right;
    transition: transform 0.3s ease;
  }
  .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
  .nav-cta {
    padding: 10px 24px;
    background: var(--orange);
    color: white;
    border-radius: 2px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
  }
  .nav-cta:hover { background: var(--teal); transform: translateY(-1px); }

  @media (max-width: 768px) {
    .nav { padding: 16px 24px; }
    .nav.scrolled { padding: 12px 24px; }
    .nav-links { gap: 16px; }
    .nav-cta { display: none; }
  }

  /* ── Hero ── */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 120px 60px 80px;
    position: relative;
    overflow: hidden;
    background: var(--cream);
  }
  .hero::after {
    content: '';
    position: absolute;
    top: -20%; right: -10%;
    width: 60vw; height: 60vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(25,95,113,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-text { padding-right: 40px; }
  .hero-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 28px;
  }
  .hero-label::before {
    content: ''; display: block;
    width: 32px; height: 1px; background: var(--orange);
  }
  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 7vw, 7rem);
    font-weight: 600;
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: var(--teal-dark);
    margin-bottom: 24px;
  }
  .hero-title em {
    font-style: italic;
    color: var(--orange);
  }
  .hero-subtitle {
    font-family: var(--font-display);
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    font-style: italic;
    color: var(--muted);
    margin-bottom: 40px;
    line-height: 1.6;
  }
  .hero-meta {
    display: flex; flex-direction: column; gap: 10px;
    margin-bottom: 48px;
  }
  .hero-meta-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 0.85rem; color: var(--muted); font-weight: 400;
  }
  .hero-meta-icon {
    width: 16px; height: 16px;
    color: var(--orange); flex-shrink: 0;
  }
  .hero-meta-item strong { color: var(--text); font-weight: 500; }
  .hero-author {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: var(--teal);
  }
  .hero-author span { color: var(--muted); font-size: 0.85rem; font-family: var(--font-body); }

  .hero-book {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .book-wrapper {
    position: relative;
    animation: float 5s ease-in-out infinite;
    transform-style: preserve-3d;
  }
  .book-cover {
    width: clamp(200px, 28vw, 340px);
    aspect-ratio: 2/3;
    border-radius: 4px 12px 12px 4px;
    overflow: hidden;
    position: relative;
    transform: perspective(1000px) rotateY(-8deg);
    transition: transform 0.4s ease;
  }
  .book-cover:hover {
    transform: perspective(1000px) rotateY(0deg);
  }
  .book-cover-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }
  .book-cover-placeholder {
    width: 100%; height: 100%;
    background: linear-gradient(145deg, var(--teal) 0%, var(--teal-dark) 50%, #0c2830 100%);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 32px 24px; text-align: center;
    position: relative; overflow: hidden;
  }
  .book-cover-placeholder::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.015) 2px,
      rgba(255,255,255,0.015) 4px
    );
  }
  .book-cover-placeholder::after {
    content: '';
    position: absolute;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: radial-gradient(circle at 30% 30%, rgba(230,80,25,0.2), transparent 60%);
  }
  .book-cover-title {
    font-family: var(--font-display);
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    font-weight: 600;
    color: white;
    letter-spacing: 0.02em;
    line-height: 1.2;
    position: relative; z-index: 1;
    margin-bottom: 12px;
  }
  .book-cover-divider {
    width: 40px; height: 1px;
    background: var(--orange);
    margin: 12px auto;
    position: relative; z-index: 1;
  }
  .book-cover-author-text {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    position: relative; z-index: 1;
  }
  .book-cover-label {
    font-family: var(--font-body);
    font-size: 0.62rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,249,244,0.35);
    position: absolute; bottom: 16px;
    z-index: 1;
  }
  .book-spine {
    position: absolute;
    left: -14px; top: 0; bottom: 0;
    width: 14px;
    background: linear-gradient(to right, #0c2830, var(--teal-dark));
    border-radius: 4px 0 0 4px;
    transform: perspective(1000px) rotateY(-75deg);
    transform-origin: right center;
  }
  .book-shadow {
    width: 80%;
    height: 20px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.25), transparent 70%);
    margin-top: 20px;
    animation: floatShadow 5s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 100px 24px 60px;
      text-align: center;
    }
    .hero-label { justify-content: center; }
    .hero-label::before { display: none; }
    .hero-text { padding-right: 0; order: 2; }
    .hero-book { order: 1; margin-bottom: 48px; }
    .hero-meta { align-items: center; }
    .hero-meta-item { justify-content: center; }
  }

  /* ── Marquee strip ── */
  .marquee-strip {
    background: var(--teal);
    padding: 14px 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee-inner {
    display: inline-block;
    animation: marqueeScroll 25s linear infinite;
  }
  @keyframes marqueeScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .marquee-item {
    display: inline-flex; align-items: center; gap: 20px;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,249,244,0.8);
    padding: 0 40px;
  }
  .marquee-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--orange);
    display: inline-block;
  }

  /* ── About section ── */
  .section-about {
    background: var(--white);
    padding: 120px 60px;
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    gap: 80px;
    align-items: center;
  }
  .divider-line {
    background: linear-gradient(to bottom, transparent, var(--orange), transparent);
    height: 200px;
    align-self: center;
  }
  .about-quote {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 300;
    font-style: italic;
    line-height: 1.35;
    color: var(--teal-dark);
  }
  .about-quote strong {
    font-style: normal;
    font-weight: 600;
    color: var(--orange);
  }
  .about-text {
    font-size: 0.95rem;
    line-height: 1.85;
    color: var(--muted);
    font-weight: 300;
  }
  .about-text p + p { margin-top: 16px; }
  .about-tag {
    display: inline-block;
    padding: 5px 14px;
    border: 1px solid var(--teal);
    color: var(--teal);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    .section-about {
      grid-template-columns: 1fr;
      gap: 48px;
      padding: 80px 24px;
    }
    .divider-line { display: none; }
  }

  /* ── Form section ── */
  .section-form {
    background: var(--cream);
    padding: 120px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: start;
    position: relative;
    overflow: hidden;
  }
  .section-form::before {
    content: '';
    position: absolute; bottom: -100px; left: -100px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,80,25,0.06), transparent 70%);
    pointer-events: none;
  }
  .form-eyebrow {
    display: flex; align-items: center; gap: 12px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 20px;
  }
  .form-eyebrow::after {
    content: ''; flex: 1;
    height: 1px; background: rgba(230,80,25,0.3);
    max-width: 60px;
  }
  .form-title {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    font-weight: 600;
    line-height: 1.1;
    color: var(--teal-dark);
    margin-bottom: 20px;
  }
  .form-desc {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 40px;
  }
  .form-stats {
    display: flex; gap: 40px;
  }
  .form-stat-number {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--teal);
    line-height: 1;
  }
  .form-stat-label {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 4px;
  }

  .form-card {
    background: var(--white);
    border: 1px solid rgba(25,95,113,0.1);
    border-radius: 4px;
    padding: 52px 48px;
    position: relative;
  }
  .form-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--orange), var(--teal));
  }
  .form-field {
    margin-bottom: 28px;
    position: relative;
  }
  .form-label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 8px;
  }
  .form-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1.5px solid rgba(25,95,113,0.25);
    padding: 10px 0;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    outline: none;
    transition: border-color 0.3s ease;
    border-radius: 0;
  }
  .form-input::placeholder { color: rgba(107,107,107,0.5); font-size: 0.9rem; }
  .form-input:focus { border-bottom-color: var(--orange); }
  .form-input-line {
    position: absolute; bottom: 0; left: 0;
    height: 1.5px; width: 0;
    background: var(--orange);
    transition: width 0.4s var(--ease-out-expo);
  }
  .form-input:focus ~ .form-input-line { width: 100%; }

  .btn-submit {
    width: 100%;
    padding: 18px 32px;
    background: var(--orange);
    color: white;
    border: none;
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.35s var(--ease-out-expo);
    position: relative;
    overflow: hidden;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .btn-submit::before {
    content: '';
    position: absolute; inset: 0;
    background: var(--teal);
    transform: translateX(-101%);
    transition: transform 0.4s var(--ease-out-expo);
  }
  .btn-submit:hover::before { transform: translateX(0); }
  .btn-submit span { position: relative; z-index: 1; }
  .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  .btn-submit:disabled::before { display: none; }

  /* Loading spinner */
  .spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    position: relative; z-index: 1;
  }

  /* Success message */
  .success-card {
    text-align: center;
    padding: 48px 32px;
    animation: fadeUp 0.7s var(--ease-out-expo) both;
  }
  .success-icon {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--teal), var(--teal-dark));
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 24px;
    animation: pulse 2.5s ease infinite;
  }
  .success-icon svg { color: white; }
  .success-title {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 600;
    color: var(--teal-dark);
    margin-bottom: 12px;
  }
  .success-text {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.7;
    font-weight: 300;
  }
  .success-divider {
    width: 40px; height: 2px;
    background: var(--orange);
    margin: 20px auto;
  }

  .form-error {
    font-size: 0.78rem;
    color: #e53e3e;
    margin-top: 6px;
    letter-spacing: 0.02em;
  }

  @media (max-width: 900px) {
    .section-form {
      grid-template-columns: 1fr;
      gap: 60px;
      padding: 80px 24px;
    }
    .form-card { padding: 36px 28px; }
  }

  /* ── Footer ── */
  .footer {
    background: var(--teal-dark);
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
  }
  .footer-logo {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--cream);
    letter-spacing: 0.04em;
  }
  .footer-text {
    font-size: 0.78rem;
    color: rgba(255,249,244,0.4);
    letter-spacing: 0.1em;
    text-align: center;
  }
  .footer-collab {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--orange);
    cursor: pointer;
    transition: color 0.3s;
  }
  .footer-collab:hover { color: var(--cream); }
  @media (max-width: 768px) {
    .footer { padding: 40px 24px; flex-direction: column; text-align: center; }
  }

  /* ══════════════════════════════════════════════════════════
     COLLABORATORS PAGE
     ══════════════════════════════════════════════════════════ */
  .collab-page {
    min-height: 100vh;
    background: var(--teal-dark);
    padding: 0;
  }
  .collab-header {
    background: var(--teal-dark);
    padding: 100px 60px 60px;
    position: relative;
    overflow: hidden;
  }
  .collab-header::after {
    content: '';
    position: absolute; bottom: -1px; left: 0; right: 0;
    height: 80px;
    background: var(--cream);
    clip-path: ellipse(55% 80px at 50% 100%);
  }
  .collab-back {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,249,244,0.5);
    cursor: pointer;
    border: none; background: none;
    margin-bottom: 40px;
    transition: color 0.3s;
  }
  .collab-back:hover { color: var(--cream); }
  .collab-back svg { transition: transform 0.3s; }
  .collab-back:hover svg { transform: translateX(-4px); }
  .collab-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 600;
    color: var(--cream);
    line-height: 1;
    margin-bottom: 12px;
  }
  .collab-subtitle {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.1rem;
    color: rgba(255,249,244,0.5);
  }

  .collab-body {
    background: var(--cream);
    padding: 80px 60px;
  }

  .stats-row {
    display: flex; gap: 24px;
    margin-bottom: 60px;
    flex-wrap: wrap;
  }
  .stat-card {
    flex: 1; min-width: 180px;
    background: var(--white);
    border: 1px solid rgba(25,95,113,0.1);
    border-radius: 4px;
    padding: 32px 28px;
    position: relative;
    overflow: hidden;
    animation: countUp 0.7s var(--ease-out-expo) both;
  }
  .stat-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--orange), var(--teal));
  }
  .stat-number {
    font-family: var(--font-display);
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--teal);
    line-height: 1;
    margin-bottom: 8px;
  }
  .stat-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .collab-table-wrap {
    background: var(--white);
    border: 1px solid rgba(25,95,113,0.1);
    border-radius: 4px;
    overflow: hidden;
  }
  .table-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid rgba(25,95,113,0.08);
  }
  .table-title {
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--teal-dark);
  }
  .table-search {
    padding: 8px 16px;
    border: 1.5px solid rgba(25,95,113,0.2);
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.82rem;
    outline: none;
    background: var(--cream);
    color: var(--text);
    min-width: 220px;
    transition: border-color 0.3s;
  }
  .table-search:focus { border-color: var(--orange); }
  .table-search::placeholder { color: rgba(107,107,107,0.5); }

  .data-table { width: 100%; border-collapse: collapse; }
  .data-table th {
    padding: 14px 32px;
    text-align: left;
    font-size: 0.67rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    border-bottom: 1px solid rgba(25,95,113,0.1);
    background: rgba(25,95,113,0.03);
  }
  .data-table td {
    padding: 18px 32px;
    font-size: 0.88rem;
    color: var(--text);
    border-bottom: 1px solid rgba(25,95,113,0.06);
    font-weight: 300;
  }
  .data-table tr:last-child td { border-bottom: none; }
  .data-table tbody tr {
    transition: background 0.2s;
    cursor: default;
    animation: fadeUp 0.5s var(--ease-out-expo) both;
  }
  .data-table tbody tr:hover { background: rgba(25,95,113,0.03); }
  .td-name { font-weight: 500; color: var(--teal-dark); }
  .td-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 3px 10px;
    background: rgba(25,95,113,0.08);
    border-radius: 2px;
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--teal);
    letter-spacing: 0.05em;
  }
  .td-date { color: var(--muted); font-size: 0.8rem; }
  .empty-state {
    text-align: center;
    padding: 80px 32px;
    color: var(--muted);
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.1rem;
  }
  .loading-state {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    padding: 80px 32px;
    color: var(--muted);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: 768px) {
    .collab-header { padding: 80px 24px 60px; }
    .collab-body { padding: 40px 16px; }
    .table-header-row { flex-direction: column; gap: 16px; align-items: stretch; }
    .table-search { min-width: unset; width: 100%; }
    .data-table th, .data-table td { padding: 12px 16px; }
  }

  /* ══════════════════════════════════════════════════════════
     LOGIN PAGE
     ══════════════════════════════════════════════════════════ */
  .login-page {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--cream);
  }

  /* Left panel */
  .login-left {
    background: var(--teal-dark);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 60px 56px;
    position: relative;
    overflow: hidden;
  }
  .login-left::before {
    content: '';
    position: absolute; top: -20%; right: -20%;
    width: 70%; height: 70%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(230,80,25,0.12), transparent 70%);
    pointer-events: none;
  }
  .login-left::after {
    content: '';
    position: absolute; bottom: -10%; left: -10%;
    width: 50%; height: 50%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,249,244,0.04), transparent 70%);
    pointer-events: none;
  }
  .login-brand {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--cream);
    letter-spacing: 0.04em;
    position: relative; z-index: 1;
  }
  .login-left-main { position: relative; z-index: 1; }
  .login-left-tag {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--orange);
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 24px;
  }
  .login-left-tag::before {
    content: ''; width: 28px; height: 1px; background: var(--orange);
  }
  .login-left-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 600;
    color: var(--cream);
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .login-left-title em { font-style: italic; color: var(--orange); }
  .login-left-desc {
    font-size: 0.85rem;
    color: rgba(255,249,244,0.45);
    line-height: 1.8;
    font-weight: 300;
    max-width: 360px;
  }
  .login-left-footer {
    font-size: 0.7rem;
    color: rgba(255,249,244,0.25);
    letter-spacing: 0.1em;
    position: relative; z-index: 1;
  }
  /* Small book decoration on left panel */
  .login-deco-book {
    width: 80px;
    aspect-ratio: 2/3;
    border-radius: 2px 6px 6px 2px;
    background: linear-gradient(145deg, rgba(255,249,244,0.08), rgba(255,249,244,0.02));
    border: 1px solid rgba(255,249,244,0.08);
    position: absolute;
    bottom: 80px; right: 56px;
    transform: rotate(6deg);
    z-index: 1;
    animation: float 6s ease-in-out infinite;
  }
  .login-deco-book::after {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 6px;
    background: rgba(230,80,25,0.25);
    border-radius: 2px 0 0 2px;
  }

  /* Right panel */
  .login-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 56px;
    background: var(--cream);
  }
  .login-box {
    width: 100%;
    max-width: 400px;
  }
  .login-eyebrow {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--orange);
    margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
  }
  .login-eyebrow::after {
    content: ''; height: 1px; background: rgba(230,80,25,0.3);
    flex: 1; max-width: 40px;
  }
  .login-title {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 600;
    color: var(--teal-dark);
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .login-subtitle {
    font-size: 0.82rem;
    color: var(--muted);
    font-weight: 300;
    margin-bottom: 48px;
    line-height: 1.6;
  }
  .login-field {
    margin-bottom: 32px;
    position: relative;
  }
  .login-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--teal);
    margin-bottom: 8px;
  }
  .login-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1.5px solid rgba(25,95,113,0.22);
    padding: 10px 0;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
    outline: none;
    transition: border-color 0.3s;
    letter-spacing: 0.02em;
  }
  .login-input:focus { border-bottom-color: var(--orange); }
  .login-input::placeholder { color: rgba(107,107,107,0.4); font-size: 0.88rem; letter-spacing: 0; }
  .login-input-bar {
    position: absolute; bottom: 0; left: 0;
    height: 1.5px; width: 0;
    background: var(--orange);
    transition: width 0.4s var(--ease-out-expo);
  }
  .login-input:focus ~ .login-input-bar { width: 100%; }
  .login-error {
    background: rgba(230,80,25,0.06);
    border: 1px solid rgba(230,80,25,0.25);
    border-left: 3px solid var(--orange);
    border-radius: 2px;
    padding: 12px 16px;
    font-size: 0.78rem;
    color: var(--orange);
    margin-bottom: 24px;
    display: flex; align-items: center; gap: 8px;
    animation: fadeUp 0.4s ease both;
  }
  .login-btn {
    width: 100%;
    padding: 17px 32px;
    background: var(--teal-dark);
    color: white;
    border: none;
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.35s var(--ease-out-expo);
    position: relative;
    overflow: hidden;
    display: flex; align-items: center; justify-content: center; gap: 10px;
  }
  .login-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: var(--orange);
    transform: translateX(-101%);
    transition: transform 0.4s var(--ease-out-expo);
  }
  .login-btn:hover::before { transform: translateX(0); }
  .login-btn span { position: relative; z-index: 1; }
  .login-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .login-btn:disabled::before { display: none; }
  .login-back {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 24px;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    cursor: pointer;
    background: none; border: none;
    font-family: var(--font-body);
    transition: color 0.3s;
    width: 100%; justify-content: center;
  }
  .login-back:hover { color: var(--teal); }
  .login-lock-icon {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: rgba(25,95,113,0.08);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 32px;
  }
  /* Shake animation for wrong password */
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-8px); }
    40%       { transform: translateX(8px); }
    60%       { transform: translateX(-6px); }
    80%       { transform: translateX(6px); }
  }
  .shake { animation: shake 0.45s ease both; }

  /* Logout button in nav */
  .nav-logout {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 18px;
    border: 1.5px solid rgba(25,95,113,0.3);
    background: transparent;
    color: var(--teal);
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
  }
  .nav-logout:hover { background: var(--teal); color: white; border-color: var(--teal); }

  @media (max-width: 768px) {
    .login-page { grid-template-columns: 1fr; }
    .login-left { display: none; }
    .login-right { padding: 80px 28px 48px; min-height: 100vh; }
    .login-box { max-width: 100%; }
  }
`;

// ─── Utility hooks ─────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .reveal-left");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);
}

function useScrolledNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

// ─── Login Page ───────────────────────────────────────────────────
function LoginPage({ onSuccess, onBack }) {
  const [user, setUser]       = useState("");
  const [pass, setPass]       = useState("");
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake]     = useState(false);
  const [showPass, setShowPass] = useState(false);
  const boxRef = useRef(null);

  const handleLogin = () => {
    if (!user.trim() || !pass.trim()) {
      setError("Preencha usuário e senha.");
      triggerShake();
      return;
    }
    setLoading(true);
    // Simulate a brief loading for UX polish
    setTimeout(() => {
      if (user.trim() === COLLAB_USER && pass === COLLAB_PASSWORD) {
        setLoading(false);
        onSuccess();
      } else {
        setLoading(false);
        setError("Usuário ou senha incorretos.");
        setPass("");
        triggerShake();
      }
    }, 600);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleKeyDown = (e) => { if (e.key === "Enter") handleLogin(); };

  return (
    <div className="login-page">
      {/* Left decorative panel */}
      <div className="login-left">
        <span className="login-brand">{AUTHOR_NAME}</span>
        <div className="login-left-main">
          <div className="login-left-tag">Acesso restrito</div>
          <h2 className="login-left-title">Área das<br /><em>Autoras</em></h2>
          <p className="login-left-desc">
            Espaço exclusivo para a equipe acompanhar em tempo real
            as confirmações de presença no lançamento do livro.
          </p>
          <div className="login-deco-book" />
        </div>
        <span className="login-left-footer">© {new Date().getFullYear()} — {BOOK_TITLE}</span>
      </div>

      {/* Right login form */}
      <div className="login-right">
        <div className={`login-box${shake ? " shake" : ""}`} ref={boxRef}>
          <div className="login-eyebrow">Login</div>
          <h1 className="login-title">Bem-vindo<br />de volta</h1>
          <p className="login-subtitle">
            Insira suas credenciais para acessar o painel de colaboradores.
          </p>

          {/* User field */}
          <div className="login-field">
            <label className="login-label">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              Usuário
            </label>
            <input
              className="login-input"
              type="text"
              placeholder="@usuario"
              value={user}
              onChange={(e) => { setUser(e.target.value); setError(""); }}
              onKeyDown={handleKeyDown}
              autoComplete="username"
            />
            <div className="login-input-bar" />
          </div>

          {/* Password field */}
          <div className="login-field" style={{ position: "relative" }}>
            <label className="login-label">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              Senha
            </label>
            <div style={{ position: "relative" }}>
              <input
                className="login-input"
                type={showPass ? "text" : "password"}
                placeholder="••••••••••"
                value={pass}
                onChange={(e) => { setPass(e.target.value); setError(""); }}
                onKeyDown={handleKeyDown}
                autoComplete="current-password"
                style={{ paddingRight: "36px" }}
              />
              <div className="login-input-bar" />
              <button
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer", color: "var(--muted)",
                  padding: "4px", display: "flex", alignItems: "center"
                }}
              >
                {showPass ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="login-error">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          {/* Submit */}
          <button className="login-btn" onClick={handleLogin} disabled={loading}>
            {loading ? (
              <><div className="spinner" /><span>Verificando...</span></>
            ) : (
              <>
                <span>Entrar</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </>
            )}
          </button>

          {/* Back link */}
          <button className="login-back" onClick={onBack}>
            <IconArrowLeft /> Voltar ao site
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────
const IconCalendar = () => (
  <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconMapPin = () => (
  <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconCheck = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ─── Nav Component ─────────────────────────────────────────────────
function Nav({ onNavigate, page, isAuth, onLogout }) {
  const scrolled = useScrolledNav();
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <span className="nav-logo" onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
        {AUTHOR_NAME}
      </span>
      <div className="nav-links">
        {page === "home" && (
          <>
            <a className="nav-link" href="#sobre">Sobre</a>
            <a className="nav-link" href="#inscricao">Inscrição</a>
            <button className="nav-cta" onClick={() => onNavigate("login")}>
              Área do Colaborador
            </button>
          </>
        )}
        {page === "login" && (
          <button className="nav-cta" onClick={() => onNavigate("home")}>
            ← Voltar ao site
          </button>
        )}
        {page === "collaborators" && (
          <>
            <button className="nav-cta" onClick={() => onNavigate("home")}>
              ← Voltar ao site
            </button>
            <button className="nav-logout" onClick={onLogout}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

// ─── Registration Form ─────────────────────────────────────────────
function RegistrationForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nome é obrigatório";
    if (!form.phone.trim()) e.phone = "Celular é obrigatório";
    if (!form.email.trim()) e.email = "E-mail é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "E-mail inválido";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setServerError("");
    const ok = await dbInsert({ name: form.name.trim(), phone: form.phone.trim(), email: form.email.trim() });
    setLoading(false);
    if (ok) setSuccess(true);
    else setServerError("Erro ao enviar. Tente novamente.");
  };

  if (success) {
    return (
      <div className="form-card">
        <div className="success-card">
          <div className="success-icon"><IconCheck /></div>
          <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "12px" }}>
            Inscrição confirmada
          </p>
          <h3 className="success-title">Até lá!</h3>
          <div className="success-divider" />
          <p className="success-text">
            Obrigado pela sua presença confirmada, <strong>{form.name}</strong>.<br />
            Você receberá mais detalhes em breve.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      {["name", "phone", "email"].map((field) => (
        <div className="form-field" key={field}>
          <label className="form-label">
            {field === "name" ? "Nome completo" : field === "phone" ? "Celular (WhatsApp)" : "E-mail"}
          </label>
          <input
            className="form-input"
            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
            placeholder={
              field === "name" ? "Seu nome" : field === "phone" ? "(11) 99999-9999" : "seu@email.com"
            }
            value={form[field]}
            onChange={(e) => { setForm({ ...form, [field]: e.target.value }); setErrors({ ...errors, [field]: "" }); }}
          />
          <div className="form-input-line" />
          {errors[field] && <p className="form-error">{errors[field]}</p>}
        </div>
      ))}
      {serverError && <p className="form-error" style={{ marginBottom: "12px" }}>{serverError}</p>}
      <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
        {loading ? (
          <><div className="spinner" /><span>Enviando...</span></>
        ) : (
          <><span>Confirmar presença</span><IconArrow /></>
        )}
      </button>
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────
function HomePage({ onNavigate }) {
  useScrollReveal();
  const [count, setCount] = useState("—");

  useEffect(() => {
    dbSelect().then((rows) => {
      if (Array.isArray(rows)) setCount(rows.length);
    });
  }, []);

  const marqueeItems = ["Lançamento Literário", "•", AUTHOR_NAME, "•", EVENT_DATE, "•", EVENT_LOCATION, "•", "Reserve seu lugar", "•"];
  const marqueeStr = marqueeItems.join(" ◆ ");

  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-label animate-fade-up">Lançamento Literário</p>
          <h1 className="hero-title animate-fade-up d-200">
            {BOOK_TITLE.split(" ").map((word, i) =>
              i === 0 ? <em key={i}>{word} </em> : word + " "
            )}
          </h1>
          <p className="hero-subtitle animate-fade-up d-300">{BOOK_SUBTITLE}</p>
          <div className="hero-meta animate-fade-up d-400">
            <div className="hero-meta-item"><IconCalendar /><strong>{EVENT_DATE}</strong></div>
            <div className="hero-meta-item"><IconMapPin />{EVENT_LOCATION}</div>
          </div>
          <p className="hero-author animate-fade-up d-500">
            <span>Escrito por </span>{AUTHOR_NAME}
          </p>
        </div>
        <div className="hero-book animate-fade-in d-300">
          <div className="book-wrapper">
            <div className="book-cover">
              {BOOK_COVER_URL ? (
                <img src={BOOK_COVER_URL} alt="Capa do livro" className="book-cover-img" />
              ) : (
                <div className="book-cover-placeholder">
                  <div className="book-cover-title">{BOOK_TITLE}</div>
                  <div className="book-cover-divider" />
                  <div className="book-cover-author-text">{AUTHOR_NAME}</div>
                  <div className="book-cover-label">Capa do livro</div>
                </div>
              )}
              <div className="book-spine" />
            </div>
            <div className="book-shadow" />
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[0, 1].map((i) => (
            <span key={i}>
              {marqueeStr.split(" ◆ ").map((item, j) => (
                <span key={j} className="marquee-item">
                  {item} {j < marqueeStr.split(" ◆ ").length - 1 && <span className="marquee-dot" />}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="sobre" className="section-about">
        <div className="reveal-left">
          <span className="about-tag">Sobre o livro</span>
          <blockquote className="about-quote">
            Uma obra que vai mudar a forma como você vê{" "}
            <strong>a maternidade.</strong>
          </blockquote>
        </div>
        <div className="divider-line" />
        <div className="reveal">
          <div className="about-text">
            <p>
              Esta obra, de Cristina Martinez e Vivian Cirineu, é um convite para mães que desejam educar seus filhos com amor, firmeza e presença emocional, sem culpa, sem perfeccionismo e sem repetir padrões que machucam.
            </p>
            <p>
              Com linguagem acessível e embasamento científico, o livro conduz a mãe ao desenvolvimento da autorregulação emocional, da comunicação empática e de uma presença mais consciente na relação com os filhos, favorecendo respostas claras e acolhedoras em lugar de reações automáticas.
            </p>
            <p>
              Desafios cotidianos deixam de ser fonte de exaustão e passam a se transformar em oportunidades de vínculo, escuta e conexão.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section id="inscricao" className="section-form">
        <div>
          <div className="form-eyebrow reveal">Garanta sua vaga</div>
          <h2 className="form-title reveal d-100">
            Confirme<br />sua<br /><em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--orange)" }}>presença</em>
          </h2>
          <p className="form-desc reveal d-200">
            O evento é gratuito e as vagas são limitadas. Preencha o formulário ao lado
            para garantir seu lugar nessa noite especial.
          </p>
          <div className="form-stats reveal d-300">
            <div>
            </div>
            <div>
              <div className="form-stat-number" style={{ color: "var(--orange)" }}></div>
              <div className="form-stat-label">noite única</div>
            </div>
          </div>
        </div>
        <div className="reveal d-200">
          <RegistrationForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <span className="footer-logo">{AUTHOR_NAME}</span>
        <p className="footer-text">© {new Date().getFullYear()} — Lançamento Despertar Materno</p>
        <span className="footer-collab" onClick={() => onNavigate("login")}>
          Área do Colaborador →
        </span>
      </footer>
    </div>
  );
}

// ─── Collaborators Page ───────────────────────────────────────────
function CollaboratorsPage({ onNavigate }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dbSelect()
      .then((data) => { setRows(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const filtered = rows.filter((r) =>
    [r.name, r.email, r.phone].some((v) => v?.toLowerCase().includes(search.toLowerCase()))
  );

  const formatDate = (iso) => {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="collab-page">
      <div className="collab-header">
        <button className="collab-back" onClick={() => onNavigate("home")}>
          <IconArrowLeft /> Voltar
        </button>
        <h1 className="collab-title">Área dos<br /><em style={{ fontStyle: "italic" }}>Colaboradores</em></h1>
        <p className="collab-subtitle">Lista de confirmados — {BOOK_TITLE}</p>
      </div>

      <div className="collab-body">
        {/* Stats */}
        <div className="stats-row">
          {[
            { number: rows.length, label: "Total confirmado" },
            { number: filtered.length !== rows.length ? filtered.length : "—", label: "Resultado da busca" },
          ].map((s, i) => (
            <div className="stat-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="collab-table-wrap">
          <div className="table-header-row">
            <span className="table-title">Inscrições</span>
            <input
              className="table-search"
              placeholder="Buscar por nome, e-mail ou celular…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {loading ? (
            <div className="loading-state">
              <div className="spinner" style={{ borderTopColor: "var(--teal)", borderColor: "rgba(25,95,113,0.2)" }} />
              Carregando inscrições…
            </div>
          ) : error ? (
            <div className="empty-state">Erro ao carregar dados. Verifique as configurações do Supabase.</div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              {search ? "Nenhum resultado encontrado." : "Nenhuma inscrição ainda."}
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Celular</th>
                    <th>E-mail</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <tr key={r.id} style={{ animationDelay: `${Math.min(i * 0.04, 0.5)}s` }}>
                      <td>
                        <span className="td-badge"><IconUser />{i + 1}</span>
                      </td>
                      <td className="td-name">{r.name}</td>
                      <td>{r.phone}</td>
                      <td>{r.email}</td>
                      <td className="td-date">{formatDate(r.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────
export default function App() {
  const [page, setPage]   = useState("home");
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useCallback((p) => {
    // If trying to go to collaborators without auth, redirect to login
    if (p === "collaborators" && !isAuth) { setPage("login"); return; }
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isAuth]);

  const handleLoginSuccess = useCallback(() => {
    setIsAuth(true);
    setPage("collaborators");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuth(false);
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      {page !== "login" && (
        <Nav onNavigate={navigate} page={page} isAuth={isAuth} onLogout={handleLogout} />
      )}
      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "login" && (
        <LoginPage
          onSuccess={handleLoginSuccess}
          onBack={() => { setPage("home"); window.scrollTo({ top: 0 }); }}
        />
      )}
      {page === "collaborators" && isAuth && (
        <CollaboratorsPage onNavigate={navigate} />
      )}
    </>
  );
}