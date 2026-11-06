import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

// Native role="checkbox" button with the same markup and classes as the Radix
// Checkbox it replaces. Radix renders a hidden form <input> on its first
// render and drops it after mount once it sees no <form>, so its first
// (hydration) render never matched the prerendered snapshot. No checkbox on
// this site sits in a form, so the input isn't needed.
type CheckedState = boolean | "indeterminate";

type CheckboxProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> & {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  onCheckedChange?: (checked: CheckedState) => void;
  required?: boolean;
  value?: string;
};

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, checked: checkedProp, defaultChecked = false, onCheckedChange, required, disabled, value = "on", onClick, onKeyDown, ...props }, ref) => {
    const [uncontrolled, setUncontrolled] = React.useState<CheckedState>(defaultChecked);
    const checked = checkedProp ?? uncontrolled;
    const state = checked === "indeterminate" ? "indeterminate" : checked ? "checked" : "unchecked";

    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={checked === "indeterminate" ? "mixed" : checked}
        aria-required={required}
        data-state={state}
        data-disabled={disabled ? "" : undefined}
        disabled={disabled}
        value={value}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
        ref={ref}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          // WAI-ARIA checkboxes don't activate on Enter (matches Radix).
          if (event.key === "Enter") event.preventDefault();
        }}
        onClick={(event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          const next = checked === "indeterminate" ? true : !checked;
          if (checkedProp === undefined) setUncontrolled(next);
          onCheckedChange?.(next);
        }}
      >
        {checked !== false && (
          <span
            data-state={state}
            data-disabled={disabled ? "" : undefined}
            style={{ pointerEvents: "none" }}
            className={cn("flex items-center justify-center text-current")}
          >
            <Check className="h-4 w-4" />
          </span>
        )}
      </button>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
