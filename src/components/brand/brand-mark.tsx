import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link className="brand-mark" href="/" aria-label="Ir al inicio">
      <span className="brand-mark__symbol" aria-hidden="true">
        T
      </span>
      {!compact && (
        <span className="brand-mark__text">
          <strong>TRY</strong>
          <span>ON</span>
        </span>
      )}
    </Link>
  );
}
