import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React from "react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center w-full text-sm sm:w-auto rounded font-medium border-0 transition-colors transition duration-150 ease-linear focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none disabled:opacity-60 disabled:hover:opacity-60 disabled:cursor-not-allowed disabled:shadow-none ring-1 ring-transparent ring-inset focus:ring-2 focus:ring-inset outline-none focus:outline-none",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-primary shadow-sm hover:bg-primary-600 focus:ring-primary-200 dark:focus:ring-primary-600 active:bg-primary focus:bg-primary",
        "primary-outline":
          "text-primary bg-background ring-primary-400 hover:bg-primary-100/40 dark:hover:bg-layer-3 focus:ring-primary",
        outline:
          "text-foreground bg-background ring-border hover:bg-layer-2 focus:ring-primary",
        secondary:
          "text-primary-800 dark:text-gray-200 bg-primary-100/50 hover:bg-primary-100/70 focus:bg-primary-100/80 dark:bg-gray-800/50 dark:hover:bg-gray-800/60 dark:ring-gray-700  dark:focus:bg-gray-800/70",
        destructive:
          "bg-error text-white hover:bg-red-600 dark:hover:bg-red-600",
        "destructive-outline":
          "ring-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:ring-red-200 focus:text-white dark:text-red-400 dark:ring-red-400 dark:hover:ring-red-500 dark:hover:bg-error dark:hover:text-white dark:focus:bg-red-500 dark:focus:ring-red-400 dark:focus:text-white",
        dark: "bg-gray-900 text-white duration-150 ease-linear hover:bg-gray-900/90 active:bg-gray-700 disabled:bg-gray-700 focus:ring-primary-300",
        ghost: "hover:bg-gray-hover dark:hover:bg-layer-2 text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        transparent: "bg-transparent text-foreground",
      },
      size: {
        default: "px-4 h-10",
        xs: "px-2.5 h-8",
        sm: "px-3 h-9",
        lg: "px-[18px] h-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ReactAriaButtonProps,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, type, isLoading, iconLeft, iconRight, children, ...props },
    ref
  ) => {
    return (
      <ReactAriaButton
        type={type || "button"}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          "data-[pressed]:not([disabled]) data-[pressed=true]:bg-primary-600 ring-primary-200 dark:ring-primary-600"
        )}
        ref={ref}
        {...props}
      >
        {iconLeft ? <>{iconLeft}</> : null}
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
        {iconRight ? <>{iconRight}</> : null}
      </ReactAriaButton>
    );
  }
);

Button.displayName = "Button";

interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, iconLeft, iconRight, size, ...props }, ref) => {
    return (
      <Link
        className={cn(buttonVariants({ variant, size, className }), {
          "inline-flex items-center justify-center gap-x-2":
            iconLeft || iconRight,
        })}
        ref={ref}
        {...props}
      >
        {iconLeft ? <>{iconLeft}</> : null}
        {props.children}
        {iconRight ? <>{iconRight}</> : null}
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, type ButtonProps, type ButtonLinkProps };
