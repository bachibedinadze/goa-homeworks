import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300",
  secondary: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const Spinner = () => (
  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      icon,
      className,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: isDisabled ? 1 : 0.98 }}
        whileHover={{ scale: isDisabled ? 1 : 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={classNames(
          "inline-flex items-center justify-center rounded-2xl font-medium shadow-sm focus:outline-none focus-visible:ring",
          variantClasses[variant],
          sizeClasses[size],
          isDisabled ? "opacity-60 cursor-not-allowed" : "",
          className
        )}
        disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        <span className="flex items-center gap-2">
          {loading ? <span className="flex items-center"><Spinner /></span> : icon && <span className="flex items-center">{icon}</span>}
          <span className={loading ? "sr-only" : undefined}>{children}</span>
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: ReactNode;