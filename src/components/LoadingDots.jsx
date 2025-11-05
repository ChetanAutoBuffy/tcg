export default function LoadingDots({ size = "w-2 h-2", colorClass = "bg-white/90" }) {
  const dots = [0, 1, 2];

  return (
    <span className="loading-dots" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot}
          className={`loading-dots__dot ${size} ${colorClass}`}
        />
      ))}
    </span>
  );
}
