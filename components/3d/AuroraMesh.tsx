"use client";

type Props = {
  className?: string;
  intensity?: "subtle" | "vivid";
};

export default function AuroraMesh({
  className = "",
  intensity = "subtle",
}: Props) {
  const opacity = intensity === "vivid" ? 1 : 0.7;
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-bgDeep ${className}`}
      aria-hidden
    >
      <div
        className="absolute left-[20%] top-[10%] h-[60vh] w-[60vw] rounded-[40%] mix-blend-screen blur-[80px] animate-aurora-1"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,1) 0%, rgba(0,229,255,0) 70%)",
          opacity,
        }}
      />
      <div
        className="absolute right-[10%] top-[40%] h-[70vh] w-[70vw] rounded-[30%] mix-blend-screen blur-[80px] animate-aurora-2"
        style={{
          background:
            "radial-gradient(circle, rgba(123,97,255,1) 0%, rgba(123,97,255,0) 70%)",
          opacity,
        }}
      />
      <div
        className="absolute -bottom-[10%] left-[30%] h-[50vh] w-[80vw] rounded-[50%] mix-blend-screen blur-[80px] animate-aurora-3"
        style={{
          background:
            "radial-gradient(circle, rgba(255,79,216,1) 0%, rgba(255,79,216,0) 70%)",
          opacity,
        }}
      />
      <div className="film-grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
    </div>
  );
}
