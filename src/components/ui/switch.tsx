import * as React from "react";

import { cn } from "@/lib/utils";

// Native role="switch" button with the same markup and classes as the Radix
// Switch it replaces. Radix renders a hidden form <input> on its first render
// and drops it after mount once it sees no <form>, so its first (hydration)
// render never matched the prerendered snapshot. No switch on this site sits
// in a form, so the input isn't needed.
type SwitchProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  required?: boolean;
  value?: string;
};

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked: checkedProp, defaultChecked = false, onCheckedChange, required, disabled, value = "on", onClick, ...props }, ref) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultChecked);
    const checked = checkedProp ?? uncontrolled;
    const state = checked ? "checked" : "unchecked";

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-required={required}
        data-state={state}
        data-disabled={disabled ? "" : undefined}
        disabled={disabled}
        value={value}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
        ref={ref}
        onClick={(event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          if (checkedProp === undefined) setUncontrolled(!checked);
          onCheckedChange?.(!checked);
        }}
      >
        <span
          data-state={state}
          data-disabled={disabled ? "" : undefined}
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          )}
        />
      </button>
    );
  },
);
Switch.displayName = "Switch";

export { Switch };
