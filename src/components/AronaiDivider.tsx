import aronai from "@/assets/aronai-pattern.png";

type Props = {
  className?: string;
  height?: string; // tailwind height class
  label?: string;
};

/**
 * Decorative border inspired by the traditional Bodo Aronai scarf.
 * Used as an elegant divider between sections.
 */
export default function AronaiDivider({ className = "", height = "h-10", label }: Props) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden={!label}>
      <div
        className={`w-full ${height} bg-repeat-x`}
        style={{
          backgroundImage: `url(${aronai})`,
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      />
      {label && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="px-4 py-1 rounded-full glass text-[10px] uppercase tracking-[0.3em] text-gold-soft">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
