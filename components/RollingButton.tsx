import Link from "next/link";

type RollingButtonProps = {
  href: string;
  children: string;
  variant?: "primary" | "outline" | "dark";
  className?: string;
};

export function RollingButton({
  href,
  children,
  variant = "primary",
  className = ""
}: RollingButtonProps) {
  return (
    <Link className={`rolling-button rolling-${variant} ${className}`} href={href}>
      <span className="rolling-track">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </Link>
  );
}
