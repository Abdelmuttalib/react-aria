import { PrinterIcon, SaveIcon } from "lucide-react";
import React from "react";
import { TooltipTrigger } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { Tooltip } from "@/registry/default/ui/tooltip";

export function TooltipDemo() {
  return (
    <div className="flex gap-2">
      <TooltipTrigger>
        <Button variant="secondary" className="px-2">
          <SaveIcon className="w-5 h-5" />
        </Button>
        <Tooltip>Save</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <Button variant="secondary" className="px-2">
          <PrinterIcon className="w-5 h-5" />
        </Button>
        <Tooltip>Print</Tooltip>
      </TooltipTrigger>
    </div>
  );
}
