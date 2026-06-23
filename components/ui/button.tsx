import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-linear-to-br from-primary to-accent text-white shadow-glow hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "rounded-full bg-white text-primary border-2 border-primary/15 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "rounded-full bg-transparent text-foreground border border-foreground/15 hover:border-foreground/25 hover:bg-surface",
        ghost: "rounded-md hover:bg-surface hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        md: "px-6 py-3.5 text-base",
        lg: "px-8 py-4 text-lg",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
