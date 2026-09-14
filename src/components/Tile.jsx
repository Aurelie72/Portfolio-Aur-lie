export default function Tile({ label }) {
  return (
    <div className="border border-hairline hover:border-brass/60 text-ivory px-4 py-4 flex items-center justify-center text-center text-sm leading-snug transition-colors">
      {label}
    </div>
  );
}
