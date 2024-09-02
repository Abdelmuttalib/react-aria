import React from "react";
import { Meter } from "@/registry/default/ui/meter";

export const MeterDemo = () => (
  <Meter
    {...{
      label: "Storage space",
      value: 80,
    }}
  />
);
