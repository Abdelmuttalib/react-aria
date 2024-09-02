import { Check, Minus } from "lucide-react";
import React, { ReactNode } from "react";
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "./input";
import { composeTailwindRenderProps, focusRing } from "@/lib/variants";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-2"
      )}
    >
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}

// const checkboxStyles = tv({
//   base: "flex gap-2 items-center group text-sm transition",
//   variants: {
//     isDisabled: {
//       false: "text-gray-800 dark:text-zinc-200",
//       true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
//     },
//   },
// });

// Define styles using cva
const checkboxStyles = cva(
  "flex gap-2 items-center group text-sm transition text-gray-800 dark:text-zinc-200",
  {
    variants: {
      isDisabled: {
        true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
      },
    },
  }
);

// const boxStyles = tv({
//   extend: focusRing,
//   base: "w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2 transition",
//   variants: {
//     isSelected: {
//       false:
//         "bg-white dark:bg-zinc-900 border-[--color] [--color:theme(colors.gray.400)] dark:[--color:colors.zinc-400)] group-pressed:[--color:theme(colors.gray.500)] dark:group-pressed:[--color:theme(colors.zinc.300)]",
//       true: "bg-[--color] border-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)] forced-colors:![--color:Highlight]",
//     },
//     isInvalid: {
//       true: "[--color:theme(colors.red.700)] dark:[--color:theme(colors.red.600)] forced-colors:![--color:Mark] group-pressed:[--color:theme(colors.red.800)] dark:group-pressed:[--color:theme(colors.red.700)]",
//     },
//     isDisabled: {
//       true: "[--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText] bg-accent-hover",
//     },
//   },
// });

const boxStyles = cva(
  "w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2 transition outline outline-primary-600 dark:outline-primary-500 forced-colors:outline-[Highlight] outline-offset-2",
  {
    variants: {
      isSelected: {
        false:
          "bg-white dark:bg-zinc-900 border-[--color] [--color:theme(colors.gray.400)] dark:[--color:colors.zinc-400)] group-pressed:[--color:theme(colors.gray.500)] dark:group-pressed:[--color:theme(colors.zinc.300)]",
        true: "bg-[--color] border-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)] forced-colors:![--color:Highlight]",
      },
      isInvalid: {
        true: "[--color:theme(colors.red.700)] dark:[--color:theme(colors.red.600)] forced-colors:![--color:Mark] group-pressed:[--color:theme(colors.red.800)] dark:group-pressed:[--color:theme(colors.red.700)]",
      },
      isDisabled: {
        true: "[--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText] bg-gray-200",
      },
      isFocused: {
        false: "outline-0",
        true: "outline-2",
      },
      isFocusVisible: {
        false: "outline-0",
        true: "outline-2",
      },
    },
  }
);

const iconStyles =
  "w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]";

export function Checkbox(props: CheckboxProps) {
  return (
    <RACCheckbox
      {...props}
      className={cn(checkboxStyles(), props.className)}
      // className={composeRenderProps(props.className, (className, renderProps) =>
      //   checkboxStyles({ ...renderProps, className })
      // )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}
          >
            {isIndeterminate ? (
              <Minus aria-hidden className={iconStyles} />
            ) : isSelected ? (
              <Check aria-hidden className={iconStyles} />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </RACCheckbox>
  );
}
