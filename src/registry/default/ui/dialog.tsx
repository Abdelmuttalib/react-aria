import React from "react";
import {
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  DialogProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

const DialogTrigger = RACDialogTrigger;

function Dialog(props: DialogProps) {
  return (
    <RACDialog
      {...props}
      className={twMerge(
        "outline outline-0 p-6 [[data-placement]>&]:p-4 max-h-[inherit] overflow-auto relative",
        props.className
      )}
    />
  );
}

export { Dialog, DialogTrigger };
