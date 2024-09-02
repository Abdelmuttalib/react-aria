import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import React from "react";
import { Group } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Separator } from "@/registry/default/ui/separator";
import { ToggleButton } from "@/registry/default/ui/toggle-button";
import { Toolbar } from "@/registry/default/ui/toolbar";

export function ToolbarDemo({
  orientation,
}: {
  orientation: "vertical" | "horizontal";
}) {
  return (
    <Toolbar
      aria-label="Text formatting"
      {...{
        orientation: orientation,
      }}
    >
      <Group aria-label="Style" className="contents">
        <ToggleButton aria-label="Bold" className="p-2.5">
          <BoldIcon className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton aria-label="Italic" className="p-2.5">
          <ItalicIcon className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton aria-label="Underline" className="p-2.5">
          <UnderlineIcon className="w-4 h-4" />
        </ToggleButton>
      </Group>
      <Separator
        orientation={orientation === "vertical" ? "horizontal" : "vertical"}
      />
      <Group aria-label="Clipboard" className="contents">
        <Button variant="secondary">Copy</Button>
        <Button variant="secondary">Paste</Button>
        <Button variant="secondary">Cut</Button>
      </Group>
      <Separator
        orientation={orientation === "vertical" ? "horizontal" : "vertical"}
      />
      <Checkbox>Night Mode</Checkbox>
    </Toolbar>
  );
}

export function ToolbarDemo2({
  orientation,
}: {
  orientation: "vertical" | "horizontal";
}) {
  return (
    <Toolbar
      aria-label="Text formatting"
      {...{
        orientation: orientation,
      }}
    >
      <Group aria-label="Style" className="contents">
        <ToggleButton aria-label="Bold" className="p-2.5">
          <BoldIcon className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton aria-label="Italic" className="p-2.5">
          <ItalicIcon className="w-4 h-4" />
        </ToggleButton>
        <ToggleButton aria-label="Underline" className="p-2.5">
          <UnderlineIcon className="w-4 h-4" />
        </ToggleButton>
      </Group>
      <Separator
        orientation={orientation === "vertical" ? "horizontal" : "vertical"}
      />
      <Group aria-label="Clipboard" className="contents">
        <Button variant="secondary">Copy</Button>
        <Button variant="secondary">Paste</Button>
        <Button variant="secondary">Cut</Button>
      </Group>
      <Separator
        orientation={orientation === "vertical" ? "horizontal" : "vertical"}
      />
      <Checkbox>Night Mode</Checkbox>
    </Toolbar>
  );
}
