import Link from "next/link";
import { Button as UIButton } from "@/components/ui/button";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

/**
 * Bouton CTA de marque (lien). Fine surcouche du primitif shadcn
 * `@/components/ui/button` qui conserve l'API historique (href/variant/size).
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external = false,
}: ButtonProps) {
  return (
    <UIButton asChild variant={variant} size={size} className={className}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </UIButton>
  );
}
