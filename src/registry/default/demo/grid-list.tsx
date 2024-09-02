import { GridList, GridListItem } from "@/registry/default/ui/grid-list";
import React from "react";

export const GridListDemo = (args: any) => (
  <GridList
    aria-label="Ice cream flavors"
    {...{
      onAction: undefined,
      selectionMode: "multiple",
    }}
  >
    <GridListItem id="chocolate">Chocolate</GridListItem>
    <GridListItem id="mint">Mint</GridListItem>
    <GridListItem id="strawberry">Strawberry</GridListItem>
    <GridListItem id="vanilla">Vanilla</GridListItem>
  </GridList>
);

export const GridListDisabledItemsDemo = (args: any) => (
  <GridList
    {...{
      onAction: undefined,
      selectionMode: "multiple",
      disabledKeys: ["mint"],
    }}
  >
    <GridListItem id="chocolate">Chocolate</GridListItem>
    <GridListItem id="mint">Mint</GridListItem>
    <GridListItem id="strawberry">Strawberry</GridListItem>
    <GridListItem id="vanilla">Vanilla</GridListItem>
  </GridList>
);
