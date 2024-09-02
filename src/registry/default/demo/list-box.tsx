import React from "react";
import { ListBox, ListBoxItem } from "@/registry/default/ui/listbox";

export const ListBoxDemo = (args: any) => (
  <ListBox
    aria-label="Ice cream flavor"
    {...{
      onAction: undefined,
      selectionMode: "multiple",
    }}
  >
    <ListBoxItem id="chocolate">Chocolate</ListBoxItem>
    <ListBoxItem id="mint">Mint</ListBoxItem>
    <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
    <ListBoxItem id="vanilla">Vanilla</ListBoxItem>
  </ListBox>
);

export const ListBoxDisabledItemsDemo = (args: any) => (
  <ListBox
    {...{
      onAction: undefined,
      selectionMode: "multiple",
      disabledKeys: ["mint"],
    }}
  >
    <ListBoxItem id="chocolate">Chocolate</ListBoxItem>
    <ListBoxItem id="mint">Mint</ListBoxItem>
    <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
    <ListBoxItem id="vanilla">Vanilla</ListBoxItem>
  </ListBox>
);
