/**
 * Ambient backdrop: fine grid + noise texture, a soft top vignette, and
 * three slow-floating gradient blobs in the "Electric Indigo" palette
 * (indigo / cyan / fuchsia). Pure CSS animation — no WebGL — so it stays
 * light and battery friendly while still feeling premium.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-night">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-noise" />

      {/* Radial vignette so content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(5,5,12,0.5)_55%,rgba(5,5,12,0.95)_100%)]" />

      <div
        className="absolute -top-32 -left-24 h-[38rem] w-[38rem] rounded-full bg-accent/25 blur-[130px]"
        style={{ animation: "float-blob 18s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[34rem] w-[34rem] rounded-full bg-accent-2/20 blur-[130px]"
        style={{ animation: "float-blob 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[36rem] w-[36rem] rounded-full bg-accent-3/20 blur-[140px]"
        style={{ animation: "float-blob 26s ease-in-out infinite" }}
      />
    </div>
  );
}
