/**
 * Ambient background: a fixed grid overlay plus three softly floating
 * gradient blobs. Pure CSS animation — no WebGL, so it's light and battery
 * friendly while still feeling modern.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Radial vignette so content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(6,8,20,0.4)_55%,rgba(6,8,20,0.9)_100%)]" />

      <div
        className="absolute -top-32 -left-24 h-[36rem] w-[36rem] rounded-full bg-accent/25 blur-[120px]"
        style={{ animation: "float-blob 18s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[32rem] w-[32rem] rounded-full bg-accent-2/25 blur-[120px]"
        style={{ animation: "float-blob 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[34rem] w-[34rem] rounded-full bg-accent-3/20 blur-[130px]"
        style={{ animation: "float-blob 26s ease-in-out infinite" }}
      />
    </div>
  );
}
