import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary-600/10 text-primary-700 dark:text-primary-300 dark:bg-primary-500/20 border-primary-500/20",
        secondary:
          "border-transparent bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 dark:bg-emerald-500/20 border-emerald-500/20",
        accent:
          "border-transparent bg-amber-500/10 text-amber-700 dark:text-amber-300 dark:bg-amber-500/20 border-amber-500/20",
        destructive:
          "border-transparent bg-destructive/10 text-destructive dark:bg-destructive/20",
        outline:
          "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300",
        pill:
          "border-primary-500/30 bg-gradient-to-r from-primary-500/10 via-emerald-500/10 to-indigo-500/10 text-slate-900 dark:text-slate-100 shadow-sm backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
