import { MoreHorizontal } from "lucide-react";
import React from "react";
import { MenuTrigger, Popover, SubmenuTrigger } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
} from "@/registry/default/ui/menu";

export const MenuDemo = () => (
  <MenuTrigger>
    <Button variant="secondary" className="px-2">
      <MoreHorizontal className="w-5 h-5" />
    </Button>
    <Menu>
      <MenuItem id="new">New…</MenuItem>
      <MenuItem id="open">Open…</MenuItem>
      <MenuSeparator />
      <MenuItem id="save">Save</MenuItem>
      <MenuItem id="saveAs">Save as…</MenuItem>
      <MenuSeparator />
      <MenuItem id="print">Print…</MenuItem>
    </Menu>
  </MenuTrigger>
);

export const MenuDisabledItemsDemo = () => {
  return (
    <MenuTrigger>
      <Button variant="secondary" className="px-2">
        <MoreHorizontal className="w-5 h-5" />
      </Button>
      <Menu
        {...{
          disabledKeys: ["save"],
        }}
      >
        <MenuItem id="new">New…</MenuItem>
        <MenuItem id="open">Open…</MenuItem>
        <MenuSeparator />
        <MenuItem id="save">Save</MenuItem>
        <MenuItem id="saveAs">Save as…</MenuItem>
        <MenuSeparator />
        <MenuItem id="print">Print…</MenuItem>
      </Menu>
    </MenuTrigger>
  );
};

export const MenuSectionsDemo = (args: any) => (
  <MenuTrigger>
    <Button variant="secondary" className="px-2">
      <MoreHorizontal className="w-5 h-5" />
    </Button>
    <Menu {...args}>
      <MenuSection title="Your Content">
        <MenuItem id="repos">Repositories</MenuItem>
        <MenuItem id="projects">Projects</MenuItem>
        <MenuItem id="organizations">Organizations</MenuItem>
        <MenuItem id="stars">Stars</MenuItem>
        <MenuItem id="sponsors">Sponsors</MenuItem>
      </MenuSection>
      <MenuSection title="Your Account">
        <MenuItem id="profile">Profile</MenuItem>
        <MenuItem id="status">Set status</MenuItem>
        <MenuItem id="sign-out">Sign out</MenuItem>
      </MenuSection>
    </Menu>
  </MenuTrigger>
);

export const MenuSubmenuDemo = (args: any) => (
  <MenuTrigger>
    <Button variant="secondary" className="px-2">
      <MoreHorizontal className="w-5 h-5" />
    </Button>
    <Menu {...args}>
      <MenuItem id="new">New…</MenuItem>
      <SubmenuTrigger>
        <MenuItem id="open">Open</MenuItem>
        <Popover>
          <Menu>
            <MenuItem id="open-new">Open in New Window</MenuItem>
            <MenuItem id="open-current">Open in Current Window</MenuItem>
          </Menu>
        </Popover>
      </SubmenuTrigger>
      <MenuSeparator />
      <MenuItem id="print">Print…</MenuItem>
      <SubmenuTrigger>
        <MenuItem id="share">Share</MenuItem>
        <Popover>
          <Menu>
            <MenuItem id="sms">SMS</MenuItem>
            <MenuItem id="twitter">Twitter</MenuItem>
            <SubmenuTrigger>
              <MenuItem id="email">Email</MenuItem>
              <Popover>
                <Menu>
                  <MenuItem id="work">Work</MenuItem>
                  <MenuItem id="personal">Personal</MenuItem>
                </Menu>
              </Popover>
            </SubmenuTrigger>
          </Menu>
        </Popover>
      </SubmenuTrigger>
    </Menu>
  </MenuTrigger>
);
