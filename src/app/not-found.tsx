import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050D1A] px-6 py-12">
      {/* Background gradients */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 18% 18%, rgba(0,214,143,0.08), transparent),
            radial-gradient(ellipse 60% 40% at 82% 26%, rgba(56,189,248,0.06), transparent),
            radial-gradient(ellipse 70% 50% at 55% 85%, rgba(139,92,246,0.04), transparent)
          `,
        }}
      />

      {/* Decorative rings */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-40"
        style={{ width: 520, height: 520 }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-30"
        style={{ width: 740, height: 740 }}
      />

      {/* Corner brackets - hidden on mobile */}
      <div className="pointer-events-none absolute top-6 left-6 h-[60px] w-[60px] border-t border-l border-[#00D68F]/60 max-sm:hidden" />
      <div className="pointer-events-none absolute top-6 right-6 h-[60px] w-[60px] border-t border-r border-[#38BDF8]/60 max-sm:hidden" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-[60px] w-[60px] border-b border-l border-[#38BDF8]/60 max-sm:hidden" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-[60px] w-[60px] border-b border-r border-[#00D68F]/60 max-sm:hidden" />

      {/* Ambient lines */}
      <div className="pointer-events-none absolute left-0 right-0 top-[22%] h-px bg-gradient-to-r from-transparent via-[#00D68F]/10 to-transparent opacity-60" />
      <div className="pointer-events-none absolute left-0 right-0 top-[78%] h-px bg-gradient-to-r from-transparent via-[#38BDF8]/8 to-transparent opacity-60" />

      {/* Main content */}
      <div className="relative z-10 flex max-w-[740px] flex-col items-center text-center">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00D68F]/15 bg-[#00D68F]/5 px-5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#00D68F]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00D68F] shadow-[0_0_10px_#00D68F]" />
          Error · Page Not Found
        </div>

        {/* Hero 404 */}
        <div
          className="relative my-5 select-none font-[var(--font-syne)] text-[clamp(7.5rem,22vw,15rem)] font-extrabold leading-[0.85] tracking-tight"
          aria-label="404 error"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(240,246,255,0.06)",
          }}
        >
          404
          <span
            className="absolute inset-0 flex items-center justify-center bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, #00D68F 0%, #38BDF8 50%, #00D68F 100%)",
              WebkitBackgroundClip: "text",
              opacity: 0.85,
            }}
          >
            404
          </span>
        </div>

        {/* Headline */}
        <h1 className="m-0 text-[clamp(1.35rem,3.2vw,2.6rem)] font-bold leading-tight tracking-tight text-[#F0F6FF]">
          This page has{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(135deg, #00D68F, #38BDF8)",
              WebkitBackgroundClip: "text",
            }}
          >
            vanished
          </span>{" "}
          into the void
        </h1>

        {/* Subtext */}
        <p className="mt-3 max-w-[46ch] text-[clamp(0.92rem,1.15vw,1.05rem)] leading-[1.85] text-[#7A90B3]">
          The destination you&apos;re looking for no longer exists or has been
          relocated to a new address. Let us guide you back to where the
          experience continues.
        </p>

        {/* Divider */}
        <div className="my-8 h-px w-full">
          <div
            className="mx-auto h-px w-16"
            style={{
              background: "linear-gradient(90deg, transparent, #00D68F, #38BDF8, transparent)",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 max-sm:flex-col max-sm:w-full">
          <Link
            href="/"
            className="inline-flex min-h-[3.4rem] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#00D68F] to-[#00A878] px-9 text-[0.9rem] font-bold tracking-wide text-[#050D1A] no-underline shadow-[0_6px_28px_rgba(0,214,143,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_42px_rgba(0,214,143,0.32)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#00D68F] max-sm:w-full"
          >
            ← Return Home
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex min-h-[3.4rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-9 text-[0.9rem] font-semibold tracking-wide text-[#F0F6FF] no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00D68F]/30 hover:bg-[#00D68F]/5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#38BDF8] max-sm:w-full"
          >
            Open Dashboard →
          </Link>
        </div>

        {/* Meta bar */}
        <div className="mt-10 flex items-center gap-7 rounded-[14px] border border-white/5 bg-white/[0.015] px-6 py-3.5 max-sm:flex-col max-sm:gap-2.5 max-sm:p-4">
          <div className="flex items-center gap-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#7A90B3]">
            Status <strong className="font-semibold text-[#F0F6FF]">404</strong>
          </div>
          <span className="h-[3px] w-[3px] rounded-full bg-white/10 max-sm:hidden" />
          <div className="flex items-center gap-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#7A90B3]">
            Protocol <strong className="font-semibold text-[#F0F6FF]">HTTPS</strong>
          </div>
          <span className="h-[3px] w-[3px] rounded-full bg-white/10 max-sm:hidden" />
          <div className="flex items-center gap-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#7A90B3]">
            Experience <strong className="font-semibold text-[#F0F6FF]">NutriAI</strong>
          </div>
        </div>
      </div>
    </main>
  );
}
