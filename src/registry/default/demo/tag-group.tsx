import React from "react";
import { Tag, TagGroup } from "@/registry/default/ui/tag-group";

export const TagGroupDemo = () => (
  <TagGroup
    {...{
      label: "Ice cream flavor",
      selectionMode: "single",
    }}
  >
    <Tag>Chocolate</Tag>
    <Tag>Mint</Tag>
    <Tag>Strawberry</Tag>
    <Tag>Vanilla</Tag>
  </TagGroup>
);
