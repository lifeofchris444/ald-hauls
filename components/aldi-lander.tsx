"use client"

import { useState } from "react"

const AFFILIATE_LINK = "https://linkthem.net/?offer_id=2843&aff_id=26188"

const ACCENT = "#00205B"
const ACCENT_BRIGHT = "#1F4AA8"
const EVERGREEN = "#E8590C"
const SPARK_BLUSH = "#FFB81C"
const ACCENT_NUMERAL = "#D9E1F2"
const ACCENT_TINT = "#E8EEF9"
const SECTION_TINT = "#FFF6EC"
const INK = "#0B1530"

const HERO_GRADIENT = `linear-gradient(165deg, #1F4AA8 0%, #00205B 55%, #001338 100%)`

const GIFT_ICON =
  "M4 10h16v10.5H4z M3 6.5h18V10H3z M12 6.5v14 M12 6.5c-1.8 0-4.2-.6-4.2-2.2 0-1.3 1.4-1.8 2.4-1.2 1 .6 1.8 2 1.8 3.4z M12 6.5c1.8 0 4.2-.6 4.2-2.2 0-1.3-1.4-1.8-2.4-1.2-1 .6-1.8 2-1.8 3.4z"
const LEAF_ICON = "M5 19c0-8 5-13 14-14-1 9-6 14-14 14z M5 19l7-7"
const PIE_ICON =
  "M3 14.5h18 M4.5 14.5l1.5 4h12l1.5-4 M4.5 14.5c.8-4 4-6.5 7.5-6.5s6.7 2.5 7.5 6.5 M9 11.8l1 1 M14 11.8l-1 1 M12 10.5v1.4"
const TAG_ICON = "M3 12V4h8l10 10-8 8L3 12z M7.5 8.5h.01"
const BAG_ICON = "M5 8h14l-1 13H6L5 8z M9 8V6a3 3 0 016 0v2"
const CARROT_ICON = "M14 10L4 20 M14 10c-2-2-5-1-6 2l-4 8 8-4c3-1 4-4 2-6z M14 10l2-6 M14 10l6-2 M14 10l4-4"
const TABLE_ICON = "M3 10h18 M5 10v10 M19 10v10 M8 10V7a4 4 0 018 0v3 M12 3v1"

const STEPS = [
  {
    t: "Click apply now",
    d: "Start your application — it takes seconds.",
    icon: "M9 9l10.5 3.5-4.5 2-2 4.5L9 9z M4 4l1.5 1.5 M4 9h2 M9 4v2",
  },
  { t: "Enter your email", d: "Quick 30-second signup process.", icon: "M3 7l9 6 9-6 M3.5 5.5h17v13h-17z" },
  {
    t: "Complete the survey",
    d: "Share your Thanksgiving shopping preferences.",
    icon: "M5 6a2 2 0 012-2h10a2 2 0 012 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V6z M9 10h6 M9 14h6",
  },
  {
    t: "Complete 5+ deals",
    d: "Simple tasks like app downloads & trials.",
    icon: GIFT_ICON,
  },
  {
    t: "Receive your discount",
    d: "Delivered straight to your inbox — just in time for Thanksgiving.",
    icon: "M8 21h8 M12 17v4 M7 4h10v5a5 5 0 01-10 0V4z M7 6H4v1a4 4 0 004 4 M17 6h3v1a4 4 0 01-4 4",
  },
]

const CATEGORIES = [
  {
    t: "Turkey & Thanksgiving Dinner",
    d: "Whole turkeys, ham, stuffing mix, gravy, and cranberry sauce — everything for the main event at ALDI prices.",
    icon: BAG_ICON,
  },
  {
    t: "Pies & Holiday Baking",
    d: "Pumpkin and apple pies, pie crusts, flour, butter, and spices to bake your family's favorite desserts.",
    icon: PIE_ICON,
  },
  {
    t: "Fresh Produce & Sides",
    d: "Sweet potatoes, green beans, russets, fresh cranberries, and salad fixings for every side dish on the table.",
    icon: CARROT_ICON,
  },
  {
    t: "ALDI Finds & Hosting Essentials",
    d: "Seasonal ALDI Finds, serveware, table decor, and party trays to host friends and family with ease.",
    icon: TABLE_ICON,
  },
]

const FAQS = [
  {
    q: "What are deals?",
    a: "Simple tasks like app downloads, surveys, or trial subscriptions. Each deal is straightforward and designed to be completed quickly.",
  },
  {
    q: "How many do I need?",
    a: "Complete 5+ deals to receive your reward. The more deals you complete, the faster you can receive your discount code toward your ALDI groceries.",
  },
  {
    q: "How long do they take?",
    a: "Typically 10-20 minutes per deal. Most users complete all required deals within a few hours spread across a day or two — plenty of time before Thanksgiving.",
  },
]

const AVATARS = [
  { src: "/avatars/aldi-shopper-1.webp", alt: "Woman in her mid 30s with brown hair in a rust-orange sweater" },
  { src: "/avatars/aldi-shopper-2.webp", alt: "Black man in his early 40s with a short beard in a navy flannel shirt" },
  { src: "/avatars/aldi-shopper-3.webp", alt: "Latina woman in her late 30s with dark wavy hair in a mustard cardigan" },
]

function Icon({ d, className = "w-6 h-6", color = ACCENT }: { d: string; className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d.split(" M").map((p, i) => (
        <path key={i} d={(i === 0 ? "" : "M") + p} />
      ))}
    </svg>
  )
}

function CTAButton({
  children,
  brand = false,
  large = false,
}: {
  children: React.ReactNode
  brand?: boolean
  large?: boolean
}) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn group inline-flex items-center gap-2 rounded-full font-semibold ${
        large ? "px-9 py-4 text-lg" : "px-7 py-3.5 text-base"
      }`}
      style={brand ? { backgroundColor: ACCENT, color: "#FFFFFF" } : { backgroundColor: "#FFFFFF", color: INK }}
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  )
}

function TimelineRow({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const leftSide = index % 2 === 0
  return (
    <div className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_3.5rem_1fr] gap-x-4 md:gap-x-8 items-center pb-6 md:pb-8 last:pb-0">
      <div
        className={`hidden md:flex items-center ${leftSide ? "md:order-3 justify-start" : "md:order-1 justify-end"}`}
        aria-hidden="true"
      >
        <span className="font-black text-6xl lg:text-7xl leading-none select-none" style={{ color: ACCENT_NUMERAL }}>
          0{index + 1}
        </span>
      </div>

      <div className="order-1 md:order-2 flex justify-center self-start md:self-center pt-1 md:pt-0">
        <div
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm z-10"
          style={{
            backgroundColor: ACCENT,
            borderColor: ACCENT,
            color: "#FFFFFF",
            boxShadow: "0 8px 22px rgba(0,0,0,.25)",
          }}
        >
          {index + 1}
        </div>
      </div>

      <div
        className={`t-card order-2 rounded-2xl p-5 bg-white border border-gray-200 shadow-sm ${
          leftSide ? "md:order-1" : "md:order-3"
        }`}
      >
        <div className={`flex items-start gap-4 ${leftSide ? "md:flex-row-reverse md:text-right" : ""}`}>
          <div
            className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: ACCENT_TINT }}
          >
            <Icon d={step.icon} className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg leading-snug">{step.t}</h3>
            <p className="mt-1 text-gray-500 leading-relaxed text-sm">{step.d}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium text-white">
      <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
      {"Applications Open"}
    </span>
  )
}

export default function AldiRewardLander() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden font-sans" style={{ color: INK }}>
      <style>{`
        .cta-btn { transition: transform .15s ease, box-shadow .2s ease; }
        .cta-btn:hover { transform: scale(1.04); box-shadow: 0 12px 32px rgba(0,0,0,0.30); }
        .cta-btn:active { transform: scale(0.98); }

        .orb { position: absolute; border-radius: 9999px; filter: blur(70px); opacity: .45; animation: orbDrift 12s ease-in-out infinite; }
        @keyframes orbDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.15); }
        }

        .drifter { position: absolute; opacity: .2; animation: drift 9s ease-in-out infinite; }
        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(8deg); }
        }

        .cat-card { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease; }
        .cat-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 24px 48px rgba(17,24,39,0.12); }
        .cat-card:hover .cat-icon { transform: translateY(-4px) rotate(4deg) scale(1.08); }
        .cat-icon { transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
        .card-shine { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(115deg, transparent 35%, rgba(110,96,82,0.05) 47%, rgba(255,255,255,0.55) 52%, transparent 65%); background-size: 260% 100%; animation: cardShine 7s ease-in-out infinite; }
        @keyframes cardShine { 0%, 55% { background-position: 135% 0; } 85%, 100% { background-position: -60% 0; } }
        .icon-bob { animation: iconBob 4.5s ease-in-out infinite; }
        @keyframes iconBob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-5px) rotate(-5deg); } }
        .cat-spark { position: absolute; top: 16px; right: 18px; color: ${SPARK_BLUSH}; animation: sparkTwinkle 3.4s ease-in-out infinite; }
        @keyframes sparkTwinkle { 0%, 100% { transform: scale(.75) rotate(0deg); opacity: .35; } 50% { transform: scale(1.2) rotate(25deg); opacity: .9; } }

        .faq-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s cubic-bezier(.16,1,.3,1); }
        .faq-body.open { grid-template-rows: 1fr; }
        .faq-inner { overflow: hidden; }

        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
        @keyframes pulseDot { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,.6); } 50% { box-shadow: 0 0 0 7px rgba(74,222,128,0); } }

        .t-card { transition: transform .25s cubic-bezier(.16,1,.3,1), border-color .25s ease, box-shadow .25s ease; }
        .t-card:hover { transform: translateY(-6px); border-color: rgba(0,0,0,.25); box-shadow: 0 18px 44px rgba(0,0,0,.10); }
        .t-rail-fill { background: linear-gradient(180deg, ${ACCENT_BRIGHT}, ${ACCENT}); }

        @media (prefers-reduced-motion: reduce) {
          *, .orb, .drifter, .card-shine, .icon-bob, .cat-spark, .pulse-dot { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: HERO_GRADIENT }}>
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: SPARK_BLUSH, opacity: 0.25 }} />
        <div className="orb w-80 h-80 top-1/3 -right-20" style={{ backgroundColor: EVERGREEN, opacity: 0.25, animationDelay: "-6s" }} />
        <div className="drifter left-[8%] top-[30%]">
          <Icon d={LEAF_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>
        <div className="drifter right-[10%] top-[18%]" style={{ animationDelay: "-3s" }}>
          <Icon d={PIE_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>
        <div className="drifter left-[16%] bottom-[12%]" style={{ animationDelay: "-5s" }}>
          <Icon d={TAG_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>
        <div className="drifter right-[14%] bottom-[18%]" style={{ animationDelay: "-7s" }}>
          <Icon d={LEAF_ICON} color="#FFFFFF" className="w-8 h-8" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-20 md:pb-24 text-center text-white">
          <StatusBadge />
          <h1 className="mt-6 font-black tracking-tight leading-[1.05] text-[2rem] min-[368px]:text-[2.3rem] min-[400px]:text-[2.4rem] min-[432px]:text-[2.6rem] min-[464px]:text-[2.8rem] min-[496px]:text-[3rem] min-[528px]:text-[3.2rem] min-[560px]:text-[3.5rem] min-[608px]:text-[3.75rem] sm:text-7xl text-balance">
            {"The ALDI Discounts They Don't Advertise"}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto leading-relaxed text-pretty text-white">
            {
              "Discover how shoppers are unlocking hidden ALDI discounts this Thanksgiving — on turkey and dinner groceries, pies and baking staples, fresh produce, and ALDI Finds."
            }
          </p>
          <div className="mt-9 flex items-center justify-center gap-x-5 gap-y-9 flex-wrap">
            <CTAButton large>Apply Now</CTAButton>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <span
                    key={a.src}
                    className="w-11 h-11 rounded-full border-2 border-white overflow-hidden inline-block shadow-md"
                    style={{ backgroundColor: ACCENT_BRIGHT }}
                  >
                    <img
                      src={a.src}
                      alt={a.alt}
                      width={88}
                      height={88}
                      className="w-full h-full object-cover text-transparent"
                      loading="eager"
                      decoding="async"
                    />
                  </span>
                ))}
              </div>
              <span className="text-sm leading-tight max-w-[200px] text-left text-white">
                {"Join 12,000+ shoppers who've already claimed their discounts"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE STEPS ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>
              How it works
            </div>
            <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
              Five Simple Steps to Claiming Your Discounts
            </h2>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gray-200" />
            <div className="t-rail-fill absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full" />

            {STEPS.map((step, i) => (
              <TimelineRow key={step.t} step={step} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton brand large>
              Apply Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ──────────────────����───────────────── */}
      <section style={{ backgroundColor: SECTION_TINT }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: EVERGREEN }}>
            Thanksgiving savings
          </div>
          <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
            What You Can Do With Your Discount This Thanksgiving
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-5 text-left">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.t}
                className="cat-card relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm p-7 flex items-start gap-5"
              >
                <div className="card-shine" style={{ animationDelay: `${i * 1.8}s` }} aria-hidden="true" />
                <span className="cat-spark" style={{ animationDelay: `${i * 0.8}s` }} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
                  </svg>
                </span>
                <div
                  className="cat-icon w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_TINT }}
                >
                  <div className="icon-bob" style={{ animationDelay: `${i * 0.6}s` }}>
                    <Icon d={c.icon} className="w-7 h-7" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-bold text-2xl">{c.t}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>
            Questions &amp; answers
          </div>
          <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">Frequently Asked Questions</h2>

          <div className="mt-10 flex flex-col gap-4 text-left">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white border border-gray-200 shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-lg">{f.q}</span>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: openFaq === i ? ACCENT : "#F3EEE7" }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke={openFaq === i ? "#FFFFFF" : INK}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-body ${openFaq === i ? "open" : ""}`}>
                  <div className="faq-inner">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINALE ──────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: HERO_GRADIENT }}>
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: EVERGREEN, opacity: 0.45 }} />
        <div className="orb w-80 h-80 -bottom-24 -right-16" style={{ backgroundColor: SPARK_BLUSH, opacity: 0.2, animationDelay: "-5s" }} />
        <div className="drifter left-[10%] top-[20%]" style={{ animationDelay: "-2s" }}>
          <Icon d={LEAF_ICON} color="#FFFFFF" className="w-8 h-8" />
        </div>
        <div className="drifter right-[12%] bottom-[22%]" style={{ animationDelay: "-6s" }}>
          <Icon d={PIE_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center text-white">
          <StatusBadge />
          <h2 className="mt-6 font-black tracking-tight text-4xl md:text-6xl leading-[1.05] text-balance">
            Ready to Start Saving This Thanksgiving?
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto leading-relaxed text-pretty text-white">
            {
              "Join thousands of shoppers who have already claimed their discount code. Your ALDI savings are just a few clicks away."
            }
          </p>

          <div className="mt-12">
            <CTAButton large>Apply Now</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
