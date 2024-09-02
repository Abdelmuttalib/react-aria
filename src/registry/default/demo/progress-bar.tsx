import React from "react";
import { ProgressBar } from "@/registry/default/ui/progress-bar";

export const ProgressBarDemo = () => (
  <ProgressBar
    {...{
      label: "Loading…",
      value: 80,
    }}
  />
);
