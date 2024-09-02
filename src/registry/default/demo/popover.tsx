import { HelpCircle } from "lucide-react";
import React from "react";
import { DialogTrigger, Heading } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { Dialog } from "@/registry/default/ui/dialog";
import { Popover } from "@/registry/default/ui/popover";

export const PopoverDemo = () => (
  <DialogTrigger>
    <Button variant="icon" aria-label="Help">
      <HelpCircle className="w-4 h-4" />
    </Button>
    <Popover
      {...{
        showArrow: true,
      }}
      className="max-w-[250px]"
    >
      <Dialog>
        <Heading slot="title" className="text-lg font-semibold mb-2">
          Help
        </Heading>
        <p className="text-sm">
          For help accessing your account, please contact support.
        </p>
      </Dialog>
    </Popover>
  </DialogTrigger>
);
