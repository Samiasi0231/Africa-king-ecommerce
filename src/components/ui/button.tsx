import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em] transition-colors disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-foreground",
        outline: "border border-foreground/25 bg-transparent text-foreground hover:border-foreground",
        outlineLight: "border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground",
        ghost: "bg-transparent text-foreground hover:text-primary",
        link: "bg-transparent p-0 text-primary underline-offset-4 hover:underline tracking-normal normal-case text-sm font-normal",
        dark: "bg-foreground text-primary-foreground hover:bg-primary",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-5 py-3 text-[10.5px]",
        lg: "px-10 py-5",
        icon: "size-9 p-0",
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
  /** Render the className/variant styling onto the single child element instead of a <button>. */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", asChild = false, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
