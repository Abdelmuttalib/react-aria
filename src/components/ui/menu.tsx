import {
  Button as ReactAriaButton,
  Menu as ReactAriaMenu,
  MenuItem as ReactAriaMenuItem,
  MenuTrigger as ReactAriaMenuTrigger,
  Popover as ReactAriaPopover,
} from "react-aria-components";
import { Button } from "./button";
import React from "react";
import { IconButton } from "./icon-button";

function getClassName() {
  return "px-2 py-1.5 rounded outline-none cursor-pointer text-foreground text-sm relative grid grid-cols-[auto,auto] gap-5 items-center column-gap-20 forced-color-adjust-none data-[focused]:bg-accent-hover data-[focused]:text-foreground";
}

export function Menu() {
  return (
    <ReactAriaMenuTrigger>
      <IconButton aria-label="Menu" variant="ghost">
        ☰
      </IconButton>

      <ReactAriaPopover>
        <ReactAriaMenu className="max-h-auto p-1 rounded bg-layer box-border overflow-auto min-w-40 outline-none border shadow">
          <ReactAriaMenuItem
            onAction={() => alert("open")}
            className={getClassName()}
          >
            Open
          </ReactAriaMenuItem>
          <ReactAriaMenuItem
            onAction={() => alert("rename")}
            className={getClassName()}
          >
            Rename…
          </ReactAriaMenuItem>
          <ReactAriaMenuItem
            onAction={() => alert("duplicate")}
            className={getClassName()}
          >
            Duplicate
          </ReactAriaMenuItem>
          <ReactAriaMenuItem
            onAction={() => alert("share")}
            className={getClassName()}
          >
            Share…
          </ReactAriaMenuItem>
          <ReactAriaMenuItem
            onAction={() => alert("delete")}
            className={getClassName()}
          >
            Delete…
          </ReactAriaMenuItem>
        </ReactAriaMenu>
      </ReactAriaPopover>
    </ReactAriaMenuTrigger>
  );
}

export const MenuCodeSnippet = `
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

export function Menu() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu">☰</Button>
      <Popover>
        <Menu>
          <MenuItem onAction={() => alert("open")}>
            Open
          </MenuItem>
          <MenuItem onAction={() => alert("rename")}>
            Rename…
          </MenuItem>
          <MenuItem onAction={() => alert("duplicate")}>
            Duplicate
          </MenuItem>
          <MenuItem onAction={() => alert("share")}>
            Share…
          </MenuItem>
          <MenuItem onAction={() => alert("delete")}>
            Delete…
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
`;
