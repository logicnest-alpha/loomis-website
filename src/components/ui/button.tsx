import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer overflow-hidden group/btn z-0",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white hover:bg-accent-light shadow-[0_10px_30px_-5px_rgba(124,58,237,0.5),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(124,58,237,0.7),inset_0_1px_0_0_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.97]",
        outline:
          "border border-white/20 bg-white/[0.03] backdrop-blur-md text-white hover:bg-white/[0.1] hover:border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.97]",
        ghost: "text-white/70 hover:text-white hover:bg-white/10 rounded-xl",
        secondary:
          "bg-white/10 text-white hover:bg-white/20 border border-white/15 backdrop-blur-md shadow-md",
      },
      size: {
        default: "h-11 px-6 py-2 text-xs md:text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-sm md:text-base tracking-tight font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out z-0"
          aria-hidden="true"
        />
        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
