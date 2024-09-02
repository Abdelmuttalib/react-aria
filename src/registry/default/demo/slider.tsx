import React from "react";
import { Slider } from "@/registry/default/ui/slider";

export const SliderDemo = () => (
  <Slider
    {...{
      label: "Range",
      defaultValue: [30, 60],
      thumbLabels: ["start", "end"],
    }}
  />
);
